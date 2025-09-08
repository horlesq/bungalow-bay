"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function GoBackButton() {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };

    return (
        <button
            onClick={handleGoBack}
            className="inline-flex items-center gap-2 px-3 py-2 bg-primary-800/80 backdrop-blur-sm text-primary-100 hover:bg-primary-700/90 hover:text-accent-300 transition-all duration-200 group rounded-3xl border border-primary-600/40"
        >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="text-sm font-medium">Back</span>
        </button>
    );
}