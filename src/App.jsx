import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import { useTranslation } from "react-i18next";
import FeaturedArticles from "./components/FeaturedArticles";

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
      <div className="flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">BLUE Mist</h1>
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

      <Hero />
      <Categories />
      <FeaturedArticles />
    </div>
  );
}

export default App;
