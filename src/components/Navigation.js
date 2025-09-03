import Link from "next/link";

export default function Navigation() {
    return (
        <nav className="z-10 text-xl">
            <ul className="flex gap-16 items-center">
                <li>
                    <Link
                        href="/bungalows"
                        className="hover:text-accent-400 transition-colors"
                    >
                        Bungalows
                    </Link>
                </li>
                <li>
                    <Link
                        href="/about"
                        className="hover:text-accent-400 transition-colors"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        href="/account"
                        className="hover:text-accent-400 transition-colors"
                    >
                        Guest area
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
