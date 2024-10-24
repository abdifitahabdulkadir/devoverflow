import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

export default function GlobalSearch() {
  return (
    <div className="relative  w-full max-w-[600px] max-lg:hidden">
      <div className="background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl p-2">
        <Image
          src={"/assets/icons/search.svg"}
          alt="seach image"
          width={24}
          height={24}
          className="cursor-pointer"
        />
        <Input
          placeholder="search..."
          value=""
          className="paragraph-regular no-focus  placeholder border-none bg-transparent caret-dark-200 shadow-none  outline-none dark:caret-light-900 "
        />
      </div>
    </div>
  );
}
