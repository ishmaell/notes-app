import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "../styles/globals.css";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notes App",
  description:
    "A simple and intuitive Notes app built with Next.js and Tailwind CSS, allowing users to create, view, and manage their notes effortlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={figtree.className}>{children}</body>
    </html>
  );
}
