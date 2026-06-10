import React from "react";

import Footer from "@/components/shell/Footer";
import Sidebar from "@/components/shell/Sidebar";
import TopBar from "@/components/shell/TopBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <TopBar />

        <div className="grid grid-cols-1 gap-8 pt-2 pb-8 lg:grid-cols-[minmax(0,1fr)_300px]">
          <main id="skip" className="min-w-0">
            {children}
          </main>
          <div className="lg:sticky lg:top-20 lg:h-fit">
            <Sidebar />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
