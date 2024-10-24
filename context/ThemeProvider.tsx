"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

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
  const [mode, setMode] = useState<string>("light");

  const handleModle = useCallback(() => {
    if (mode === "light") {
      setMode("dark");

      // add dark class to the html element.
      document.documentElement.classList.add("dark");
    } else if (mode === "dark") {
      setMode("light");

      // add dark class to the html element.
      document.documentElement.classList.add("light");
    }
  }, [mode]);

  useEffect(
    function () {
      handleModle();
    },
    [handleModle]
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
