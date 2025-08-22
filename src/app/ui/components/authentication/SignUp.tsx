import React, { useState } from "react";
import logoImage from "../../../images/png/signup.png";

interface FormData {
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Handle form submission here
    }
  };

  const handleGoogleSignUp = () => {
    console.log("Sign up with Google");
    // Handle Google sign up
  };

  const handleAppleSignUp = () => {
    console.log("Sign up with Apple");
    // Handle Apple sign up
  };

  return (
    <div>
      <div className="text-center text-white p-6">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-4 leading-tight">
          Signup to Get Started
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Create your account to unlock all features
        </p>
      </div>
      <div className="flex items-center justify-center p-4">
        <div className="w-full max-w-6xl bg-white rounded-3xl overflow-hidden">
          <div className="flex flex-col lg:flex-row h-auto lg:h-[600px]">
            {/* Left side - Image */}
            <div className="lg:w-1/2 relative overflow-hidden">
              <div
                className="w-full h-64 lg:h-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${logoImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>

            {/* Right side - Form */}
            <div className="lg:w-1/2 p-6 lg:p-8 flex items-center">
              <div className="w-full max-w-sm mx-auto">
                <p className="text-gray-600 mb-6 text-sm">
                  We won't Share your email or phone number with anyone and it
                  won't be on your profile. It would only be used to recover
                  your account ASAP if you can't log in
                </p>

                <div className="space-y-4">
                  {/* Email Input */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 transition-colors text-sm ${
                        errors.email
                          ? "border-red-500 focus:ring-red-200"
                          : "border-gray-300 focus:ring-purple-200 focus:border-purple-500"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone Number Input */}
                  <div>
                    <input
                      type="tel"
                      name="phoneNumber"
                      placeholder="Phone number"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 transition-colors text-sm ${
                        errors.phoneNumber
                          ? "border-red-500 focus:ring-red-200"
                          : "border-gray-300 focus:ring-purple-200 focus:border-purple-500"
                      }`}
                    />
                    {errors.phoneNumber && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.phoneNumber}
                      </p>
                    )}
                  </div>

                  {/* Password Input */}
                  <div>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 transition-colors text-sm ${
                        errors.password
                          ? "border-red-500 focus:ring-red-200"
                          : "border-gray-300 focus:ring-purple-200 focus:border-purple-500"
                      }`}
                    />
                    {errors.password && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.password}
                      </p>
                    )}
                  </div>

                  {/* Confirm Password Input */}
                  <div>
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 transition-colors text-sm ${
                        errors.confirmPassword
                          ? "border-red-500 focus:ring-red-200"
                          : "border-gray-300 focus:ring-purple-200 focus:border-purple-500"
                      }`}
                    />
                    {errors.confirmPassword && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>

                  {/* Create Account Button */}
                  <button
                    onClick={handleSubmit}
                    className="w-full py-2.5 px-6 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-purple-200 text-sm"
                    style={{ backgroundColor: "#9333EA" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#7c3aed")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "#9333EA")
                    }
                  >
                    Create Account
                  </button>

                  {/* OR Divider */}
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">OR</span>
                    </div>
                  </div>

                  {/* Social Sign Up Buttons */}
                  <div className="space-y-2">
                    <button
                      type="button"
                      onClick={handleGoogleSignUp}
                      className="w-full py-2.5 px-6 border border-gray-300 rounded-lg font-semibold text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-3 text-sm"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                      Sign up with Google
                    </button>

                    <button
                      type="button"
                      onClick={handleAppleSignUp}
                      className="w-full py-2.5 px-6 border border-gray-300 rounded-lg font-semibold text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-3 text-sm"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.13997 6.91 8.85997 6.88C10.15 6.86 11.35 7.75 12.1 7.75C12.84 7.75 14.27 6.66 15.84 6.84C16.57 6.87 18.39 7.16 19.56 8.83C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                      </svg>
                      Sign up with Apple
                    </button>
                  </div>

                  {/* Sign In Link */}
                  <div className="text-center mt-4">
                    <p className="text-gray-600 text-sm">
                      Already have an account?{" "}
                      <button
                        type="button"
                        className="font-semibold hover:underline transition-colors duration-300"
                        style={{ color: "#FF6F61" }}
                      >
                        Sign in
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

// import React, { useState } from "react";
// import logoImage from "../../../images/png/signup.png";

// interface FormData {
//   email: string;
//   phoneNumber: string;
//   password: string;
//   confirmPassword: string;
// }

// const SignUp: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     email: "",
//     phoneNumber: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [errors, setErrors] = useState<Partial<FormData>>({});

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     // Clear error when user starts typing
//     if (errors[name as keyof FormData]) {
//       setErrors((prev) => ({
//         ...prev,
//         [name]: "",
//       }));
//     }
//   };

//   const validateForm = (): boolean => {
//     const newErrors: Partial<FormData> = {};

//     if (!formData.email) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Email is invalid";
//     }

//     if (!formData.phoneNumber) {
//       newErrors.phoneNumber = "Phone number is required";
//     }

//     if (!formData.password) {
//       newErrors.password = "Password is required";
//     } else if (formData.password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters";
//     }

//     if (!formData.confirmPassword) {
//       newErrors.confirmPassword = "Please confirm your password";
//     } else if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = () => {
//     if (validateForm()) {
//       console.log("Form submitted:", formData);
//       // Handle form submission here
//     }
//   };

//   const handleGoogleSignUp = () => {
//     console.log("Sign up with Google");
//     // Handle Google sign up
//   };

//   const handleAppleSignUp = () => {
//     console.log("Sign up with Apple");
//     // Handle Apple sign up
//   };

//   return (
//     <div>
//       <div className="text-center text-white p-8">
//         <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-6 leading-tight">
//           Join Our Community
//         </h2>
//         <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
//           Create your account and start your journey with us today
//         </p>
//       </div>
//       <div className="min-h-screen  flex items-center justify-center p-4">
//         <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">
//           <div className="flex flex-col lg:flex-row">
//             {/* Left side - Image */}
//             <div className="lg:w-1/2 relative overflow-hidden">
//               <div className="w-full h-full bg-cover bg-center bg-no-repeat min-h-96 lg:min-h-full flex items-center justify-center">
//                 <img
//                   src={logoImage}
//                   alt="Couple Image"
//                   className="h-64 w-auto md:h-80 lg:h-96"
//                 />
//               </div>
//             </div>

//             {/* Right side - Form */}
//             <div className="lg:w-1/2 p-8 lg:p-12">
//               <div className="max-w-md mx-auto">
//                 <p className="text-gray-600 mb-8">
//                   We won't Share your email or phone number with anyone and it
//                   won’t be on your profile. It would only be used to recover
//                   your account ASAP if you can’t log in
//                 </p>

//                 <div className="space-y-6">
//                   {/* Email Input */}
//                   <div>
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Enter your email address"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
//                         errors.email
//                           ? "border-red-500 focus:ring-red-200"
//                           : "border-gray-300 focus:ring-purple-200 focus:border-purple-500"
//                       }`}
//                     />
//                     {errors.email && (
//                       <p className="mt-1 text-sm text-red-500">
//                         {errors.email}
//                       </p>
//                     )}
//                   </div>

//                   {/* Phone Number Input */}
//                   <div>
//                     <input
//                       type="tel"
//                       name="phoneNumber"
//                       placeholder="Phone number"
//                       value={formData.phoneNumber}
//                       onChange={handleInputChange}
//                       className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
//                         errors.phoneNumber
//                           ? "border-red-500 focus:ring-red-200"
//                           : "border-gray-300 focus:ring-purple-200 focus:border-purple-500"
//                       }`}
//                     />
//                     {errors.phoneNumber && (
//                       <p className="mt-1 text-sm text-red-500">
//                         {errors.phoneNumber}
//                       </p>
//                     )}
//                   </div>

//                   {/* Password Input */}
//                   <div>
//                     <input
//                       type="password"
//                       name="password"
//                       placeholder="Password"
//                       value={formData.password}
//                       onChange={handleInputChange}
//                       className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
//                         errors.password
//                           ? "border-red-500 focus:ring-red-200"
//                           : "border-gray-300 focus:ring-purple-200 focus:border-purple-500"
//                       }`}
//                     />
//                     {errors.password && (
//                       <p className="mt-1 text-sm text-red-500">
//                         {errors.password}
//                       </p>
//                     )}
//                   </div>

//                   {/* Confirm Password Input */}
//                   <div>
//                     <input
//                       type="password"
//                       name="confirmPassword"
//                       placeholder="Confirm password"
//                       value={formData.confirmPassword}
//                       onChange={handleInputChange}
//                       className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
//                         errors.confirmPassword
//                           ? "border-red-500 focus:ring-red-200"
//                           : "border-gray-300 focus:ring-purple-200 focus:border-purple-500"
//                       }`}
//                     />
//                     {errors.confirmPassword && (
//                       <p className="mt-1 text-sm text-red-500">
//                         {errors.confirmPassword}
//                       </p>
//                     )}
//                   </div>

//                   {/* Create Account Button */}
//                   <button
//                     onClick={handleSubmit}
//                     className="w-full py-3 px-6 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-purple-200"
//                     style={{ backgroundColor: "#9333EA" }}
//                     onMouseEnter={(e) =>
//                       (e.currentTarget.style.backgroundColor = "#7c3aed")
//                     }
//                     onMouseLeave={(e) =>
//                       (e.currentTarget.style.backgroundColor = "#9333EA")
//                     }
//                   >
//                     Create Account
//                   </button>

//                   {/* OR Divider */}
//                   <div className="relative">
//                     <div className="absolute inset-0 flex items-center">
//                       <div className="w-full border-t border-gray-300"></div>
//                     </div>
//                     <div className="relative flex justify-center text-sm">
//                       <span className="px-2 bg-white text-gray-500">OR</span>
//                     </div>
//                   </div>

//                   {/* Social Sign Up Buttons */}
//                   <div className="space-y-3">
//                     <button
//                       type="button"
//                       onClick={handleGoogleSignUp}
//                       className="w-full py-3 px-6 border border-gray-300 rounded-lg font-semibold text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-3"
//                     >
//                       <svg className="w-5 h-5" viewBox="0 0 24 24">
//                         <path
//                           fill="#4285F4"
//                           d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                         />
//                         <path
//                           fill="#34A853"
//                           d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//                         />
//                         <path
//                           fill="#FBBC05"
//                           d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//                         />
//                         <path
//                           fill="#EA4335"
//                           d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//                         />
//                       </svg>
//                       Sign up with Google
//                     </button>

//                     <button
//                       type="button"
//                       onClick={handleAppleSignUp}
//                       className="w-full py-3 px-6 border border-gray-300 rounded-lg font-semibold text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-3"
//                     >
//                       <svg
//                         className="w-5 h-5"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.13997 6.91 8.85997 6.88C10.15 6.86 11.35 7.75 12.1 7.75C12.84 7.75 14.27 6.66 15.84 6.84C16.57 6.87 18.39 7.16 19.56 8.83C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
//                       </svg>
//                       Sign up with Apple
//                     </button>
//                   </div>

//                   {/* Sign In Link */}
//                   <div className="text-center mt-6">
//                     <p className="text-gray-600">
//                       Already have an account?
//                       <button
//                         type="button"
//                         className="font-semibold hover:underline transition-colors duration-300"
//                         style={{ color: "#FF6F61" }}
//                       >
//                         Sign in
//                       </button>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
