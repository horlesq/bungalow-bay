import { auth } from "@/lib/auth";
import { getBookings } from "@/lib/data-service";
import { Calendar, MapPin, Star, User } from "lucide-react";
import Link from "next/link";
import { format, parseISO, isPast, isWithinInterval } from "date-fns";

export const metadata = {
    title: "Guest area",
};

export default async function Page() {
    const session = await auth();
    const bookings = await getBookings(session.user.guestId);

    const firstName = session.user.name.split(" ").at(0);

    // Process bookings for dashboard stats
    const now = new Date();
    const upcomingBookings = bookings.filter((booking) => {
        const startDate = new Date(booking.start_date);
        const endDate = new Date(booking.end_date);
        return (
            !isPast(endDate) &&
            !isWithinInterval(now, { start: startDate, end: endDate })
        );
    });

    const currentBooking = bookings.find((booking) => {
        const startDate = new Date(booking.start_date);
        const endDate = new Date(booking.end_date);
        return isWithinInterval(now, { start: startDate, end: endDate });
    });

    const totalBookings = bookings.length;
    const totalNights = bookings.reduce(
        (acc, booking) => acc + booking.num_nights,
        0
    );

    // Get next upcoming booking
    const nextBooking = upcomingBookings.sort(
        (a, b) => new Date(a.start_date) - new Date(b.start_date)
    )[0];

    return (
        <div className="max-w-6xl mx-auto py-6">
            {/* Header Section */}
            <div className="mb-8 sm:mb-10 lg:mb-12">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-300 mb-4 sm:mb-6">
                    Welcome back, {firstName}
                </h1>
                <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-accent-500 to-accent-400 rounded-full mb-4 sm:mb-6"></div>
                <p className="text-lg sm:text-xl lg:text-2xl text-primary-200 leading-relaxed">
                    Your tropical paradise dashboard. Manage your stays and
                    discover new getaways.
                </p>
            </div>

            {/* Current Stay Alert */}
            {currentBooking && (
                <div className="mb-8 sm:mb-10 lg:mb-12">
                    <div className="bg-blue-800/20 backdrop-blur-sm border border-blue-700/50 rounded-xl p-6 sm:p-8">
                        <div className="flex items-start gap-4">
                            <div className="bg-blue-600/20 p-2 rounded-lg">
                                <MapPin className="h-6 w-6 text-blue-300" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl sm:text-2xl font-semibold text-blue-200 mb-2">
                                    You&apos;re currently staying with us!
                                </h3>
                                <p className="text-blue-100 mb-4">
                                    Bungalow {currentBooking.bungalows.name} •{" "}
                                    {format(
                                        parseISO(currentBooking.start_date),
                                        "MMM dd"
                                    )}{" "}
                                    -{" "}
                                    {format(
                                        parseISO(currentBooking.end_date),
                                        "MMM dd, yyyy"
                                    )}
                                </p>
                                <Link
                                    href="/account/reservations"
                                    className="inline-flex items-center gap-2 text-blue-200 hover:text-blue-100 font-medium transition-colors duration-200"
                                >
                                    View reservation details →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 sm:mb-10 lg:mb-12">
                <div className="bg-primary-950/30 backdrop-blur-sm border border-primary-800 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <Calendar className="h-5 w-5 text-accent-400" />
                        <h3 className="text-accent-400 font-semibold">
                            Total Bookings
                        </h3>
                    </div>
                    <p className="text-2xl sm:text-3xl font-bold text-accent-200">
                        {totalBookings}
                    </p>
                    <p className="text-sm text-primary-400 mt-1">
                        All time reservations
                    </p>
                </div>

                <div className="bg-primary-950/30 backdrop-blur-sm border border-primary-800 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <Star className="h-5 w-5 text-accent-400" />
                        <h3 className="text-accent-400 font-semibold">
                            Nights Stayed
                        </h3>
                    </div>
                    <p className="text-2xl sm:text-3xl font-bold text-accent-200">
                        {totalNights}
                    </p>
                    <p className="text-sm text-primary-400 mt-1">
                        Paradise nights enjoyed
                    </p>
                </div>

                <div className="bg-primary-950/30 backdrop-blur-sm border border-primary-800 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <User className="h-5 w-5 text-accent-400" />
                        <h3 className="text-accent-400 font-semibold">
                            Upcoming Stays
                        </h3>
                    </div>
                    <p className="text-2xl sm:text-3xl font-bold text-accent-200">
                        {upcomingBookings.length}
                    </p>
                    <p className="text-sm text-primary-400 mt-1">
                        Future adventures planned
                    </p>
                </div>
            </div>

            {/* Next Booking Section */}
            {nextBooking ? (
                <div className="mb-8 sm:mb-10 lg:mb-12">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-accent-300 mb-6">
                        Your Next Getaway
                    </h2>
                    <div className="bg-primary-950/30 backdrop-blur-sm border border-primary-800 rounded-xl p-6 sm:p-8">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                            <div className="flex-1">
                                <h3 className="text-xl sm:text-2xl font-semibold text-accent-200 mb-3">
                                    Bungalow {nextBooking.bungalows.name}
                                </h3>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-4">
                                    <div className="flex items-center gap-2 text-primary-200">
                                        <Calendar className="h-4 w-4 text-accent-400" />
                                        <span>
                                            {format(
                                                parseISO(
                                                    nextBooking.start_date
                                                ),
                                                "MMM dd"
                                            )}{" "}
                                            -{" "}
                                            {format(
                                                parseISO(nextBooking.end_date),
                                                "MMM dd, yyyy"
                                            )}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 text-primary-200">
                                        <User className="h-4 w-4 text-accent-400" />
                                        <span>
                                            {nextBooking.num_guests} guest
                                            {nextBooking.num_guests !== 1
                                                ? "s"
                                                : ""}
                                        </span>
                                    </div>
                                </div>
                                <p className="text-primary-300">
                                    {nextBooking.num_nights} night
                                    {nextBooking.num_nights !== 1 ? "s" : ""} •
                                    ${nextBooking.total_price} total
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Link
                                    href={`/account/reservations/edit/${nextBooking.id}`}
                                    className="px-4 py-2 bg-primary-800 hover:bg-primary-700 text-primary-200 rounded-lg transition-colors duration-200 text-center"
                                >
                                    Edit Booking
                                </Link>
                                <Link
                                    href="/account/reservations"
                                    className="px-4 py-2 bg-accent-600 hover:bg-accent-500 text-primary-900 font-medium rounded-lg transition-colors duration-200 text-center"
                                >
                                    View All
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                !currentBooking && (
                    <div className="mb-8 sm:mb-10 lg:mb-12">
                        <h2 className="text-2xl sm:text-3xl font-semibold text-accent-300 mb-6">
                            Ready for Your Next Adventure?
                        </h2>
                        <div className="bg-primary-950/30 backdrop-blur-sm border border-primary-800 rounded-xl p-8 sm:p-10 text-center">
                            <h3 className="text-xl sm:text-2xl font-semibold text-accent-200 mb-4">
                                No upcoming reservations
                            </h3>
                            <p className="text-primary-300 text-lg mb-6 leading-relaxed max-w-2xl mx-auto">
                                Paradise is calling! Discover our beautiful
                                beachfront bungalows and plan your perfect
                                tropical escape.
                            </p>
                            <Link
                                href="/bungalows"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-500 to-accent-400 hover:from-accent-400 hover:to-accent-300 text-primary-900 font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 focus:ring-offset-primary-950"
                            >
                                <span>Explore Bungalows</span>
                                <span className="text-lg">→</span>
                            </Link>
                        </div>
                    </div>
                )
            )}

            {/* Quick Actions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link
                    href="/account/reservations"
                    className="group bg-primary-950/30 backdrop-blur-sm border border-primary-800 rounded-xl p-6 hover:border-accent-600 hover:bg-primary-950/50 transition-all duration-300"
                >
                    <div className="flex items-center gap-4 mb-3">
                        <div className="bg-accent-600/20 p-2 rounded-lg group-hover:bg-accent-600/30 transition-colors duration-300">
                            <Calendar className="h-6 w-6 text-accent-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-accent-300 group-hover:text-accent-200 transition-colors duration-300">
                            My Reservations
                        </h3>
                    </div>
                    <p className="text-primary-300 leading-relaxed">
                        View, edit, or cancel your bookings. Manage all your
                        tropical getaways in one place.
                    </p>
                </Link>

                <Link
                    href="/account/profile"
                    className="group bg-primary-950/30 backdrop-blur-sm border border-primary-800 rounded-xl p-6 hover:border-accent-600 hover:bg-primary-950/50 transition-all duration-300"
                >
                    <div className="flex items-center gap-4 mb-3">
                        <div className="bg-accent-600/20 p-2 rounded-lg group-hover:bg-accent-600/30 transition-colors duration-300">
                            <User className="h-6 w-6 text-accent-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-accent-300 group-hover:text-accent-200 transition-colors duration-300">
                            Guest Profile
                        </h3>
                    </div>
                    <p className="text-primary-300 leading-relaxed">
                        Update your personal information and preferences for a
                        seamless stay experience.
                    </p>
                </Link>

                <Link
                    href="/bungalows"
                    className="group bg-primary-950/30 backdrop-blur-sm border border-primary-800 rounded-xl p-6 hover:border-accent-600 hover:bg-primary-950/50 transition-all duration-300"
                >
                    <div className="flex items-center gap-4 mb-3">
                        <div className="bg-accent-600/20 p-2 rounded-lg group-hover:bg-accent-600/30 transition-colors duration-300">
                            <MapPin className="h-6 w-6 text-accent-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-accent-300 group-hover:text-accent-200 transition-colors duration-300">
                            Browse Bungalows
                        </h3>
                    </div>
                    <p className="text-primary-300 leading-relaxed">
                        Explore our collection of beachfront bungalows and find
                        your perfect paradise retreat.
                    </p>
                </Link>

                <div className="bg-primary-950/30 backdrop-blur-sm border border-primary-800 rounded-xl p-6">
                    <div className="flex items-center gap-4 mb-3">
                        <div className="bg-accent-600/20 p-2 rounded-lg">
                            <Star className="h-6 w-6 text-accent-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-accent-300">
                            Guest Services
                        </h3>
                    </div>
                    <p className="text-primary-300 leading-relaxed mb-4">
                        Need assistance with your stay? Our team is here to help
                        make your experience perfect.
                    </p>
                    <p className="text-sm text-primary-400">
                        Contact us for special requests, concierge services, or
                        any questions about your reservation.
                    </p>
                </div>
            </div>
        </div>
    );
}
