import { Pencil, Calendar, Users } from "lucide-react";
import {
    format,
    formatDistance,
    isPast,
    isToday,
    parseISO,
    isWithinInterval,
} from "date-fns";
import DeleteReservation from "./DeleteReservation";
import Image from "next/image";
import Link from "next/link";

export const formatDistanceFromNow = (dateStr) =>
    formatDistance(parseISO(dateStr), new Date(), {
        addSuffix: true,
    }).replace("about ", "");

function ReservationCard({ booking, onDelete }) {
    const {
        id,
        guest_id,
        start_date: startDate,
        end_date: endDate,
        num_nights: numNights,
        total_price: totalPrice,
        num_guests: numGuests,
        status,
        created_at,
        bungalows: { name, image },
    } = booking;

    const now = new Date();
    const startBookingDate = new Date(startDate);
    const endBookingDate = new Date(endDate);

    const isPastBooking = isPast(endBookingDate);
    const isCurrentBooking = isWithinInterval(now, {
        start: startBookingDate,
        end: endBookingDate,
    });
    const isUpcomingBooking = !isPastBooking && !isCurrentBooking;

    // Determine if booking can be modified (only upcoming bookings)
    const canModify = isUpcomingBooking;

    return (
        <div className="group bg-primary-950/50 backdrop-blur-sm border border-primary-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] hover:border-primary-700">
            <div className="flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="relative h-48 lg:h-auto lg:w-64 lg:min-w-64 lg:max-w-64">
                    <Image
                        src={image}
                        fill
                        alt={`Bungalow ${name}`}
                        className="object-cover"
                        sizes="(min-width: 1024px) 256px, 100vw"
                    />
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                        {isPastBooking ? (
                            <span className="bg-yellow-800/90 backdrop-blur-sm text-yellow-200 px-3 py-1.5 rounded-full text-xs font-bold uppercase shadow-lg border border-yellow-700/50">
                                Past
                            </span>
                        ) : isCurrentBooking ? (
                            <span className="bg-blue-800/90 backdrop-blur-sm text-blue-200 px-3 py-1.5 rounded-full text-xs font-bold uppercase shadow-lg border border-blue-700/50">
                                Current Stay
                            </span>
                        ) : (
                            <span className="bg-green-800/90 backdrop-blur-sm text-green-200 px-3 py-1.5 rounded-full text-xs font-bold uppercase shadow-lg border border-green-700/50">
                                Upcoming
                            </span>
                        )}
                    </div>

                    {/* Gradient overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-primary-900/20"></div>
                </div>

                {/* Content Section */}
                <div className="flex-grow flex flex-col">
                    {/* Main Info */}
                    <div className="flex-grow p-6 sm:p-8">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                            <div>
                                <h3 className="text-2xl sm:text-3xl font-semibold text-accent-200 mb-2 leading-tight">
                                    {numNights} night
                                    {numNights !== 1 ? "s" : ""} in Bungalow{" "}
                                    {name}
                                </h3>
                                <p className="text-primary-400 text-sm">
                                    Booked{" "}
                                    {format(
                                        new Date(created_at),
                                        "MMM dd, yyyy 'at' h:mm a"
                                    )}
                                </p>
                            </div>
                        </div>

                        {/* Date Info */}
                        <div className="flex items-center gap-3 mb-4 text-primary-200">
                            <Calendar className="h-5 w-5 text-accent-400 flex-shrink-0" />
                            <div className="text-lg">
                                <span className="font-medium">
                                    {format(
                                        new Date(startDate),
                                        "EEE, MMM dd yyyy"
                                    )}
                                </span>
                                <span className="text-primary-400 mx-2">→</span>
                                <span className="font-medium">
                                    {format(
                                        new Date(endDate),
                                        "EEE, MMM dd yyyy"
                                    )}
                                </span>
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                            <div className="flex items-center gap-3">
                                <Users className="h-5 w-5 text-accent-400 flex-shrink-0" />
                                <span className="text-lg text-primary-200">
                                    {numGuests} guest
                                    {numGuests !== 1 ? "s" : ""}
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-xl font-semibold text-accent-300">
                                    ${totalPrice}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Actions Section */}
                    <div className="bg-primary-900/50 border-t border-primary-800">
                        {canModify ? (
                            <div className="flex divide-x divide-primary-800">
                                <Link
                                    href={`/account/reservations/edit/${id}`}
                                    className="group/edit flex-1 flex items-center justify-center gap-3 py-4 px-6 text-primary-300 hover:bg-accent-600 hover:text-primary-900 transition-all duration-300 font-medium"
                                >
                                    <Pencil className="h-5 w-5 group-hover/edit:scale-110 transition-transform duration-200" />
                                    <span className="text-sm uppercase font-bold tracking-wide">
                                        Edit Booking
                                    </span>
                                </Link>
                                <div className="flex items-center">
                                    <DeleteReservation
                                        bookingId={id}
                                        onDelete={onDelete}
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className="py-4 px-6 text-center">
                                <p className="text-primary-400 text-sm">
                                    {isPastBooking
                                        ? "Past reservations cannot be modified"
                                        : "Current reservations cannot be modified during your stay"}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReservationCard;
