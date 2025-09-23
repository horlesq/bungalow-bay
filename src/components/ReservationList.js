// "use client";

import { deleteBooking } from "@/lib/data-service";
import ReservationCard from "./ReservationCard";
import { useOptimistic } from "react";

function ReservationList({ bookings }) {
    console.log(bookings);
    // const [optimisticBookings, optimisticDelete] = useOptimistic(
    //     bookings,
    //     (curBookings, bookingId) => {
    //         return curBookings.filter((booking) => booking.id !== bookingId);
    //     }
    // );

    // async function handleDelete(bookingId) {
    //     optimisticDelete(bookingId);
    //     await deleteBooking(bookingId);
    // }

    return null;
    return (
        <ul className="space-y-6">
            {/* {optimisticBookings.map((booking) => (
                <ReservationCard
                    booking={booking}
                    onDelete={handleDelete}
                    key={booking.id}
                />
            ))} */}
        </ul>
    );
}

export default ReservationList;
