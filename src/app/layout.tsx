import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {FC, ReactNode} from "react";
import ThemeProvider from "@/components/theme-provider";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Personal",
    description: "Aleksandr Chernushevich",
};

type Props = {
    children: ReactNode;
    private_header: ReactNode;
    public_header: ReactNode;
};

const Root: FC<Props> = ({
    children,
    private_header,
    public_header
}) => {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <ThemeProvider
            attribute="class"
        >
            <header>
                {private_header}
                {public_header}
            </header>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}

Root.displayName = "Root";

export default Root;