import React from 'react';
import { TbMailShare } from "react-icons/tb";
import { FaPhone, FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xwpojgrn");

  if (state.succeeded) {
    return (
      <div className="text-center py-10 text-green-400 text-2xl font-semibold">
        ✅ Thank you! Your message has been sent. 🚀
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cyan-800 to-rose-300 p-6">
      <h1 className="text-4xl font-bold text-white mb-10">Contact Me</h1>

      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-white space-y-6">
          <h2 className="text-2xl font-bold">Get in Touch</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <TbMailShare className="text-2xl text-teal-400" />
              <a href="mailto:surajpatidar498@gmail.com" className="hover:underline">surajpatidar498@gmail.com</a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-xl text-teal-400" />
              +91 6261922460
            </li>
            <li className="flex items-center gap-3">
              <FaWhatsapp className="text-2xl text-teal-400" />
              +91 6261922460
            </li>
          </ul>
          <div className="flex gap-4 text-xl mt-6">
            <a href="https://www.instagram.com/sooraj__patidar/" className="hover:text-pink-400"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/suraj-patidar-777940279/" className="hover:text-blue-400"><FaLinkedinIn /></a>
            <a href="https://github.com/surajpatidar1" className="hover:text-gray-300"><IoLogoGithub /></a>
            <a href="mailto:surajpatidar498@gmail.com" className="hover:text-teal-400"><TbMailShare /></a>
          </div>
        </div>

        {/* Right Section */}
        <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <div>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  placeholder="Mobile Number"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
            </div>

            <div>
              <textarea
                id="comment"
                name="message"
                placeholder="Message"
                rows="4"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-400 resize-none"
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full py-3 rounded-lg  max-w-sm bg-gradient-to-br from-gray-600 to-cyan-300 text-white font-semibold hover:scale-105 transition-transform shadow-lg"
            >
              {state.submitting ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
