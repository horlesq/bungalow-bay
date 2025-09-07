import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
        <div className="flex flex-col sm:flex-row border-primary-800 border rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] bg-primary-950">
            {/* Image Section */}
            <div className="sm:flex-1 relative">
                <Image
                    src={image}
                    width={400}
                    height={300}
                    alt={`Bungalow ${name}`}
                    className="w-full h-48 sm:h-full object-cover border-b sm:border-b-0 sm:border-r border-primary-800"
                />
                {discount > 0 && (
                    <div className="absolute top-3 left-3 bg-accent-500 text-primary-900 px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                        ${discount} OFF
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="flex-grow flex flex-col">
                {/* Main Info */}
                <div className="flex-grow pt-4 sm:pt-5 pb-4 px-4 sm:px-6 lg:px-7">
                    <h3 className="text-accent-500 font-semibold text-xl sm:text-2xl lg:text-2xl mb-3 leading-tight">
                        Bungalow {name}
                    </h3>

                    <div className="flex gap-2 sm:gap-3 items-center mb-4 sm:mb-6">
                        <User className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600 flex-shrink-0" />
                        <p className="text-base sm:text-lg text-primary-200">
                            For up to{" "}
                            <span className="font-bold text-accent-300">
                                {maxCapacity}
                            </span>{" "}
                            guests
                        </p>
                    </div>

                    {/* Price Section */}
                    <div className="flex flex-col sm:flex-row sm:gap-3 sm:justify-end sm:items-baseline mb-4 sm:mb-0">
                        <div className="flex gap-3 items-baseline justify-start sm:justify-end">
                            {discount > 0 ? (
                                <>
                                    <span className="text-2xl sm:text-3xl lg:text-3xl font-[350] text-accent-300">
                                        ${price - discount}
                                    </span>
                                    <span className="line-through font-semibold text-primary-600 text-lg">
                                        ${price}
                                    </span>
                                </>
                            ) : (
                                <span className="text-2xl sm:text-3xl lg:text-3xl font-[350] text-accent-300">
                                    ${price}
                                </span>
                            )}
                        </div>
                        <span className="text-primary-200 text-sm sm:text-base">
                            / night
                        </span>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-primary-900/50 border-t border-t-primary-800">
                    <Link
                        href={`/bungalows/${id}`}
                        className="block sm:border-l sm:border-primary-800 py-3 sm:py-4 px-4 sm:px-6 text-center sm:text-right text-accent-300 hover:bg-accent-600 hover:text-primary-900 transition-all duration-300 font-medium text-sm sm:text-base group"
                    >
                        <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                            Details & reservation →
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BungalowCard;
