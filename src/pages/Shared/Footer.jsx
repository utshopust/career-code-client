import React from "react";
import logo from "../../assets/logo/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-10 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Logo + Description */}
        <div>
          <img
            src={logo}
            alt="Career Code Logo"
            className="h-10 w-auto object-contain brightness-125 drop-shadow-[0_0_6px_rgba(0,153,255,0.35)] mb-3"
          />
          <p className="text-sm leading-relaxed">
            Career Code  
            <br />
            Helping learners grow in tech with real-world skills.
          </p>
        </div>

        {/* Services */}
        <div>
          <h6 className="text-white font-semibold mb-3">Services</h6>
          <ul className="space-y-1">
            <li className="hover:text-white cursor-pointer">Branding</li>
            <li className="hover:text-white cursor-pointer">Design</li>
            <li className="hover:text-white cursor-pointer">Marketing</li>
            <li className="hover:text-white cursor-pointer">Advertisement</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="text-white font-semibold mb-3">Company</h6>
          <ul className="space-y-1">
            <li className="hover:text-white cursor-pointer">About us</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">Jobs</li>
            <li className="hover:text-white cursor-pointer">Press kit</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h6 className="text-white font-semibold mb-3">Legal</h6>
          <ul className="space-y-1">
            <li className="hover:text-white cursor-pointer">Terms of use</li>
            <li className="hover:text-white cursor-pointer">Privacy policy</li>
            <li className="hover:text-white cursor-pointer">Cookie policy</li>
          </ul>
        </div>

      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Career Code. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
