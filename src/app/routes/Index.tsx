import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../ui/pages/home/Home";
import About from "../ui/pages/about/About";

const Index: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Index;
