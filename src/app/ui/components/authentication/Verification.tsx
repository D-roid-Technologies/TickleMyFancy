import React from "react";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";

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
const Verification: React.FC<{
  onNavigate: (screen: AuthScreen) => void;
}> = ({ onNavigate }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate("signin");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
        <button
          onClick={() => onNavigate("forgot-password")}
          className="mb-6 text-gray-600 hover:text-purple-600 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-600 mb-2">
            Verification Required
          </h2>
          <p className="text-gray-600">
            Please enter the verification code sent to your email
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Verification Code
            </label>
            <input
              type="text"
              placeholder="Enter your code"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg"
          >
            Verify and Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Verification;
