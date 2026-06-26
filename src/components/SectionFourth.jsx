import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 60,
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

const communities = [
  {
    title: "Software & Technology",
    subtitle: "OSCODE",
    description: "Build, code, and ship real products.",
    tags: [
      "Web Dev",
      "AI / ML",
      "Cybersecurity",
      "Open Source",
      "Cloud & Backend",
    ],
    active: true,
    gradient: "from-cyan-900/50 to-slate-900",
  },
  {
    title: "Core Engineering",
    subtitle: "OSENGIVERSE",
    description: "Design, build, and engineer the physical world.",
    tags: [
      "Mechanical",
      "Civil",
      "Industrial",
      "Manufacturing",
      "Robotics",
    ],
    gradient: "from-emerald-900/40 to-slate-900",
  },
  {
    title: "Electrical & Electronics",
    subtitle: "OSVOLT",
    description: "Power, connect, and automate everything.",
    tags: [
      "Electrical",
      "EV Technology",
      "Embedded",
      "IoT",
      "Power Systems",
    ],
    gradient: "from-blue-900/40 to-slate-900",
  },
];

const SectionFourth = () => {
  return (
    <motion.section
      className="bg-transparent py-24 px-6"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={item}
          className="text-center mb-16"
        >
          <p className="text-white uppercase tracking-[4px] text-xs mb-4">
            One Ecosystem • Three Communities
          </p>

          <h2 className="text-4xl md:text-2xl text-[#165dfc] font-bold mb-5">
            Which Community Fits Your Branch?
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            communityX runs three parallel chapter programs, each built around
            a specific engineering discipline. Select yours to discover
            opportunities, projects, and resources tailored to your interests.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {communities.map((community, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{ duration: 0.25 }}
              className={`
                relative overflow-hidden rounded-3xl
                bg-gradient-to-br ${community.gradient}
                border border-white/10
                p-8 max-h-[300px]
                max-w-[320px]
                hover:border-cyan-400/40
              `}
            >
              <div className="absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-white/5 blur-3xl" />

              <div className="relative z-10">
                <p className="text-[#165dfc] uppercase tracking-[3px] text-xs mb-2">
                  {community.subtitle}
                </p>

                <h3 className="text-base font-semibold text-white mb-1">
                  {community.title}
                </h3>

                <p className="text-gray-300 mb-5 leading-relaxed">
                  {community.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {community.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-[10px] rounded-full border border-white/20 text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {community.active && (
                  <p className="text-cyan-400 text-xs flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                    Currently Selected
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
              </div>
    </motion.section>
  );
};

export default SectionFourth;
