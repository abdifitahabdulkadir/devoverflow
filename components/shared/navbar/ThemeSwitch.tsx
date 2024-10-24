"use client";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { themes } from "@/constants";
import { useTheme } from "@/context/ThemeProvider";
import Image from "next/image";

import React from "react";

export default function ThemeSwitcher() {
  const { mode, setMode } = useTheme();
  return (
    <Menubar className=" border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
          {mode === "light" ? (
            <Image
              src={"/assets/icons/sun.svg"}
              width={20}
              height={20}
              alt="lgiht theme image icon"
              className="active-theme"
            />
          ) : (
            <Image
              src={"/assets/icons/moon.svg"}
              width={20}
              height={20}
              alt="dark theme image icon"
              className="active-theme"
            />
          )}
        </MenubarTrigger>
        <MenubarContent className="absolute -right-12 mt-3 min-w-[120px] rounded border py-2 dark:border-dark-400 dark:bg-dark-300">
          {themes.map(({ icon, label, value }, index) => {
            return (
              <MenubarItem
                onClick={() => {
                  setMode(value);
                  if (value !== "system") {
                    localStorage.theme = value;
                  } else {
                    localStorage.removeItem("theme");
                  }
                }}
                key={index}
                className=" flex cursor-pointer items-center
              gap-x-2 py-3 pl-3 pr-10 dark:focus:bg-dark-400  "
              >
                <Image
                  src={icon}
                  width={20}
                  height={20}
                  alt={value}
                  priority
                  loading="eager"
                  className={`${mode === value && "active-theme"}`}
                />
                <span
                  className={`font-semibold ${mode === value ? "text-primary-500" : "text-dark400_light900"}`}
                >
                  {label}
                </span>
              </MenubarItem>
            );
          })}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
