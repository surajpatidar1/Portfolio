import React, { useContext } from 'react'
import './Home.css'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Project from '../Project/Project'
import Contact from '../Contact/Contact'
import { IoMdMenu } from "react-icons/io";
import {StoreContext} from '../../Store/Store'

const Home = () => {
  const {isOpen,setIsOpen} = useContext(StoreContext);
  return (
    <>
  
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white"  >
        
        <div className="navbar  ">
         
          <ul  className='flex items-center gap-5 justify-center pt-8 ' >
            <li className='drop-in hidden md:block' style={{ animationDelay: '0s' }}><a href="#">Home</a></li>
            <li className='drop-in hidden md:block' style={{ animationDelay: '0.1s' }}><a href="#About">About</a></li>
            <li className='drop-in hidden md:block' style={{ animationDelay: '0.2s' }}><a href="#Skills">Skills</a></li>
            <li className='drop-in hidden md:block' style={{ animationDelay: '0.3s' }}><a href="#Projects">Project</a></li>
            <li className='drop-in hidden md:block' style={{ animationDelay: '0.4s' }}><a href="#Contact">Contact</a></li>
             <li onClick={()=>setIsOpen(true)}><IoMdMenu className='text-3xl lg:hidden md:hidden menu'/></li>
          </ul>
        </div>
        
            <img src="/logo.png" alt="" className='h-24 w-24 rounded-[50%] ml-16' />
        
          
          <div className="home-content flex justify-center gap-48 items-center  " data-aos="fade-up">
             <div data-aos="fade-up" className="text-center mt-32  ml-24 home-div">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Suraj Patidar</h1>
                 <h2 className="typewriter text-pink-500 text-xl md:text-2xl font-medium">MERN Stack Developer 🚀</h2>
                  <p className="mt-6 text-gray-300">Crafting scalable, real-world web applications with clean code and creativity.</p>
                 </div>
            <div className="home-image shadow-lg shadow-accent1 bg-[#a0aec0] ">
              <div className='background '>
                <img src="/about-2.png" alt="" />
              </div>
             
            </div>
          </div>
 
        
    </div>
    <div id='About'><About /></div>
    <div id='Skills'><Skills /></div>
    <div id='Projects'> <Project /></div>
    <div id='Contact'><Contact /></div>
          
    </>
    
  )
}

export default Home
