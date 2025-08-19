import React, { useState } from "react";
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
  const [currentScreen, setCurrentScreen] = useState<AuthScreen>("welcome");

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
          <div>
            Signup Component
            {/* Pass formData and onFormDataChange to your signup component when you create it */}
          </div>
        );
      case "signin":
        return (
          <div>
            Signin Component
            {/* Pass formData and onFormDataChange to your signin component when you create it */}
          </div>
        );
      case "forgot-password":
        return <div>Forgot Password Component</div>;
      case "verification":
        return <div>Verification Component</div>;
      default:
        return <Welcome onNavigate={handleNavigate} />;
    }
  };

  return <div className="App">{renderCurrentScreen()}</div>;
};

export default Authentication;

// import React, { useState } from "react";
// import Welcome from "./Welcome";

// type AuthScreen =
//   | "welcome"
//   | "signup"
//   | "signin"
//   | "forgot-password"
//   | "verification";

// const Authentication: React.FC = () => {
//   const [currentScreen, setCurrentScreen] = useState<AuthScreen>("welcome");

//   // This is the function that was likely missing or broken
//   const handleNavigate = (screen: AuthScreen) => {
//     console.log("Navigating to:", screen); // Add for debugging
//     setCurrentScreen(screen);
//   };

//   const renderCurrentScreen = () => {
//     switch (currentScreen) {
//       case "welcome":
//         return <Welcome onNavigate={handleNavigate} />;
//       case "signup":
//         return <div>Signup Component</div>; // Replace with actual component
//       case "signin":
//         return <div>Signin Component</div>; // Replace with actual component
//       case "forgot-password":
//         return <div>Forgot Password Component</div>; // Replace with actual component
//       case "verification":
//         return <div>Verification Component</div>; // Replace with actual component
//       default:
//         return <Welcome onNavigate={handleNavigate} />;
//     }
//   };

//   return <div className="App">{renderCurrentScreen()}</div>;
// };

// export default Authentication;
