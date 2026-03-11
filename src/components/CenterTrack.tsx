"use client";

interface CenterTrackProps {
  frac: number;
}

function TrainMarker() {
  return (
    <div className="relative w-9 h-9 flex items-center justify-center">
      {/* pulse halo */}
      <div className="absolute inset-[-8px] rounded-full bg-[radial-gradient(circle,rgba(5,150,105,.28)_0%,transparent_70%)] animate-pulse" />
      {/* orbit ring */}
      <div
        className="absolute inset-0 rounded-full border border-emerald-600 opacity-55"
        style={{ animation: "spin 6s linear infinite" }}
      >
        <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-green-400" />
      </div>
      {/* core dot */}
      <div className="w-3 h-3 rounded-full bg-emerald-600 shadow-[0_0_0_3px_#020d07,0_0_14px_#059669,0_0_28px_rgba(5,150,105,.4)] z-10" />
      {/* blink dot */}
      <div
        className="absolute top-[3px] right-[3px] w-1 h-1 rounded-full bg-green-400"
        style={{ animation: "blink 1.6s ease-in-out infinite" }}
      />
    </div>
  );
}

export default function CenterTrack({ frac }: CenterTrackProps) {
  const trainTop =
    typeof window !== "undefined"
      ? 56 + frac * (window.innerHeight - 56 - 80)
      : 56;

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-10 flex justify-center">
        <div className="relative w-0.5">
          {/* dim base rail */}
          <div
            className="absolute left-0 w-0.5 bg-emerald-950 opacity-30"
            style={{ top: 56, bottom: 0 }}
          />
          {/* lit rail */}
          <div
            className="absolute left-0 w-0.5 bg-gradient-to-b from-emerald-600 to-emerald-400 shadow-[0_0_8px_#059669] transition-[height] duration-75 ease-linear"
            style={{ top: 56, height: `calc(${frac * 100}% - 56px)` }}
          />
          {/* sleeper ticks */}
          {Array.from({ length: 50 }).map((_, i) => {
            const lit = i / 50 <= frac;
            return (
              <div
                key={i}
                className={`absolute h-0.5 rounded-sm transition-colors duration-300 ${
                  lit ? "bg-emerald-600 opacity-50" : "bg-emerald-950 opacity-20"
                }`}
                style={{
                  top:
                    typeof window !== "undefined"
                      ? 56 + i * (window.innerHeight / 6.2)
                      : 56 + i * 120,
                  left: -7,
                  width: 16,
                }}
              />
            );
          })}
          {/* train marker */}
          <div
            className="fixed left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 transition-[top] duration-[90ms] ease-linear"
            style={{ top: trainTop }}
          >
            <TrainMarker />
          </div>
        </div>
      </div>

      {/* scanline */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute left-0 right-0 h-0.5 bg-green-400/[.01]"
          style={{ animation: "scanline 12s linear infinite" }}
        />
      </div>
    </>
  );
}
