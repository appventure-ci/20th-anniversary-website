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
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen h-full`}
      >
        <div
          className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-20"
          style={{
            backgroundImage: 'url("/nush-bg.png")',
          }}
        />
        <div className="fixed inset-0 bg-white/50 -z-10" />
        <div className="relative min-h-screen">
          <Sidebar />
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
