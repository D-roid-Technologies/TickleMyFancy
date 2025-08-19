import whatwedo1 from "../../../../assets/images/whatwedo1.png";
import whatwedo2 from "../../../../assets/images/whatwedo2.png";

export default function WhatWeDoSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
                 <span className="block h-[2px] w-20 bg-[#9333EA] mt-10"></span>
              <p className="text-purple-600 font-medium text-sm tracking-wide uppercase">
                WHAT WE DO
              </p>
              <h2 className="lg:text-[25px] text-[#FF6F61] font-semibold  leading-tight">
                We Connect adventurous
                minds through trust, consent and curiosity
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              Tickle my Fancy is where open-minded adults meet to explore deeper
              intimacy, shared interests, and playful experiences, all in a safe
              space.
            </p>

            <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors">
              Learn More
            </button>
          </div>

          {/* Image */}
          <div className="relative w-full max-w-5xl h-96 mx-auto">
            {/* Left Panel */}
            <div
              className="absolute top-0 bottom-0 left-0 right-[42%] mr-3 
               bg-cover bg-center shadow-lg clip-left-panel"
              style={{ backgroundImage: `url(${whatwedo1})` }}
            ></div>

            {/* Right Panel */}
            {/* <div
              className="absolute top-0 bottom-0 left-[58%] ml-3 right-0 
               bg-cover bg-center shadow-lg clip-right-panel rotate-3"
              style={{ backgroundImage: `url(${whatwedo2})` }}
            ></div> */}
             <div
              className="absolute top-0 bottom-0 left-[40px] right-0 mr-3 
               bg-cover bg-center shadow-lg clip-righ-panel rotate-5"
              style={{ backgroundImage: `url(${whatwedo1})` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
