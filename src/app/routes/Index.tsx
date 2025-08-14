import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../ui/pages/home/Home";
import About from "../ui/pages/about/About";
import Features from "../ui/pages/features/Features";

const Index: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path=" /features" element={<Features />} />
    </Routes>
  );
};

export default Index;
