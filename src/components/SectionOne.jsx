import React from "react";
import { motion } from "framer-motion";

const textVariant = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const itemVariant = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const imageVariant = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      delay: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const SectionOne = () => {
  return (
    <section className="bg-transparent text-white min-h-[500px] flex items-center py-20">
      <div className="max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            variants={textVariant}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariant}
              className="text-2xl  font-bold leading-tight"
            >
              Start the Engineering
              <br />
              <span className="text-[#165dfc]">
                Community in Your Campus
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariant}
              className="text-gray-400 mt-8 text-lg leading-relaxed max-w-xl"
            >
              Become a communityX Chapter Lead and build a thriving engineering
              community at your college. Organise workshops, hackathons, and
              technical events while gaining leadership experience and real
              career opportunities.
            </motion.p>

            <motion.p
              variants={itemVariant}
              className="mt-8 uppercase text-[#165dfc] tracking-[4px] text-sm"
            >
              Open to students from all engineering branches
            </motion.p>

            <motion.div
              variants={itemVariant}
              className="mt-10 flex flex-col md:flex-row gap-4 md:gap-10 items-center md:items-start"
            >
              <button className="w-full md:w-auto bg-[#165dfc] hover:bg-sky-600 text-white font-semibold text-sm md:text-base px-5 py-3 md:px-6 md:py-4 rounded-xl transition">
                Apply to Become a Chapter Lead
              </button>

              <a
                href="#search-bar"
                className="w-full md:w-auto border border-gray-600 hover:border-gray-400 text-white/60 hover:text-white font-semibold text-sm md:text-base px-5 py-3 md:px-6 md:py-4 rounded-xl flex items-center justify-center transition"
              >
                Check Your Campus
              </a>
            </motion.div>

            <motion.div
              variants={itemVariant}
              className="h-px bg-white/10 my-12"
            />

            <motion.div
              variants={itemVariant}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              <div>
                <h3 className="text-4xl font-bold text-[#165dfc]">55+</h3>
                <p className="text-gray-400 mt-2 text-sm">
                  Engineering Colleges
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-[#165dfc]">30K+</h3>
                <p className="text-gray-400 mt-2 text-sm">
                  Student Members
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-[#165dfc]">362+</h3>
                <p className="text-gray-400 mt-2 text-sm">
                  Workshops & Hackathons
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-[#165dfc]">50K+</h3>
                <p className="text-gray-400 mt-2 text-sm">
                  Students Reached
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={imageVariant}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="rounded-[32px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
              <img
                src="/images/Campus.png"
                alt="Community In Your Campus"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SectionOne;
