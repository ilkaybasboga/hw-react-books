import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en";
import tr from "./locales/tr";

const resources = {
  tr: {
    translation: tr,
  },
  en: {
    translation: en,
  },
};

const currentLanguage =
  typeof window !== "undefined"
    ? localStorage.getItem("current-language") || "tr"
    : "en";

i18next.use(initReactI18next).init({ resources, lng: currentLanguage });

export default i18next;
