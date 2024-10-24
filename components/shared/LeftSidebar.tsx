"use client";
import Image from "next/image";
import React from "react";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "../ui/button";

export default function LeftSidebar() {
  const pathName = usePathname();
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-32 shadow-light-300 dark:shadow-none max-sm:hidden md:pt-36 lg:w-[266px]">
      <div className=" flex  flex-col gap-2 ">
        {sidebarLinks.map(({ imgURL, route, label }, index) => {
          const isActive = pathName.includes(route);
          return (
            <Link
              key={index}
              href={route}
              className={`${isActive ? "primary-gradient text-light-900 " : "text-dark300_light900"} hover:primary-gradient group flex w-full items-center   justify-center gap-4 rounded-lg bg-transparent p-2 transition-all duration-300 hover:text-light-900  md:items-start md:justify-start  `}
            >
              <Image
                src={imgURL}
                alt={label}
                width={15}
                height={15}
                className={` ${isActive ? "" : "invert-colors size-[20px] group-hover:invert-0 md:size-[15px]"}`}
              />
              <span
                className={`${isActive ? "base-bold  " : "small-regular"}  md:small-regular  text-[.6rem] group-hover:text-light-900 max-md:hidden`}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>

      <SignedOut>
        <div className="flex flex-col gap-2 ">
          <Link href="/sign-in">
            <Button className="small-medium btn-secondary min-h-[11px] w-full rounded-lg px-4 py-1 shadow-none ">
              <Image
                src={"/assets/icons/account.svg"}
                alt="account"
                width={20}
                height={20}
                loading="eager"
                priority
                className="invert-colors md:hidden"
              />
              <span className="primary-text-gradient max-md:hidden">
                Log in
              </span>
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button className="small-medium btn-tertiary light-border-2 text-dark400_light900 min-h-[31px] w-full rounded-lg px-4 py-1 shadow-none  ">
              <Image
                src={"/assets/icons/sign-up.svg"}
                alt="account"
                width={20}
                height={20}
                loading="eager"
                priority
                className="invert-colors md:hidden"
              />
              <span className="max-md:hidden"> Sign Up</span>
            </Button>
          </Link>
        </div>
      </SignedOut>
    </section>
  );
}
