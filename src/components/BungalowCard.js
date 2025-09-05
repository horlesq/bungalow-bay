import { User } from "lucide-react";
import Image from "next/image";

function BungalowCard({ bungalow }) {
    const {
        id,
        name,
        max_capacity: maxCapacity,
        price,
        discount,
        image,
    } = bungalow;

    return (
        <div className="flex border-primary-800 border">
            <Image
                src={image}
                width={300}
                height={200}
                alt={`Bungalow ${name}`}
                className="flex-1 border-r border-primary-800"
            />

            <div className="flex-grow">
                <div className="pt-5 pb-4 px-7 bg-primary-950">
                    <h3 className="text-accent-500 font-semibold text-2xl mb-3">
                        Bungalow {name}
                    </h3>

                    <div className="flex gap-3 items-center mb-2">
                        <User className="h-5 w-5 text-primary-600" />
                        <p className="text-lg text-primary-200">
                            For up to{" "}
                            <span className="font-bold">{maxCapacity}</span>{" "}
                            guests
                        </p>
                    </div>

                    <p className="flex gap-3 justify-end items-baseline">
                        {discount > 0 ? (
                            <>
                                <span className="text-3xl font-[350]">
                                    ${price - discount}
                                </span>
                                <span className="line-through font-semibold text-primary-600">
                                    ${price}
                                </span>
                            </>
                        ) : (
                            <span className="text-3xl font-[350]">
                                ${price}
                            </span>
                        )}
                        <span className="text-primary-200">/ night</span>
                    </p>
                </div>

                <div className="bg-primary-950 border-t border-t-primary-800 text-right">
                    <a
                        href={`/bungalows/${id}`}
                        className="border-l border-primary-800 py-4 px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900"
                    >
                        Details & reservation &rarr;
                    </a>
                </div>
            </div>
        </div>
    );
}

export default BungalowCard;
