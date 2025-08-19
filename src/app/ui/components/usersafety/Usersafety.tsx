import whatwedo1 from "../../../../assets/images/whatwedo1.png";
import whatwedo2 from "../../../../assets/images/whatwedo2.png";
function Usersafety() {
  return (
    <section className=" text-white px-6 pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-6">
          {/* Purple Tag */}
          <div>
            <div className="h-0.5 w-12 bg-purple-500 mb-2"></div>
            <p className="text-purple-500 font-semibold uppercase text-sm tracking-wide">
              Built for Trust
            </p>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-red-400 leading-snug">
            Your Safety, Your Pace and rules
          </h2>

          {/* Paragraph */}
          <p className="text-gray-400 max-w-md">
            At Tickle my Fancy, your privacy and comfort come first. You’re in 
            control of what you share, who you connect with and how far things go.
          </p>

          {/* CTA Button */}
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition">
            Join Us
          </button>
        </div>

        {/* Right Images */}
        <div className="relative flex flex-col items-start">
          <img
            src={whatwedo1}
            alt="Woman waving at phone"
            className="w-[227px] h-[267] rounded-tr-[50px] rounded-bl-[50px] shadow-lg"
          />
          <img
            src={whatwedo2}
            alt="Woman smiling at phone"
            className="w-[215px] h-[267]  rounded-tl-[50px] rounded-br-[50px] shadow-lg mt-[-10px] ml-12"
          />
        </div>

      </div>
    </section>
  )
}

export default Usersafety
