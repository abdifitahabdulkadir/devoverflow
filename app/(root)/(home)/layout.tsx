import LeftSidebar from "@/components/shared/LeftSidebar";
import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="background-light850_dark100 relative min-h-screen ">
      <Navbar />
      <div className="grid min-h-screen w-full grid-cols-1 sm:grid-cols-[1fr_2fr_1fr] ">
        {/* Left Sidebar */}
        <LeftSidebar />

        {/* Main Content */}
        <section className=" flex w-full flex-1 flex-col  overflow-y-auto px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">
            {children}
            <p className="text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
              enim eaque deserunt vitae, consequuntur obcaecati ad est rem, non
              perspiciatis nam sunt minus, qui ipsam facilis dolor inventore?
              Architecto, aut.
            </p>
            <p className="text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
              enim eaque deserunt vitae, consequuntur obcaecati ad est rem, non
              perspiciatis nam sunt minus, qui ipsam facilis dolor inventore?
              Architecto, aut.
            </p>
            <p className="text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
              enim eaque deserunt vitae, consequuntur obcaecati ad est rem, non
              perspiciatis nam sunt minus, qui ipsam facilis dolor inventore?
              Architecto, aut.
            </p>
            <p className="text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
              enim eaque deserunt vitae, consequuntur obcaecati ad est rem, non
              perspiciatis nam sunt minus, qui ipsam facilis dolor inventore?
              Architecto, aut.
            </p>
            <p className="text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
              enim eaque deserunt vitae, consequuntur obcaecati ad est rem, non
              perspiciatis nam sunt minus, qui ipsam facilis dolor inventore?
              Architecto, aut.
            </p>
            <p className="text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
              enim eaque deserunt vitae, consequuntur obcaecati ad est rem, non
              perspiciatis nam sunt minus, qui ipsam facilis dolor inventore?
              Architecto, aut.
            </p>
          </div>
        </section>

        {/* Right Sidebar */}
        <div className="size-full w-[266px] border-l border-red-600">
          right hand isde
        </div>
      </div>
    </main>
  );
}
