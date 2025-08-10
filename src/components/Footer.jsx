import React from "react";
import logo from '../assets/logo.svg';
import googlePlay from '../assets/googlePlay.svg';
import appStore from '../assets/appStore.svg';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-6 mt-16 md:px-16 lg:px-36 w-full text-gray-300 bg-[#111] pt-12">
      <div className="flex flex-col md:flex-row justify-between gap-10 border-b border-gray-500 pb-10">
        
        {/* Left Section */}
        <div className="md:max-w-96">
          <img className="w-36 h-auto" src={logo} alt="Company logo" />
          <p className="mt-4 text-sm">
            Bringing entertainment closer to you – anytime, anywhere.
          </p>

          {/* Store Buttons */}
          <div className="flex flex-wrap gap-2 mt-4">
            <img src={googlePlay} alt="Download on Google Play" className="h-9 w-auto" />
            <img src={appStore} alt="Download on App Store" className="h-9 w-auto" />
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-lg">
            <a href="#"><FaFacebookF className="hover:text-white transition" /></a>
            <a href="#"><FaTwitter className="hover:text-white transition" /></a>
            <a href="#"><FaInstagram className="hover:text-white transition" /></a>
            <a href="#"><FaLinkedinIn className="hover:text-white transition" /></a>
          </div>
        </div>

        {/* Right Section - Grid Layout */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          
          {/* Company Links */}
          <div>
            <h2 className="font-semibold mb-4 text-white">Company</h2>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h2 className="font-semibold mb-4 text-white">Support</h2>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">FAQs</a></li>
              <li><a href="#" className="hover:text-white">Feedback</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="font-semibold mb-4 text-white">Stay Updated</h2>
            <p className="text-sm mb-3">Subscribe for updates and offers</p>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 px-3 py-2 rounded-md text-sm outline-none mb-2 sm:mb-0 sm:rounded-l-md sm:rounded-r-none w-full sm:w-auto flex-1"
              />
              <button className="bg-blue-600 px-4 py-2 rounded-md sm:rounded-l-none sm:rounded-r-md text-sm hover:bg-blue-700 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-400 pt-6 pb-4">
        <p>© {new Date().getFullYear()} @ Sumant. All Rights Reserved.</p>
        <a href="#" className="text-blue-500 hover:underline mt-2 inline-block">Back to top ↑</a>
      </div>
    </footer>
  );
};

export default Footer;
