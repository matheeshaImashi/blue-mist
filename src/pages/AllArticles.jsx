import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import articles from "../data/articles.json";

const AllArticles = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(articles.map((a) => a.category))];

  const filtered = articles.filter((article) => {
    const matchCategory =
      selectedCategory === "All" || article.category === selectedCategory;
    const matchSearch = article.title
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/3 px-4 py-2 rounded bg-gray-100 dark:bg-gray-800"
          />

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 rounded bg-gray-100 dark:bg-gray-800"
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map(({ id, title, category, date, image }) => (
            <Link
              key={id}
              to={`/articles/${id}`}
              className="block rounded-xl overflow-hidden shadow-md dark:shadow-lg bg-white dark:bg-gray-800 transition hover:scale-105 duration-300"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                  {category}
                </p>
                <h3 className="text-lg font-semibold mt-1 text-gray-900 dark:text-white">
                  {title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {date}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllArticles;
