"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Footer() {
    const pathname = usePathname();

    if (pathname === "/") {
        return null;
    }

    return (
        <footer className="bg-primary-950 border-t border-primary-800 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 2xl:px-0 py-6 sm:py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-6 sm:gap-8 lg:gap-12">
                    {/* Brand Section */}
                    <div className="flex-1 w-full lg:w-auto">
                        <div className="flex items-center gap-3 mb-3 sm:mb-4">
                            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-primary-200">
                                Bungalow Bay
                            </span>
                        </div>
                        <p className="text-primary-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md">
                            Escape to our tropical bungalows and experience the
                            perfect blend of comfort and paradise.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="w-full lg:w-auto lg:flex-shrink-0">
                        <h3 className="text-primary-200 font-semibold text-base sm:text-lg mb-3 sm:mb-4">
                            Quick Links
                        </h3>
                        <ul className="flex flex-col xs:flex-row">
                            <li>
                                <Link
                                    href="/about"
                                    className="text-primary-300 hover:text-accent-300 focus:text-accent-300 transition-colors text-sm sm:text-base inline-block py-1"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/bungalows"
                                    className="text-primary-300 hover:text-accent-300 focus:text-accent-300 transition-colors text-sm sm:text-base inline-block py-1"
                                >
                                    Our Bungalows
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/account"
                                    className="text-primary-300 hover:text-accent-300 focus:text-accent-300 transition-colors text-sm sm:text-base inline-block py-1"
                                >
                                    Guest Area
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-primary-800 pt-4 sm:pt-6 mt-6 sm:mt-8">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
                        <p className="text-primary-400 text-xs sm:text-sm order-2 sm:order-1">
                            © 2024 Bungalow Bay. Portfolio project by{" "}
                            <a
                                href="https://horly.dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent-300 hover:text-accent-200 focus:text-accent-200 font-medium transition-colors underline decoration-dotted underline-offset-2"
                            >
                                Horly
                            </a>
                        </p>
                        <div className="text-xs sm:text-sm order-1 sm:order-2">
                            <span className="text-primary-400">
                                Built with Next.js & Tailwind CSS
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
