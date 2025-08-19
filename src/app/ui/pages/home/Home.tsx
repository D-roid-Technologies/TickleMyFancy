import type React from "react"
import HeroSection from "../../components/HeroSection/HeroSection"
import WhatWeDoSection from "../../components/whatWeDo/what-we-do-section"
import FeaturesSection from "../../components/features/features-section"
import HowItWorksSection from "../../components/how-it-works/how-it-works-section"
import Usersafety from "../../components/usersafety/Usersafety"
import ChooseYourVibe from "../../components/ChooseYourVibe/ChooseYourVibe"
import TestimonialCarousel from "../../components/Testimonial/TestimonialCarousel"
import SubscriptionCard from "../../components/Subscription/Subscription"

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection/>
      <WhatWeDoSection/>
      <FeaturesSection/>
      <HowItWorksSection/>
      <Usersafety/>
      <ChooseYourVibe/>
      <TestimonialCarousel/>
      <SubscriptionCard/>
    </div>
  )
}

export default HomePage
