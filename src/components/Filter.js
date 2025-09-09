"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const activeFilter = searchParams.get("capacity") ?? "all";

    function handleFilter(filter) {
        const params = new URLSearchParams(searchParams);
        params.set("capacity", filter);
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }

    return (
        <div className="mb-8 sm:mb-10 lg:mb-12">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-0">
                <div className="flex flex-col sm:flex-row bg-primary-900/30 backdrop-blur-sm border border-primary-700 rounded-xl sm:rounded-full overflow-hidden shadow-lg">
                    <Button
                        filter="all"
                        handleFilter={handleFilter}
                        activeFilter={activeFilter}
                    >
                        All Bungalows
                    </Button>
                    <Button
                        filter="small"
                        handleFilter={handleFilter}
                        activeFilter={activeFilter}
                    >
                        2—3 guests
                    </Button>
                    <Button
                        filter="medium"
                        handleFilter={handleFilter}
                        activeFilter={activeFilter}
                    >
                        4—7 guests
                    </Button>
                    <Button
                        filter="large"
                        handleFilter={handleFilter}
                        activeFilter={activeFilter}
                    >
                        8—12 guests
                    </Button>
                </div>
            </div>
        </div>
    );
}

function Button({ filter, handleFilter, activeFilter, children }) {
    const isActive = filter === activeFilter;

    return (
        <button
            className={`
                relative px-3 sm:px-6 lg:px-8 py-2.5 
                font-medium text-xs sm:text-base
                transition-all duration-300 ease-out
                border-r border-primary-700 last:border-r-0
                hover:bg-primary-700/50 hover:text-accent-200
                focus:outline-none focus:ring-2 focus:ring-accent-400/50 focus:ring-inset
                whitespace-nowrap
                ${
                    isActive
                        ? "bg-gradient-to-r from-accent-500 to-accent-400 text-primary-900 font-semibold shadow-lg"
                        : "text-primary-200"
                }
                ${isActive ? "hover:from-accent-400 hover:to-accent-300" : ""}
            `}
            onClick={() => handleFilter(filter)}
        >
            <span className="relative z-10">{children}</span>
            {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-accent-500/20 to-accent-400/20 blur-sm"></div>
            )}
        </button>
    );
}

export default Filter;
