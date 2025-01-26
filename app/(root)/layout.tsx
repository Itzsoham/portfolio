import React from "react";

import Navbar from "@/components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen bg-white/60 dark:bg-zinc-900">
      <Navbar />
      <main className="flex-grow mx-auto my-0 flex w-full max-w-4xl items-center justify-between px-8 ">
        {children}
      </main>
    </div>
  );
}
