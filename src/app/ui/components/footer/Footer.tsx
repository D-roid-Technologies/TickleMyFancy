import React from "react";
import Trackle_footer_img from "../../../../assets/Tickle_footer_img.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-2 py-10 flex flex-col md:flex-row md:justify-around md:items-start space-y-8 md:space-y-0">
        <div className="max-w-sm mr-10">
          <h2 className="text-2xl font-bold">
            <img
              className="w-[122px] h-[70px]"
              src={Trackle_footer_img}
              alt="Tickle My Fancy"
            />{" "}
          </h2>
          <p className="mt-4 text-[#000000] w-[325px]">
            We’re building more than just matches. We’re creating a safe space
            to vibe, connect, and maybe fall a little in love
          </p>

          <div className="mt-6 flex">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-4 w-10 h-[50px] border border-gray-300 rounded-l-2xl focus:outline-none focus:ring-pink-400"
            />

            <button className="bg-[#FB00B5] text-white px-5  rounded-r-2xl hover:bg-[#FB00B5]">
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex space-x-12 ml-20">
          <div>
            <h3 className="font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <a href="#">What We Do</a>
              </li>
              <li>
                <a href="#">How It Works</a>
              </li>
              <li>
                <a href="#">Safety & Privacy</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Discover</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <a href="#">Stories</a>
              </li>
              <li>
                <a href="#">Vibe Gallery</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Press Kit</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-red-400 text-center py-4">
        <p className="text-white text-sm">
          © 2025 [Your Product Name]. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
