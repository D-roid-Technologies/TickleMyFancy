import React from "react";
import logoImage from "../../images/png/coupleImage.png";

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-white min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-6xl w-full mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-6 leading-tight">
            Why Choose Tickle My Fancy
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We're more than just matches, we help you <br /> build meaningful
            connections
          </p>
        </div>

        <div className="relative flex justify-center">
          {/* Background decorative elements */}
          <div className="absolute top-8 left-16 w-24 h-24 bg-pink-200 rounded-full opacity-60 blur-xl"></div>
          <div className="absolute top-12 right-20 w-32 h-32 bg-purple-200 rounded-full opacity-50 blur-xl"></div>
          <div className="absolute bottom-16 left-24 w-20 h-20 bg-pink-300 rounded-full opacity-40 blur-lg"></div>

          {/* Main image container */}
          {/* <div className="relative bg-white rounded-3xl shadow-2xl  max-w-md mx-auto">
            <div className="relative">
              <div className="w-80 h-80  flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src={logoImage} alt="" className="h-150 w-auto " />
                </div>

                <div className="absolute top-4 right-4 text-pink-400 text-2xl">
                  💕
                </div>
                <div className="absolute bottom-8 left-4 text-purple-400 text-xl">
                  💜
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-12 h-12 bg-pink-400 rounded-full opacity-80 animate-bounce delay-300"></div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-purple-400 rounded-full opacity-70 animate-pulse"></div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
