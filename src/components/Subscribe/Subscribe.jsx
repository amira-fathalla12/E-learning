/* eslint-disable no-unused-vars */
import React from "react";
import { FaBell } from "react-icons/fa";
import { motion } from "framer-motion";

const Subscribe = () => {
  return (
    <section className="bg-[#DE8F5F] py-12 md:py-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="container"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col justify-center"
        >
          <div className="text-center space-y-2 lg:max-w-[350px] mx-auto">
            <h4 className="text-amber-200">Looking For Exclusive Services</h4>
            <h1 className="text-2xl font-bold !leading-snug">
              Education is the best way to reform people
            </h1>
            <p>We Care About Your Life For Better</p>
            <a
              href=""
              className="primary-btn !mt-4 inline-flex items-center gap-2 group"
            >
              Subscribe Now
              <FaBell className="group-hover:animate-bounce group-hover:text-lg duration-200" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Subscribe;
