import type { Metadata } from "next";
import localFont from "next/font/local";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "NUS High 20th Anniversary",
    description: "Celebrating 20 years of excellence",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="h-full">
        <body
            className={`
                    ${geistSans.variable} 
                    ${geistMono.variable} 
                    antialiased 
                    min-h-screen 
                    h-full
                `}
        >
        <div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-contain bg-no-repeat bg-center -z-20 w-full h-full bg-slate-800"
            style={{ backgroundImage: 'url("/imgs/logo.png")' }}
        />
        <div className="fixed inset-0  -z-10" />

        <div className="relative min-h-screen">
            <Sidebar />
            {children}
        </div>
        </body>
        </html>
    );
}