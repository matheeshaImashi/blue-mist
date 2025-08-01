import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import articles from "../data/articles.json";

// const articles = [
//   {
//     id: "design-2025",
//     title: "The Future of Design in 2025",
//     category: "Design",
//     date: "July 25, 2025",
//     image:
//       "https://venngage-wordpress.s3.amazonaws.com/uploads/2023/11/AI-and-Design-in-2025-Top-Trends-Shaping-the-Future-Blog-Header.png",
//     content: `
//       As we move further into 2025, the world of design continues to evolve.
//       Designers are embracing AI-driven tools, responsive systems, and
//       accessibility-first thinking. In this article, we explore trends,
//       predictions, and innovations that shape the design landscape.
//     `,
//   },
//   {
//     id: "travel-hidden-gems",
//     title: "10 Underrated Travel Destinations",
//     category: "Travel",
//     date: "July 24, 2025",
//     image:
//       "https://www.candorblog.com/wp-content/uploads/2017/05/travel-022.jpg",
//     content: `
//       Looking for your next adventure away from the crowd? We’ve gathered
//       a list of 10 amazing travel destinations that are still relatively
//       unknown. From secluded beaches to hidden mountain towns, these
//       places deserve a spot on your bucket list.
//     `,
//   },
//   {
//     id: "healthy-living",
//     title: "Healthy Living in a Digital Age",
//     category: "Lifestyle",
//     date: "July 22, 2025",
//     image:
//       "https://uimsapress.org/wp-content/uploads/2023/01/istockphoto-1280587810-612x612-1.jpg",
//     content: `
//       With screens dominating our lives, how do we stay healthy?
//       In this article, we talk about practical wellness habits, tech-free
//       rituals, and balancing our online and offline worlds for a better life.
//     `,
//   },
// ];

const ArticleDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const article = articles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="text-center py-20 text-red-500">
        <h2 className="text-2xl font-bold">Article not found</h2>
      </div>
    );
  }

  return (
    <div className="px-4 py-12 md:px-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors">
      <p className="text-blue-600 dark:text-blue-400 text-sm mb-2">
        {article.category}
      </p>
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        {article.date}
      </p>
      <img
        src={article.image}
        alt={article.title}
        className="w-full max-h-[400px] object-cover rounded-xl mb-6"
      />
      <p className="text-lg leading-7 whitespace-pre-line">{article.content}</p>
    </div>
  );
};

export default ArticleDetail;
