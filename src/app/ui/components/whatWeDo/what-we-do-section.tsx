

export default function WhatWeDoSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-purple-600 font-medium text-sm tracking-wide uppercase">WHAT WE DO</p>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                We <span className="text-orange-500">Connect</span> adventurous minds through trust, consent and
                curiosity
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              Tickle my Fancy is where open-minded adults meet to explore deeper intimacy, shared interests, and playful
              experiences, all in a safe space.
            </p>

            <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors">
              Learn More
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/images/what-we-do-handshake.png"
                alt="Two people shaking hands in a friendly meeting"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
