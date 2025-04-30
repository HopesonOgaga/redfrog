import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-black to-red-600 text-white font-anton">
      {/* Mobile Header */}
      <div className="md:hidden px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/images/fwogf.png"
              alt="Redfwog Logo"
              className="w-12 h-12 rounded-full border-4 object-contain"
            />
            <span className="text-2xl font-semibold capitalize">redfwog</span>
          </Link>
          <button onClick={toggleMobileMenu}>
            <img
              src="/icons/list.png"
              alt="Menu icon"
              className="w-10 h-10"
            />
          </button>
        </div>

        {/* Mobile Sliding Menu */}
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
            {["about", "how to buy", "Tokenomics", "road map", "eco system", "FAQs", "Disclaimer"].map((text, idx) => (
              <li key={idx}>
                <Link
                  to={`/${text === "about" ? "" : text.toLowerCase().replace(/\s/g, "")}`}
                  onClick={toggleMobileMenu}
                >
                  {text}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/buy">
                <button className="w-full py-2 bg-white text-red-600 rounded font-bold">
                  Buy Red Fwog
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
            src="/images/fwogf.png"
            alt="Redfwog Logo"
            className="w-20 h-20 rounded-full border-4 border-navredpink"
          />
          <span className="text-3xl font-semibold capitalize">redfwog</span>
        </Link>
        <nav>
          <ul className="flex gap-8 text-lg font-semibold capitalize text-navredcyan">
            {["about", "how to buy", "Tokenomics", "road map", "eco system", "FAQs", "Disclaimer"].map((text, idx) => (
              <li key={idx}>
                <Link to={`/${text === "about" ? "" : text.toLowerCase().replace(/\s/g, "")}`}>
                  {text}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/buy">
                <button className="text-white border-2 border-red-600  bg-red-900 font-semibold px-4  rounded-full h-12 w-full">
                  Buy Red Fwog
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
