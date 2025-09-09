import BungalowList from "@/components/BungalowList";
import Spinner from "@/components/Spinner";
import { Suspense } from "react";

export const revalidate = 3600;

export const metadata = {
    title: "Bungalows",
};

export default function Page({ searchParams }) {
    const filter = searchParams?.capacity ?? "all";

    return (
        <div className="max-w-7xl mx-auto  pb-10 sm:pb-16 lg:pb-24">
            <div className="mb-8 lg:mb-12 xl:mb-16">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-6 sm:mb-8 lg:mb-10 text-accent-200 font-semibold leading-tight">
                    Our Beach Bungalows
                </h1>
                <p className="text-primary-200 text-lg sm:text-xl lg:text-2xl leading-relaxed">
                    Escape to our tropical bungalows, just steps away from soft
                    sandy beaches and crystal-clear waters. Wake up to the sound
                    of gentle waves, spend your days soaking up the sun,
                    exploring the ocean, or simply relaxing in your private
                    oasis. Experience the perfect blend of comfort and paradise
                    in your own beachfront retreat. Welcome to Bungalow Bay.
                </p>
            </div>

            <Suspense fallback={<Spinner />} key={filter}>
                <BungalowList filter={filter} />
            </Suspense>
        </div>
    );
}
