import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Welcome from "./Welcome";
import SignUp from "./SignUp";

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

interface AuthenticationProps {
  onNavigate?: (screen: AuthScreen) => void;
  formData?: FormData;
  onFormDataChange?: (field: keyof FormData, value: string) => void;
}

const Authentication: React.FC<AuthenticationProps> = ({
  onNavigate,
  formData,
  onFormDataChange,
}) => {
  const location = useLocation();
  const [currentScreen, setCurrentScreen] = useState<AuthScreen>("welcome");

  // Map URL paths to screen types
  const getScreenFromPath = (pathname: string): AuthScreen => {
    switch (pathname) {
      case "/welcome-to-get-started":
        return "welcome";
      case "/signup":
        return "signup";
      case "/signin":
        return "signin";
      case "/forgot-password":
        return "forgot-password";
      case "/verification":
        return "verification";
      default:
        return "welcome";
    }
  };

  // Update currentScreen when route changes
  useEffect(() => {
    const screen = getScreenFromPath(location.pathname);
    setCurrentScreen(screen);
  }, [location.pathname]);

  // Use external onNavigate if provided, otherwise use internal state
  const handleNavigate = (screen: AuthScreen) => {
    console.log("Navigating to:", screen);
    if (onNavigate) {
      onNavigate(screen);
    } else {
      setCurrentScreen(screen);
    }
  };

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case "welcome":
        return <Welcome onNavigate={handleNavigate} />;
      case "signup":
        return (
          <SignUp />
          //   <div className="min-h-screen flex items-center justify-center p-4">
          //     <div className="w-full max-w-md">
          //       <h1 className="text-3xl font-bold text-center mb-8">Sign Up</h1>
          //       <div className="bg-white p-8 rounded-lg shadow-lg">
          //         <p>Signup Component - Replace with your actual signup form</p>
          //         <button
          //           onClick={() => handleNavigate("signin")}
          //           className="mt-4 text-purple-600 underline"
          //         >
          //           Already have an account? Sign in
          //         </button>
          //       </div>
          //     </div>
          //   </div>
        );
      case "signin":
        return (
          <div className="min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-md">
              <h1 className="text-3xl font-bold text-center mb-8">Sign In</h1>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <p>Signin Component - Replace with your actual signin form</p>
                <button
                  onClick={() => handleNavigate("signup")}
                  className="mt-4 text-purple-600 underline"
                >
                  Don't have an account? Sign up
                </button>
              </div>
            </div>
          </div>
        );
      case "forgot-password":
        return (
          <div className="min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-md">
              <h1 className="text-3xl font-bold text-center mb-8">
                Reset Password
              </h1>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <p>Forgot Password Component</p>
              </div>
            </div>
          </div>
        );
      case "verification":
        return (
          <div className="min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-md">
              <h1 className="text-3xl font-bold text-center mb-8">
                Verify Account
              </h1>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <p>Verification Component</p>
              </div>
            </div>
          </div>
        );
      default:
        return <Welcome onNavigate={handleNavigate} />;
    }
  };

  return <div className="App">{renderCurrentScreen()}</div>;
};
export default Authentication;
