import React from "react";

import Index from "../routes/Index";
import Layout from "./components/Layout";
import SubscriptionCard from "./components/Subscription/Subscription";

const AppEntry: React.FC = () => {
  return (
    <>
      <Layout>
        <Index />
       <SubscriptionCard/>
      </Layout>
    </>
  );
};

export default AppEntry;
