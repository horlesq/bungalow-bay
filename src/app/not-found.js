"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function NotFound() {
    const router = useRouter();
    const [canGoBack, setCanGoBack] = useState(true);

    useEffect(() => {
        // Check if there's history to go back to
        setCanGoBack(window.history.length > 1);
    }, []);

    const handleGoBack = () => {
        if (canGoBack) {
            router.back();
        } else {
            // Fallback to home page if no history
            router.push("/");
        }
    };

    const handleGoHome = () => {
        router.push("/");
    };

    return (
        <main className="text-center space-y-6 mt-4" role="main">
            <div className="space-y-4 mb-10">
                <h1 className="text-3xl font-semibold">
                    This page could not be found.
                </h1>
                <p className="text-lg text-gray-600 max-w-md mx-auto">
                    The page you&apos;re looking for doesn&apos;t exist or may
                    have been moved.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                    onClick={handleGoBack}
                    className="group inline-flex items-center gap-3 sm:gap-4 bg-accent-300/90 backdrop-blur-md px-8 sm:px-10 lg:px-12 py-2 sm:py-3 lg:py-4 text-primary-900 text-lg sm:text-xl lg:text-2xl font-semibold rounded-full shadow-xl hover:from-accent-400/95 hover:to-accent-300/95 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-out border border-accent-200/40"
                    aria-label={
                        canGoBack
                            ? "Go back to previous page"
                            : "Go to home page"
                    }
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
                    <span>{canGoBack ? "Go back" : "Go home"}</span>
                </button>

                {canGoBack && (
                    <button
                        onClick={handleGoHome}
                        className="group inline-flex items-center gap-3 sm:gap-4 bg-transparent border-2 border-accent-300/60 px-8 sm:px-10 lg:px-12 py-2 sm:py-3 lg:py-4 text-accent-700 text-lg sm:text-xl lg:text-2xl font-semibold rounded-full hover:bg-accent-300/10 hover:border-accent-400/80 hover:scale-105 transition-all duration-300 ease-out"
                        aria-label="Go to home page"
                    >
                        <svg
                            className="w-5 h-5 transition-transform group-hover:scale-110"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                        </svg>
                        <span>Go home</span>
                    </button>
                )}
            </div>

            <div className="mt-8 text-sm text-gray-500">
                <p>Error 404 - Page not found</p>
            </div>
        </main>
    );
}

export default NotFound;
