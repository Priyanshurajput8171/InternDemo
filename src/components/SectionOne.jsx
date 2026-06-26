import React from "react";
import { ArrowRight } from "lucide-react";

const SectionOne = () => {
  return (
    <section className="bg-transparent text-white min-h-[500px] flex items-center py-20">
      <div className="max-w-7xl mx-auto px-6 w-full pt-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <h1 className="text-4xl md:text-5xl lg:text-2xl font-bold leading-tight">
              Start the Engineering
              <br />
              <span className="text-[#165dfc]">
                Community in Your Campus
              </span>
            </h1>

            <p className="text-gray-400 mt-8 text-lg leading-relaxed max-w-xl">
              Become a communityX Chapter Lead and build a thriving engineering
              community at your college. Organise workshops, hackathons, and
              technical events while gaining leadership experience and real
              career opportunities.
            </p>

            <p className="mt-8  uppercase text-[#165dfc] tracking-[4px] text-sm">
              Open to students from all engineering branches
            </p>

          <div className="mt-10 flex flex-col md:flex-row gap-4 md:gap-10 items-center md:items-start">
             <button
                className="
                  w-full md:w-auto
                  bg-[#165dfc]
                  hover:bg-sky-600
                  text-white
                  font-semibold
                  text-sm md:text-base
                  px-5 py-3 md:px-6 md:py-4
                  rounded-xl
                  transition
                "
              >
                Apply to Become a Chapter Lead
              </button>
            
              <a
                href="#search-bar"
                className="
                  w-full md:w-auto
                  border border-gray-600
                  hover:border-gray-400
                  text-white/60 hover:text-white
                  font-semibold
                  text-sm md:text-base
                  px-5 py-3 md:px-6 md:py-4
                  rounded-xl
                  flex items-center justify-center
                  transition
                "
              >
                Check Your Campus
              </a>
              </div>

           <div className="h-px bg-white/10 my-12"></div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

              <div>
                <h3 className="text-4xl font-bold text-sky-500">55+</h3>
                <p className="text-gray-400 mt-2 text-sm">
                  Engineering Colleges
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-sky-500">30K+</h3>
                <p className="text-gray-400 mt-2 text-sm">
                  Student Members
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-sky-500">362+</h3>
                <p className="text-gray-400 mt-2 text-sm">
                  Workshops & Hackathons
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-sky-500">50K+</h3>
                <p className="text-gray-400 mt-2 text-sm">
                  Students Reached
                </p>
              </div>

            </div>
          </div>

          <div className="relative">

            <div className="rounded-[32px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">

              <img
                src="/images/Campus.png"
                alt="Community In Your Campus"
                className="w-full h-full object-cover"
              />

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
