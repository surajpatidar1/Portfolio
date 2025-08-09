import React, { useContext } from 'react'
import './Home.css'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Project from '../Project/Project'
import Contact from '../Contact/Contact'
import { IoMdMenu } from "react-icons/io";
import { StoreContext } from '../../Store/Store'
import { TypewriterEffectSmooth } from '../../component/ui/typewriter-effect'


const Home = () => {
  const { isOpen, setIsOpen } = useContext(StoreContext);

  const words = [
    {
      text: "Build Awesome Apps with - ",
    },
    {
      text: " Next Js, MERN Stack",
      className: "text-purple-300 dark:text-pink-500"
    },
  ];

  return (
    <>
    
      <div className="h-screen w-full bg-[url('/bg-1.png')] bg-center bg-no-repeat bg-cover text-white px-4">
      
        <div className="navbar bg-white/10 backdrop-blur-sm  flex items-center justify-center rounded-3xl w-full max-w-md mx-auto px-4 sm:px-6 py-4 sm:py-5">
          <ul className='flex items-center font-semibold text-base sm:text-lg gap-4 sm:gap-5 justify-center'>
            <li className='drop-in hidden md:block'><a href="#">Home</a></li>
            <li className='drop-in hidden md:block'><a href="#About">About</a></li>
            <li className='drop-in hidden md:block'><a href="#Skills">Skills</a></li>
            <li className='drop-in hidden md:block'><a href="#Projects">Project</a></li>
            <li className='drop-in hidden md:block'><a href="#Contact">Contact</a></li>
            <li onClick={() => setIsOpen(true)}><IoMdMenu className='text-2xl sm:text-3xl lg:hidden md:hidden menu' /></li>
          </ul>
        </div>


        <div className="flex justify-start  m-6">
          <img src="/logo.png" alt="logo" className='h-20 w-20 sm:h-24 sm:w-24 rounded-full sm:ml-0 ml-4' />
        </div>

    
        <div className="bg-white/10 backdrop-blur-md w-full max-w-7xl mx-auto flex flex-col sm:flex-row flex-wrap justify-center  items-center rounded-3xl mt-8 px-4 sm:px-6 py-8 sm:py-12" data-aos="fade-up">
          <div data-aos="fade-up" className="text-center sm:mt-0 mt-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Hi, I'm Suraj Patidar</h1>
            <TypewriterEffectSmooth words={words} className={'text-4xl sm:text-5xl'} />
            <p className="mt-6 text-gray-300 text-sm sm:text-base px-2 sm:px-0">Crafting scalable, real-world web applications with clean code and creativity.</p>
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
