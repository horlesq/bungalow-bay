import { auth } from "@/lib/auth";
import Logo from "./Logo";
import Navigation from "./Navigation";

async function Header() {
    const session = await auth();

    return (
        <header className="border-b border-primary-900 px-4 sm:px-6 lg:px-8 py-4 lg:py-5">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <Logo />
                <Navigation session={session} />
            </div>
        </header>
    );
}

export default Header;
