import React from "react";
import { FaWhatsapp, FaInstagram, FaLinkedinIn, FaAngleDoubleUp } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-slate-900 to-slate-800 backdrop-blur-md border-t border-white/20 text-white px-6 py-8 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
      {/* Scroll to Top */}
      <div className="flex justify-center mb-6">
        <a href="#top" className="group transition-all duration-300">
          <FaAngleDoubleUp className="text-4xl animate-bounce group-hover:text-sky-400 group-hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.8)] transition-all" />
        </a>
      </div>

      {/* Message */}
      <div className="text-center mb-6">
        <p className="text-2xl font-semibold tracking-wide drop-shadow-md">
          Let’s build something together 🚀
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-8 mb-6">
        {[
          { icon: <IoLogoGithub />, link: "https://github.com/surajpatidar1" },
          { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/suraj-patidar-777940279/" },
          { icon: <FaInstagram />, link: "https://www.instagram.com/sooraj__patidar/" },
          { icon: <FaWhatsapp />, link: "https://wa.me/916262922460" }
        ].map((social, idx) => (
          <a
            key={idx}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]"
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Divider */}
      <hr className="w-[50%] mx-auto border-white/20" />

      {/* Bottom Text */}
      <div className="text-center pt-4 text-xs text-white/70">
        <p>© 2025 Suraj Patidar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
