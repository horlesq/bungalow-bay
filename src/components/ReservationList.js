"use client";

import ReservationCard from "./ReservationCard";
import { useOptimistic } from "react";
import { deleteBookingAction } from "@/lib/actions";

function ReservationList({ bookings }) {
    const [optimisticBookings, optimisticDelete] = useOptimistic(
        bookings,
        (curBookings, bookingId) => {
            return curBookings.filter((booking) => booking.id !== bookingId);
        }
    );

    async function handleDelete(bookingId) {
        optimisticDelete(bookingId);
        await deleteBookingAction(bookingId);
    }

    // Sort bookings: future -> current -> past
    const sortedBookings = [...optimisticBookings].sort((a, b) => {
        const now = Date.now();
        const aStart = new Date(a.start_date).getTime();
        const aEnd = new Date(a.end_date).getTime();
        const bStart = new Date(b.start_date).getTime();
        const bEnd = new Date(b.end_date).getTime();

        // Assign priority: future=0, current=1, past=2
        const getPriority = (start, end) =>
            now < start ? 0 : now <= end ? 1 : 2;

        const aPriority = getPriority(aStart, aEnd);
        const bPriority = getPriority(bStart, bEnd);

        if (aPriority !== bPriority) return aPriority - bPriority;

        // Same category: future/current by start date, past by reverse start date
        return aPriority === 2 ? bStart - aStart : aStart - bStart;
    });

    console.log(sortedBookings);

    return (
        <ul className="space-y-6">
            {sortedBookings.map((booking) => (
                <ReservationCard
                    booking={booking}
                    onDelete={handleDelete}
                    key={booking.id}
                />
            ))}
        </ul>
    );
}

export default ReservationList;
