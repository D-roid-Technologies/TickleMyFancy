import React from "react";

const SubscriptionCard: React.FC = () => {
  return (
    <div className="w-full  bg-[#FF6B5E] clip-wave-top ">
      <div className="">
        {/* Curved Background Container */}
        <div className="rounded-3xl px-8 py-16 text-center text-white shadow-2xl overflow-hidden">
          {/* Content */}
          <div className="">
            {/* Subscription Badge */}
            <div className="inline-block mb-8">
              <div className="">
                
                 <span className="block h-[2px] w-30 bg-white mb-2"></span>
                <p className="font-quicksand font-bold text-[24px] leading-[100%] tracking-[0] text-center">
                  Subscription
                </p>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Want More Control?
            </h1>

            {/* Description */}
            <p className="text-lg md:text-[17px] leading-relaxed mb-12 text-white/90 max-w-xl mx-auto">
              Take your experience to the next level. With Premium, you're not
              just swiping, you're in charge. See who's into you, browse
              privately, and filter only the real ones. Your rules, your vibe.
            </p>

            {/* CTA Button */}
            <button className="group relative inline-flex items-center justify-center px-8 py-4 mb-10 text-lg font-semibold text-white bg-[#FB00B5] rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-out">
  <span className="relative z-10">Upgrade to Premium</span>
</button>


          </div>

        </div>

      </div>
    </div>
  );
};

export default SubscriptionCard;
