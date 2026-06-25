import React from "react";
import {
     ArrowRight,
} from "lucide-react";
import { FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="/images/logo.png"
              alt="CommunityX"
              className="h-12 w-auto"
            />

            <p className="mt-5 text-gray-400 text-sm leading-relaxed">
              India's only full-engineering student universe.
              Code · Build · Learn · Grow.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:border-[#165dfc] hover:text-[#165dfc] transition"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:border-[#165dfc] hover:text-[#165dfc] transition"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:border-[#165dfc] hover:text-[#165dfc] transition"
              >
                <FaYoutube size={18} />
              </a>
            </div>

            {/* Store Buttons */}
            <div className="mt-8 space-y-3">
              <button className="w-full border border-white/10 rounded-xl px-4 py-3 text-left hover:border-[#165dfc] transition">
                <p className="text-[10px] text-gray-500 uppercase">
                  Get it on
                </p>
                <p className="font-medium">Google Play</p>
              </button>

              <button className="w-full border border-white/10 rounded-xl px-4 py-3 text-left hover:border-[#165dfc] transition">
                <p className="text-[10px] text-gray-500 uppercase">
                  Download on the
                </p>
                <p className="font-medium">App Store</p>
              </button>
            </div>
          </div>

          {/* Communities */}
          <div>
            <h3 className="text-xs tracking-[4px] uppercase text-gray-500 mb-6">
              Communities
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>
                <a href="#" className="hover:text-[#165dfc] transition">
                  OSCode
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#165dfc] transition">
                  OSEngiverse
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#165dfc] transition">
                  OSVolt
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#165dfc] transition">
                  Chapters
                </a>
              </li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-xs tracking-[4px] uppercase text-gray-500 mb-6">
              Platform
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>
                <a href="#" className="hover:text-[#165dfc] transition">
                  urBuddy Mentors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#165dfc] transition">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#165dfc] transition">
                  Podcasts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#165dfc] transition">
                  Leaderboard
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs tracking-[4px] uppercase text-gray-500 mb-6">
              Company
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>
                <a href="#" className="hover:text-[#165dfc] transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#165dfc] transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#165dfc] transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#165dfc] transition">
                  Partner with Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs tracking-[4px] uppercase text-gray-500 mb-6">
              Legal
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>
                <a href="#" className="hover:text-[#165dfc] transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#165dfc] transition">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#165dfc] transition">
                  Code of Conduct
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#165dfc] transition">
                  Cancellation & Refund
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 my-12" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026 HACKCOMM TECHNOLOGY PRIVATE LIMITED. All rights reserved.
          </p>

          <button className="border border-[#165dfc]/50 text-[#165dfc] px-6 py-3 rounded-xl font-medium hover:bg-[#165dfc] hover:text-white transition flex items-center gap-2">
            Partner with Us
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;