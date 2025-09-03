import "./globals.css";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

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
            <body className="bg-gray-500 text-gray-900">
                <Logo />
                <Navigation />
                <main>{children}</main>
            </body>
        </html>
    );
}
