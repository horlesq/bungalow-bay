import Image from "next/image";
import TextExpander from "./TextExpander";
import { EyeOff, MapPin, Users } from "lucide-react";

export default function Bungalow({ bungalow, goBackButton }) {
    const {
        id,
        name,
        max_capacity: maxCapacity,
        price,
        discount,
        image,
        description,
    } = bungalow;

    return (
        <div className="max-w-7xl mx-auto pb-10 sm:pb-16 lg:pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 lg:border lg:border-primary-800 lg:rounded-xl p-0 sm:p-0 lg:p-10 mb-16 sm:mb-20 lg:mb-24">
                <div className="relative aspect-[4/3] lg:aspect-square rounded-lg overflow-hidden shadow-2xl">
                    <Image
                        src={image}
                        fill
                        className="object-cover"
                        alt={`Bungalow ${name}`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Go Back Button overlaid on image */}
                    {goBackButton && (
                        <div className="absolute top-4 left-4 z-10">
                            {goBackButton}
                        </div>
                    )}
                </div>

                <div className="flex flex-col justify-center px-2 lg:px-0">
                    <h3 className="text-accent-200 font-semibold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-6 sm:mb-8 lg:mb-10 leading-tight">
                        Bungalow: {name}
                    </h3>

                    <div className="text-primary-200 text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8 sm:mb-10 lg:mb-12">
                        <TextExpander>{description}</TextExpander>
                    </div>

                    <ul className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
                        <li className="flex gap-3 sm:gap-4 items-center">
                            <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600 flex-shrink-0" />
                            <span className="text-lg sm:text-xl text-primary-200">
                                For up to{" "}
                                <span className="font-bold text-accent-300">
                                    {maxCapacity}
                                </span>{" "}
                                guests
                            </span>
                        </li>
                        <li className="flex gap-3 sm:gap-4 items-center">
                            <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600 flex-shrink-0" />
                            <span className="text-lg sm:text-xl text-primary-200">
                                Just steps from the{" "}
                                <span className="font-bold text-accent-300">
                                    beach
                                </span>
                            </span>
                        </li>
                        <li className="flex gap-3 sm:gap-4 items-center">
                            <EyeOff className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600 flex-shrink-0" />
                            <span className="text-lg sm:text-xl text-primary-200">
                                Privacy{" "}
                                <span className="font-bold text-accent-300">
                                    100%
                                </span>{" "}
                                guaranteed
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
