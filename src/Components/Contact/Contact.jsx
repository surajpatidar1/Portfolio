import React from 'react'
import './Contact.css'
import { TbMailShare } from "react-icons/tb";
import { FaPhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";

const Contact = () => {
  return (
    <>
    
    <div className="contact py-12  bg-slate-100 ">
      <h1 className='text-3xl font-semibold flex items-center justify-center '>Contact</h1>
      <div className="layout flex justify-center mt-12 ">
      <div className="left bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white " data-aos="fade-left">
        <h1 className='text-3xl font-bold flex items-center justify-center my-8'>Contact</h1>
        <ul className='mt-12 mx-5 contact-icon'>
          <li className='flex items-center gap-2 mt-3'><TbMailShare className='text-3xl icon-1'/> : <strong ><a href="mailto:surajpatidar498@gmail.com" className='icon-2'>Surajpatidar498@gmail.com</a></strong>  </li>
          <li className='flex items-center gap-2 mt-3'><FaPhone className='text-2xl icon-1'/> : <strong  >+91 6261922460</strong> </li>
          <li className='flex items-center gap-2 mt-3'><FaWhatsapp className='text-3xl icon-1'/> : <strong  >+91 6261922460</strong></li>
        </ul>
        <ul className='flex mt-36 gap-3 items-center mx-20 icon'>
          <li className='text-2xl font-semibold'><a href="https://www.instagram.com/sooraj__patidar/"><FaInstagram/></a></li>
          <li className='text-2xl font-semibold'><a href="https://www.linkedin.com/in/suraj-patidar-777940279/"><FaLinkedinIn/></a></li>
          <li className='text-2xl font-semibold'><a href="https://github.com/surajpatidar1"><IoLogoGithub/></a></li>
          <li className='text-2xl font-semibold'><a href="mailto:surajpatidar498@gmail.com"><TbMailShare/></a></li>
        </ul>
      </div>
      <div className="right bg-slate-200 flex items-center justify-center shadow-lg shadow-slate-900" data-aos="fade-right">
        <form className=' '>
         <div className="form-row">
          <div className="form-group">
            <input type="text" id="firstName" placeholder=" " required />
            <label htmlFor="firstName">First Name</label>
            <hr />
          </div>
          <div className="form-group">
            <input type="text" id="lastName" placeholder=" " required />
            <label htmlFor="lastName">Last Name</label>
            <hr />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <input type="tel" id="mobile" placeholder=" " required />
            <label htmlFor="mobile">Mobile Number</label>
            <hr />
          </div>
          <div className="form-group">
            <input type="email" id="email" placeholder=" " required />
            <label htmlFor="email">Email</label>
            <hr />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group full-width">
            <textarea id="comment" placeholder=" " required></textarea>
            <label htmlFor="comment">Comment</label>
            <hr />
          </div>
        </div>

        <button type="submit" className='bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white shadow-lg shadow-slate-700'>Submit</button>
        </form>
      </div>
      </div>
     
    </div>
    </>
    
  )
}

export default Contact
