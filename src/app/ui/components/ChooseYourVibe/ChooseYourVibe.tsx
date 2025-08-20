import VIBE1 from "../../../../assets/images/VIBE1.png";
import VIBE2 from "../../../../assets/images/VIBE2.png";
import VIBE3 from "../../../../assets/images/VIBE3.png";
import VIBE4 from "../../../../assets/images/VIBE4.png";
import VIBE5 from "../../../../assets/images/VIBE5.png";
import VIBE6 from "../../../../assets/images/VIBE6.png";

export default function ChooseYourVibe() {
  const vibeCards = [
    {
      id: 1,
      title: "A soft reminder",
      subtitle: "The right connection doesn't rush, it resonates.",
      image: VIBE1,
      gradient: "from-[#FB00B5] via-[#FB00B5] to-[#FB00B5]",
    },
    {
      id: 2,
      title: "One thing about me",
      subtitle: "I laugh too loud, love too deep, and never forget birthdays.",
      image: VIBE2,
      gradient: "from-[#FF6F61] via-[#9333EA]  to-[#9333EA]",
    },
    {
      id: 3,
      title: "Would you rather",
      subtitle:
        "Slow dance in the living room or share secrets under the stars.",
      image: VIBE3,
      gradient: "from-[#9333EA] via-[#FF6F61] to-[#FF6F61]",
    },
    {
      id: 4,
      title: "A soft reminder",
      subtitle: "The right connection doesn't rush, it resonates.",
      image: VIBE4,
      gradient: "from-[#FF6F61] via-[#9333EA] to-[#9333EA]",
    },
    {
      id: 5,
      title: "One thing about me",
      subtitle: "I laugh too loud, love too deep, and never forget birthdays.",
      image: VIBE5,
      gradient: "from-[#FF6F61] via-[#9333EA] to-[#9333EA]",
    },
    {
      id: 6,
      title: "Would you rather",
      subtitle:
        "Slow dance in the living room or share secrets under the stars.",
      image: VIBE6,
      gradient: "from-[#FF6F61] via-[#FF6F61] to-[#9333EA]",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-4">
            CHOOSE YOUR VIBE
          </p>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-pink-500 to-orange-400 bg-clip-text text-transparent mb-6">
            Let's lighten your mode
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
            You are not here for boring, neither are we. Here is something
            little to make you smile and think twice
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  rounded-l-lg rounded-r-lg">
          {vibeCards.map((card) => (
            <div
              key={card.id}
              className={`rounded-2xl bg-gradient-to-br ${card.gradient} p-1 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer`}
            >
              <div className="bg-transparent rounded-2xl overflow-hidden flex flex-col items-center justify-center text-center mt-10">
                {/* Card Image */}
                <div className="relative h-50 w-[285px] overflow-hidden rounded-xl ">
                  <img
                    src={card.image || "/placeholder.svg"}
                    alt={card.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-white font-bold text-lg mb-3">
                    {card.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
