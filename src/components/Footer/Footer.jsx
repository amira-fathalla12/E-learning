/* eslint-disable no-unused-vars */
import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-28 bg-[#DE8F5F]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          {/* first section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Educax</h1>
            <p className="text-gray-50">
            Educax is a platform focused on equipping aspiring developers with essential coding skills.
             Whether you are starting with the basics or diving into advanced topics,
              we offer a complete learning journey to help you gain expertise, create impactful projects, and kickstart your career in tech.
            </p>
          </div>
          {/* second section */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Courses</h1>
              <div className="text-gray-50">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-amber-900 duration-200">
                    Web Development
                  </li>
                  <li className="cursor-pointer hover:text-amber-900 duration-200">
                    Software Development
                  </li>
                  <li className="cursor-pointer hover:text-amber-900 duration-200">
                    Apps Development
                  </li>
                  <li className="cursor-pointer hover:text-amber-900 duration-200">
                    E-learning
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Links</h1>
              <div className="text-gray-50">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-amber-900 duration-200">
                    Home
                  </li>
                  <li className="cursor-pointer hover:text-amber-900 duration-200">
                    Services
                  </li>
                  <li className="cursor-pointer hover:text-amber-900 duration-200">
                    About
                  </li>
                  <li className="cursor-pointer hover:text-amber-900 duration-200">
                    Contact
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* third section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Get In Touch</h1>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter your email"
                className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2"
              />
              <button className="bg-[#FFB26F] text-white font-semibold py-4 px-6 rounded-e-xl">
                Go
              </button>
            </div>
            {/* social icons */}
            <div className="flex space-x-6 py-3">
              <a href="https://chat.whatsapp.com/FQSKgJ5f1eIAhlyF5sVym0">
                <FaWhatsapp className="cursor-pointer hover:text-amber-900 hover:scale-105 duration-200" />
              </a>
              <a href="https://www.instagram.com/the.coding.journey/">
                <FaInstagram className="cursor-pointer hover:text-amber-900 hover:scale-105 duration-200" />
              </a>
              <a href="https://thecodingjourney.com/">
                <TbWorldWww className="cursor-pointer hover:text-amber-900 hover:scale-105 duration-200" />
              </a>
              <a href="https://www.youtube.com/@TheCodingJourney">
                <FaYoutube className="cursor-pointer hover:text-amber-900 hover:scale-105 duration-200" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
