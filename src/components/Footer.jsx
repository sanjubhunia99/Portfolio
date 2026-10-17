import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="relative pt-3 bg-linear-to-tr from-[#0b1224ed] via-[#1e1b4bed] to-[#164e63ed] text-white mt-8 shadow-2xl overflow-x-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 pb-6 pt-8 flex flex-col md:flex-row md:justify-between items-center gap-6 md:gap-8">
        <div className="order-1 md:order-2 w-full flex justify-center">
          <img
            src="/Portfolio/UI-Developer.gif"
            alt="gif"
            className="w-24 sm:w-28 md:w-32 lg:w-44 rounded-xl"
          />
        </div>

        <div className="flex flex-col items-center order-2 md:order-3 w-full">
          <span className="text-base font-semibold mb-2 tracking-wide">
            Social Media
          </span>

          <div className="flex flex-wrap gap-4 mt-2 justify-center">
            <a
              href="https://www.instagram.com/thesanjubhunia99/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 bg-linear-to-tr from-pink-500 to-yellow-400 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl shadow-lg group-hover:scale-110 transition-all">
                <FaInstagram />
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/sanjubhunia99/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 bg-linear-to-tr from-blue-700 to-blue-400 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl shadow-lg group-hover:scale-110 transition-all">
                <FaLinkedin />
              </div>
            </a>

            <a
              href="https://github.com/sanjubhunia99/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 bg-linear-to-tr from-gray-800 to-gray-600 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl shadow-lg group-hover:scale-110 transition-all">
                <FaGithub />
              </div>
            </a>

            <a
              href="https://leetcode.com/u/sanjubhunia99/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 bg-linear-to-tr from-yellow-400 to-yellow-300 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl shadow-lg group-hover:scale-110 transition-all">
                <SiLeetcode />
              </div>
            </a>

            <a
              href="https://x.com/SanjuBhunia99"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 bg-linear-to-tr from-sky-500 to-blue-400 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl shadow-lg group-hover:scale-110 transition-all">
                <FaTwitter />
              </div>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start gap-2 order-3 md:order-1 w-full">
          <span className="text-base sm:text-lg font-semibold tracking-wide text-center md:text-left">
            Made with 🧡 and React
          </span>
          <span className="text-xs sm:text-sm opacity-80 text-center md:text-left">
            © {new Date().getFullYear()} Sanju Bhunia
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;