import { Link } from "react-router";
import Header from "../components/navagation/nav";

export default function Home() {
  return (
    <>
      <Header></Header>
      <section className="bg-gradient-to-r from-black to-red-600 min-h-screen flex items-center justify-center px-6  ">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl gap-28 mt-10 md:mt-0">
          {/* Left Content */}
          <div className="hidden ">
            <button className="bg-gradient-to-r from-black to-red-600 hover:bg-red-600  text-white font-semibold capitalize text-lg w-20 h-10 rounded-lg shadow-sm">
              next
            </button>
          </div>
          <div className="md:w-1/2 space-y-6">
            <div className="space-y-2">
              <p className="text-white capitalize font-bold text-4xl sm:text-5xl lg:text-6xl">
                <span className="text-red-800">ribbit</span> for gains
              </p>
              <p className="text-white capitalize font-bold text-4xl sm:text-5xl lg:text-6xl">
                <span className="text-red-800">red</span> fwog
              </p>
              <p className="text-white capitalize font-bold text-4xl sm:text-5xl lg:text-6xl">
                <span className="text-red-800">run</span> it back
              </p>
            </div>

            <p className="text-white">
              The degen meme coin Avax didn’t know it needed.
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
              <button className="text-white capitalize text-sm border-2 border-red-600 w-36 h-10 rounded-xl shadow-md hover:bg-red-700 transition">
                join the pond
              </button>
              <button className="text-white capitalize text-sm border-2 border-red-600 w-36 h-10 rounded-xl shadow-md hover:bg-red-700 transition">
                buy redfwog
              </button>
            </div>
             <Link className="md:hidden" to={"/lore"}>
            {" "}
            <div className="w-full flex  justify-center mt-10">
              <button className="bg-gradient-to-r from-black to-red-600 hover:bg-red-600  text-white font-semibold capitalize text-lg w-3/4 h-12 rounded-lg shadow-sm">
                next
              </button>
            </div>
          </Link>
          </div>

          {/* Right Image Section */}
          <div className="md:w-1/2 relative flex justify-center items-center mb-8">
            {/* Slot Machine Background */}
            <img
              src="/images/Slot Machine Glow.svg"
              alt="Slot machine background"
              className="absolute w-[65vw] md:w-full max-w-md z-0 "
            />
            {/* Centered Fwog Logo */}
            <div className="flex md:-mt-24 gap-4  -mt-10">
              <img
                src="/images/Fwog Logo.png"
                alt="Redfwog logo"
                className="relative z-10 w-10 h-10 md:w-20 md:h-40 object-contain "
              />
              <img
                src="/images/Fwog Logo.png"
                alt="Redfwog logo"
                className="relative z-10 w-10 h-10 md:w-20 md:h-40 object-contain "
              />
              <img
                src="/images/Fwog Logo.png"
                alt="Redfwog logo"
                className="relative z-10 w-10 h-10 md:w-20 md:h-40 object-contain "
              />
            </div>
          </div>
          <Link className="hidden md:flex" to={"lore"}>
            {" "}
            <div>
              <button className="bg-gradient-to-r from-black to-red-600 hover:bg-red-600  text-white font-semibold capitalize text-lg w-20 h-10 rounded-lg shadow-sm">
                next
              </button>
            </div>
          </Link>
        </div>
      </section>
      {/* lore */}
    </>
  );
}
