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
    "Optional profile verification",
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Flex row, prevent overflow on mobile */}
        <div className="flex flex-row items-center gap-4 sm:gap-8 lg:gap-12">
          {/* Image Section */}
          <div className="flex-1 min-w-0 h-48 sm:h-64 lg:h-80">
            {/* First Image */}
            <div
              className="w-full h-full bg-cover bg-center rounded-2xl"
              style={{ backgroundImage: `url(${whatwedo1})` }}
            ></div>

            {/* Second Image hidden on mobile */}
            <div className="hidden sm:block absolute w-[180px] lg:w-[240px] h-[140px] lg:h-[180px] rounded-2xl overflow-hidden shadow-lg bottom-0 right-0 rotate-3">
              <img
                src={whatwedo2}
                alt="Couple 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 min-w-0 space-y-8">
            <div className="space-y-4">
              <p className="text-[#9333EA] font-bold text-sm sm:text-lg uppercase tracking-wide">
                FEATURES
              </p>
              <h2 className="text-[#FF6F61] text-base sm:text-lg lg:text-xl font-bold">
                Made for Consent, Connection and Fun
              </h2>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <AiFillStar className="w-4 h-4 text-[#9333EA] flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base lg:text-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
