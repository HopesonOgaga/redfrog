import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import I18NextHttpBackend from "i18next-http-backend";

i18next
  .use(I18NextHttpBackend)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true,
    ns: ["home"],
    defaultNS: "home",
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json"
    }
  });
