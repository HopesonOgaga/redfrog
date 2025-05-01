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
      <section className="py-12 px-4 bg-white bg-gradient-to-r from-black to-red-600 h-screen flex justify-center items-center ">
        <div>
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
              <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
              <p className=" text-base text-white ">{card.text}</p>
            </article>
          ))}
        </div>
        </div>
      </section>
    );
  }
  