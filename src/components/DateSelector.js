"use client";

import {
    addYears,
    differenceInDays,
    isPast,
    isSameDay,
    isWithinInterval,
} from "date-fns";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/style.css"; // Updated import path for v9
import "../app/globals.css";
import { useReservation } from "./ReservationContext";
import { useEffect, useState } from "react";

function isAlreadyBooked(range, datesArr) {
    // Add null/undefined check for range
    return (
        range &&
        range.from &&
        range.to &&
        datesArr.some((date) =>
            isWithinInterval(date, { start: range.from, end: range.to })
        )
    );
}

function DateSelector({ settings, bungalow, bookedDates }) {
    const { range, setRange, resetRange } = useReservation();

    const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;

    const { price, discount } = bungalow;

    // Use optional chaining to safely access 'from' and 'to' and calculate numNights
    const numNights =
        displayRange?.from && displayRange?.to
            ? differenceInDays(displayRange.to, displayRange.from)
            : 0;

    // Calculate bungalow price, defaulting to 0 if numNights is not valid
    const bungalowPrice = numNights > 0 ? numNights * (price - discount) : 0;

    const { minBookingLength, maxBookingLength } = settings;

    return (
        <div className="flex flex-col justify-between bg-primary-900/30 lg:border-r lg:border-primary-800">
            {/* Calendar Section */}
            <div className="flex-grow flex items-center justify-center p-4 sm:p-6 lg:p-8">
                <div className="date-selector-container w-full flex justify-center">
                    <DayPicker
                        mode="range"
                        onSelect={setRange}
                        selected={displayRange}
                        min={minBookingLength + 1}
                        max={maxBookingLength}
                        captionLayout="dropdown"
                        numberOfMonths={1}
                        startMonth={new Date()}
                        endMonth={addYears(new Date(), 1)}
                        disabled={(curDate) =>
                            isPast(curDate) ||
                            bookedDates.some((date) => isSameDay(date, curDate))
                        }
                        showOutsideDays={false}
                        fixedWeeks={true}
                        modifiers={{
                            disabled: (date) =>
                                isPast(date) ||
                                bookedDates.some((bookedDate) =>
                                    isSameDay(date, bookedDate)
                                ),
                        }}
                        classNames={{
                            selected: `bg-primary-600 text-primary-50 font-semibold hover:bg-primary-500`,
                            today: `bg-accent-800 text-primary-100 font-semibold`,
                            range_start: `bg-primary-600 text-primary-50 font-semibold`,
                            range_end: `bg-primary-600 text-primary-50 font-semibold`,
                            range_middle: `bg-primary-800/60 text-primary-100`,
                            chevron: "fill-current text-primary-600",
                            dropdown: 'bg-primary-800 text-primary-200 border border border-primary-800 p-1 rounded shadow-sm',
                            caption_label: 'hidden',
                        }}
                    />
                </div>
            </div>

            {/* Pricing Section */}
            <div className="h-30 sm:h-20 flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 sm:p-6 lg:p-8 bg-accent-500 text-primary-800 border-t border-primary-800 lg:border-t-0">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mb-4 sm:mb-0">
                    {/* Price per night */}
                    <div className="flex gap-2 items-baseline">
                        {discount > 0 ? (
                            <>
                                <span className="text-xl sm:text-2xl font-semibold">
                                    ${price - discount}
                                </span>
                                <span className="line-through font-semibold text-primary-700 text-base sm:text-lg">
                                    ${price}
                                </span>
                            </>
                        ) : (
                            <span className="text-xl sm:text-2xl font-semibold">
                                ${price}
                            </span>
                        )}
                        <span className="text-sm sm:text-base text-primary-700">
                            /night
                        </span>
                    </div>

                    {/* Total calculation and Clear button container for mobile */}
                    <div className="flex items-center justify-between w-full sm:w-auto">
                        {/* Total calculation */}
                        <div className="min-h-[2.5rem] sm:min-h-[3rem] flex items-center">
                            {numNights > 0 ? (
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className="bg-accent-600 px-2 sm:px-3 py-1 sm:py-2 rounded text-lg sm:text-xl font-semibold text-primary-900">
                                        <span>&times;</span>{" "}
                                        <span>{numNights}</span>
                                    </div>
                                    <div className="text-center sm:text-left">
                                        <span className="text-sm sm:text-base font-bold uppercase block sm:inline">
                                            Total{" "}
                                        </span>
                                        <span className="text-xl sm:text-2xl font-bold">
                                            ${bungalowPrice}
                                        </span>
                                    </div>
                                </div>
                            ) : null}
                        </div>

                        {/* Clear dates button for mobile */}
                        <div className="sm:hidden min-h-[2.5rem] flex items-center ml-4">
                            {range?.from || range?.to ? (
                                <button
                                    className="border border-primary-800 hover:bg-primary-800 hover:text-accent-300 py-2 px-4 text-sm font-semibold rounded transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-700 focus:ring-offset-2 focus:ring-offset-accent-500"
                                    onClick={resetRange}
                                >
                                    Clear
                                </button>
                            ) : null}
                        </div>
                    </div>
                </div>

                {/* Clear dates button for desktop*/}
                <div className="hidden sm:flex min-h-[2.5rem] items-center">
                    {range?.from || range?.to ? (
                        <button
                            className="border border-primary-800 hover:bg-primary-800 hover:text-accent-300 py-2 px-4 text-sm font-semibold rounded transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-700 focus:ring-offset-2 focus:ring-offset-accent-500"
                            onClick={resetRange}
                        >
                            Clear dates
                        </button>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
export default DateSelector;
