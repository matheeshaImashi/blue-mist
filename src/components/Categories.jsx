import React from "react";
import { useTranslation } from "react-i18next";

const categories = [
  {
    name: "Design",
    image:
      "https://img.freepik.com/free-vector/abstract-background-design_1265-84.jpg",
  },
  {
    name: "Travel",
    image:
      "https://t4.ftcdn.net/jpg/00/65/48/25/360_F_65482539_C0ZozE5gUjCafz7Xq98WB4dW6LAhqKfs.jpg",
  },
  {
    name: "Lifestyle",
    image:
      "https://cdn.credihealth.com/production/system/images/assets/79067/original/how-can-i-have-a-healthy-lifestyle-faqs-2922.webp?1729078473",
  },
  {
    name: "Technology",
    image:
      "https://www.paradigmmarketinganddesign.com/wp-content/uploads/2022/02/How-to-successfully-introduce-new-technology-to-an-organization.png",
  },
  {
    name: "Health",
    image:
      "https://apollouniversity.edu.in/blog/wp-content/uploads/2025/02/Public-Health.jpg",
  },
];

const Categories = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
        {t("categories.title")}
      </h2>

      <div className="grid gap-6 px-4 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden rounded-2xl shadow-md group hover:scale-[1.02] transition"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-48 object-cover brightness-75 group-hover:brightness-90"
            />
            <div className="absolute bottom-4 left-4 text-white text-xl font-semibold drop-shadow-lg">
              {t(`categories.${cat.name.toLowerCase()}`)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
