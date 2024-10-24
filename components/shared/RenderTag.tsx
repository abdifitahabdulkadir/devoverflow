import React from "react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
interface ProsType {
  id: number;
  tech: string;
  count?: number;
}
export default function RenderTag({ id, tech, count }: ProsType) {
  return (
    <Link
      href={`/tages/${id}`}
      key={id}
      className="flex items-center justify-between "
    >
      <Badge className="background-light800_dark300 text-dark400_light500 subtle-medium  body-medium rounded-md border-none p-2 px-4 text-center uppercase">
        {tech}
      </Badge>
      {count && (
        <span className="text-dark500_light700 small-medium">
          {count + "+"}
        </span>
      )}
    </Link>
  );
}
