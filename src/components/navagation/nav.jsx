import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const menuItems = [
    { key: "about", path: "" },
    { key: "howtobuy", path: "howtobuy" },
    { key: "tokenomics", path: "tokenomics" },
    { key: "roadmap", path: "roadmap" },
    { key: "ecosystem", path: "ecosystem" },
    { key: "faqs", path: "faqs" },
    { key: "disclaimer", path: "disclaimer" }
  ];

  const changeLanguage = (lng) => i18next.changeLanguage(lng);

  return (
    <header className="bg-gradient-to-r from-black to-red-600 text-white font-anton">
      {/* Mobile Header */}
      <div className="md:hidden px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/images/Fwog Logo.png"
              alt="Redfwog Logo"
              className="w-12 h-12 rounded-full border-4 object-contain"
            />
            <span className="text-2xl font-semibold capitalize">redfwog</span>
          </Link>
          <button onClick={toggleMobileMenu}>
            <img src="/icons/list.png" alt="Menu icon" className="w-10 h-10" />
          </button>
        </div>

        <div
          className={`fixed top-0 right-0 z-50 w-3/4 h-full bg-gradient-to-r from-black to-red-600 px-6 py-4 transition-transform duration-500 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end">
            <button onClick={toggleMobileMenu} className="text-white text-4xl">
              &times;
            </button>
          </div>
          <ul className="flex flex-col gap-6 mt-6 text-base font-semibold capitalize">
            {menuItems.map(({ key, path }) => (
              <li key={key}>
                <Link to={`/${path}`} onClick={toggleMobileMenu}>
                  {t(`nav.${key}`)}
                </Link>
              </li>
            ))}
            <li className="flex flex-col gap-2 mt-4">
              <button onClick={() => changeLanguage("en")} className="py-2 bg-white text-red-600 rounded font-bold">
                EN
              </button>
              <button onClick={() => changeLanguage("fr")} className="py-2 bg-white text-red-600 rounded font-bold">
                FR
              </button>
              <Link to="/buy">
                <button className="w-full py-2 bg-white text-red-600 rounded font-bold">
                  {t("nav.buy")}
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:flex justify-between items-center px-10 py-4">
        <Link to="/" className="flex items-center gap-4">
          <img
            src="/images/Fwog Logo.png"
            alt="Redfwog Logo"
            className="w-20 h-20 rounded-full border-4 border-navredpink"
          />
          <span className="text-3xl font-semibold capitalize">redfwog</span>
        </Link>
        <nav>
          <ul className="flex gap-8 text-lg font-semibold capitalize text-navredcyan">
            {menuItems.map(({ key, path }) => (
              <li key={key} className="hover:text-red-600 hover:underline">
                <Link to={`/${path}`}>{t(`nav.${key}`)}</Link>
              </li>
            ))}
            <li className="flex gap-2 items-center">
              <button onClick={() => changeLanguage("en")} className="text-sm font-bold">
                EN
              </button>
              <button onClick={() => changeLanguage("fr")} className="text-sm font-bold">
                FR
              </button>
              <Link to="/buy">
                <button className="text-white border-2 border-red-600 bg-red-900 font-semibold px-4 rounded-full h-12">
                  {t("nav.buy")}
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
