import React from "react";
import { useTranslation } from "react-i18next";

const articles = [
  {
    id: "design-2025",
    title: "The Future of Design in 2025",
    category: "Design",
    date: "July 25, 2025",
    image: "https://source.unsplash.com/600x400/?design,technology",
  },
  {
    id: "travel-hidden-gems",
    title: "10 Underrated Travel Destinations",
    category: "Travel",
    date: "July 24, 2025",
    image: "https://source.unsplash.com/600x400/?travel,nature",
  },
  {
    id: "healthy-living",
    title: "Healthy Living in a Digital Age",
    category: "Lifestyle",
    date: "July 22, 2025",
    image: "https://source.unsplash.com/600x400/?health,lifestyle",
  },
];

const FeaturedArticles = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 px-4 md:px-12 bg-white dark:bg-gray-950 transition-colors">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        {t("articles.featured")}
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {articles.map(({ id, title, category, date, image }) => (
          <div
            key={id}
            className="rounded-xl overflow-hidden shadow-md dark:shadow-lg bg-white dark:bg-gray-800 transition hover:scale-105 duration-300"
          >
            <img src={image} alt={title} className="w-full h-48 object-cover" />
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedArticles;
