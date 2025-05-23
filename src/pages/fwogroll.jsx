import { Link } from "react-router";

const cards = [
  {
    image: "/images/meta.png",
    title: "Create a wallet",
    text: "Download MetaMask or any Avalanche compatible wallet.",
  },
  {
    image: "/images/image 16.png",
    title: "Get Some AVAX",
    text: "Purchase AVAX from an exchange and send to your wallet.",
  },
  {
    image: "/images/lfg.png",
    title: "Connect To LFJ",
    text: "Less noise, faster hops, lower fees. It’s the perfect red swamp for our crimson king.",
  },
  {
    image: "/images/Fwog Logo.png",
    title: "One Fwog To Rule Them All",
    text: "No other fwogs on AVAX. RedFwog builds its empire here.",
  },
];

export default function Fwog() {
  return (
    <section className="py-12 px-4 bg-white bg-gradient-to-r from-black to-red-600 h-full md:h-screen flex justify-center items-center ">
      <div className="hidden md:flex">
        <Link to={"/lore"}>
          <button className="bg-gradient-to-r from-black to-red-600 hover:bg-red-600  text-white font-semibold capitalize text-lg w-20 h-10 rounded-lg shadow-sm">
            previous
          </button>
        </Link>
      </div>
      <div className="flex flex-col w-full h-full gap-6 ">
        <div className="mb-10 text-center">
          <h2 className="capitalize text-5xl font-bold">
            How To <span className="text-red-600">Fwog ‘n’ Roll</span>
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
        <div className=" mt-6 flex justify-center w-full">
          <button className=" bg-gradient-to-r from-black to-red-600 text-lg font-semibold capitalize text-white rounded-xl shadow-xl w-full md:w-1/6 h-12 border-4 border-solid border-red-600">
            buy red fwog
          </button>
        </div>
        {/* mobile button */}
        <div className="flex gap-4 w-full h-full justify-between md:hidden">
          <Link to={"/lore"} className="w-full h-full">
            <button className="bg-gradient-to-r from-black to-red-600 hover:bg-red-600  text-white font-semibold capitalize text-lg w-full  h-12 rounded-lg shadow-sm">
              previous
            </button>
          </Link>
          <Link to={"/croak"} className="w-full h-full">
            <button className="bg-gradient-to-r from-black to-red-600 hover:bg-red-600  text-white font-semibold capitalize text-lg w-full h-12 rounded-lg shadow-sm">
              next
            </button>
          </Link>
        </div>
      </div>
      <div className="hidden md:flex">
        <Link to={"/croak"}>
          <button className="bg-gradient-to-r from-black to-red-600 hover:bg-red-600  text-white font-semibold capitalize text-lg w-20 h-10 rounded-lg shadow-sm">
            next
          </button>
        </Link>
      </div>
    </section>
  );
}
