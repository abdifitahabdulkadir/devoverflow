import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="background-light850_dark100 relative min-h-screen ">
      <Navbar />
      <div className="flex min-h-screen">
        {/* Left Sidebar */}
        <div className="h-full ">left side</div>

        {/* Main Content */}
        <section className="flex flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>

        {/* Right Sidebar */}
        <div className="h-full w-1/4 bg-blue-400">right bar</div>
      </div>
      {/* Toast */}
      <div>tost</div>
    </main>
  );
}
