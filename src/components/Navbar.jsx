import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  Home,
  GraduationCap,
  Users,
  Ticket,
  MessageSquare,
} from "lucide-react";

const navItems = [
  { name: "Home", href: "#" },
  { name: "Chapters", href: "#" },
  { name: "Community", href: "#" },
  { name: "Events", href: "#" },
  { name: "Mentorship", href: "#" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">

          <a href="/">
            <img
              src="/images/logo.png"
              alt="CommunityX"
              className="h-10 w-auto"
            />
          </a>

          <div className="hidden lg:flex items-center gap-8 text-sm">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button className="px-4 py-2 rounded-xl text-xs border border-white/20 text-white hover:bg-white/10 transition">
              Partner with Us
            </button>

            <button className="px-4 py-2 rounded-xl text-xs bg-white text-black font-semibold hover:bg-gray-200 transition">
              Become Chapter Lead
            </button>
          </div>

          <div className="lg:hidden flex items-center gap-3">
            <button className="bg-white text-black px-4 py-2 rounded-xl font-semibold text-sm">
              Become Lead
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-5 pt-4">


            <button className="border border-white/20 text-white px-4 py-3 rounded-xl text-left">
              Partner with Us
            </button>
          </div>
        </div>
      </div>
    <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-black border-t border-white/10 z-50">
     <div className="flex justify-around items-center py-3">
       <a
         href="#"
         className="flex flex-col items-center text-gray-400"
       >
         <Home size={22} />
         <span className="text-xs mt-1">Home</span>
       </a>
   
       <a
         href="#"
         className="flex flex-col items-center text-[#165dfc]"
       >
         <GraduationCap size={22} />
         <span className="text-xs mt-1">Chapters</span>
       </a>
   
       <a
         href="#"
         className="flex flex-col items-center text-gray-400"
       >
         <Users size={22} />
         <span className="text-xs mt-1">Community</span>
       </a>
   
       <a
         href="#"
         className="flex flex-col items-center text-gray-400"
       >
         <Ticket size={22} />
         <span className="text-xs mt-1">Events</span>
       </a>
   
       <a
         href="#"
         className="flex flex-col items-center text-gray-400"
       >
         <MessageSquare size={22} />
         <span className="text-xs mt-1">Mentorship</span>
       </a>
     </div>
    </div>
    </nav>
  );
};

export default Navbar;