import React, { useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "../ui/pages/home/Home";
import About from "../ui/pages/about/About";
import Welcome from "../ui/components/authentication/Welcome";
import FeaturesPage from "../ui/pages/features/FeaturesPage";
import HowItWorksPage from "../ui/pages/howitworks/HowItWorksPage";
import SafetyPage from "../ui/pages/SafetyPage/SafetyPage";
import FAQsPage from "../ui/pages/FAQ/FAQsPage";
import Authentication from "../ui/components/authentication/Authentication";

type AuthScreen =
  | "welcome"
  | "signup"
  | "signin"
  | "forgot-password"
  | "verification";

interface FormData {
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

// Wrapper component for Welcome page with routing integration
const WelcomeWrapper: React.FC = () => {
  const navigate = useNavigate();

  // Function to handle navigation from Welcome page
  const handleWelcomeNavigate = (screen: AuthScreen) => {
    const routeMap: Record<AuthScreen, string> = {
      welcome: "/welcome-to-get-startede",
      signup: "/signup",
      signin: "/signin",
      "forgot-password": "/forgot-password",
      verification: "/verification",
    };

    navigate(routeMap[screen]);
  };

  return <Welcome onNavigate={handleWelcomeNavigate} />;
};

// Wrapper component for Authentication with routing integration
const AuthWrapper: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // State to manage form data across auth screens
  const [formData, setFormData] = useState<FormData>({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  // Function to handle form data changes
  const handleFormDataChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Function to handle navigation with React Router
  const handleNavigate = (screen: AuthScreen) => {
    const routeMap: Record<AuthScreen, string> = {
      welcome: "/welcome-to-get-started",
      signup: "/signup",
      signin: "/signin",
      "forgot-password": "/forgot-password",
      verification: "/verification",
    };

    navigate(routeMap[screen]);
  };

  return (
    <Authentication
      onNavigate={handleNavigate}
      formData={formData}
      onFormDataChange={handleFormDataChange}
    />
  );
};

const Index: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<FeaturesPage />} />
      <Route path="/how-it-works" element={<HowItWorksPage />} />
      <Route path="/safety" element={<SafetyPage />} />
      <Route path="/faqs" element={<FAQsPage />} />
      <Route path="/about" element={<About />} />

      {/* Fixed Welcome route - now uses WelcomeWrapper */}
      <Route path="/welcome-to-get-started" element={<WelcomeWrapper />} />
      {/* Auth routes */}
      <Route path="/auth" element={<AuthWrapper />} />
      <Route path="/signup" element={<AuthWrapper />} />
      <Route path="/signin" element={<AuthWrapper />} />
      <Route path="/forgot-password" element={<AuthWrapper />} />
      <Route path="/verification" element={<AuthWrapper />} />
    </Routes>
  );
};

export default Index;
