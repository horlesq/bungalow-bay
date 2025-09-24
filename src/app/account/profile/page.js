import SelectCountry from "@/components/SelectCountry";
import UpdateProfileForm from "@/components/UpdateProfileForm";

import { auth } from "@/lib/auth";
import { getGuest } from "@/lib/data-service";

export const metadata = {
    title: "Update profile",
};

export default async function Page() {
    const session = await auth();
    const guest = await getGuest(session.user.email);

    return (
        <div className="max-w-7xl mx-auto py-6">
            {/* Header Section */}
            <div className="mb-8 sm:mb-10 lg:mb-12">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-300 mb-4 sm:mb-6">
                    Guest Profile
                </h1>
                <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-accent-500 to-accent-400 rounded-full mb-4 sm:mb-6"></div>
                <p className="text-lg sm:text-xl text-primary-200 leading-relaxed max-w-3xl">
                    Keep your information up to date to ensure a smooth check-in
                    experience. Your details help us provide you with the best
                    possible service during your stay.
                </p>
            </div>

            {/* Form Section */}
            <UpdateProfileForm guest={guest}>
                <SelectCountry
                    name="nationality"
                    id="nationality"
                    defaultCountry={guest.nationality}
                />
            </UpdateProfileForm>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 sm:mt-10 lg:mt-12 max-w-7xl">
                <div className="sm:bg-primary-950/30 sm:border border-primary-800 rounded-xl sm:p-6 backdrop-blur-sm">
                    <h3 className="text-accent-400 font-semibold text-lg mb-3">
                        Privacy & Security
                    </h3>
                    <p className="text-primary-300 text-sm leading-relaxed">
                        Your personal information is encrypted and stored
                        securely. We only use this data to enhance your booking
                        and stay experience.
                    </p>
                </div>

                <div className="sm:bg-primary-950/30 sm:border border-primary-800 rounded-xl sm:p-6 backdrop-blur-sm">
                    <h3 className="text-accent-400 font-semibold text-lg mb-3">
                        Need Help?
                    </h3>
                    <p className="text-primary-300 text-sm leading-relaxed">
                        If you need to update your name or email address, or
                        have any questions about your profile, please contact
                        our support team.
                    </p>
                </div>
            </div>
        </div>
    );
}
