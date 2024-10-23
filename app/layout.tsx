import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import { Metadata } from "next";
import { inter } from "@/lib/font";

export const metadata: Metadata = {
  title: "DevFlow",
  description:
    "collaborative question-and-answer platform designed for developers to seek and share technical knowledge. The platform allows users to ask questions, answer queries, and engage in discussions on a wide variety of programming languages, tools, and technologies. Built to foster a supportive developer community, DevFlow features a voting system that highlights the most helpful answers, reputation scores to recognize user contributions, and a tagging system to organize content by topic. The platform offers real-time notifications, code formatting options, and search functionality to streamline finding the right information. Whether you're a beginner looking for solutions or an experienced developer offering guidance, DevFlow connects you to a global network of developers eager to collaborate.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log(inter.style.fontFamily);
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: "primary-gradient",
          footerActionLink: "primary-text-gradient hover:text-primary-500",
        },
      }}
    >
      <html lang="en">
        <body className={`${inter.className}`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
