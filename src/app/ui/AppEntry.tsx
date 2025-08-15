import React from "react";

import Index from "../routes/Index";
import Layout from "./components/Layout";
import SubscriptionCard from "./components/Subscription/Subscription";
import Hero from "./components/Hero";

const AppEntry: React.FC = () => {
  return (
    <>
      <Layout>
        <Index />
        <Hero />
        <SubscriptionCard />
      </Layout>
    </>
  );
};

export default AppEntry;
