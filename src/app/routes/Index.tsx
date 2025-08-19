import React, { useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "../ui/pages/home/Home";
import About from "../ui/pages/about/About";
import Authentication from "../ui/components/authentication/Authentication";
import Welcome from "../ui/components/authentication/Welcome";
import Features from "../ui/pages/Features/Features";

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
      welcome: "/auth",
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
      <Route path="/about" element={<About />} />
      <Route path="/features" element={<Features/>} />
      <Route
        path="/welcome"
        element={
          <Welcome
            onNavigate={function (
              screen:
                | "welcome"
                | "signup"
                | "signin"
                | "forgot-password"
                | "verification"
            ): void {
              throw new Error("Function not implemented.");
            }}
          />
        }
      />
      <Route path="/auth" element={<AuthWrapper />} />
      <Route path="/signup" element={<AuthWrapper />} />
      <Route path="/signin" element={<AuthWrapper />} />
      <Route path="/forgot-password" element={<AuthWrapper />} />
      <Route path="/verification" element={<AuthWrapper />} />
    </Routes>
  );
};

export default Index;

// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Home from "../ui/pages/home/Home";
// import About from "../ui/pages/about/About";
// import Features from "../ui/pages/features/Features";
// import Authentication from "../ui/components/authentication/Authentication";

// const Index: React.FC = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path=" /features" element={<Features />} />
//       <Route path=" /signup" element={<Authentication />} />
//     </Routes>
//   );
// };

// export default Index;
