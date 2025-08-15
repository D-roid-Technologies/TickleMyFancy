import React from "react";

import Index from "../routes/Index";
import Layout from "./components/Layout";
import SubscriptionCard from "./components/Subscription/Subscription";
import HeroSection from "./components/HeroSection/HeroSection";

const AppEntry: React.FC = () => {
  return (
    <>
      <Layout>
        <Index />
        <HeroSection/>
       <SubscriptionCard/>
      </Layout>
    </>
  );
};

export default AppEntry;
