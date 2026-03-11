"use client";

import { useState, useEffect, useRef } from "react";
import { API_LINES } from "@/data";

const LOG_COLORS: Record<string, string> = {
  req: "text-sky-400",
  res: "text-emerald-400",
  ok: "text-green-400",
  sql: "text-amber-400",
  dim: "text-gray-700",
  win: "text-lime-400",
};

export default function ApiLog() {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (n >= API_LINES.length) return;
    const t = setTimeout(() => setN((x) => x + 1), 420);
    return () => clearTimeout(t);
  }, [n]);

  useEffect(() => {
    if (ref.current) ref.current.scrollTop = ref.current.scrollHeight;
  }, [n]);

  return (
    <div
      ref={ref}
      className="font-mono text-[10.5px] leading-[1.9] overflow-y-auto max-h-52"
    >
      <div className="text-gray-800 mb-2 text-[9px] tracking-wider">
        ▸ LOTTERY API · :8080 · {new Date().toISOString().slice(0, 10)}
      </div>
      {API_LINES.slice(0, n).map((line, i) => (
        <div key={i} className="flex gap-3">
          <span className="text-gray-800 min-w-[42px] flex-shrink-0">
            {line.t}
          </span>
          <span className={LOG_COLORS[line.type] ?? "text-gray-500"}>
            {line.m}
          </span>
        </div>
      ))}
      {n < API_LINES.length && (
        <span
          className="text-green-400"
          style={{ animation: "blink 1s step-end infinite" }}
        >
          █
        </span>
      )}
    </div>
  );
}
