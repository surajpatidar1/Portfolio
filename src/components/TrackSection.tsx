import { ReactNode } from "react";

interface TrackSectionProps {
  id: string;
  side?: "left" | "right";
  isActive: boolean;
  children: ReactNode;
}

export default function TrackSection({
  id,
  side = "left",
  isActive,
  children,
}: TrackSectionProps) {
  return (
    <div id={id} className="relative min-h-screen flex items-center">

      {/* ── Mobile: single centered column ── */}
      <div className="flex md:hidden w-full px-4 py-20 justify-center">
        {children}
      </div>

      {/* ── Desktop: 3-column rail layout ── */}
      <div
        className="hidden md:grid w-full min-h-screen items-center"
        style={{ gridTemplateColumns: "1fr 72px 1fr" }}
      >
        {/* Left slot */}
        <div className={`py-20 pl-[5%] pr-12 flex ${side === "left" ? "justify-end" : "justify-start"}`}>
          {side === "left" && children}
        </div>

        {/* Center connector */}
        <div className="relative h-full flex justify-center">
          <div
            className={`absolute top-1/2 -translate-y-1/2 h-px transition-colors duration-300 ${
              isActive ? "bg-emerald-600" : "bg-emerald-950"
            } ${side === "left" ? "right-9" : "left-9"}`}
            style={{ width: 36 }}
          />
          <div
            className={`absolute top-1/2 -translate-y-1/2 rounded-full z-[2] border-2 transition-all duration-350 ${
              isActive
                ? "w-3.5 h-3.5 bg-emerald-600 border-green-400 shadow-[0_0_10px_#059669,0_0_20px_rgba(5,150,105,.4)]"
                : "w-2.5 h-2.5 bg-[#022c22] border-emerald-950"
            }`}
          />
        </div>

        {/* Right slot */}
        <div className={`py-20 pr-[5%] pl-12 flex ${side === "right" ? "justify-start" : "justify-end"}`}>
          {side === "right" && children}
        </div>
      </div>

    </div>
  );
}