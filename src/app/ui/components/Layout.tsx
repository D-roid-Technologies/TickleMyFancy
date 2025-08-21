import type React from "react";
import type { ReactNode } from "react";
import Navbar from "./navbar/NavBar";
import Footer from "./footer/Footer";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  // Define paths where footer should be hidden
  const pathsWithoutFooter = [
    "/auth",
    "/signup",
    "/signin",
    "/forgot-password",
    "/verification",
    "/welcome-to-get-started",
  ];

  // Check if current path should hide footer
  const hideFooter = pathsWithoutFooter.some(
    (path) =>
      location.pathname === path || location.pathname.startsWith(path + "/")
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default Layout;
