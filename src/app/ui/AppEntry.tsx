import React from "react";

import Index from "../routes/Index";
import Layout from "./components/Layout";

const AppEntry: React.FC = () => {
  return (
    <>
      <Layout>
        <Index />
      </Layout>
    </>
  );
};

export default AppEntry;
