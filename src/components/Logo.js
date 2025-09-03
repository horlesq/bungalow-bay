import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="flex items-center gap-4 z-10">
            <img height="100" width="100" alt="Bungalow Bay" src="/logo.png" />
            <span className="text-2xl font-black text-primary-100">
                Bungalow Bay
            </span>
        </Link>
    );
}
