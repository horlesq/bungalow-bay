"use client";

import { useState } from "react";
import SubmitButton from "./SubmitButton";
import { updateGuestAction } from "@/lib/actions";

function UpdateProfileForm({ guest, children }) {
    const [count, setCount] = useState();
    const { full_name, email, nationality, national_id } = guest;

    return (
        <div className="max-w-4xl">
            <form
                action={updateGuestAction}
                className="sm:bg-primary-950/50 sm:backdrop-blur-sm sm:border border-primary-800 rounded-xl sm:p-8 lg:p-10 shadow-xl"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    {/* Full Name */}
                    <div className="space-y-3">
                        <label className="block text-primary-200 font-medium text-sm sm:text-base">
                            Full Name
                        </label>
                        <input
                            disabled
                            defaultValue={full_name}
                            name="fullName"
                            className="w-full px-4 py-3 bg-primary-900/50 border border-primary-700 rounded-lg text-primary-200 placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-accent-400/50 focus:border-accent-400 transition-all duration-200 disabled:cursor-not-allowed disabled:bg-primary-900/30 disabled:text-primary-400 disabled:border-primary-800"
                        />
                        <p className="text-xs text-primary-400">
                            Contact support to change your name
                        </p>
                    </div>

                    {/* Email */}
                    <div className="space-y-3">
                        <label className="block text-primary-200 font-medium text-sm sm:text-base">
                            Email Address
                        </label>
                        <input
                            disabled
                            defaultValue={email}
                            name="email"
                            className="w-full px-4 py-3 bg-primary-900/50 border border-primary-700 rounded-lg text-primary-200 placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-accent-400/50 focus:border-accent-400 transition-all duration-200 disabled:cursor-not-allowed disabled:bg-primary-900/30 disabled:text-primary-400 disabled:border-primary-800"
                        />
                        <p className="text-xs text-primary-400">
                            Contact support to change your email
                        </p>
                    </div>

                    {/* Country of Origin */}
                    <div className="space-y-3">
                        <label
                            htmlFor="nationality"
                            className="block text-primary-200 font-medium text-sm sm:text-base"
                        >
                            Country of Origin
                        </label>
                        {children}
                    </div>

                    {/* ID Number */}
                    <div className="space-y-3">
                        <label
                            htmlFor="national_id"
                            className="block text-primary-200 font-medium text-sm sm:text-base"
                        >
                            ID Number
                        </label>
                        <input
                            defaultValue={national_id}
                            name="national_id"
                            placeholder="Enter your national ID"
                            className="w-full px-4 py-3 bg-primary-900/50 border border-primary-700 rounded-lg text-primary-200 placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-accent-400/50 focus:border-accent-400 transition-all duration-200"
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end mt-8">
                    <SubmitButton pendingLabel="Saving changes...">
                        Save Changes
                    </SubmitButton>
                </div>
            </form>
        </div>
    );
}

export default UpdateProfileForm;
