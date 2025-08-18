import hero_couple from "../../../../assets/images/hero_couple.png";
import herogrident from "../../../../assets/images/herogrident.png";
import jame_samuel from "../../../../assets/images/samuel_james.png";
import stars from "../../../../assets/images/stars.png";
import ellipese1 from "../../../../assets/images/ellipese1.jpg" 
import ellipese2 from "../../../../assets/images/ellipese2.jpg" 
import ellipese3 from "../../../../assets/images/ellipese3.jpg" 
import ellipese4 from "../../../../assets/images/ellipese4.jpg" 

import { AiFillStar } from "react-icons/ai";
export default function HeroSection() {
  return (
    <section className="relative min-h-screen  overflow-hidden">
      {/* Background decorative elements */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center mb-12">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-purple-600">Where Bold</span>{" "}
            <span className="text-orange-500">Connections Begin</span>
          </h1>

          {/* Subheading */}
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Explore your Desires, share your limits, and meet someone who get's
            it.
          </p>

          {/* CTA Button */}
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            Explore
          </button>
        </div>

        {/* Hero image with profile cards */}
        <div className="relative w-full flex justify-center items-center">
          {/* Gradient Background */}
          <div
            className="absolute  top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[200px] h-[100px] object-cover"
            style={{
              background:
                "linear-gradient(135deg, #FB00B5, #FF6F61, rgba(255,111,97,0.5))",
              filter: "blur(100px)",
            }}
          ></div>
          {/* <img
            src={herogrident}
            alt="herogrident"
            className="absolute  top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[300px] h-[300px] object-cover"
          /> */}

          {/* Left Profile Card */}
          <div className="absolute left-4 md:left-20 top-[10] -translate-y-1/2 bg-white rounded-sm p-4 shadow-lg z-10 w-[300px] h-[140px]">
            <div className="flex flex-col items-center justify-center gap-1">
              <p className="font-semibold text-sm text-gray-800 pb-2">
                Samuel James
              </p>

              <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                <img
                  src={jame_samuel}
                  alt="Samuel James"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center py-1">
  
                <AiFillStar className="w-4 h-4 text-yellow-400" />
                <AiFillStar className="w-4 h-4 text-yellow-400" />
                <AiFillStar className="w-4 h-4 text-yellow-400" />
                <AiFillStar className="w-4 h-4 text-yellow-400" />
                <AiFillStar className="w-4 h-4 text-yellow-400" />
              </div>
            </div>
          </div>

          {/* Main Couple Image */}
          <div className="relative z-10">
            <img
              src={hero_couple}
              alt="Happy couple embracing"
              width={500}
              height={700}
              className="relative top-0 left-1/2 -translate-x-1/2 z-10"
            />
          </div>

          {/* Right Profile Card */}
<div className="absolute right-5 top-[25px] bg-white rounded-md p-4 shadow-xl z-10 rotate-[-5deg] w-[210px] h-[120px] mr-[70px]">
  <div className="flex items-center gap-3">
    <div>
      <p className="font-semibold text-sm text-[#FF6F6199]">
        Join Happy People
      </p>
      <div className="flex items-center gap-1 mt-2">
        <div className="flex -space-x-2">
          <img
            src={ellipese1}
            alt="User 1"
            className="w-8 h-8 rounded-full border-2 border-white object-cover"
          />
          <img
            src={ellipese2}
            alt="User 2"
            className="w-8 h-8 rounded-full border-2 border-white object-cover"
          />
          <img
            src={ellipese3}
            alt="User 3"
            className="w-8 h-8 rounded-full border-2 border-white object-cover"
          />
          <img
            src={ellipese4}
            alt="User 4"
            className="w-8 h-8 rounded-full border-2 border-white object-cover"
          />
        </div>
        <span className="w-7 h-7 flex items-center justify-center text-center text-sm text-[#FFFFFF] bg-[#FF6F6199] rounded-full">+2k</span>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}
