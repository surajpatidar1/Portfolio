import { SKILLS, TECH_TABLE } from "@/data";
import TrackSection from "@/components/TrackSection";
import SkillBar from "@/components/ui/SkillBar";

interface SkillsProps {
  isActive: boolean;
}

export default function Skills({ isActive }: SkillsProps) {
  return (
    <TrackSection id="skills" side="right" isActive={isActive}>
      <div className="bg-[#010b05] border border-emerald-950 hover:border-emerald-600 hover:shadow-[0_0_28px_rgba(5,150,105,.12)] rounded-xl p-7 max-w-[530px] transition-all duration-300 animate-[fadeRight_.55s_ease_both]">
        <div className="font-mono text-[9px] text-emerald-600 tracking-[.14em] mb-3.5">
          {"/** 03 · STACK **/"}
        </div>
        <h2 className="font-mono font-bold text-emerald-50 tracking-tight leading-[1.2] mb-6 text-[clamp(22px,2.5vw,34px)]">
          Tools of the trade
        </h2>

        <div className="mb-6">
          {SKILLS.map((s, i) => (
            <SkillBar key={s.name} name={s.name} pct={s.pct} delay={i * 100} />
          ))}
        </div>

        {/* SQL table */}
        <div className="bg-[#020d07] border border-emerald-950 rounded-lg px-4 py-4">
          <div className="font-mono text-[9px] text-emerald-900 tracking-wider mb-3">
            CREATE TABLE tech_stack (
          </div>
          {TECH_TABLE.map(({ col, val }) => (
            <div key={col} className="flex gap-2 flex-wrap mb-1.5">
              <span className="font-mono text-[9px] text-emerald-600 min-w-[90px] flex-shrink-0">
                {col}
              </span>
              <span className="font-mono text-[9px] text-gray-500">
                TEXT -- {val}
              </span>
            </div>
          ))}
          <div className="font-mono text-[9px] text-emerald-900 mt-2">);</div>
        </div>
      </div>
    </TrackSection>
  );
}
