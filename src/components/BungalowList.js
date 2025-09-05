import { unstable_noStore as noStore } from "next/cache";

import { getBungalows } from "@/lib/data-service";
import BungalowCard from "./BungalowCard";

async function BungalowList({ filter }) {
    noStore();

    const bungalows = await getBungalows();

    if (!bungalows.length) {
        return (
            <div className="text-center py-12 lg:py-16">
                <p className="text-xl sm:text-2xl text-primary-300 mb-4">
                    No bungalows available at the moment
                </p>
                <p className="text-primary-400">
                    Please check back later for availability
                </p>
            </div>
        );
    }

    let displayedBungalows;
    if (filter === "all") displayedBungalows = bungalows;
    if (filter === "small")
        displayedBungalows = bungalows.filter(
            (bungalow) => bungalow.maxCapacity <= 3
        );
    if (filter === "medium")
        displayedBungalows = bungalows.filter(
            (bungalow) => bungalow.maxCapacity >= 4 && bungalow.maxCapacity <= 7
        );
    if (filter === "large")
        displayedBungalows = bungalows.filter(
            (bungalow) => bungalow.maxCapacity >= 8
        );

    if (!displayedBungalows.length) {
        return (
            <div className="text-center py-12 lg:py-16">
                <p className="text-xl sm:text-2xl text-primary-300 mb-4">
                    No bungalows match your filter criteria
                </p>
                <p className="text-primary-400">
                    Try selecting a different capacity filter
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
            {displayedBungalows.map((bungalow) => (
                <BungalowCard bungalow={bungalow} key={bungalow.id} />
            ))}
        </div>
    );
}

export default BungalowList;
