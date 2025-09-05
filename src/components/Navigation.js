"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* Desktop Navigation */}
            <nav className="hidden md:block z-10 text-lg lg:text-xl">
                <ul className="flex gap-8 lg:gap-16 items-center">
                    <li>
                        <Link
                            href="/about"
                            className="hover:text-accent-200 text-primary-200 font-semibold transition-colors"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/bungalows"
                            className="hover:text-accent-200 text-primary-200 font-semibold transition-colors"
                        >
                            Bungalows
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/account"
                            className="hover:text-accent-200 text-primary-200 font-semibold transition-colors"
                        >
                            <span className="hidden lg:inline">Guest</span>
                            <span className="lg:hidden">Account</span>
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden z-50 flex flex-col gap-1 p-2 relative"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                <span
                    className={`w-6 h-0.5 bg-primary-200 transition-all duration-300 ${
                        isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                    }`}
                ></span>
                <span
                    className={`w-6 h-0.5 bg-primary-200 transition-all duration-300 ${
                        isMenuOpen ? "opacity-0" : ""
                    }`}
                ></span>
                <span
                    className={`w-6 h-0.5 bg-primary-200 transition-all duration-300 ${
                        isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                    }`}
                ></span>
            </button>

            {/* Mobile Navigation */}
            <nav
                className={`md:hidden fixed top-0 left-0 w-full h-screen bg-primary-990/95 backdrop-blur-md z-40 transition-transform duration-300 ${
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex flex-col justify-center items-center h-full">
                    <ul className="flex flex-col gap-8 items-center text-2xl">
                        <li>
                            <Link
                                href="/about"
                                className="hover:text-accent-200 text-primary-200 font-semibold transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/bungalows"
                                className="hover:text-accent-200 text-primary-200 font-semibold transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Bungalows
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/account"
                                className="hover:text-accent-200 text-primary-200 font-semibold transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Guest
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
