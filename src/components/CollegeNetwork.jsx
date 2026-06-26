import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const CollegeNetwork = () => {
  const colleges = [
    { name: "Dayananda Sagar College of Engineering", location: "Bangalore" },
    { name: "Dayananda Sagar University", location: "Bangalore" },
    { name: "East West College of Engineering", location: "Bangalore" },
    { name: "R R Institute of Technology", location: "Bangalore" },
    { name: "Reva University", location: "Bangalore" },
    { name: "RNS Institute of Technology", location: "Bangalore" },
    { name: "Sai Vidya Institute of Technology", location: "Bangalore" },
    { name: "Sambhram Institute of Technology", location: "Bangalore" },
    { name: "KCC Institute of Technology", location: "Bangalore" },
    { name: "AGMR College of Engineering", location: "Bangalore" },
    { name: "RV Institute of Technology", location: "Bangalore" },
    { name: "BMS Institute of Technology", location: "Bangalore" },
    { name: "Jain Trinity College", location: "Bangalore" },
    { name: "KLE Institute of Technology", location: "Hubli" },
    { name: "Banaasthali Vidyapith", location: "Banaasthali" },
    { name: "Nitte Meenakshi Institute of Technology", location: "Bangalore" },
    { name: "IIIT Dharwad", location: "Dharwad" },
    { name: "Cambridge Institute Of Technology", location: "Bangalore" },
  ];

  return (
    <motion.section
      className="bg-transparent w-full py-16 px-4 md:px-8 text-white font-sans flex flex-col items-center"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <motion.div
        variants={item}
        className="text-center max-w-4xl mb-12"
      >
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 block mb-4">
          communityX CAMPUS NETWORK
        </span>

        <h2 className="text-3xl md:text-2xl font-bold leading-tight">
          Chapters Active Across{" "}
          <span className="inline-block bg-white text-[#165dfc] px-3 py-1 mx-1 rounded-lg">
            55+
          </span>{" "}
          Engineering Colleges
        </h2>

        <p className="text-white/80 mt-4 text-sm md:text-base">
          Join a campus near you, or be the one to bring{" "}
          <span className="inline-block text-[#165dfc] font-bold">
            OSCode
          </span>{" "}
          to your college.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 w-full max-w-[1400px]"
      >
        {colleges.map((college, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{
              y: -8,
              scale: 1.04,
            }}
            transition={{
              duration: 0.25,
            }}
            className="border border-gray-400 rounded-2xl p-5 flex flex-col items-center justify-center text-center backdrop-blur-sm shadow-xl shadow-black/10 hover:shadow-black/30 cursor-default"
          >
            <img
              src="/images/Campus2.png"
              alt={college.name}
              className="w-15 h-15 object-contain mb-3"
            />

            <h4 className="text-white font-bold text-[13px] leading-tight">
              {college.name}
            </h4>

            <p className="text-[#165dfc]/70 font-bold text-xs mt-1">
              {college.location}
            </p>
          </motion.div>
        ))}
      </motion.div>
            <motion.button
        variants={item}
        whileHover={{
          scale: 1.05,
          y: -3,
        }}
        whileTap={{
          scale: 0.98,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          mt-12
          w-full md:w-auto
          bg-[#165dfc]
          hover:bg-sky-600
          text-white
          font-semibold
          text-sm md:text-base
          px-6 py-4
          rounded-xl
          flex items-center gap-3
          transition
        "
      >
        Start a Chapter at Your Campus
        <span className="text-xl">&rarr;</span>
      </motion.button>
    </motion.section>
  );
};

export default CollegeNetwork;