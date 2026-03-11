import { PROFILE } from "@/data";
import TrackSection from "@/components/TrackSection";
import {GraduationCap} from "lucide-react"
interface AboutProps {
  isActive: boolean;
}

export default function About({ isActive }: AboutProps) {
  return (
    <TrackSection id="about" side="right" isActive={isActive}>
      <div className="w-full md:max-w-[520px] bg-[#010b05] border border-emerald-950 hover:border-emerald-600 hover:shadow-[0_0_28px_rgba(5,150,105,.12)] rounded-xl p-5 md:p-7 transition-all duration-300 animate-[fadeRight_.55s_ease_both]">
        
        <div className="font-mono text-[9px] text-emerald-300 tracking-[.14em] mb-3.5">
          {"/** 01 · ABOUT **/"}
        </div>

        <h2 className="font-mono font-bold text-emerald-50 tracking-tight leading-[1.2] mb-4 text-[clamp(22px,2.5vw,34px)]">
          I build <span className="text-emerald-600">backends</span>.
          <br />
          <span className="text-gray-700 font-normal text-[68%]">
            {"// that actually work"}
          </span>
        </h2>

        <p className="text-[14px] leading-[1.85] text-gray-200 mb-3">
          {PROFILE.bio1}
        </p>
        <p className="text-[14px] leading-[1.85] text-gray-300 mb-5">
          {PROFILE.bio2}
        </p>

        {/* education */}
        <div className="bg-[#020d07] border border-emerald-950 rounded-lg px-4 py-3.5 mb-5 flex gap-3 items-start">
          <span className="text-lg flex-shrink-0"><GraduationCap color="#5cc768" size={30} /></span>
          <div>
            <div className="font-mono text-xs font-semibold text-emerald-200 mb-0.5">
              {PROFILE.education.degree}
            </div>
            <div className="font-mono text-[10px] text-emerald-500">
              {PROFILE.education.college}
            </div>
            <div className="font-mono text-[10px] text-gray-400 mt-0.5">
              {PROFILE.education.year}
            </div>
          </div>
        </div>

        {/* mini stats */}
        <div className="grid grid-cols-2 gap-2.5">
          {(
            [
              ["MERN", "Primary stack"],
              ["REST", "API design"],
              ["AI", "LLM integrations"],
              ["2026", "Grad year"],
            ] as const
          ).map(([n, l]) => (
            <div
              key={l}
              className="bg-[#020d07] border border-emerald-950 rounded-md px-3.5 py-3"
            >
              <div className="font-mono text-[22px] text-green-400 font-bold leading-none">
                {n}
              </div>
              <div className="font-mono text-[9px] text-emerald-600 mt-1.5 leading-[1.4] tracking-wider">
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </TrackSection>
  );
}