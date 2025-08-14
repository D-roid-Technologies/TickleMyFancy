import React from "react";

import Index from "../routes/Index";
import Layout from "./components/Layout";
import SubscriptionCard from "./components/Subscription/Subscription";

const AppEntry: React.FC = () => {
  return (
    <>
      <Layout>
        <Index />
       <div>childeren</div>
       <div>childeren</div>
       <div>childeren</div>
       <SubscriptionCard/>
      </Layout>
    </>
  );
};

export default AppEntry;
