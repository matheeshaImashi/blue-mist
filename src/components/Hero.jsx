import React from "react";
import { useTranslation } from "react-i18next";
import articles from "../data/articles.json";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="text-center py-20 bg-gradient-to-br from-blue-100 to-blue-300 dark:from-slate-800 dark:to-slate-900">
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
        {t("hero.title")}
      </h1>
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10">
        {t("hero.description")}
      </p>

      {/* Featured Articles */}
      <div className="grid gap-6 px-4 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-left">
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                {article.category}
              </span>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-1">
                {article.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {article.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
