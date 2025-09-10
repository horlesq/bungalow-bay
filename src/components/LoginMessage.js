import Link from "next/link";

function LoginMessage() {
    return (
        <div className="flex items-center justify-center bg-accent-900 p-6 sm:p-8 lg:p-12">
            <div className="text-center max-w-md">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-accent-200 mb-4 sm:mb-6 leading-tight">
                    Ready to book?
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-primary-200 mb-6 sm:mb-8 leading-relaxed">
                    Please{" "}
                    <Link
                        href="/login"
                        className="underline text-accent-500 hover:text-accent-300 transition-colors duration-300 font-medium"
                    >
                        log in
                    </Link>{" "}
                    to reserve this bungalow and start planning your perfect
                    beach getaway.
                </p>
                <div className="bg-primary-900/50 border border-primary-700 rounded-lg p-4 sm:p-6">
                    <p className="text-sm sm:text-base text-primary-300 mb-3">
                        New to Bungalow Bay?
                    </p>
                    <p className="text-xs sm:text-sm text-primary-400 leading-relaxed">
                        Create your account during login to access exclusive
                        member rates and personalized recommendations.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LoginMessage;
