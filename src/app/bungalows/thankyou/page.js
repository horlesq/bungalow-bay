import Link from "next/link";
import { CheckCircle, Calendar, Home, Mail } from "lucide-react";

export const metadata = {
    title: "Reservation Confirmed",
};

export default function Page() {
    return (
        <div className="max-w-4xl mx-auto ">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-300 mb-4 sm:mb-6 leading-tight">
                    Reservation Confirmed!
                </h1>
                
                <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-accent-500 to-accent-400 rounded-full mx-auto mb-6 sm:mb-8"></div>
                
                <p className="text-lg sm:text-xl lg:text-2xl text-primary-200 leading-relaxed max-w-2xl mx-auto">
                    Your beachfront bungalow awaits.
                </p>
            </div>

            {/* Confirmation Details Card */}
            <div className="bg-primary-950/30 backdrop-blur-sm border border-primary-800 rounded-xl p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-semibold text-accent-300 mb-8 text-center">
                    Your Reservation is Secured
                </h2>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                    <Link
                        href="/account/reservations"
                        className="w-full sm:w-auto bg-gradient-to-r from-accent-500 to-accent-400 hover:from-accent-400 hover:to-accent-300 text-primary-900 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 focus:ring-offset-primary-950 text-center"
                    >
                        <span className="flex items-center justify-center gap-2">
                            <Calendar className="h-5 w-5" />
                            Manage Your Reservations
                        </span>
                    </Link>
                    
                    <Link
                        href="/bungalows"
                        className="w-full sm:w-auto bg-primary-800 hover:bg-primary-700 border border-primary-600 hover:border-primary-500 text-primary-200 hover:text-primary-100 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-950 text-center"
                    >
                        <span className="flex items-center justify-center gap-2">
                            <Home className="h-5 w-5" />
                            Browse More Bungalows
                        </span>
                    </Link>
                </div>
            </div>

            {/* Additional Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-primary-950/30 backdrop-blur-sm border border-primary-800 rounded-xl p-6 text-center">
                    <div className="bg-accent-600/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-6 w-6 text-accent-400" />
                    </div>
                    <h3 className="text-accent-400 font-semibold text-lg mb-3">
                        Instant Confirmation
                    </h3>
                    <p className="text-primary-300 text-sm leading-relaxed">
                        Your booking is confirmed and secured. No additional steps required - just pack your bags!
                    </p>
                </div>

                <div className="bg-primary-950/30 backdrop-blur-sm border border-primary-800 rounded-xl p-6 text-center">
                    <div className="bg-accent-600/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Home className="h-6 w-6 text-accent-400" />
                    </div>
                    <h3 className="text-accent-400 font-semibold text-lg mb-3">
                        Account Access
                    </h3>
                    <p className="text-primary-300 text-sm leading-relaxed">
                        View and manage all your bookings through your account dashboard. Easy access anytime, anywhere.
                    </p>
                </div>

                <div className="bg-primary-950/30 backdrop-blur-sm border border-primary-800 rounded-xl p-6 text-center">
                    <div className="bg-accent-600/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Calendar className="h-6 w-6 text-accent-400" />
                    </div>
                    <h3 className="text-accent-400 font-semibold text-lg mb-3">
                        Flexible Booking
                    </h3>
                    <p className="text-primary-300 text-sm leading-relaxed">
                        Need to make changes? You can modify your reservation details anytime through your account.
                    </p>
                </div>
            </div>

            {/* Bottom Message */}
            <div className="text-center mt-12 sm:mt-16 mb-16">
                <p className="text-lg text-primary-300 leading-relaxed max-w-2xl mx-auto">
                    We can&apos;t wait to welcome you to paradise!
                </p>
            </div>
        </div>
    );
}