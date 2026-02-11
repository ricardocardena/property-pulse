import { Metadata } from "next";
import Navbar from "./components/navigation/Navbar";
// @ts-expect-error - Tailwind CSS doesn't have types, so we ignore the error for importing CSS
import "@/assets/styles/global.css";

// Metadata for SEO and social sharing
export const metadata: Metadata = {
    title: "Property Pulse - Your Ultimate Real Estate Companion",
    description: "Discover the latest real estate trends, market insights, and property listings with Property Pulse. Your go-to source for all things real estate.",
    keywords: "real estate, property listings, market insights, real estate trends, home buying, home selling, real estate news",
}

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <header className="mb-2">
                    <Navbar />
                </header>
                <main className="p-4">{children}</main>
            </body>
        </html>
    );
};

export default MainLayout;