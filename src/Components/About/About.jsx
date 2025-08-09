import React from 'react';
import { FaChevronUp } from "react-icons/fa";

const About = () => {

  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-br from-[#c084fc] via-[#a78bfa] to-[#818cf8] p-6 md:p-16 min-h-screen items-center justify-center gap-10">
      
      
      <div className="w-full md:w-1/2 flex justify-center items-center" data-aos="fade-left">
        <img 
          src="/about-1.png" 
          alt="About" 
          className="w-[80%] md:w-[70%] max-w-md rounded-full shadow-xl hover:scale-105 transition-transform duration-300" 
        />
      </div>

     
      <div className="w-full md:w-1/2" data-aos="fade-right">
        <div className="bg-white/10 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/20 p-10 transition-all duration-300 hover:shadow-purple-500/30">
          <h1 className="text-white text-3xl md:text-4xl font-bold text-center mb-6 tracking-wide drop-shadow-md">About Me</h1>

          <p className="text-white text-lg md:text-xl font-medium text-justify  leading-relaxed tracking-wide space-y-2">
            Hi, I'm <span className="font-semibold text-purple-200">Suraj</span> from Khandwa, Madhya Pradesh. <br />
            I completed my 10th and 12th from <span className="text-purple-200">Sophia Convent School</span>. <br />
            Currently pursuing B.Tech at <span className="text-purple-200">Shri Vaishnav Vidyapeeth Vishwavidyalaya</span>, Indore. <br />
            I’m exploring the MERN stack (MongoDB, Express.js, React.js, Node.js) and passionate about building full-stack apps. <br />
            Always excited to learn & grow in the tech world.
          </p>

          <div className="flex justify-center mt-8">
            <a
              href="/resume.pdf"
              download="Suraj_Patidar_Resume.pdf"
              className="bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-full shadow-lg backdrop-blur-md transition-all duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
