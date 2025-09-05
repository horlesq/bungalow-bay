import BungalowCard from "@/components/BungalowCard";
import BungalowList from "@/components/BungalowList";
import Spinner from "@/components/Spinner";
import { Suspense } from "react";

export const metadata = {
    title: "Bungalows",
};

export default function Page() {
    // CHANGE
    const bungalows = [];

    const filter = "all";

    return (
        <div>
            <h1 className="text-5xl mb-5 text-accent-200 font-semibold">
                Our Beach Bungalows
            </h1>
            <p className="text-primary-200 text-lg mb-10">
                Escape to our tropical bungalows, just steps away from soft
                sandy beaches and crystal-clear waters. Wake up to the sound of
                gentle waves, spend your days soaking up the sun, exploring the
                ocean, or simply relaxing in your private oasis. Experience the
                perfect blend of comfort and paradise in your own beachfront
                retreat. Welcome to Bungalow Bay.
            </p>

            {bungalows.length > 0 && (
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
                    {bungalows.map((bungalow) => (
                        <BungalowCard bungalow={bungalow} key={bungalow.id} />
                    ))}
                </div>
            )}

            <Suspense fallback={<Spinner />} key={filter}>
                <BungalowList filter={filter} />
            </Suspense>
        </div>
    );
}
