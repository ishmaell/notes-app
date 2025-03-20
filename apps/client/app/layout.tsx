import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "../styles/globals.css";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: "300",
});

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
      <body className={merriweather.className}>{children}</body>
    </html>
  );
}
