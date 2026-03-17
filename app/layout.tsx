import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SUMMERBREW",
  description: "Change the World. Start with coffee.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "font-sans scroll-smooth",
        inter.variable,
        geistSans.variable,
        geistMono.variable
      )}
    >
      <body
        className={cn(
          "min-h-screen bg-white text-[#1e1e1e] antialiased overflow-x-hidden"
        )}
      >
        {/* Page Wrapper */}
        <div className="flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}