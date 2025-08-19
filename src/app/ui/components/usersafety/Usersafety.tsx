function Usersafety() {
  return (
    <section className="relative z-10 mt-10">
      <div className="">
      
        <div className="container mx-auto px-6 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
           
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
                    Built for Trust
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  <span className="text-coral-500 bg-gradient-to-r from-coral-500 to-pink-500 bg-clip-text text-transparent">
                    Your Safety, Your Pace
                  </span>
                  <br />
                  <span className="text-coral-500 bg-gradient-to-r from-coral-500 to-pink-500 bg-clip-text text-transparent">
                    and rules
                  </span>
                </h1>

                <p className="text-gray-600 text-lg lg:text-xl leading-relaxed max-w-md">
                  At Tickle my Fancy, your privacy and comfort come first. You're in control of what you share, who you
                  connect with and how far things go.
                </p>
              </div>

              <div className="pt-4">
                <button className="bg-gradient-to-r from-pink-500 to-coral-500 hover:from-pink-600 hover:to-coral-600 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Join Us
                </button>
              </div>
            </div>

           
            <div className="relative">
              <div className="space-y-6">
               
                <div className="relative ml-8 lg:ml-16">
                  <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <img
                      src="https://images.pexels.com/photos/3784324/pexels-photo-3784324.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Woman using smartphone and waving"
                      className="w-full h-64 lg:h-80 object-cover"
                    />
                  </div>
                </div>

                {/* Bottom Image */}
                <div className="relative -mt-8 mr-8 lg:mr-16">
                  <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <img
                      src="https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Woman smiling while using smartphone"
                      className="w-full h-64 lg:h-80 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 lg:mt-32 text-center space-y-6">
            <div className="space-y-4">
              <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
                Choose Your Vibe
              </span>

              <h2 className="text-3xl lg:text-4xl font-bold">
                <span className="bg-gradient-to-r from-coral-500 to-pink-500 bg-clip-text text-transparent">
                  Let's lighten your mood
                </span>
              </h2>

              <p className="text-gray-600 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
                You are not here for boring, neither are we. Here is something little to make you smile and think twice
              </p>
            </div>
          </div>
        </div>

        {/* Background Decorative Elements */}
        {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-coral-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div> */}
      </div>
    </section>
  )
}

export default Usersafety
