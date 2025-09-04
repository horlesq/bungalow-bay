import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";

export default function Logo() {
    return (
        <Link href="/" className="flex items-center gap-2 sm:gap-4 z-10">
            <Image
                src={logo}
                height="60"
                width="60"
                className="sm:h-[80px] sm:w-[80px] lg:h-[100px] lg:w-[100px]"
                alt="Bungalow Bay"
            />
            <span className="text-lg sm:text-xl lg:text-2xl font-black text-primary-200">
                Bungalow Bay
            </span>
        </Link>
    );
}
