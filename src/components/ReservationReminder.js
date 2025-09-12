"use client";

import { X } from "lucide-react";
import { format } from "date-fns";
import { useReservation } from "./ReservationContext";
import Link from "next/link";

function ReservationReminder() {
    const { range, resetRange, reservedBungalow } = useReservation();

    if (!range?.from || !range?.to || !reservedBungalow) return null;

    return (
        <div className="fixed bottom-4 sm:bottom-6 left-4 right-4 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 z-50">
            <div className="py-4 sm:py-5 px-4 sm:px-6 lg:px-8 rounded-lg sm:rounded-full bg-accent-500 text-primary-800 font-semibold shadow-xl shadow-slate-900/50 flex flex-col sm:flex-row gap-3 sm:gap-6 lg:gap-8 items-start sm:items-center max-w-full sm:max-w-fit">
                {/* Clickable Message Content */}
                <Link
                    href={`/bungalows/${reservedBungalow.id}`}
                    className="flex-1 min-w-0 hover:text-primary-900 transition-colors duration-300"
                >
                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed cursor-pointer">
                        <span className="block sm:inline">
                            Don&apos;t forget to reserve your dates for Bungalow
                            &nbsp;
                            <span className="font-bold text-primary-900">
                                &apos;{reservedBungalow.name}&apos;
                            </span>
                        </span>
                        <br className="hidden sm:inline" />
                        <span className=" block sm:inline mt-1 sm:mt-0 sm:ml-2">
                            <span className="font-bold text-primary-900">
                                {format(new Date(range.from), "MMM dd, yyyy")}
                            </span>
                            <span className="mx-2">to</span>
                            <span className="font-bold text-primary-900">
                                {format(new Date(range.to), "MMM dd, yyyy")}
                            </span>
                        </span>
                    </p>
                </Link>

                {/* Close Button */}
                <button
                    onClick={resetRange}
                    className="rounded-full p-2 hover:bg-accent-600 active:bg-accent-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-800 focus:ring-offset-2 focus:ring-offset-accent-500 flex-shrink-0 self-end sm:self-center"
                    aria-label="Clear selected dates"
                >
                    <X className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
            </div>
        </div>
    );
}

export default ReservationReminder;
