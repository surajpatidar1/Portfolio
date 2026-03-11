"use client";

import { useState } from "react";
import { STOPS } from "@/data";
import { scrollTo } from "@/lib/utils";

interface NavbarProps {
  active: number;
  scrolled: boolean;
}

export default function Navbar({ active, scrolled }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id: string) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[4%] h-14 border-b border-emerald-950 backdrop-blur-lg transition-all duration-300 ${
          scrolled ? "bg-[#020d07]/96" : "bg-[#020d07]/82"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-[30px] h-[30px] bg-emerald-950 border border-emerald-600 rounded-md flex items-center justify-center flex-shrink-0">
            <span className="font-mono text-xs text-green-400 font-bold">{">"}_</span>
          </div>
          <span className="font-mono text-[13px] text-emerald-200 font-semibold">
            suraj<span className="text-emerald-600">@backend</span>
            <span className="text-gray-600">:~$</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-0.5">
          {STOPS.slice(1).map((s, i) => (
            <button
              key={s.id}
              onClick={() => handleNav(s.id)}
              className={`font-mono text-[11px] px-2.5 py-1.5 rounded bg-transparent border-none cursor-pointer tracking-wider transition-colors duration-200 ${
                active === i + 1
                  ? "text-green-400"
                  : "text-gray-500 hover:text-gray-400"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => handleNav("contact")}
            className="font-mono text-[11px] px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-emerald-50 border-none rounded cursor-pointer tracking-wider transition-all duration-200 hover:-translate-y-px hover:shadow-[0_0_16px_rgba(5,150,105,.4)]"
          >
            ./hire_me.sh
          </button>
        </div>

        {/* Mobile Right: status dot + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
            <span className="font-mono text-[9px] text-emerald-900">ONLINE</span>
          </div>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex flex-col justify-center items-center w-8 h-8 gap-1.5 bg-transparent border-none cursor-pointer"
          >
            <span
              className={`block w-5 h-px bg-emerald-400 transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-emerald-400 transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-emerald-400 transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed top-14 left-0 right-0 z-40 md:hidden border-b border-emerald-950 backdrop-blur-lg bg-[#020d07]/97 transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-screen py-3" : "max-h-0 py-0"
        }`}
      >
        <div className="flex flex-col px-[4%] gap-1">
          {STOPS.slice(1).map((s, i) => (
            <button
              key={s.id}
              onClick={() => handleNav(s.id)}
              className={`font-mono text-[12px] text-left px-3 py-3 rounded border-none cursor-pointer tracking-wider transition-colors duration-200 flex items-center gap-3 ${
                active === i + 1
                  ? "text-green-400 bg-emerald-950/40"
                  : "text-gray-600 hover:text-gray-400 hover:bg-emerald-950/20"
              }`}
            >
              <span className="text-emerald-900 text-[10px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              {s.label}
              {active === i + 1 && (
                <span className="ml-auto w-1 h-1 rounded-full bg-green-400" />
              )}
            </button>
          ))}

          <div className="mt-2 pt-3 border-t border-emerald-950">
            <button
              onClick={() => handleNav("contact")}
              className="w-full font-mono text-[11px] px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-emerald-50 border-none rounded cursor-pointer tracking-wider transition-all duration-200"
            >
              ./hire_me.sh
            </button>
          </div>
        </div>
      </div>
    </>
  );
}