import ThemeProvider from "@/context/ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";
import React from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: "primary-gradient",
          footerActionLink: "primary-text-gradient hover:text-primary-500",
        },
      }}
    >
      <ThemeProvider>{children}</ThemeProvider>
    </ClerkProvider>
  );
}
