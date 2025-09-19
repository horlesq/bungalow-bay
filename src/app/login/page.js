import SignInButton from "@/components/SignInButton";

export const metadata = {
    title: "Login",
};

export default function Page() {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 text-center">
                <div className="space-y-4 sm:space-y-6">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-accent-200 leading-tight">
                        Sign in to access the guest area
                    </h2>

                    <p className="text-lg sm:text-xl text-primary-300 leading-relaxed">
                        Please sign in to make reservations and manage your
                        bookings
                    </p>
                </div>

                <div className="pt-4 sm:pt-6">
                    <SignInButton />
                </div>
            </div>
        </div>
    );
}
