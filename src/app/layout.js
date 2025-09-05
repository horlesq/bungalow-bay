import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
                className={`${poppins.className} antialiased bg-primary-990 text-primary-100 min-h-screen flex flex-col relative`}
            >
                <Header />

                <div className="flex-1 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 grid">
                    <main className="max-w-7xl mx-auto w-full">{children}</main>
                </div>

                <Footer />
            </body>
        </html>
    );
}
