"use server";

import { auth, signIn, signOut } from "./auth";
import supabase from "./supabase";

/** Sign in action */
export async function signInAction() {
    await signIn("google", { redirectTo: "/account" });
}

/** Sign out action */
export async function signOutAction() {
    await signOut({ redirectTo: "/" });
}

/** Guest update action */
export async function updateGuest(formData) {
    console.log(formData);
    const session = await auth();
    if (!session) throw new Error("You must be logged in");

    const national_id = formData.get("national_id");
    const [nationality, country_flag] = formData.get("nationality").split("%");

    // if (!/^[a-zA-Z0-9]{6,12}$/.test(national_id))
    //     throw new Error("Please provide a valid national ID");

    const updateData = { nationality, country_flag, national_id };

    const { data, error } = await supabase
        .from("guests")
        .update(updateData)
        .eq("id", session.user.id);

    if (error) throw new Error("Guest could not be updated");

    revalidatePath("/account/profile");
}
