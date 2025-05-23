import React from 'react'
import './About.css'
import { FaChevronUp } from "react-icons/fa";

const About = () => {
  return (
   <>

  <div className="about flex bg-slate-400">
   <div className="img " data-aos="fade-left">
    <img src="/about-1.png" alt="" />
   </div>
   <div className="about-info flex gap-12 ">
    
    <div className="education shadow-2xl shadow-slate-900 " data-aos="fade-right">
      <h1 className='text-backgorund text-2xl font-semibold flex justify-center mt-5'>About Me</h1>
       <p className='text-lg font-semibold items-justify text-justify p-12 '>
       

Hi, I'm Suraj from Khandwa, Madhya Pradesh. <br />I completed my 10th and 12th grade from Sophia Convent School, Khandwa. <br /> Currently, I am pursuing a Bachelor of Technology (B.Tech) from Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore.
I have a keen interest in web development and have recently explored the MERN stack (MongoDB, Express.js, React.js, and Node.js). <br /> Though I'm currently at a beginner level, I have a basic understanding of how the technologies in the MERN stack work together to build full-stack web applications.
I am passionate about learning new technologies and constantly improving my skills to become a proficient developer.
        <button className='flex  bg-slate-800 text-white p-2 rounded-lg  mt-5'> <a href="#Skills" className='flex items-center gap-1'>Skills<FaChevronUp /></a></button>
      </p>
      
    </div>
   </div>
  </div>
  
   </>
  )
}

export default About
