// src/components/Skills.jsx
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiNextdotjs, SiTypescript } from "react-icons/si";

const skills = [
  { name: "HTML", description: "Building structured web pages", icon: FaHtml5 },
  { name: "CSS", description: "Crafting modern, responsive designs", icon: FaCss3Alt },
  { name: "JavaScript", description: "Interactive and dynamic web apps", icon: FaJsSquare },
  { name: "React.js", description: "Reusable UI components and SPA", icon: FaReact },
  { name: "Node.js", description: "Backend with JavaScript runtime", icon: FaNodeJs },
  { name: "Express.js", description: "Minimal backend web framework", icon: SiExpress },
  { name: "MongoDB", description: "NoSQL document-based database", icon: SiMongodb },
  { name: "Java", description: "General-purpose OOP language", icon: FaJava },
  { name: "Next.js", description: "Full-stack React framework", icon: SiNextdotjs },
  { name: "TypeScript", description: "Typed superset of JavaScript", icon: SiTypescript },
];

const Skills = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 p-6">
      <div className="backdrop-blur-md bg-white/20 border border-white/30 shadow-xl rounded-2xl p-8 w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          My Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Skills List */}
          <div className="flex flex-col gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition duration-200 border border-white/30"
              >
                <span className="text-3xl text-blue-500">
                  <skill.icon />
                </span>
                <span className="font-semibold text-lg text-gray-900">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

          {/* Side Box with Descriptions */}
          <div className="flex flex-col gap-4 p-4 rounded-xl bg-white/10 border border-white/30">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Skill Details
            </h3>
            {skills.map((skill, index) => (
              <div key={index} className="mb-2">
                <p className="text-sm font-bold text-gray-900">
                  {skill.name}
                </p>
                <p className="text-xs text-gray-700">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
