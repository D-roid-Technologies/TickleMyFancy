import { Heart, Search, Shield } from "lucide-react"

export default function HowItWorksSection() {
  const steps = [
    {
      icon: Heart,
      title: "Set Your Vibe",
      description: "Share your preferences and boundaries",
    },
    {
      icon: Search,
      title: "Discover Bold Matches",
      description: "Explore like-minded people around",
    },
    {
      icon: Shield,
      title: "Chat in Confidence",
      description: "Meet new people with privacy and safety",
    },
  ]

  return (
    <section className="relative">
      {/* Wave section */}
      <div className="relative w-full bg-[#FF6B5E] clip-wave-top pb-40">
        <div className="max-w-6xl mx-auto text-center relative">
          <p className="text-white text-sm font-medium tracking-wider uppercase mb-4">
            HOW IT WORKS
          </p>
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            3 Simple Steps to Get Started
          </h2>
          <p className="text-white/90 text-lg mb-12 max-w-2xl mx-auto">
            My Fancy is easy to connect with people who understand your vibe
          </p>
        </div>
      </div>

      {/* Cards overlapping from the bottom of the wave */}
      <div className="absolute left-1/2 top-full w-full max-w-6xl -translate-x-1/2 -translate-y-1/2 grid md:grid-cols-3 gap-8 px-6 py-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <step.icon className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-gray-900 text-xl font-semibold mb-3">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
