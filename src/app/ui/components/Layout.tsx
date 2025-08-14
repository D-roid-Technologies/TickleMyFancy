import React, { ReactNode } from "react";
import Navbar from "./navbar/NavBar";
import Footer from "./footer/Footer";

interface LayoutProps {
  children: ReactNode; // This allows passing any React component/content
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div >
      <Navbar />
      <main>{children}</main>
      <Footer />
      
    </div>
  );
};

export default Layout;
