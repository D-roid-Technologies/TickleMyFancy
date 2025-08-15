import React from "react";

import Index from "../routes/Index";
import Layout from "./components/Layout";
import SubscriptionCard from "./components/Subscription/Subscription";
import Hero from "./components/Hero";
import HeroSection from "./components/HeroSection/HeroSection";

const AppEntry: React.FC = () => {
  return (
    <>
      <Layout>
        <Index />
        <Hero />
        <SubscriptionCard />
        <HeroSection />
      </Layout>
    </>
  );
};

export default AppEntry;
