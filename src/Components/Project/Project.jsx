import React from 'react'
import './Project.css'

const Project = () => {
  return (
    <div className='project bg-slate-200 pt-12 '>
      <h1 className='text-3xl flex justify-center font-semibold'>Project</h1>
      <div className="project-card grid grid-cols-3 mx-10 mt-16">
           <div className="relative group w-full max-w-md h-80 rounded-xl overflow-hidden shadow-lg bg-slate-300 card" data-aos="fade-left">
  
                 <img
                   src="/booking .png"
                   alt="Hotel Booking "
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>


              <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-slate-900 to-transparent 
                  opacity-0 group-hover:opacity-90 transition-all duration-500 group-hover:translate-y-0 
                  translate-y-full flex flex-col justify-end p-4 text-white">
                  <p className="font-bold text-lg">Topic: <strong>Hotel Booking </strong></p>
                  <p className="font-bold text-lg mt-1">Technology: <strong>Javascript,Mongodb,Express.js,Passport.js</strong></p>
              </div>
           </div>


      
           <div className="relative group w-full max-w-md h-80 rounded-xl overflow-hidden shadow-lg bg-slate-300 card" data-aos="fade-up">
 
                  <img
                      src="/4.png"
                      alt="E-commerce "
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>


               <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-slate-900 to-transparent 
                  opacity-0 group-hover:opacity-90 transition-all duration-500 group-hover:translate-y-0 
                  translate-y-full flex flex-col justify-end p-4 text-white">
                   <p className="font-bold text-lg">Topic: <strong>E-commerce | shopping </strong></p>
                   <p className="font-bold text-lg mt-1">Technology: <strong>Javascript,Mongodb,Express.js,Bycrpt.js,React.js</strong></p>
               </div>
           </div>


           <div className="relative group w-full max-w-md h-80 rounded-xl overflow-hidden shadow-lg bg-slate-300 card" data-aos="fade-right">
  
                <img
                    src="/fooddel.png"
                    alt="Food Delivery"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>

 
               <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-slate-900 to-transparent 
                  opacity-0 group-hover:opacity-90 transition-all duration-500 group-hover:translate-y-0 
                  translate-y-full flex flex-col justify-end p-4 text-white">
                   <p className="font-bold text-lg">Topic: <strong>Food Delivery</strong></p>
                   <p className="font-bold text-lg mt-1">Technology: <strong>JavaScript, MongoDB, Express.js, Bcrypt.js, JWT, Redux Toolkit</strong></p>
               </div>
            </div>



      </div>
    </div>
  )
}

export default Project
