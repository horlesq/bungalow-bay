import Bungalow from "@/components/Bungalow";
import Spinner from "@/components/Spinner";
import GoBackButton from "@/components/GoBackButton";

import { getBungalow, getBungalows } from "@/lib/data-service";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
    const { name } = await getBungalow(params.bungalowId);
    return { title: `Bungalow: ${name}` };
}

export async function generateStaticParams() {
    const bungalows = await getBungalows();

    const ids = bungalows.map((bungalow) => ({
        bungalowId: String(bungalow.id),
    }));

    return ids;
}

export default async function Page({ params }) {
    const bungalow = await getBungalow(params.bungalowId);

    return (
        <div>
            <Bungalow bungalow={bungalow} goBackButton={<GoBackButton />} />

            <div className="max-w-7xl mx-auto pb-10 sm:pb-16 lg:pb-24">
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 sm:mb-8 lg:mb-10 text-accent-200 leading-tight">
                        Reserve {bungalow.name} today. Pay on arrival.
                    </h2>
                </div>

                <Suspense fallback={<Spinner />}>
                    {/* <Reservation bungalow={bungalow} /> */}
                </Suspense>
            </div>
        </div>
    );
}
