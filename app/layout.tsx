import "./globals.css";
import "./animation.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NITYANAND YADAV  - Portfolio",
  description: "Fullstack developer  - Professional Portfolio",
  generator: "Portfolio Generator"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="theme-purple">
      <body className={inter.className}>{children}</body>
    </html>
  );
}