import SubmitButton from "@/components/SubmitButton";
import { updateBookingAction } from "@/lib/actions";
import { getBooking, getBungalow } from "@/lib/data-service";

export default async function Page({ params }) {
    const { bookingId } = params;
    const {
        num_guests: numGuests,
        observations,
        bungalow_id: bungalowId,
    } = await getBooking(bookingId);
    const { max_capacity: maxCapacity } = await getBungalow(bungalowId);

    return (
        <div className="max-w-6xl mx-auto py-6">
            {/* Header Section */}
            <div className="mb-8 sm:mb-10 lg:mb-12">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-300 mb-4 sm:mb-6">
                    Edit Reservation
                </h1>
                <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-accent-500 to-accent-400 rounded-full mb-4 sm:mb-6"></div>
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg sm:text-xl text-primary-200">
                        Reservation ID:
                    </span>
                    <span className="bg-accent-500/20 text-accent-300 px-3 py-1 rounded-full text-sm sm:text-base font-semibold">
                        #{bookingId}
                    </span>
                </div>
                <p className="text-lg sm:text-xl text-primary-200 leading-relaxed max-w-3xl">
                    Update your reservation details below. Changes will take
                    effect immediately and a confirmation email will be sent to
                    you.
                </p>
            </div>

            {/* Form Section */}
            <div className="sm:bg-primary-950/30 backdrop-blur-sm sm:border border-primary-800 rounded-xl sm:p-8 lg:p-10 shadow-xl">
                <form
                    action={updateBookingAction}
                    className="space-y-6 sm:space-y-8"
                >
                    <input type="hidden" value={bookingId} name="bookingId" />

                    {/* Guest Count Section */}
                    <div className="space-y-3 sm:space-y-4">
                        <label
                            htmlFor="numGuests"
                            className="block text-lg sm:text-xl font-semibold text-accent-400 mb-2"
                        >
                            Number of Guests
                        </label>
                        <select
                            name="numGuests"
                            id="numGuests"
                            defaultValue={numGuests}
                            className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-primary-900/50 border border-primary-700 text-primary-200 rounded-xl shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-accent-400 hover:border-primary-600 text-base sm:text-lg"
                            required
                        >
                            <option
                                value=""
                                className="bg-primary-900 text-primary-300"
                            >
                                Select number of guests...
                            </option>
                            {Array.from(
                                { length: maxCapacity },
                                (_, i) => i + 1
                            ).map((x) => (
                                <option
                                    value={x}
                                    key={x}
                                    className="bg-primary-900 text-primary-200"
                                >
                                    {x} {x === 1 ? "guest" : "guests"}
                                </option>
                            ))}
                        </select>
                        <p className="text-sm text-primary-400 mt-2">
                            This bungalow accommodates up to {maxCapacity}{" "}
                            guests
                        </p>
                    </div>

                    {/* Observations Section */}
                    <div className="space-y-3 sm:space-y-4">
                        <label
                            htmlFor="observations"
                            className="block text-lg sm:text-xl font-semibold text-accent-400 mb-2"
                        >
                            Special Requests & Notes
                        </label>
                        <textarea
                            name="observations"
                            id="observations"
                            defaultValue={observations}
                            rows="5"
                            placeholder="Let us know about any special requirements, dietary restrictions, celebration occasions, or anything else that would help us make your stay perfect..."
                            className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-primary-900/50 border border-primary-700 text-primary-200 rounded-xl shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-accent-400 hover:border-primary-600 resize-vertical min-h-[120px] text-base sm:text-lg leading-relaxed placeholder-primary-500"
                        />
                        <p className="text-sm text-primary-400 mt-2">
                            Optional: Help us personalize your experience
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row justify-end items-center gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-primary-800">
                        <SubmitButton
                            pendingLabel="Updating reservation..."
                            className="w-full sm:w-auto bg-gradient-to-r from-accent-500 to-accent-400 hover:from-accent-400 hover:to-accent-300 text-primary-900 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 focus:ring-offset-primary-950 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        >
                            Update Reservation
                        </SubmitButton>
                    </div>
                </form>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 sm:mt-10 lg:mt-12 max-w-7xl">
                <div className="sm:bg-primary-950/30 sm:border border-primary-800 rounded-xl sm:p-6 backdrop-blur-sm">
                    <h3 className="text-accent-400 font-semibold text-lg mb-3">
                        Modification Policy
                    </h3>
                    <p className="text-primary-300 text-sm leading-relaxed">
                        You can modify your reservation details at any time.
                        Changes to guest count and special requests are free of
                        charge and will be confirmed immediately.
                    </p>
                </div>

                <div className="sm:bg-primary-950/30 sm:border border-primary-800 rounded-xl sm:p-6 backdrop-blur-sm">
                    <h3 className="text-accent-400 font-semibold text-lg mb-3">
                        Need More Help?
                    </h3>
                    <p className="text-primary-300 text-sm leading-relaxed">
                        For date changes, cancellations, or other questions
                        about your reservation, please contact our guest
                        services team who will be happy to assist you.
                    </p>
                </div>
            </div>
        </div>
    );
}
