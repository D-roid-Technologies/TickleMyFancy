
import whatwedo1 from "../../../../assets/images/whatwedo1.png";
import whatwedo2 from "../../../../assets/images/whatwedo2.png";
import { AiFillStar } from "react-icons/ai";

export default function FeaturesSection() {
  const features = [
    "Interest based matching",
    "Boundaries in profile",
    "Real-time private chat",
    "Block & report tools",
    "Privacy-first approach",
    "optional profile verification",
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
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
              style={{ backgroundImage: `url(${whatwedo2})` }}
            ></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-[#9333EA] font-bold text-lg uppercase tracking-wide">FEATURES</p>
              <h2 className="text-sm font-bold text-[#FF6F61]">
                Made for Consent, Connection and Fun
              </h2>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <AiFillStar className="w-4 h-4 text-[#9333EA]" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
