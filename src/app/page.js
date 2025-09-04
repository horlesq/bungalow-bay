import Image from "next/image";
import Link from "next/link";

import bg from "../../public/bg.png";

export default function Page() {
    return (
        <main className="mt-24">
            <Image
                src={bg}
                fill
                placeholder="blur"
                quality={80}
                className="object-cover object-top"
                alt="Beach bungalow"
            />

            <div className="relative z-10 text-center">
                <h1 className="text-8xl text-primary-400 mb-10 tracking-tight font-semibold">
                    Welcome to paradise.
                </h1>
                <Link
                    href="/bungalows"
                    className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary-100/90 to-primary-200/90 backdrop-blur-md px-10 py-4 text-primary-800 text-lg font-semibold rounded-full shadow-xl hover:from-primary-50/95 hover:to-primary-100/95 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-out border border-primary-300/40"
                >
                    <span>Explore bungalows</span>
                </Link>
            </div>
        </main>
    );
}
