import "./globals.css";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

import { Poppins } from "next/font/google";
import Header from "@/components/Header";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-poppins",
    display: "swap",
});

export const metadata = {
    title: {
        template: "%s / Bungalow Bay",
        default: "Welcome / Bungalow Bay",
    },
    description: "Book your next vacation at Bungalow Bay",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${poppins.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
            >
                <Header />
                <div className="flex-1 px-8 py-12 grid">
                    <main className="max-w-7xl mx-auto bg-red-50">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
