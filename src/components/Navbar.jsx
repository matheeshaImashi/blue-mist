// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg"; // Adjust the path as necessary

const Navbar = ({ theme, toggleTheme, currentLang, changeLang }) => {
  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-700">
      <Link to="/">
        <img src={logo} alt="Blue Mist" className="h-10" />
      </Link>

      <div className="flex items-center gap-4">
        <Link
          to="/articles"
          className="text-blue-600 dark:text-blue-400 font-medium"
        >
          Articles
        </Link>

        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg"
        >
          {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
        </button>

        <select
          onChange={(e) => changeLang(e.target.value)}
          value={currentLang}
          className="bg-gray-200 dark:bg-gray-800 rounded-lg px-2 py-1"
        >
          <option value="en">EN</option>
          <option value="si">සිං</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
