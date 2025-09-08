import Link from "next/link";

function NotFound() {
    return (
        <main className="text-center space-y-6 mt-4" role="main">
            <div className="space-y-4 mb-10">
                <h1 className="text-3xl font-semibold">
                    This bungalow could not be found.
                </h1>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                    href="/bungalows"
                    className="group inline-flex items-center gap-3 sm:gap-4 bg-accent-300/90 backdrop-blur-md px-8 sm:px-10 lg:px-12 py-2 sm:py-3 lg:py-4 text-primary-900 text-lg sm:text-xl lg:text-2xl font-semibold rounded-full shadow-xl hover:from-accent-400/95 hover:to-accent-300/95 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-out border border-accent-200/40"
                    aria-label="Go to bungalows page"
                >
                    <svg
                        className="w-5 h-5 transition-transform group-hover:-translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    <span>Back to bungalows</span>
                </Link>
            </div>
        </main>
    );
}

export default NotFound;
