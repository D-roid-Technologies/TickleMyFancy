

export function WhatWeDoSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-primary font-heading font-semibold text-sm uppercase tracking-wider">WHAT WE DO</p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground leading-tight">
                We Connect adventurous minds through <span className="gradient-text">trust, consent and curiosity</span>
              </h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Tickle my Fancy is where open-minded adults meet to explore deeper intimacy, shared interests, and playful
              experiences, all in a safe space.
            </p>

            <button
              className="bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white font-heading font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Two people connecting"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
