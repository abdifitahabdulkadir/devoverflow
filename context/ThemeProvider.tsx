"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface ThemeProsType {
  mode: string;
  setMode: (mode: string) => void;
}
const ThemeContex = createContext<ThemeProsType | undefined>(undefined);

// component
export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<string>("");

  const handleModle = () => {
    if (
      localStorage.theme === "dark" ||
      ("theme" in localStorage &&
        window.matchMedia("prefers-color-scheme:dark").matches)
    ) {
      setMode("dark");
      // add dark class to the html element.
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      setMode("light");
      // add dark class to the html element.
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  };

  useEffect(
    function () {
      handleModle();
    },
    [mode]
  );

  return (
    <ThemeContex.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContex.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContex);

  if (context === undefined)
    throw new Error(
      "useTheme must be used with ThemeProvider context Boundary"
    );

  return context;
}
