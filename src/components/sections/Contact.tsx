"use client";

import { useState } from "react";
import { PROFILE } from "@/data";
import TrackSection from "@/components/TrackSection";
import ApiLog from "@/components/ui/ApiLog";

interface ContactProps {
  isActive: boolean;
}

export default function Contact({ isActive }: ContactProps) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard?.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <TrackSection id="contact" side="right" isActive={isActive}>
      <div className="bg-[#010b05] border border-emerald-950 hover:border-emerald-600 hover:shadow-[0_0_28px_rgba(5,150,105,.12)] rounded-xl p-7 max-w-[490px] transition-all duration-300 animate-[fadeRight_.55s_ease_both]">
        <div className="font-mono text-[9px] text-emerald-600 tracking-[.14em] mb-3.5">
          {"/** 05 · CONNECT **/"}
        </div>

        {/* SQL query */}
        <div className="font-mono text-[11px] text-emerald-600 mb-4 leading-[1.7]">
          <span className="text-green-400">SELECT</span> *{" "}
          <span className="text-green-400">FROM</span> opportunities{" "}
          <span className="text-green-400">WHERE</span> interesting ={" "}
          <span className="text-amber-400">true</span>;
        </div>

        <h2 className="font-mono font-bold text-emerald-50 tracking-tight leading-[1.15] mb-3.5 text-[clamp(22px,2.5vw,34px)]">
          Let&apos;s talk
          <br />
          <span className="text-emerald-600 font-normal">backend.</span>
        </h2>

        <p className="text-[13.5px] text-gray-500 leading-[1.8] mb-5">
          Open to internships and full-time software development roles. Willing
          to relocate. Response time: &lt;24h.
        </p>

        {/* contact details */}
        <div className="flex flex-col gap-2 mb-5">
          {(
            [
              ["✉", "email", PROFILE.email],
              ["☎", "phone", PROFILE.phone],
            ] as const
          ).map(([icon, label, val]) => (
            <div
              key={label}
              className="bg-[#020d07] border border-emerald-950 rounded-md px-3.5 py-2.5 flex items-center gap-2.5"
            >
              <span className="text-emerald-600 text-[13px]">{icon}</span>
              <span className="font-mono text-[10px] text-emerald-900 min-w-[36px]">
                {label}
              </span>
              <span className="font-mono text-[11px] text-emerald-200">
                {val}
              </span>
            </div>
          ))}
        </div>

        <div className="flex gap-2.5 flex-wrap mb-4">
          <button
            onClick={copy}
            className="font-mono text-xs px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-emerald-50 border-none rounded cursor-pointer tracking-wider transition-all duration-200 hover:-translate-y-px hover:shadow-[0_0_16px_rgba(5,150,105,.4)]"
          >
            {copied ? "✓ Copied!" : `${PROFILE.email} →`}
          </button>
        </div>

        <div className="flex gap-2 flex-wrap mb-5">
          {(
            [
              ["LinkedIn ↗", PROFILE.linkedin],
              ["Portfolio ↗", PROFILE.portfolio],
              [`Email ↗`, `mailto:${PROFILE.email}`],
            ] as const
          ).map(([label, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[10px] text-emerald-900 px-3 py-1.5 bg-[#010b05] border border-emerald-950 hover:border-emerald-600 hover:text-green-400 rounded no-underline transition-all duration-200"
            >
              {label}
            </a>
          ))}
        </div>

        {/* live terminal */}
        <div className="bg-[#010b05] border border-emerald-950 rounded-lg overflow-hidden">
          <div className="bg-[#020d07] border-b border-emerald-950 px-3.5 py-2 flex items-center gap-1.5">
            {["#ef4444", "#f59e0b", "#22c55e"].map((c) => (
              <div
                key={c}
                className="w-2 h-2 rounded-full opacity-60"
                style={{ background: c }}
              />
            ))}
            <span className="font-mono text-[9px] text-emerald-900 ml-1.5">
              lottery-api · Bheema Infotech
            </span>
            <span className="font-mono ml-auto text-[9px] text-green-400">
              ● live
            </span>
          </div>
          <div className="px-4 py-3.5">
            <ApiLog />
          </div>
        </div>
      </div>
    </TrackSection>
  );
}
