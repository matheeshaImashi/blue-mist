// src/components/Layout.jsx
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useTranslation } from "react-i18next";

const Layout = () => {
  const { i18n } = useTranslation();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        currentLang={i18n.language}
        changeLang={i18n.changeLanguage}
      />
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
