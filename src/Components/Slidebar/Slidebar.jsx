import React, { useContext, useState } from 'react'
import "./Slidebar.css"
import { StoreContext } from '../../Store/Store'
import { FaHome } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import { SiHyperskill } from "react-icons/si";
import { VscProject } from "react-icons/vsc";
import { RiContactsFill } from "react-icons/ri";


const Slidebar = () => {
  const {isOpen,setIsOpen} = useContext(StoreContext);
  return (
    <>
    <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 ${isOpen ? 'block' : 'hidden'}`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 slidebar bg-slate-400 text-slate-700 shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >

        <p className='text-2xl text-slate-950 my-6 mx-5 font-semibold shadow-md shadow-slate-600 flex items-center justify-center rounded-sm'>Suraj Patidar</p>
        <hr />
        <ul className="p-4 space-y-4 text-lg font-semibold">
          <li className="drop-in " style={{ animationDelay: '0s' }}>
            <a href="#" className='flex  items-center gap-2'><FaHome/> Home</a>
          </li>
          <li className="drop-in" style={{ animationDelay: '0.1s' }}>
            <a href="#About" className='flex  items-center gap-2'><CiMenuKebab/> About</a>
          </li>
          <li className="drop-in" style={{ animationDelay: '0.2s' }}>
            <a href="#Skills" className='flex  items-center gap-2'><SiHyperskill/> Skills</a>
          </li>
          <li className="drop-in" style={{ animationDelay: '0.3s' }}>
            <a href="#Projects" className='flex  items-center gap-2'><VscProject/> Project</a>
          </li>
          <li className="drop-in" style={{ animationDelay: '0.4s' }}>
            <a href="#Contact" className='flex  items-center gap-2'><RiContactsFill/> Contact</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Slidebar
