"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";

export const NavContent = () => {
  const pathName = usePathname();
  return (
    <section className="flex h-full flex-col gap-6 pt-16">
      {sidebarLinks.map(({ imgURL, route, label }, index) => {
        const isActive = pathName.includes(route);
        return (
          <SheetClose
            key={index}
            asChild
            className={`${isActive ? "primary-gradient rounded-lg text-light-900 " : "text-dark300_light900"} flex items-start justify-start gap-4 bg-transparent p-4 `}
          >
            <Link href={route} className="flex items-center gap-x-2">
              <Image
                src={imgURL}
                alt={label}
                width={20}
                height={20}
                className={` ${isActive ? "" : "invert-colors"}`}
              />
              <span className={`${isActive ? "base-bold " : "base-medium"}`}>
                {label}
              </span>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};
export default function MobileNavbar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src={"/assets/icons/hamburger.svg"}
          width={36}
          height={36}
          alt="menu"
          priority
          loading="eager"
          className="invert-colors cursor-pointer sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="background-light900_dark200 border-none"
      >
        <Link href={"/"} className="flex items-center gap-1">
          <Image
            src={"/assets/images/logo.svg"}
            alt="devfow"
            width={23}
            height={23}
          />
          <p className="h2-bold text-dark100_light900 gap-x-1 font-spaceGrotesk ">
            Dev
            <span className="text-primary-500 ">OverFlow</span>
          </p>
        </Link>
        <SheetClose asChild>
          <NavContent />
        </SheetClose>
        <SignedOut>
          <div className="flex flex-col gap-3 ">
            <SheetClose asChild>
              <Link href="/sign-in">
                <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none ">
                  <span className="primary-text-gradient">Log in</span>
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/sign-up">
                <Button className="small-medium btn-tertiary light-border-2 text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none  ">
                  Sign Up
                </Button>
              </Link>
            </SheetClose>
          </div>
        </SignedOut>
      </SheetContent>
    </Sheet>
  );
}
