import React from "react";

const SubscriptionCard: React.FC = () => {
  return (
    <div className="w-full h-[400px] bg-[#FF6B5E] clip-wave-top">
      <div className="">
        {/* Curved Background Container */}
        <div className="rounded-3xl px-8 py-16 text-center text-white shadow-2xl overflow-hidden">
          {/* Content */}
          <div className="">
            {/* Subscription Badge */}
            <div className="inline-block mb-8">
              <div className="">
                <p className="text-sm font-semibold tracking-wider text-white/90 uppercase">
                  Subscription
                </p>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Want More Control?
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl leading-relaxed mb-12 text-white/90 max-w-xl mx-auto">
              Take your experience to the next level. With Premium, you're not
              just swiping, you're in charge. See who's into you, browse
              privately, and filter only the real ones. Your rules, your vibe.
            </p>

            {/* CTA Button */}
            <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#FFFFFF] bg-[#FB00B5] rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-out">
              <span className="relative z-10">Upgrade to Premium</span>
            </button>

            {/* Decorative Elements */}
            <div className="absolute top-20 left-8 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
            <div className="absolute top-32 right-12 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-300"></div>
            <div className="absolute bottom-20 left-12 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse delay-700"></div>
          </div>

          {/* Additional Curved Background Effects */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/10 to-transparent"></div>
          <div className="absolute -bottom-20 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        {/* Bottom Curved Shadow */}
        <div className="absolute -bottom-6 left-4 right-4 h-6 bg-[#FB00B5]/20 rounded-full blur-xl"></div>
      </div>
    </div>
  );
};

export default SubscriptionCard;
