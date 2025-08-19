import React, { useState } from "react";
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

const LogIn: React.FC<AuthProps> = ({
  onNavigate,
  formData,
  onFormDataChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signin form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl flex flex-col lg:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="lg:w-1/2 bg-gradient-to-br from-purple-400 to-pink-400 p-8 lg:p-12 flex items-center justify-center order-2 lg:order-1">
          <div className="w-full max-w-xs">
            <div className="bg-white rounded-3xl p-6 shadow-2xl">
              <div className="w-full h-48 bg-gradient-to-r from-purple-300 to-pink-300 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-4xl">👩‍🦱</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 p-8 lg:p-12 order-1 lg:order-2">
          <button
            onClick={() => onNavigate("welcome")}
            className="mb-6 text-gray-600 hover:text-purple-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <h2 className="text-2xl md:text-3xl font-bold text-purple-600 mb-2">
            Sign in to Continue
          </h2>
          <p className="text-gray-600 mb-8">
            Welcome back! Please enter your details
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(e) => onFormDataChange("email", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                required
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={formData.password}
                onChange={(e) => onFormDataChange("password", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-purple-600"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            <div className="flex justify-between items-center">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 accent-purple-600" />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <button
                type="button"
                onClick={() => onNavigate("forgot-password")}
                className="text-sm text-purple-600 hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg"
            >
              Sign in
            </button>

            <div className="flex items-center my-6">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-gray-500 text-sm">OR</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            <div className="space-y-3">
              <button
                type="button"
                className="w-full flex items-center justify-center space-x-3 border border-gray-300 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg">🌐</span>
                <span className="font-medium text-gray-700">
                  Continue with Google
                </span>
              </button>

              <button
                type="button"
                className="w-full flex items-center justify-center space-x-3 border border-gray-300 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg">🍎</span>
                <span className="font-medium text-gray-700">
                  Continue with Apple
                </span>
              </button>
            </div>

            <p className="text-center text-gray-600">
              Don't have an account?{" "}
              <button
                onClick={() => onNavigate("signup")}
                className="text-purple-600 font-semibold hover:underline"
              >
                Sign up
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;

// signin screen
// const SigninScreen: React.FC<AuthProps> = ({
//   onNavigate,
//   formData,
//   onFormDataChange,
// }) => {
//   const [showPassword, setShowPassword] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Signin form submitted:", formData);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
//       <div className="w-full max-w-4xl flex flex-col lg:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden">
//         <div className="lg:w-1/2 bg-gradient-to-br from-purple-400 to-pink-400 p-8 lg:p-12 flex items-center justify-center order-2 lg:order-1">
//           <div className="w-full max-w-xs">
//             <div className="bg-white rounded-3xl p-6 shadow-2xl">
//               <div className="w-full h-48 bg-gradient-to-r from-purple-300 to-pink-300 rounded-2xl flex items-center justify-center mb-4">
//                 <span className="text-4xl">👩‍🦱</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="lg:w-1/2 p-8 lg:p-12 order-1 lg:order-2">
//           <button
//             onClick={() => onNavigate("welcome")}
//             className="mb-6 text-gray-600 hover:text-purple-600 transition-colors"
//           >
//             <ArrowLeft className="w-5 h-5" />
//           </button>

//           <h2 className="text-2xl md:text-3xl font-bold text-purple-600 mb-2">
//             Sign in to Continue
//           </h2>
//           <p className="text-gray-600 mb-8">
//             Welcome back! Please enter your details
//           </p>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <input
//                 type="email"
//                 placeholder="Enter your email address"
//                 value={formData.email}
//                 onChange={(e) => onFormDataChange("email", e.target.value)}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
//                 required
//               />
//             </div>

//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={(e) => onFormDataChange("password", e.target.value)}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all pr-12"
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-purple-600"
//               >
//                 {showPassword ? (
//                   <EyeOff className="w-5 h-5" />
//                 ) : (
//                   <Eye className="w-5 h-5" />
//                 )}
//               </button>
//             </div>

//             <div className="flex justify-between items-center">
//               <label className="flex items-center">
//                 <input type="checkbox" className="mr-2 accent-purple-600" />
//                 <span className="text-sm text-gray-600">Remember me</span>
//               </label>
//               <button
//                 type="button"
//                 onClick={() => onNavigate("forgot-password")}
//                 className="text-sm text-purple-600 hover:underline"
//               >
//                 Forgot Password?
//               </button>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg"
//             >
//               Sign in
//             </button>

//             <div className="flex items-center my-6">
//               <div className="flex-1 border-t border-gray-300"></div>
//               <span className="px-4 text-gray-500 text-sm">OR</span>
//               <div className="flex-1 border-t border-gray-300"></div>
//             </div>

//             <div className="space-y-3">
//               <button
//                 type="button"
//                 className="w-full flex items-center justify-center space-x-3 border border-gray-300 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors"
//               >
//                 <span className="text-lg">🌐</span>
//                 <span className="font-medium text-gray-700">
//                   Continue with Google
//                 </span>
//               </button>

//               <button
//                 type="button"
//                 className="w-full flex items-center justify-center space-x-3 border border-gray-300 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors"
//               >
//                 <span className="text-lg">🍎</span>
//                 <span className="font-medium text-gray-700">
//                   Continue with Apple
//                 </span>
//               </button>
//             </div>

//             <p className="text-center text-gray-600">
//               Don't have an account?{" "}
//               <button
//                 onClick={() => onNavigate("signup")}
//                 className="text-purple-600 font-semibold hover:underline"
//               >
//                 Sign up
//               </button>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };
