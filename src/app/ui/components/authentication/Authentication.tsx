import React, { useState } from "react";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import ForgotPassword from "./ForgotPassword";
import Verification from "./Verification";
import Welcome from "./Welcome";

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

interface AuthProps {
  onNavigate: (screen: AuthScreen) => void;
  formData: FormData;
  onFormDataChange: (field: keyof FormData, value: string) => void;
}

// Main Authentication Component
const Authentication: React.FC<AuthProps> = ({
  onNavigate,
  formData,
  onFormDataChange,
}) => {
  const [currentScreen, setCurrentScreen] = useState<AuthScreen>("welcome");

  const handleNavigate = (screen: AuthScreen) => {
    setCurrentScreen(screen);
    onNavigate(screen);
  };

  switch (currentScreen) {
    case "welcome":
      return <Welcome onNavigate={handleNavigate} />;
    case "signup":
      return (
        <SignUp
          onNavigate={handleNavigate}
          formData={formData}
          onFormDataChange={onFormDataChange}
        />
      );
    case "signin":
      return (
        <LogIn
          onNavigate={handleNavigate}
          formData={formData}
          onFormDataChange={onFormDataChange}
        />
      );
    case "forgot-password":
      return (
        <p>forgot password</p>
        // <ForgotPassword
        //   onNavigate={handleNavigate}
        //   email={formData.email}
        //   onEmailChange={(email: string) => onFormDataChange("email", email)}
        // />
      );
    case "verification":
      return <Verification onNavigate={handleNavigate} />;
    default:
      return <Welcome onNavigate={handleNavigate} />;
  }
};

export default Authentication;
