import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { clsx } from "clsx";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className={clsx(
        "fixed top-4 right-4 z-50 p-2 rounded-full shadow transition",
        "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
      )}
      aria-label="Toggle Dark Mode"
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};

export default ThemeToggle;
