import { NavbarDemo } from "@/components/Navbar";
import type { Metadata } from "next";
import { Recursive } from "next/font/google";
import "./globals.css";

const recursive = Recursive({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Roshan Jha",
  description: "Roshan Jha Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={recursive.className}>
        <NavbarDemo/>
        {children}</body>
    </html>
  );
}
