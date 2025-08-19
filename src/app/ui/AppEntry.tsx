import React from "react";

import Index from "../routes/Index";
import Layout from "./components/Layout";
import SubscriptionCard from "./components/Subscription/Subscription";
import HeroSection from "./components/HeroSection/HeroSection";
import WhatWeDoSection from "./components/whatWeDo/what-we-do-section";
import FeaturesSection from "./components/features/features-section";
import HowItWorksSection from "./components/how-it-works/how-it-works-section";
import Usersafety from "./components/usersafety/Usersafety";
import ChooseYourVibe from "./components/ChooseYourVibe/ChooseYourVibe";
import TestimonialCarousel from "./components/Testimonial/TestimonialCarousel";

const AppEntry: React.FC = () => {
  return (
    <>
      <Layout>
        <Index />
        <HeroSection/>
        <WhatWeDoSection/>
        <FeaturesSection/>
        <HowItWorksSection/>
        <Usersafety/>
        <ChooseYourVibe/>
        <TestimonialCarousel/>
       <SubscriptionCard/>
      </Layout>
    </>
  );
};

export default AppEntry;
