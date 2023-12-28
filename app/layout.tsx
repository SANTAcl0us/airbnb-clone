import { Nunito } from "next/font/google";

import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/ReagisterModal";
import ToasterProvider from "./provider/ToasterProvider";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
    title: "Airbnb",
    description: "Airbnb clone",
};

const font = Nunito({
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={font.className}>
                    <ClientOnly>
                        <ToasterProvider />
                        <RegisterModal />
                        <Navbar />
                    </ClientOnly>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
