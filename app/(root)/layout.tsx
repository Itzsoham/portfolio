import React from "react";

import Footer from "@/components/shell/Footer";
import NotchNavbar from "@/components/shell/NotchNavbar";
import Sidebar from "@/components/shell/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* full-bleed, fixed; the notch hangs 64px into the page */}
      <NotchNavbar />

      <div className="mx-auto w-full max-w-6xl grow px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
          <main id="skip" className="min-w-0">
            {children}
          </main>
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <Sidebar />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
