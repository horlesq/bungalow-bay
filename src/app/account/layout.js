import SideNavigation from "@/components/SideNavigation";

export default function Layout({ children }) {
    return (
        <div className="min-h-full">
            {/* Mobile Navigation */}
            <div className="lg:hidden">
                <SideNavigation />
            </div>

            {/* Desktop Layout - Original Grid System */}
            <div className="hidden lg:grid lg:grid-cols-[16rem_1fr] h-full gap-12">
                <SideNavigation />
                <div className="py-1">{children}</div>
            </div>

            {/* Mobile Content */}
            <div className="lg:hidden py-4 px-4 sm:px-6">{children}</div>
        </div>
    );
}
