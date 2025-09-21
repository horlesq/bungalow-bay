"use client";

import { useState } from "react";
import SubmitButton from "./SubmitButton";
import { updateGuest } from "@/lib/actions";

function UpdateProfileForm({ guest, children }) {
    const [count, setCount] = useState();
    const {full_name, email, nationality, national_id} = guest;

    return (
        <form
            action={updateGuest}
            className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
        >
            <div className="space-y-2">
                <label>Full Name</label>
                <input
                    disabled
                    defaultValue={full_name}
                    name="fullName"
                    className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
                />
            </div>

            <div className="space-y-2">
                <label>Email</label>
                <input
                    disabled
                    defaultValue={email}
                    name="email"
                    className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
                />
            </div>

            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <label htmlFor="nationality">Country of Origin</label>
                </div>

                {children}
            </div>

            <div className="space-y-2">
                <label htmlFor="national_id">ID Number</label>
                <input
                    defaultValue={national_id}
                    name="national_id"
                    className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
                />
            </div>

            <div className="flex justify-end items-center gap-6">
                <SubmitButton pendingLabel="Saving...">
                    Save Changes
                </SubmitButton>
            </div>
        </form>
    );
}

export default UpdateProfileForm;
