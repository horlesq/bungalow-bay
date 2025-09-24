"use client";

import { usePathname } from "next/navigation";
import SignOutButton from "./SignOutButton";
import { Calendar, LayoutDashboard, User } from "lucide-react";
import Link from "next/link";

const navLinks = [
    {
        name: "Dashboard",
        href: "/account",
        icon: <LayoutDashboard className="h-5 w-5 text-primary-600" />,
    },
    {
        name: "Reservations",
        href: "/account/reservations",
        icon: <Calendar className="h-5 w-5 text-primary-600" />,
    },
    {
        name: "Guest profile",
        href: "/account/profile",
        icon: <User className="h-5 w-5 text-primary-600" />,
    },
];

function SideNavigation() {
    const pathname = usePathname();

    return (
        <>
            {/* Mobile Navigation - Only shows on mobile */}
            <nav className="lg:hidden border-b border-primary-800 sticky top-0 z-10">
                <div className="px-4 sm:px-6">
                    <div className="flex items-center justify-between py-3">
                        <ul className="flex gap-6 flex-1">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        className={`${
                                            pathname === link.href
                                                ? "text-accent-300"
                                                : "text-primary-300 hover:text-primary-100"
                                        } transition-colors duration-200 flex items-center gap-2 font-medium text-sm`}
                                        href={link.href}
                                    >
                                        {link.icon}
                                        <span className="hidden sm:inline">
                                            {link.name}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="ml-4">
                            <SignOutButton />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Desktop Navigation - Original styling, only shows on desktop */}
            <nav className="hidden lg:block border-r border-primary-900">
                <ul className="flex flex-col gap-2 h-full text-lg">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                className={`${
                                    pathname === link.href
                                        ? "bg-primary-900 text-primary-100"
                                        : ""
                                } py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200`}
                                href={link.href}
                            >
                                {link.icon}
                                <span>{link.name}</span>
                            </Link>
                        </li>
                    ))}

                    <li >
                        <SignOutButton />
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default SideNavigation;
