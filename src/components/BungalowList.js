import { unstable_noStore as noStore } from "next/cache";

import { getBungalows } from "@/lib/data-service";
import BungalowCard from "./BungalowCard";

async function BungalowList({ filter }) {

    const bungalows = await getBungalows();

    if (!bungalows.length) return null;

    let displayedBungalows;
    if (filter === "all") displayedBungalows = bungalows;
    if (filter === "small")
        displayedBungalows = bungalows.filter((bungalow) => bungalow.maxCapacity <= 3);
    if (filter === "medium")
        displayedBungalows = bungalows.filter(
            (bungalow) => bungalow.maxCapacity >= 4 && bungalow.maxCapacity <= 7
        );
    if (filter === "large")
        displayedBungalows = bungalows.filter((bungalow) => bungalow.maxCapacity >= 8);

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
            {displayedBungalows.map((bungalow) => (
                <BungalowCard bungalow={bungalow} key={bungalow.id} />
            ))}
        </div>
    );
}

export default BungalowList;
