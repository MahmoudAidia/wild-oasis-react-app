import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  // Get darkmode or light mode from the operating system of the user's machine
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)").matches;
  // Then we use this value as a default value for the app DarkMode setting
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    mediaQuery,
    "isDarkMode"
  );

  function toggleDarkMode() {
    setIsDarkMode((dark) => !dark);
  }

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add("dark-mode");
      html.classList.remove("light-mode");
    } else {
      html.classList.add("light-mode");
      html.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (!context)
    throw new Error("DarkModeContext was used outside of DarkModeProvider");
  return context;
}
