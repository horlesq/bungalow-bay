"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({ children, pendingLabel }) {
    const { pending } = useFormStatus();

    return (
        <button
            className="relative px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-400 text-primary-900 font-semibold rounded-lg shadow-lg hover:from-accent-400 hover:to-accent-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-accent-400/50 focus:ring-offset-2 focus:ring-offset-primary-950 transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:from-accent-500 disabled:hover:to-accent-400 disabled:hover:shadow-lg group"
            disabled={pending}
        >
            <span className="relative z-10 flex items-center gap-2">
                {pending && (
                    <div className="w-4 h-4 border-2 border-primary-900/30 border-t-primary-900 rounded-full animate-spin"></div>
                )}
                {pending ? pendingLabel : children}
            </span>
            {!pending && (
                <div className="absolute inset-0 bg-gradient-to-r from-accent-400/20 to-accent-300/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            )}
        </button>
    );
}
