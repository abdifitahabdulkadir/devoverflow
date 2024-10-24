import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";
const topQuesions = [
  {
    id: 1,
    quesion:
      "Would it be appropriate to point out an error in another paper during a referee report?",
  },
  {
    id: 2,
    quesion: "How can an airconditioning machine exist?",
  },
  {
    id: 3,
    quesion: "Interrogated every time crossing UK Border as citizen",
  },
  {
    id: 4,
    quesion: "Low digit addition generator",
  },
  {
    id: 5,
    quesion: "What is an example of 3 numbers that do not make up a vector?",
  },
];
const tags = [
  {
    id: 1,
    tech: "JAVASCRIPT",
    count: 20152,
  },
  {
    id: 2,
    tech: "NEXT.JS",
    count: 18493,
  },
  {
    id: 3,
    tech: "REACT.JS",
    count: 16269,
  },
  {
    id: 4,
    tech: "NODE.JS",
    count: 15121,
  },
];

export default function RightSidebar() {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen flex-col  overflow-y-auto border-r p-6 pt-32 shadow-light-300 dark:shadow-none max-xl:hidden max-sm:hidden md:pt-36 lg:w-[356px]">
      <div className="flex w-full flex-col gap-5">
        <h3 className="h3-bold text-dark200_light800">Top Quesions</h3>
        <div className="flex flex-col  items-start gap-5">
          {topQuesions.map(({ id, quesion }) => {
            return (
              <Link
                key={id}
                href={`/quesions ${id}`}
                className="group flex items-center justify-between gap-7"
              >
                <p className="body-medium text-dark500_light700 ">{quesion}</p>

                <Image
                  src={"/assets/icons/chevron-right.svg"}
                  alt="chevron "
                  width={17}
                  height={17}
                  className="invert-colors transition-all duration-200 group-hover:scale-[1.4]"
                />
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-10">
        <h3 className="h3-bold text-dark200_light800">Popular Tags</h3>
        <div className="mt-7 flex w-full flex-col gap-4 px-2">
          {tags.map(({ id, tech, count }) => {
            return <RenderTag key={id} id={id} tech={tech} count={count} />;
          })}
        </div>
      </div>
    </section>
  );
}
