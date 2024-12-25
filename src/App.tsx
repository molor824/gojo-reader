import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useEffect } from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationMN from './localization/mn.json'; // Import the Mongolian translation file
import translationEN from './localization/en.json'; // Import the English translation file

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      mn: {
        translation: translationMN, // Use the imported Mongolian translations
      },
      en: {
        translation: translationEN, // Use the imported English translations
      },
    },
    lng: "mn", // default language
    fallbackLng: "en", // fallback to English if the selected language is not available
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

function App() {
  useEffect(() => {
    // Optional: You can set the language dynamically if needed
    i18n.changeLanguage("mn");
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
