import React from 'react'
import './Footer.css'
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { FaAngleDoubleUp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className="footer  bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
     <footer className="footer ">
  <div className="footer-top flex justify-center items-center ">
    <p className='text-2xl font-semibold my-2' >Let’s build something together 🚀</p>
  </div>

  <div className="footer-socials flex gap-5 justify-center items-center my-5 "data-aos="drop-in" >
    <a href="https://github.com/surajpatidar1" ><IoLogoGithub className='text-3xl anchor'/></a>
    <a href="https://www.linkedin.com/in/suraj-patidar-777940279/" ><FaLinkedinIn className='text-3xl anchor'/></a>
    <a href="https://www.instagram.com/sooraj__patidar/" ><FaInstagram className='text-3xl anchor'/></a>
    <a href="+91 6262922460" ><FaWhatsapp className='text-3xl anchor'/></a>
   
  </div>
  <p className='text-3xl ml-12'><a href="#"><FaAngleDoubleUp className='jumping-icon' /></a></p>
<hr className=' w-[40%] ml-[30%]'/>
 
  <div className="footer-bottom  flex items-center justify-center pt-5 ">
    <p>© 2025 Suraj Patidar. All rights reserved.</p>
  </div>
</footer>
    </div>
    </>
  )
}

export default Footer
