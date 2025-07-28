import React from "react";
import { LayoutGrid, Plane, Sparkles } from "lucide-react";

const categories = [
  { name: "Design", icon: <LayoutGrid className="w-5 h-5" /> },
  { name: "Travel", icon: <Plane className="w-5 h-5" /> },
  { name: "Lifestyle", icon: <Sparkles className="w-5 h-5" /> },
];

const CategorySection = () => {
  return (
    <section className="bg-gray-50 dark:bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Explore by Category
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="flex items-center gap-4 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow hover:shadow-md transition"
            >
              <div className="text-blue-600 dark:text-blue-400">{cat.icon}</div>
              <span className="text-lg font-medium text-gray-800 dark:text-white">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
