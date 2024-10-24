import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

export default function GlobalSearch() {
  return (
    <div className="relative order-3 col-span-full w-full max-w-[600px] lg:order-2 lg:col-span-1">
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
          className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none "
        />
      </div>
    </div>
  );
}
