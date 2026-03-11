"use client";

import { PROFILE } from "@/data";
import { scrollTo } from "@/lib/utils";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle,#064e3b18 1px,transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%,rgba(5,150,105,.07) 0%,transparent 60%)",
        }}
      />

      <div className="relative z-[1] text-center max-w-[780px] px-6">
        {/* prompt */}
        <div className="font-mono text-[13px] text-emerald-600 mb-6 flex items-center justify-center gap-2 flex-wrap">
          <span className="text-green-400">root@server</span>
          <span className="text-gray-400">:~/portfolio$</span>
          <span className="text-emerald-100">whoami</span>
        </div>

        <h1 className="font-mono font-bold text-emerald-50 tracking-tight leading-[1.05] mb-2.5 text-[clamp(40px,6vw,76px)]">
          {PROFILE.name}
        </h1>

        <div className="font-mono text-emerald-600 mb-6 tracking-tight text-[clamp(14px,1.8vw,20px)]">
          <span className="text-gray-800">// </span>
          {PROFILE.role}
          <span
            className="text-green-400 ml-1.5"
            style={{ animation: "blink 1s step-end infinite" }}
          >
            █
          </span>
        </div>

        <p className="text-[15px] leading-[1.85] text-gray-700 max-w-[500px] mx-auto mb-9 font-sans">
          {PROFILE.tagline}
        </p>

        {/* stat pills */}
        <div className="flex gap-3 justify-center flex-wrap mb-9">
          {(
            [
              ["MERN", "Primary Stack"],
              ["REST", "API Design"],
              ["AI", "Integrations"],
              ["2026", "Grad Year"],
            ] as const
          ).map(([v, l]) => (
            <div
              key={l}
              className="bg-[#010b05] border border-emerald-950 rounded-md px-4 py-2.5 text-center"
            >
              <div className="font-mono text-[17px] font-bold text-green-400">
                {v}
              </div>
              <div className="font-mono text-[9px] text-emerald-900 tracking-wider mt-0.5">
                {l}
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-3 justify-center flex-wrap">
          <button
            onClick={() => scrollTo("projects")}
            className="font-mono text-xs px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-emerald-50 border-none rounded cursor-pointer tracking-wider transition-all duration-200 hover:-translate-y-px hover:shadow-[0_0_16px_rgba(5,150,105,.4)]"
          >
            ls ./projects
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="font-mono text-xs px-5 py-3 bg-transparent border border-emerald-950 hover:border-emerald-600 text-emerald-300 hover:text-emerald-200 hover:bg-emerald-950 rounded cursor-pointer tracking-wider transition-all duration-200"
          >
            cat contact.md
          </button>
        </div>

        {/* scroll hint */}
        <div className="mt-12 flex flex-col items-center gap-1.5 opacity-35">
          <span className="font-mono text-[9px] text-emerald-200 tracking-[.12em]">
            SCROLL TO TRAVEL
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-emerald-600 to-transparent" />
        </div>
      </div>
    </section>
  );
}
