"use client";

import { useState, useEffect } from "react";
import { SECTION_IDS } from "@/data";

export function useScrollTracker() {
  const [scrollY, setScrollY] = useState(0);
  const [docH, setDocH] = useState(1);
  const [active, setActive] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateDocH = () =>
      setDocH(document.documentElement.scrollHeight - window.innerHeight);
    updateDocH();
    window.addEventListener("resize", updateDocH);
    return () => window.removeEventListener("resize", updateDocH);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sy = window.scrollY;
      setScrollY(sy);
      setScrolled(sy > 40);

      let cur = 0;
      SECTION_IDS.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el && sy >= el.offsetTop - window.innerHeight * 0.45) cur = i;
      });
      setActive(cur);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const frac = docH > 0 ? Math.min(scrollY / docH, 1) : 0;

  return { scrollY, frac, active, scrolled };
}
