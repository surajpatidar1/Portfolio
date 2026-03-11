import { TICKER, PROFILE } from "@/data";

export function MarqueeBar() {
  return (
    <div className="bg-[#010b05] border-t border-b border-emerald-950 py-2.5 overflow-hidden">
      <div
        className="inline-flex"
        style={{ animation: "marquee 32s linear infinite" }}
      >
        {TICKER.map((t, i) => (
          <span
            key={i}
            className={`font-mono text-[10px] px-5 ${
              i % 3 === 0 ? "text-white" : "text-white/80"
            }`}
          >
            {i % 2 === 0 ? "◆" : "/"} {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#010b05] border-t border-emerald-600 py-4 px-[5%] flex justify-between items-center flex-wrap gap-2 relative z-[5]">
      <span className="font-mono text-[9px] text-gray-300">
        © 2026 {PROFILE.name} · {PROFILE.email} · 
      </span>
      <div className="flex items-center gap-1.5">
        <span className="w-[5px] h-[5px] rounded-full bg-green-400 inline-block animate-pulse" />
        <span className="font-mono text-[9px] text-emerald-500">
          all systems nominal
        </span>
      </div>
    </footer>
  );
}
