import "@repo/ui/globals.css";
import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import Providers from "@repo/ui/shared/providers";

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
      <body className={merriweather.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
