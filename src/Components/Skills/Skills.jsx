import React from 'react'
import './Skills.css'
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const skills = [
  { name: "HTML", level: 100 },
  { name: "CSS", level: 80 },
  { name: "JavaScript", level: 85 },
  { name: "React.js", level: 90 },
  { name: "Node.js", level: 90 },
  { name: "Express.js", level: 80},
  { name: "Mongoose", level: 80},
  { name: "Java", level: 65},

];

const Skills = () => {
  return (
    <>
    <div className="skill bg-slate-300 pt-24 ">
     <h1 className='flex justify-center text-4xl font-semibold'>Skills</h1>
     <div className="grid grid-cols-4  mt-24 skills">
     
      {skills.map((skill, index) => (
        <div key={index} className="flex flex-col items-center bg-slate-900 bg-opacity-10 p-4 rounded-xl m-5 shadow-lg shadow-slate-200 "  data-aos="fade-up">
          <div style={{ width: 100, height: 100 }}>
            <CircularProgressbar
              value={skill.level}
              text={`${skill.level}%`}
              styles={buildStyles({
                textSize: "20px",
                pathColor: "#00ffff",      // neon cyan
                trailColor: "#1e1e1e",      // dark gray trail
                 textColor: "#ffffff",       // white text
                 strokeLinecap: "round",
                pathTransitionDuration: 0.5,
              })}
            />
          </div>
          <div className="mt-2 text-lg font-md">{skill.name}</div>
        </div>
      ))}
    </div>
    </div>
      </>
  )

}

export default Skills
