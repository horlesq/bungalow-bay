import { notFound } from "next/navigation";
import { eachDayOfInterval } from "date-fns";
import supabase from "./supabase";

/**
 * /////////////
 * // GET
 * /////////////
 */

/**
 * Fetches a single bungalow by its ID.
 */
export async function getBungalow(id) {
    const { data, error } = await supabase
        .from("bungalows")
        .select("*")
        .eq("id", id)
        .single();

    if (error) {
        console.error(error);
        notFound();
    }

    return data;
}

/**
 * Fetches the price for a bungalow.
 */
export async function getBungalowPrice(id) {
    const { data, error } = await supabase
        .from("bungalows")
        .select("price, discount")
        .eq("id", id)
        .single();

    if (error) {
        console.error(error);
    }

    return data;
}

/**
 * Fetches all bungalows.
 */
export const getBungalows = async function () {
    const { data, error } = await supabase
        .from("bungalows")
        .select("id, name, max_capacity, price, discount, image")
        .order("name");

    if (error) {
        console.error(error);
        throw new Error("Bungalows could not be loaded");
    }

    return data;
};

/**
 * Fetches a guest by email.
 */
export async function getGuest(email) {
    const { data, error } = await supabase
        .from("guests")
        .select("*")
        .eq("email", email)
        .single();

    // No error here! We handle the possibility of no guest in the sign in callback
    return data;
}

/**
 * Fetches a single booking.
 */
export async function getBooking(id) {
    const { data, error, count } = await supabase
        .from("bookings")
        .select("*")
        .eq("id", id)
        .single();

    if (error) {
        console.error(error);
        throw new Error("Booking could not get loaded");
    }

    return data;
}

/**
 * Fetches all bookings for a guest.
 */
export async function getBookings(guestId) {
    const { data, error, count } = await supabase
        .from("bookings")
        .select(
            "id, created_at, startDate, endDate, numNights, numGuests, totalPrice, guestId, bungalowId, bungalows(name, image)"
        )
        .eq("guestId", guestId)
        .order("startDate");

    if (error) {
        console.error(error);
        throw new Error("Bookings could not get loaded");
    }

    return data;
}

/**
 * Fetches all booked dates for a bungalow.
 */
export async function getBookedDatesByBungalowId(bungalowId) {
    let today = new Date();
    today.setUTCHours(0, 0, 0, 0);
    today = today.toISOString();

    // Getting all bookings
    const { data, error } = await supabase
        .from("bookings")
        .select("*")
        .eq("bungalowId", bungalowId)
        .or(`startDate.gte.${today},status.eq.checked-in`);

    if (error) {
        console.error(error);
        throw new Error("Bookings could not get loaded");
    }

    // Converting to actual dates to be displayed in the date picker
    const bookedDates = data
        .map((booking) => {
            return eachDayOfInterval({
                start: new Date(booking.startDate),
                end: new Date(booking.endDate),
            });
        })
        .flat();

    return bookedDates;
}

/**
 * Fetches application settings.
 */
export async function getSettings() {
    const { data, error } = await supabase
        .from("settings")
        .select("*")
        .single();

    if (error) {
        console.error(error);
        throw new Error("Settings could not be loaded");
    }

    return data;
}

/**
 * Fetches all countries.
 */
export async function getCountries() {
    try {
        const res = await fetch(
            "https://restcountries.com/v2/all?fields=name,flag"
        );
        const countries = await res.json();
        return countries;
    } catch {
        throw new Error("Could not fetch countries");
    }
}

/**
 * /////////////
 * // CREATE
 * /////////////
 */

/**
 * Creates a new guest.
 */
export async function createGuest(newGuest) {
    const { data, error } = await supabase.from("guests").insert([newGuest]);

    if (error) {
        console.error(error);
        throw new Error("Guest could not be created");
    }

    return data;
}

/**
 * Creates a new booking.
 */
export async function createBooking(newBooking) {
    const { data, error } = await supabase
        .from("bookings")
        .insert([newBooking])
        .select()
        .single();

    if (error) {
        console.error(error);
        throw new Error("Booking could not be created");
    }

    return data;
}

/**
 * /////////////
 * // UPDATE
 * /////////////
 */

/**
 * Updates a guest.
 */
export async function updateGuest(id, updatedFields) {
    const { data, error } = await supabase
        .from("guests")
        .update(updatedFields)
        .eq("id", id)
        .select()
        .single();

    if (error) {
        console.error(error);
        throw new Error("Guest could not be updated");
    }
    return data;
}

/**
 * Updates a booking.
 */
export async function updateBooking(id, updatedFields) {
    const { data, error } = await supabase
        .from("bookings")
        .update(updatedFields)
        .eq("id", id)
        .select()
        .single();

    if (error) {
        console.error(error);
        throw new Error("Booking could not be updated");
    }
    return data;
}

/**
 * /////////////
 * // DELETE
 * /////////////
 */

/**
 * Deletes a booking.
 */
export async function deleteBooking(id) {
    const { data, error } = await supabase
        .from("bookings")
        .delete()
        .eq("id", id);

    if (error) {
        console.error(error);
        throw new Error("Booking could not be deleted");
    }
    return data;
}
