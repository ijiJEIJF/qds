import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "facked.lol | Advanced Discord Automation",
  description: "Advanced Discord automation with powerful token management, mass messaging and server tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="antialiased dark">
        <div className="min-h-screen bg-[#0a192f]">
          {children}
        </div>
      </body>
    </html>
  );
}
