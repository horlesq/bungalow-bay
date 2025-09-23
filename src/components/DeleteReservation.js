"use client";

import { Trash2 } from "lucide-react";
import { useTransition } from "react";
import SpinnerMini from "./SpinnerMini";
import { deleteBookingAction } from "@/lib/actions";

function DeleteReservation({ bookingId, onDelete }) {
    const [isPending, startTransition] = useTransition();

    function handleDelete() {
        if (
            confirm(
                "Are you sure you want to cancel this reservation? This action cannot be undone."
            )
        )
            startTransition(() => onDelete(bookingId));
    }

    return (
        <button
            // onClick={handleDelete}
            onClick={() => deleteBookingAction(bookingId)}
            disabled={isPending}
            className="group/delete flex items-center justify-center gap-3 py-4 px-6 text-primary-300 hover:bg-red-600 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-primary-950"
        >
            {!isPending ? (
                <>
                    <Trash2 className="h-5 w-5 group-hover/delete:scale-110 transition-transform duration-200" />
                    <span className="text-sm uppercase font-bold tracking-wide">
                        Cancel Booking
                    </span>
                </>
            ) : (
                <span className="flex items-center justify-center">
                    <SpinnerMini />
                </span>
            )}
        </button>
    );
}

export default DeleteReservation;
