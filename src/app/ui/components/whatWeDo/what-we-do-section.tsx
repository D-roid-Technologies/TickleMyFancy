import whatwedo1 from "../../../../assets/images/whatwedo1.png";
import whatwedo2 from "../../../../assets/images/whatwedo2.png";

export default function WhatWeDoSection() {
  return (
    <section className="sm:py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Keep side by side on all screen sizes */}
        <div className="flex flex-row flex-nowrap gap-4 sm:gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="flex-1 space-y-4 sm:space-y-6 min-w-0">
            <div className="space-y-2 sm:space-y-4">
              <span className="block h-[2px] w-12 sm:w-20 bg-[#9333EA] mt-6 sm:mt-10"></span>
              <p className="text-purple-600 font-medium text-xs sm:text-sm tracking-wide uppercase">
                WHAT WE DO
              </p>
              <h2 className="text-[10px] sm:text-xl lg:text-[25px] text-[#FF6F61] font-semibold leading-tight">
                We Connect adventurous minds through trust, consent and
                curiosity
              </h2>
            </div>

            <p className="text-gray-600 text-[10.5px] sm:text-base lg:text-lg leading-relaxed">
              Tickle my Fancy is where open-minded adults meet to explore deeper
              intimacy, shared interests, and playful experiences, all in a safe
              space.
            </p>

            <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-3 rounded-full text-sm sm:text-base lg:text-lg font-medium transition-colors">
              Learn More
            </button>
          </div>

          {/* Image Wrapper */}
          <div className="flex-1 relative min-w-0 h-48 sm:h-64 lg:h-80">
            {/* Show only one image on mobile */}
            <div
              className="absolute inset-0 bg-cover bg-center rounded-2xl sm:hidden"
              style={{ backgroundImage: `url(${whatwedo1})` }}
            ></div>

            {/* Show two styled frames only on sm+ */}
            <div className="hidden sm:block h-full">
              {/* Frame 32 - Left Panel */}
              <div
                className="absolute w-[180px] sm:w-[220px] lg:w-[250px] 
                h-[120px] sm:h-[150px] lg:h-[190px] top-0 
                left-1/2 -translate-x-[20%] sm:left-[calc(50%+20px)] lg:left-[calc(50%+40px)]
                rounded-tr-[30px] sm:rounded-tr-[40px] lg:rounded-tr-[50px] 
                rounded-bl-[30px] sm:rounded-bl-[40px] lg:rounded-bl-[50px]"
              >
                <div
                  className="absolute w-full h-full bg-cover bg-center rounded-tr-[30px] sm:rounded-tr-[40px] lg:rounded-tr-[50px] 
                  rounded-bl-[30px] sm:rounded-bl-[40px] lg:rounded-bl-[50px]"
                  style={{ backgroundImage: `url(${whatwedo1})` }}
                ></div>
              </div>

              {/* Frame 33 - Right Panel */}
              <div
                className="absolute w-[180px] sm:w-[220px] lg:w-[250px] 
                h-[120px] sm:h-[150px] lg:h-[190px] 
                top-[100px] sm:top-[130px] lg:top-[180px]
                left-1/2 -translate-x-[50%] sm:left-[calc(20%+140px)] lg:left-[calc(20%+185px)]
                rounded-tl-[30px] sm:rounded-tl-[40px] lg:rounded-tl-[50px] 
                rounded-br-[30px] sm:rounded-br-[40px] lg:rounded-br-[50px] 
                rotate-3 sm:rotate-5"
              >
                <div
                  className="absolute w-full h-full bg-cover bg-center rounded-tl-[30px] sm:rounded-tl-[40px] lg:rounded-tl-[50px] 
                  rounded-br-[30px] sm:rounded-br-[40px] lg:rounded-br-[50px]"
                  style={{ backgroundImage: `url(${whatwedo2})` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}