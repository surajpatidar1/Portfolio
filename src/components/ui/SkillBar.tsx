"use client";

import { useState, useEffect, useRef } from "react";

interface SkillBarProps {
  name: string;
  pct: number;
  delay: number;
}

export default function SkillBar({ name, pct, delay }: SkillBarProps) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(pct), delay);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [pct, delay]);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="font-mono text-[12px] text-emerald-100">{name}</span>
        <span className="font-mono text-[11px] text-emerald-900">{pct}%</span>
      </div>
      <div className="h-0.5 bg-emerald-950 rounded-sm overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-sm transition-[width] duration-[1.3s] ease-[cubic-bezier(.4,0,.2,1)]"
          style={{
            width: `${width}%`,
            boxShadow: width > 0 ? "0 0 6px #059669" : "none",
          }}
        />
      </div>
    </div>
  );
}
