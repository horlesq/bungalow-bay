import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="flex items-center gap-4 z-10">
            <img height="60" width="60" alt="Bungalow Bay" src="/icon.png" />
            <span className="text-xl font-semibold text-primary-100">
                Bungalow Bay
            </span>
        </Link>
    );
}
