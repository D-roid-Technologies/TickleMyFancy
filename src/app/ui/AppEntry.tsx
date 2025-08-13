import React from "react";

import Index from "../routes/Index";
import Layout from "./components/Layout";

const AppEntry: React.FC = () => {
  return (
    <>
      <Layout>
        <Index />
       <div>childeren</div>
       <div>childeren</div>
       <div>childeren</div>
       <div>childeren</div>
      </Layout>
    </>
  );
};

export default AppEntry;
