"use client";

import Image from "next/image";

function ReservationForm({ bungalow, user }) {
    const maxCapacity = bungalow?.max_capacity;

    return (
        <div className="scale-[1.01]">
            {/* Header Section */}
            <div className="bg-primary-800 text-primary-300 px-4 sm:px-6 lg:px-8 xl:px-16 py-2 sm:py-3 flex flex-col sm:flex-row sm:items-center gap-2">
                <p className="text-sm sm:text-base text-center sm:text-left w-full sm:w-auto mt-2 sm:mt-0">
                    Logged in as
                </p>

                <div className="flex gap-3 sm:gap-4 items-center justify-center sm:justify-start w-full sm:w-auto">
                    <p className="text-sm sm:text-base font-medium text-primary-200 truncate">
                        {user.name}
                    </p>
                </div>
            </div>

            {/* Form Section */}
            <form className="bg-primary-900 py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 xl:px-16 text-base sm:text-lg flex gap-4 sm:gap-5 lg:gap-6 flex-col">
                {/* Guest Selection */}
                <div className="space-y-2 sm:space-y-3">
                    <label
                        htmlFor="numGuests"
                        className="block text-primary-200 font-medium text-sm sm:text-base lg:text-lg"
                    >
                        How many guests?
                    </label>
                    <select
                        name="numGuests"
                        id="numGuests"
                        className="px-3 sm:px-4 lg:px-5 py-2 sm:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm text-sm sm:text-base lg:text-lg font-medium focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-primary-900 transition-all duration-300"
                        required
                    >
                        <option value="" key="">
                            Select number of guests...
                        </option>
                        {Array.from(
                            { length: maxCapacity },
                            (_, i) => i + 1
                        ).map((x) => (
                            <option value={x} key={x}>
                                {x} {x === 1 ? "guest" : "guests"}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Observations Section */}
                <div className="space-y-2 sm:space-y-3">
                    <label
                        htmlFor="observations"
                        className="block text-primary-200 font-medium text-sm sm:text-base lg:text-lg"
                    >
                        Anything we should know about your stay?
                    </label>
                    <textarea
                        name="observations"
                        id="observations"
                        rows="3"
                        className="px-3 sm:px-4 lg:px-5 py-2 sm:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm text-sm sm:text-base lg:text-lg resize-none focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-primary-900 transition-all duration-300"
                        placeholder="Any pets, allergies, special requirements, etc.?"
                    />
                </div>

                {/* Action Section */}
                <div className="flex flex-col sm:flex-row sm:justify-end sm:items-center gap-4 sm:gap-6 pt-2 sm:pt-4">
                    <p className="text-primary-300 text-sm sm:text-base text-center sm:text-right order-2 sm:order-1">
                        Start by selecting dates
                    </p>

                    <button
                        type="submit"
                        className="bg-accent-500 hover:bg-accent-600 disabled:bg-gray-500 disabled:text-gray-300 disabled:cursor-not-allowed px-6 sm:px-8 py-3 sm:py-4 text-primary-800 font-semibold text-sm sm:text-base lg:text-lg rounded transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 focus:ring-offset-primary-900 order-1 sm:order-2 w-full sm:w-auto"
                    >
                        Reserve now
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ReservationForm;
