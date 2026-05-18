import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import BackgroundVideo from "@/components/BackgroundVideo";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JD Construction | Premium Structural Excellence",
  description: "Business-professional construction, structural engineering, and design services built on solid architectural standards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-slate-white text-steel-slate">
        <Header />

        {/* Optimized Conditional Background Video */}
        <div className="relative flex-grow flex flex-col w-full">
          <BackgroundVideo />

          {/* Main Content: Rendered on top of the video container */}
          <main className="flex-grow flex flex-col w-full relative z-10">
            <PageTransition>{children}</PageTransition>
          </main>
        </div>

        <Footer />
      </body>
    </html>
  );
}
