import Image from "next/image";
import TextExpander from "./TextExpander";
import { EyeOff, MapPin, Users } from "lucide-react";


export default function Bungalow({ bungalow }) {
    const { id, name, maxCapacity, price, discount, image, description } =
        bungalow;

    return (
        <div className="grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24">
            <div className="relative scale-[1.15] -translate-x-3">
                <Image
                    src={image}
                    fill
                    className="object-cover"
                    alt={`Bungalow ${name}`}
                />
            </div>

            <div>
                <h3 className="text-accent-100 font-black text-7xl mb-5 translate-x-[-254px] bg-primary-950 p-6 pb-1 w-[150%]">
                    Bungalow {name}
                </h3>

                <p className="text-lg text-primary-300 mb-10">
                    <TextExpander>{description}</TextExpander>
                </p>

                <ul className="flex flex-col gap-4 mb-7">
                    <li className="flex gap-3 items-center">
                        <Users className="h-5 w-5 text-primary-600" />
                        <span className="text-lg">
                            For up to{" "}
                            <span className="font-bold">{maxCapacity}</span>{" "}
                            guests
                        </span>
                    </li>
                    <li className="flex gap-3 items-center">
                        <MapPin className="h-5 w-5 text-primary-600" />
                        <span className="text-lg">
                            Just steps from the <span className="font-bold">beach</span>
                        </span>
                    </li>
                    <li className="flex gap-3 items-center">
                        <EyeOff className="h-5 w-5 text-primary-600" />
                        <span className="text-lg">
                            Privacy <span className="font-bold">100%</span>{" "}
                            guaranteed
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
