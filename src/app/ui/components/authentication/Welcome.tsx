import React from "react";
import logoImage from "../../../images/png/welcome-Image.png";

type AuthScreen =
  | "welcome"
  | "signup"
  | "signin"
  | "forgot-password"
  | "verification";

const Welcome: React.FC<{
  onNavigate: (screen: AuthScreen) => void;
}> = ({ onNavigate }) => (
  <div className="min-h-screen flex items-center justify-center p-4">
    <div className="w-full max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-6 leading-tight">
          Welcome to Tickle my Fancy
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Find meaningful connections in a safe and vibrant space
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
        <button
          onClick={() => onNavigate("signup")}
          className="px-8 py-2 rounded-full bg-purple-600 text-white font-semibold shadow-md hover:bg-purple-700 transition-colors"
        >
          Sign up
        </button>
        <button
          onClick={() => onNavigate("signin")}
          className="px-8 py-2 rounded-full border-2 border-purple-600 text-purple-600 font-semibold hover:bg-purple-50 transition-colors"
        >
          Sign in
        </button>
      </div>

      {/* Image Section */}
      <div className="flex justify-center">
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-xl">
          <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-8 flex items-center justify-center">
            <img
              src={logoImage}
              alt="Welcome Image"
              className="h-64 w-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Welcome;

// import React from "react";
// import logoImage from "../../../images/png/welcome-Image.png";

// type AuthScreen =
//   | "welcome"
//   | "signup"
//   | "signin"
//   | "forgot-password"
//   | "verification";

// const Welcome: React.FC<{
//   onNavigate: (screen: AuthScreen) => void;
// }> = ({ onNavigate }) => (
//   <div className="min-h-screen  flex items-center justify-center p-4">
//     <div className="w-full ">
//       <div className="text-center mb-12">
//         <h1 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-6 leading-tight">
//           Welcome to Tickle my Fancy
//         </h1>
//         <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
//           Find meaningful connections in a safe and vibrant space
//         </p>
//       </div>

//       {/* cta */}
//       <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//         <button
//           onClick={() => onNavigate("signup")}
//           className="px-6 py-3 rounded-full bg-purple-600 text-white font-semibold shadow-md hover:bg-purple-700 transition-colors"
//         >
//           Sign up
//         </button>
//         <button
//           onClick={() => onNavigate("signin")}
//           className="px-6 py-3 rounded-full border-2 border-purple-600 text-purple-600 font-semibold hover:bg-purple-50 transition-colors"
//         >
//           Sign in
//         </button>
//       </div>

//       <div className="  bg-white rounded-3xl overflow-hidden shadow-2xl mb-6 mt-8 max-w-lg mx-auto">
//         <div className="h-64 bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
//           <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
//             <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center">
//               <span className="text-white text-2xl">
//                 <img
//                   src={logoImage}
//                   alt="Couple Image"
//                   className="h-64 w-auto md:h-80 lg:h-96"
//                 />
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* <div>
//         <img
//           src={logoImage}
//           alt="Couple Image"
//           className="h-64 w-auto md:h-80 lg:h-96"
//         />
//       </div> */}
//     </div>
//   </div>
// );

// export default Welcome;
