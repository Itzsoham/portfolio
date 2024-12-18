import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import React from "react";

import Navbar from "@/components/navbar";
import ThemeProvider from "@/context/Theme";

const OpenSans = localFont({
  variable: "--font-open-sans",
  src: "/fonts/OpenSansVF.ttf",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "Soham Maury",
  description:
    "Soham Maury is a Fullstack Webdeveloper who loves to build things that live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with responsive design. I am a self-taught developer who is passionate about building software that improves the lives of those around me.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${OpenSans.variable} bg-white/60 antialiased dark:bg-zinc-900`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="mx-auto my-0 flex w-full max-w-4xl items-center justify-between px-8 md:mb-10">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
