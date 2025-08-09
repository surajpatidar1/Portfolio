import React, { useRef, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Glass3DCard({
  title = "Aurora Product",
  subtitle = "Limited Edition",
  description = "A modern, fancy 3D glass card with interactive tilt and blur background.",
  githubLink = null,
  demoLink = null,
  imageSrc = null,
}) {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const handle = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const dx = (x - cx) / cx;
      const dy = (y - cy) / cy;

      el.style.transform = `perspective(1000px) rotateX(${dy * 8}deg) rotateY(${dx * -12}deg)`;
    };

    const reset = () => {
      el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    };

    el.addEventListener("mousemove", handle);
    el.addEventListener("mouseleave", reset);

    return () => {
      el.removeEventListener("mousemove", handle);
      el.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <div
      className="relative w-[350px] h-[450px] rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl p-6 overflow-y-scroll transition-transform duration-300"
      ref={cardRef}
    >
      {/* Image */}
      <div className="w-full h-48 rounded-2xl overflow-hidden bg-white/20 mb-4">
        {imageSrc ? (
          <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white/50">
            No Image
          </div>
        )}
      </div>

      {/* Title + Subtitle */}
      <h3 className="text-white text-xl font-semibold">{title}</h3>
      <p className="text-white/60 text-sm">{subtitle}</p>

      {/* Description */}
      <p className="mt-3 text-white/70 text-sm">{description}</p>

      {/* Links */}
      <div className="mt-6 flex gap-3">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-slate-600 to-sky-300 text-white font-medium hover:scale-105 transition-transform"
          >
            <FaGithub /> GitHub
          </a>
        )}
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-teal-500 to-green-600 text-white font-medium hover:scale-105 transition-transform"
          >
            <FaExternalLinkAlt /> Demo
          </a>
        )}
      </div>
    </div>
  );
}
