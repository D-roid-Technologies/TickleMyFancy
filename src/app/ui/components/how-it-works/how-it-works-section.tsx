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
    <section className="bg-gradient-to-r from-orange-400 to-pink-500 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-white text-sm font-medium tracking-wider uppercase mb-4">HOW IT WORKS</p>
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">3 Simple Steps to Get Started</h2>
        <p className="text-white/90 text-lg mb-12 max-w-2xl mx-auto">
          My Fancy is easy to connect with people who understand your vibe
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-gray-900 text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
