import Image from "next/image";

import image1 from "../../../public/about-1.png";
import image2 from "../../../public/about-2.png";

export const metadata = {
  title: "About Us",
};

export default function Page() {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 xl:gap-24 text-lg items-center">
                <div className="lg:col-span-3 order-1">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-6 sm:mb-8 lg:mb-10 text-accent-200 font-semibold leading-tight">
                        Welcome to Bungalow Bay
                    </h1>

                    <div className="space-y-6 sm:space-y-8">
                        <p>
                            Where golden sands and turquoise waters meet the
                            comfort of modern living. Nestled along a serene
                            tropical shoreline, Bungalow Bay is your paradise
                            away from home. But it&apos;s not just about the luxury
                            bungalows—it&apos;s about the experience of slowing down,
                            soaking in the sun, and enjoying life&apos;s simple
                            pleasures.
                        </p>
                        <p>
                            Our 8 beachfront bungalows provide a cozy retreat,
                            but the real magic is outside your door. Stroll
                            along palm-lined beaches, feel the ocean breeze, and
                            watch the sun set in a sky full of colors, either
                            from your hammock or while sharing stories around a
                            fire pit.
                        </p>
                        <p>
                            This is where unforgettable moments are made—by the
                            sea, under the stars, and with the people who matter
                            most. It&apos;s a place to relax, recharge, and embrace
                            the beauty of island living.
                        </p>
                    </div>
                </div>

                <div className="lg:col-span-2 order-2">
                    <div className="relative rounded-xl shadow-2xl">
                        <div className="overflow-hidden rounded-l">
                            <Image
                                src={image1}
                                alt="Couple enjoying a sunset in front of their bungalow"
                                className="w-full h-auto"
                                placeholder="blur"
                                quality={80}
                            />
                        </div>
                        {/* Decorative corner elements */}
                        <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-accent-300 rounded-tl-lg"></div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 border-accent-300 rounded-tr-lg"></div>
                        <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 border-accent-300 rounded-bl-lg"></div>
                        <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-accent-300 rounded-br-lg"></div>
                    </div>
                </div>

                <div className="lg:col-span-2 order-4 lg:order-3">
                    <div className="relative rounded-xl shadow-2xl">
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src={image2}
                                alt="Family that manages Bungalow Bay"
                                className="w-full h-auto"
                                placeholder="blur"
                                quality={80}
                            />
                        </div>
                        <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-accent-300 rounded-tl-lg"></div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 border-accent-300 rounded-tr-lg"></div>
                        <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 border-accent-300 rounded-bl-lg"></div>
                        <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-accent-300 rounded-br-lg"></div>
                    </div>
                </div>

                <div className="lg:col-span-3 order-3 lg:order-4 mt-16">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-6 sm:mb-8 lg:mb-10 text-accent-200 font-semibold leading-tight">
                        Managed by our family since 1962
                    </h1>

                    <div className="space-y-6 sm:space-y-8">
                        <p>
                            Since 1962, Bungalow Bay has been a cherished
                            family-run retreat. Started by our grandparents,
                            this seaside escape has been nurtured with love and
                            care, passed down through generations as a testament
                            to our passion for creating a warm and welcoming
                            haven.
                        </p>
                        <p>
                            Over the years, we&apos;ve preserved the charm of
                            Bungalow Bay, blending the timeless beauty of the
                            ocean with the personal touch only a family business
                            can offer. Here, you&apos;re not just a guest—you&apos;re part
                            of our extended family. Join us soon at Bungalow
                            Bay, where tradition meets tropical paradise, and
                            every stay feels like coming home.
                        </p>

                        <div className="pt-4">
                            <a
                                href="/bungalows"
                                className="group inline-flex items-center gap-3 sm:gap-4 bg-accent-300/90 backdrop-blur-md px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-primary-900 text-lg sm:text-xl lg:text-2xl font-semibold rounded-full shadow-xl hover:from-accent-400/95 hover:to-accent-300/95 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-out border border-accent-200/40"
                            >
                                <span>Explore our beach bungalows</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
