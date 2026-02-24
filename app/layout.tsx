import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Winston Underwood",
  description: "Data scientist and analytics leader based in Columbus, Ohio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geist.variable} font-sans antialiased bg-slate-950 text-slate-100`}>
        {children}
      </body>
    </html>
  );
}
