import Bungalow from "@/components/Bungalow";
import Spinner from "@/components/Spinner";
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
        <div className="max-w-6xl mx-auto mt-8">
            <Bungalow bungalow={bungalow} />

            <div>
                <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
                    Reserve {bungalow.name} today. Pay on arrival.
                </h2>

                <Suspense fallback={<Spinner />}>
                    {/* <Reservation bungalow={bungalow} /> */}
                </Suspense>
            </div>
        </div>
    );
}
