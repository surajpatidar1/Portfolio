import { EXPERIENCE, CERTIFICATIONS } from "@/data";
import TrackSection from "@/components/TrackSection";
import { Award } from "lucide-react";

interface ExperienceProps {
  isActive: boolean;
}

export default function Experience({ isActive }: ExperienceProps) {
  return (
    <TrackSection id="experience" side="left" isActive={isActive}>
      <div className="bg-[#010b05] border border-emerald-950 hover:border-emerald-600 hover:shadow-[0_0_28px_rgba(5,150,105,.12)] rounded-xl p-7 max-w-[540px] transition-all duration-300 animate-[fadeLeft_.55s_ease_both]">
        <div className="font-mono text-[9px] text-emerald-600 tracking-[.14em] mb-3.5">
          {"/** 04 · WORK **/"}
        </div>
        <h2 className="font-mono font-bold text-emerald-50 tracking-tight leading-[1.2] mb-6 text-[clamp(22px,2.5vw,34px)]">
          Where I&apos;ve shipped
        </h2>

        {EXPERIENCE.map((e, i) => (
          <div
            key={i}
            className="bg-[#010b05] border border-emerald-950 border-l-[3px] border-l-emerald-600 hover:border-emerald-600 rounded-lg p-5 mb-3 transition-colors duration-200"
          >
            <div className="flex justify-between items-start flex-wrap gap-2 mb-2.5">
              <div>
                <div className="font-mono text-[13px] font-semibold text-emerald-200 mb-0.5">
                  {e.role}
                </div>
                <div className="font-mono text-[11px] text-emerald-600">
                  {e.company}
                </div>
              </div>
              <span className="font-mono text-[9px] text-emerald-100 bg-[#020d07] border border-emerald-950 px-2.5 py-0.5 rounded-[3px] tracking-wider flex-shrink-0">
                
                            <p className="font-mono ml-auto text-[9px] text-green-400">
                 {e.period} ● live
            </p>
              </span>
            </div>
            <p className="text-[12.5px] text-gray-400 leading-[1.75] mb-3">
              {e.desc}
            </p>
            <div className="flex gap-1.5 flex-wrap">
              {e.tags.map((t) => (
                <span
                  key={t}
                  className="bg-emerald-950 text-emerald-300 text-[10px] font-mono px-2 py-0.5 rounded-[3px] border border-emerald-950"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* certifications */}
        <div className="mt-5">
          <div className="font-mono text-[9px] text-emerald-900 tracking-[.12em] mb-2.5">
            CERTIFICATIONS
          </div>
          {CERTIFICATIONS.map((c) => (
            <div
              key={c.name}
              className="bg-[#020d07] border border-emerald-950 rounded-md px-4 py-3 flex items-center gap-3"
            >
              <span className="text-base"><Award color="#5cc768" /></span>
              <div>
                <div className="font-mono text-xs font-semibold text-emerald-200">
                  {c.name}
                </div>
                <div className="font-mono text-[10px] text-emerald-900 mt-0.5">
                  {c.issuer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </TrackSection>
  );
}
