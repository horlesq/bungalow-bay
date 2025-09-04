import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";

export default function Logo() {
    return (
        <Link href="/" className="flex items-center gap-4 z-10">
            <Image src={logo} height="100" width="100" alt="Bungalow Bay" />
            <span className="text-2xl font-black text-primary-200">
                Bungalow Bay
            </span>
        </Link>
    );
}
