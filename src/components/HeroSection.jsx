import React from "react";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-br from-blue-200 to-blue-50 dark:from-gray-800 dark:to-gray-900 py-20 px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
        {t("hero.title")}
      </h1>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        {t("hero.description")}
      </p>
    </section>
  );
}
