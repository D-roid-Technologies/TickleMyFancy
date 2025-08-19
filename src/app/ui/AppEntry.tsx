import React from "react";

import Index from "../routes/Index";
import Layout from "./components/Layout";
import SubscriptionCard from "./components/Subscription/Subscription";
import Hero from "./components/Hero";
import HeroSection from "./components/HeroSection/HeroSection";
import CardSection from "./components/features/CardSection";
import WhatWeDoSection from "./components/whatWeDo/what-we-do-section";
import FeaturesSection from "./components/features/features-section";
import HowItWorksSection from "./components/how-it-works/how-it-works-section";
import Usersafety from "./components/usersafety/Usersafety";

const AppEntry: React.FC = () => {
  return (
    <>
      <Layout>
        <Index />
        <Hero />
        <SubscriptionCard />
        <HeroSection />
        <HeroSection />
        <WhatWeDoSection />
        <FeaturesSection />
        <HowItWorksSection />
        <Usersafety />
        <SubscriptionCard />
      </Layout>
    </>
  );
};

export default AppEntry;
