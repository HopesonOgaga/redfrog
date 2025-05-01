import Header from "../components/navagation/nav";

export default function Lore() {
    return (
        <>
        <Header></Header>
      <section className="bg-gradient-to-r from-black to-red-600 min-h-screen w-full py-12 px-4 flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-white font-semibold text-4xl md:text-5xl capitalize text-center mb-10">
          the <span className="text-red-800">redfwog</span> lore
        </h2>
  
        {/* Content Layout */}
        <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl items-center justify-center ">
          {/* GameBoy Console */}
          <div className="border-4 border-red-700 w-full md:w-1/3 p-6 rounded-lg  shadow-lg bg-red-800 h-4/5">
            {/* Screen */}
            <div className="flex justify-center mb-6">
              <img src="/images/save.png" alt="Gameboy screen" className="max-w-full h-auto" />
            </div>
  
            {/* Controls */}
            <div className="flex flex-col gap-6 items-center">
              {/* Top Buttons */}
              <div className="flex justify-around w-full">
                <img src="/images/logbutton.png" alt="Log button" className="" />
                <div className="flex gap-4">
                  <img src="/images/A Button.png" alt="A button" className="w-14 h-14" />
                  <img src="/images/B Button.png" alt="B button" className="w-16 h-16" />
                </div>
              </div>
  
              {/* Navigation Buttons */}
              <div className="flex gap-6">
                <img src="/images/Back Button.png" alt="Back button" className="" />
                <img src="/images/Next Button.png" alt="Next button" className="" />
              </div>
            </div>
          </div>
  
          {/* Lore Text */}
          <div className="border-4 border-red-700 rounded-lg shadow-lg w-full md:w-1/2 p-6 bg-black bg-opacity-30 max-h-[400px] overflow-y-auto">
            <p className="text-white text-sm leading-relaxed">
              In the lush swamps of Verdant Vale, Fwog — a curious young amphibian —
              discovers an ancient lily pad inscribed with a prophecy. It speaks of a
              hidden realm where the Great Toadstone lies — a gem that can restore
              balance to the swamp. Driven by destiny, Fwog sets out, leaving the safety
              of home to face unknown perils.
              <br /><br />
              Through overgrown reeds and past forgotten ruins, the journey tests his courage.
              Legends speak of those who sought the Toadstone and never returned. But Fwog
              believes. In his leap toward fate, he becomes more than just a swamp-dweller —
              he becomes the redfwog.
            </p>
          </div>
        </div>
      </section>
      </>
    );
  }
  