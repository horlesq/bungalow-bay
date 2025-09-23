import ReservationCard from "@/components/ReservationCard";
// import ReservationList from "@/components/ReservationList";
import { auth } from "@/lib/auth";
import { getBookings } from "@/lib/data-service";
import Link from "next/link";

export const metadata = {
    title: "Reservations",
};

export default async function Page() {
    const session = await auth();
    const bookings = await getBookings(session.user.guestId);

    return (
        <div className="max-w-7xl mx-auto py-6">
            <div className="mb-8 lg:mb-12 xl:mb-16">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-6 sm:mb-8 lg:mb-10 text-accent-200 font-semibold leading-tight">
                    Your Reservations
                </h1>
                <p className="text-primary-200 text-lg sm:text-xl lg:text-2xl leading-relaxed">
                    Manage your upcoming stays and review your booking history.
                    All your tropical getaways in one convenient place.
                </p>
            </div>

            {bookings.length === 0 ? (
                <div className="text-center py-16 sm:py-20 lg:py-24">
                    <div className="max-w-md mx-auto">
                        <div className="bg-primary-900/30 backdrop-blur-sm border border-primary-700 rounded-2xl p-8 sm:p-10 lg:p-12 shadow-2xl">
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-accent-300 mb-4 sm:mb-6">
                                No Reservations Yet
                            </h3>
                            <p className="text-primary-300 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed">
                                Ready to escape to paradise? Discover our
                                beautiful beachfront bungalows and book your
                                perfect getaway.
                            </p>
                            <Link
                                href="/bungalows"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-500 to-accent-400 hover:from-accent-400 hover:to-accent-300 text-primary-900 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 focus:ring-offset-primary-950"
                            >
                                <span>Explore Beach Bungalows</span>
                                <span className="text-lg">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="space-y-6 sm:space-y-8">
                    {bookings.map((booking) => (
                        <ReservationCard booking={booking} key={booking.id} />
                    ))}
                </div>
            )}
        </div>
    );
}
