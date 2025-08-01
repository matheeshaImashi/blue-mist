import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Home from "./pages/Home";
import ArticleDetail from "./pages/ArticalDetail";

function App() {
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
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        {/* <h1 className="text-xl font-bold">Blue Mist</h1> */}

        <img src="../src/logo.svg" />

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg"
          >
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>
          <select
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            defaultValue={i18n.language}
            className="bg-gray-200 dark:bg-gray-800 rounded-lg px-2 py-1"
          >
            <option value="en">EN</option>
            <option value="si">සිං</option>
          </select>
        </div>
      </div>

      {/* Page Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
    </div>
  );
}

export default App;
