import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { i18n, t } = useTranslation();

  const toggleLang = () => {
    const newLang = i18n.language === "en" ? "si" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLang}
      className="fixed top-4 left-4 z-50 p-2 text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded"
    >
      {t("toggleLang")}
    </button>
  );
};

export default LanguageToggle;
