/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useState } from "react";

export const themes = [
  { name: "theme-green", color: "#299d91", label: "Green" },
  { name: "theme-blue", color: "#1e90ff", label: "Blue" },
  { name: "theme-purple", color: "#6a5acd", label: "Purple" },
  { name: "theme-pink", color: "#db7093", label: "Pink" },
  { name: "theme-brown", color: "#8b4513", label: "Brown" },
];

export const ThemeContext = createContext(null);

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(themes[0]);

  const value = useMemo(
    () => ({
      theme,
      setTheme(nextTheme) {
        const selectedTheme =
          typeof nextTheme === "string"
            ? themes.find((item) => item.name === nextTheme)
            : nextTheme;

        if (selectedTheme) {
          setTheme(selectedTheme);
        }
      },
      themes,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("useTheme must be used within ThemeContextProvider.");
  }

  return themeContext;
}
