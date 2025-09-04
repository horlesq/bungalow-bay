import Image from "next/image";
import Link from "next/link";

import bg from "../../public/bg.png";

export default function Page() {
    return (
        <main className="mt-12 sm:mt-16 lg:mt-24">
            <Image
                src={bg}
                fill
                placeholder="blur"
                quality={80}
                className="object-cover object-top"
                alt="Beach bungalow"
            />

            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 pt-20 lg:pt-0">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary-400 mb-8 sm:mb-10 lg:mb-12 tracking-tight font-semibold leading-tight">
                    Welcome to paradise.
                </h1>
                <Link
                    href="/bungalows"
                    className="group inline-flex items-center gap-3 sm:gap-4 bg-gradient-to-r from-primary-100/90 to-primary-200/90 backdrop-blur-md px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-primary-800 text-lg sm:text-xl lg:text-2xl font-semibold rounded-full shadow-xl hover:from-primary-50/95 hover:to-primary-100/95 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-out border border-primary-300/40"
                >
                    <span>Explore bungalows</span>
                </Link>
            </div>
        </main>
    );
}
