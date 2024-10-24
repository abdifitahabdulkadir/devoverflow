import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ThemeSwitcher from "./ThemeSwitch";
import MobileNavbar from "./MobileNavbar";
import GlobalSearch from "../search/GlobalSearch";

export default function Navbar() {
  return (
    <nav className=" background-light900_dark200 fixed z-50 flex w-full   items-center justify-between gap-6 p-6 shadow-light-300 dark:shadow-none sm:px-12 ">
      <Link href={"/"} className="flex  items-center gap-1 justify-self-start">
        <Image
          src={"/assets/images/logo.svg"}
          alt="devfow"
          width={23}
          height={23}
        />
        <p className="h2-bold gap-x-1 font-spaceGrotesk text-dark-100 dark:text-light-900 ">
          Dev
          <span className="text-primary-500 ">OverFlow</span>
        </p>
      </Link>
      <GlobalSearch />
      <div className="flex-between gap-2  text-white ">
        <ThemeSwitcher />
        <SignedIn>
          <UserButton
            afterSwitchSessionUrl="/"
            appearance={{
              elements: {
                avatarBox: "w-10 h-10",
              },
              variables: {
                colorPrimary: "#FF7000",
              },
            }}
          />
        </SignedIn>
        <MobileNavbar />
      </div>
    </nav>
  );
}
