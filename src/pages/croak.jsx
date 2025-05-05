import { Link } from "react-router";

const cards = [
  {
    image: "/images/casino.png",
    title: "Cold Stake",
    text: "Hold $REDFWOG, earn rewards. No pools, no stress — you chill, we thrill.",
  },
  {
    image: "/images/moneyhand.png",
    title: "Fwogerance",
    text: "Every holder’s a boss. Vote on memes, features, and fwogventures. The pond listens.",
  },
  {
    image: "/images/avaxnew.png",
    title: "Avax > Sol",
    text: "Less noise, faster hops, lower fees. It’s the perfect red swamp for our crimson king.",
  },
  {
    image: "/images/sword.png",
    title: "One Fwog To Rule Them All",
    text: "No other fwogs on AVAX. RedFwog builds its empire here.",
  },
];

export default function Croak() {
  return (
    <section className="py-12  px-4 bg-white bg-gradient-to-r from-black to-red-600 md:h-screen  flex justify-center items-center ">
      <Link to={"/fwog"} className="hidden  md:flex">
        <div>
          <button className="bg-gradient-to-r from-black to-red-600 hover:bg-red-600  text-white font-semibold capitalize text-lg w-20 h-10 rounded-lg shadow-sm">
            previous
          </button>
        </div>
      </Link>
      <div>
        <div className="mb-10 text-center">
          <h2 className="capitalize text-2xl md:text-5xl font-bold">
            why <span className="text-red-800">croak</span> with us
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {cards.map((card, index) => (
            <article
              key={index}
              className="bg-gray-950 w-full sm:w-[45%] lg:w-[20%] lg:h-[45vh]  border-4 border-red-600 rounded-lg shadow-md p-4 flex flex-col lg:gap-8 items-start "
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-20 h-auto mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">
                {card.title}
              </h3>
              <p className=" text-base text-white ">{card.text}</p>
            </article>
          ))}
        </div>
        <div className="flex justify-between w-full gap-6  mt-8 ">
          <Link to={"/"} className="w-full h-full md:hidden ">
            <div>
              <button className="bg-gradient-to-r from-black to-red-600 hover:bg-red-600  text-white font-semibold capitalize text-lg w-full h-10 rounded-lg shadow-sm">
                previous
              </button>
            </div>
          </Link>
          <Link to={"/fwog"} className="w-full h-full md:hidden ">
            <div>
              <button className="bg-gradient-to-r from-black to-red-600 hover:bg-red-600  text-white font-semibold capitalize text-lg w-full h-10 rounded-lg shadow-sm">
                next
              </button>
            </div>
          </Link>
        </div>
      </div>
      <Link to={"/"} className="hidden md:flex">
        <div>
          <button className="bg-gradient-to-r from-black to-red-600 hover:bg-red-600  text-white font-semibold capitalize text-lg w-20 h-10 rounded-lg shadow-sm">
            next
          </button>
        </div>
      </Link>
    </section>
  );
}
