"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { getBookings } from "./data-service";
import supabase from "./supabase";
import { redirect } from "next/navigation";

/** Sign in action */
export async function signInAction() {
    await signIn("google", { redirectTo: "/account" });
}

/** Sign out action */
export async function signOutAction() {
    await signOut({ redirectTo: "/" });
}

/** Guest update action */
export async function updateGuestAction(formData) {
    const session = await auth();
    if (!session) throw new Error("You must be logged in");

    const national_id = formData.get("national_id");
    const [nationality, country_flag] = formData.get("nationality").split("%");

    if (!/^[a-zA-Z0-9]{6,12}$/.test(national_id))
        throw new Error("Please provide a valid national ID");

    const updateData = { nationality, country_flag, national_id };

    const { data, error } = await supabase
        .from("guests")
        .update(updateData)
        .eq("id", session.user.guestId);

    if (error) {
        throw new Error("Guest could not be updated");
    }

    revalidatePath("/account/profile");
}

/** Delete booking action */
export async function deleteBookingAction(bookingId) {
    const session = await auth();
    if (!session) throw new Error("You must be logged in");

    const guestBookings = await getBookings(session.user.guestId);
    const guestBookingIds = guestBookings.map((booking) => booking.id);

    if (!guestBookingIds.includes(bookingId))
        throw new Error("You are not allowed to delete this booking");

    const { error } = await supabase
        .from("bookings")
        .delete()
        .eq("id", bookingId);

    if (error) throw new Error("Booking could not be deleted");

    revalidatePath("/account/reservations");
}

/** Update booking action */
export async function updateBookingAction(formData) {
    const bookingId = Number(formData.get("bookingId"));

    // 1) Authentication
    const session = await auth();
    if (!session) throw new Error("You must be logged in");

    // 2) Authorization
    const guestBookings = await getBookings(session.user.guestId);
    const guestBookingIds = guestBookings.map((booking) => booking.id);

    if (!guestBookingIds.includes(bookingId))
        throw new Error("You are not allowed to update this booking");

    // 3) Building update data
    const updateData = {
        num_guests: Number(formData.get("numGuests")),
        observations: formData.get("observations").slice(0, 1000),
    };

    // 4) Mutation
    const { error } = await supabase
        .from("bookings")
        .update(updateData)
        .eq("id", bookingId)
        .select()
        .single();

    // 5) Error handling
    if (error) throw new Error("Booking could not be updated");

    // 6) Revalidation
    revalidatePath(`/account/reservations/edit/${bookingId}`);
    revalidatePath("/account/reservations");

    // 7) Redirecting
    redirect("/account/reservations");
}

/** Create booking action */
export async function createBookingAction(bookingData, formData) {
    const session = await auth();
    if (!session) throw new Error("You must be logged in");

    const newBooking = {
        ...bookingData,
        guest_id: session.user.guestId,
        num_guests: Number(formData.get("num_guests")),
        observations: formData.get("observations").slice(0, 1000),
        extras_price: 0,
        total_price: bookingData.bungalow_price,
        is_paid: false,
        has_breakfast: false,
        status: "unconfirmed",
    }; 

    const { error } = await supabase.from("bookings").insert([newBooking]);

    if (error) throw new Error("Booking could not be created");

    revalidatePath(`/bungalows/${bookingData.bungalowId}`);

    redirect("/bungalows/thankyou");
}
