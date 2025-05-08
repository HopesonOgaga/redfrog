import { Link } from "react-router-dom";
import Header from "../components/navagation/nav";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <section className="bg-gradient-to-r from-black to-red-600 min-h-screen flex items-center justify-center px-6">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl gap-28 mt-10 md:mt-0">
          {/* Hidden Placeholder Button */}
          <div className="hidden">
            <button className="bg-gradient-to-r from-black to-red-600 hover:bg-red-600 text-white font-semibold capitalize text-lg w-20 h-10 rounded-lg shadow-sm">
              {t("buttons.next")}
            </button>
          </div>

          {/* Left Content */}
          <div className="md:w-1/2 space-y-6">
            <div className="space-y-2">
              <p className="text-white capitalize font-bold text-4xl sm:text-5xl lg:text-6xl">
                <span className="text-red-800">{t("slogan.ribbit")}</span> {t("slogan.gains")}
              </p>
              <p className="text-white capitalize font-bold text-4xl sm:text-5xl lg:text-6xl">
                <span className="text-red-800">{t("slogan.red")}</span> {t("slogan.fwog")}
              </p>
              <p className="text-white capitalize font-bold text-4xl sm:text-5xl lg:text-6xl">
                <span className="text-red-800">{t("slogan.run")}</span> {t("slogan.back")}
              </p>
            </div>

            <p className="text-white">{t("description")}</p>

            {/* Buttons */}
            <div className="flex gap-4">
              <button className="text-white capitalize text-sm border-2 border-red-600 w-36 h-10 rounded-xl shadow-md hover:bg-red-700 transition">
                {t("buttons.join")}
              </button>
              <button className="text-white capitalize text-sm border-2 border-red-600 w-36 h-10 rounded-xl shadow-md hover:bg-red-700 transition">
                {t("buttons.buy")}
              </button>
            </div>

            <Link className="md:hidden" to={"/lore"}>
              <div className="w-full flex justify-center mt-10">
                <button className="bg-gradient-to-r from-black to-red-600 hover:bg-red-600 text-white font-semibold capitalize text-lg w-3/4 h-12 rounded-lg shadow-sm">
                  {t("buttons.next")}
                </button>
              </div>
            </Link>
          </div>

          {/* Right Image Section */}
          <div className="md:w-1/2 relative flex justify-center items-center mb-8">
            <img
              src="/images/Slot Machine Glow.svg"
              alt="Slot machine background"
              className="absolute w-[65vw] md:w-full max-w-md z-0"
            />
            <div className="flex md:-mt-24 gap-4 -mt-10">
              {[1, 2, 3].map((_, i) => (
                <img
                  key={i}
                  src="/images/Fwog Logo.png"
                  alt="Redfwog logo"
                  className="relative z-10 w-10 h-10 md:w-20 md:h-40 object-contain"
                />
              ))}
            </div>
          </div>

          <Link className="hidden md:flex" to={"/lore"}>
            <div>
              <button className="bg-gradient-to-r from-black to-red-600 hover:bg-red-600 text-white font-semibold capitalize text-lg w-20 h-10 rounded-lg shadow-sm">
                {t("buttons.next")}
              </button>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
