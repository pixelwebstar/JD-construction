import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

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

        {/* Persistent Video Layout Wrapper */}
        <div className="relative flex-grow flex flex-col w-full">
          {/* Absolute Background Video: Rendered once, never unmounted on page changes */}
          <div className="absolute top-0 left-0 w-full h-viewport overflow-hidden pointer-events-none z-0 bg-slate-950">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover transform-gpu will-change-transform"
            >
              <source src="/hero-bg.webm" type="video/webm" />
            </video>
          </div>

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
