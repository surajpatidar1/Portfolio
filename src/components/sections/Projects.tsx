import { PROJECTS, METHOD_COLORS } from "@/data";
import TrackSection from "@/components/TrackSection";

interface ProjectsProps {
  isActive: boolean;
}

export default function Projects({ isActive }: ProjectsProps) {
  return (
    <TrackSection id="projects" side="left" isActive={isActive}>
      <div className="bg-[#010b05] border border-emerald-950 hover:border-emerald-600 hover:shadow-[0_0_28px_rgba(5,150,105,.12)] rounded-xl p-7 max-w-[560px] transition-all duration-300 animate-[fadeLeft_.55s_ease_both]">
        <div className="font-mono text-[9px] text-emerald-600 tracking-[.14em] mb-3.5">
          {"/** 02 · PROJECTS **/"}
        </div>
        <h2 className="font-mono font-bold text-emerald-50 tracking-tight leading-[1.2] mb-1.5 text-[clamp(22px,2.5vw,34px)]">
          Things I&apos;ve built
        </h2>
        <div className="font-mono text-[11px] text-gray-600 mb-5">
          $ ls -la ./repos{" "}
          <span className="text-emerald-500">
            → {PROJECTS.length} projects found
          </span>
        </div>

        <div className="flex flex-col gap-3.5">
          {PROJECTS.map((p) => {
            const mc = METHOD_COLORS[p.method] ?? {
              bg: "bg-gray-900",
              color: "text-gray-400",
              border: "border-gray-700",
            };
            return (
              <div
                key={p.name}
                className="bg-[#010b05] border border-emerald-950 hover:border-emerald-800 hover:shadow-[0_0_18px_rgba(5,150,105,.1)] rounded-lg p-4 relative overflow-hidden transition-all duration-200 group"
              >
                {/* top shimmer on hover */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-center gap-1.5 mb-2.5 flex-wrap">
                  <span
                    className={`font-mono text-[9px] font-bold px-1.5 py-0.5 rounded-[3px] border tracking-wider flex-shrink-0 ${mc.bg} ${mc.color} ${mc.border}`}
                  >
                    {p.method}
                  </span>
                  <span className="font-mono text-[10px] text-gray-600 flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                    {p.route}
                  </span>
                  <span className="font-mono text-[9px] text-gray-700 bg-[#020d07] border border-emerald-950 px-1.5 py-0.5 rounded-[3px] flex-shrink-0">
                    {p.badge}
                  </span>
                </div>

                <div className="font-mono text-[13px] font-semibold text-emerald-200 mb-0.5">
                  {p.name}
                </div>
                <div className="font-mono text-[11px] font-medium text-emerald-300 mb-2">
                  {p.tagline}
                </div>
                <p className="text-[12.5px] text-gray-500 leading-[1.65] mb-3">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="bg-emerald-950 text-emerald-300 text-[10px] font-mono px-2 py-0.5 rounded-[3px] border border-emerald-950"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </TrackSection>
  );
}
