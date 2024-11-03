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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-cover bg-center bg-no-repeat`}
        style={{
          backgroundImage: 'url("/nush-bg.png")',
        }}
      >
        <div className="min-h-screen bg-white/50">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
