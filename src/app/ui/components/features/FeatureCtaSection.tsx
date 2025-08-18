import React from "react";

const FeaturesCtaSection: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-xl font-semibold text-gray-900 mb-8">
          Ready to explore these features?
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-8 rounded-full transition-colors duration-200 min-w-[140px]">
            Create Account
          </button>

          <button className="bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-8 rounded-full border border-gray-300 transition-colors duration-200 min-w-[140px]">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCtaSection;
