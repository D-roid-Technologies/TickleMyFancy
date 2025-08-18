import React from "react";
import logoImage from "../../images/png/coupleImage.png";
import CardSection from "./features/CardSection";
import FeaturesCtaSection from "./features/FeatureCtaSection";

const Hero: React.FC = () => {
  return (
    <div>
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
            <img
              src={logoImage}
              alt="Couple Image"
              className="h-64 w-auto md:h-80 lg:h-96"
            />
          </div>
          <div>
            <div className="mt-12 text-center">
              <h2 className="text-6xl font-extrabold md:text-xl max-w-2xl mx-auto mb-2">
                Features that connects heart
              </h2>
              <p className=" text-xl md:text-xl max-w-2xl mx-auto">
                Discover how our platform brings people together
              </p>
            </div>
          </div>
        </div>
      </div>
      <CardSection />
      <div>
        <FeaturesCtaSection />
      </div>
    </div>
  );
};

export default Hero;
