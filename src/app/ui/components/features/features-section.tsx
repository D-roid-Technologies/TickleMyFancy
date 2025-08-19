

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
          <div className="relative">
            <img
              src="/images/features-couple-gaming.png"
              alt="Couple enjoying gaming together and intimate moments"
              width={500}
              height={400}
              className="w-full h-auto rounded-2xl"
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-purple-600 font-medium text-sm uppercase tracking-wide">FEATURES</p>
              <h2 className="text-4xl font-bold text-gray-900">
                <span className="text-orange-500">Made</span> for Consent, Connection and Fun
              </h2>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
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
