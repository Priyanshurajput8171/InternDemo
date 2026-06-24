// SectionNine.jsx

import React from "react";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    id: "1",
    title: "Apply as Lead",
    duration: "5 minutes",
    description:
      "Fill out the short application form with your name, college, branch, and why you want to build a chapter. Takes under 5 minutes.",
  },
  {
    id: "2",
    title: "Get Onboarded",
    duration: "2–3 days",
    description:
      "Our team reviews your application and connects with you personally. You get a starter kit, event templates, and a dedicated point of contact.",
  },
  {
    id: "3",
    title: "Launch Your First Event",
    duration: "Month 1",
    description:
      "Host a workshop, seminar, or hackathon at your campus. We provide support, speaker connections, and co-promotion on our channels.",
  },
  {
    id: "4",
    title: "Grow Your Community",
    duration: "Ongoing",
    description:
      "Keep organising events, earn impact points, and build your chapter team. Consistency is what unlocks higher tiers.",
  },
  {
    id: "5",
    title: "Get Recognised",
    duration: "Quarterly",
    description:
      "Hit milestones, unlock reward tiers, and get featured as a top performer on our website and social channels.",
  },
];

const SectionNine = () => {
  return (
    <section className="py-24 px-6 bg-transparent">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-[#165dfc] uppercase tracking-[4px] text-xs mb-4">
            How The Program Works
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">
            From Application to{" "}
            <span className="text-[#165dfc]">Recognition</span>
          </h2>

          <p className="text-gray-400">
            Five clear steps. Zero confusion. Everything you need to start
            making an impact at your college.
          </p>
        </div>

        <div className="relative">
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex gap-6 pb-12">
              <div className="relative flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#165dfc] text-black font-bold flex items-center justify-center z-10">
                  {step.id}
                </div>

                {index !== steps.length - 1 && (
                  <div className="w-[2px] flex-1 bg-[#165dfc]/40 mt-2"></div>
                )}
              </div>

              <div className="flex-1 pb-2">
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <h3 className="text-lg font-semibold text-white text-sm">
                    {step.title}
                  </h3>

                  <span className="px-3 py-1 text-xs rounded-md border border-[#165dfc]/40 text-[#165dfc] text-[12px]">
                    {step.duration}
                  </span>
                </div>

                <p className="text-gray-400 leading-7 text-xs">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <p className="text-gray-400 mb-8">
            Ready to lead your college chapter?
          </p>

          <button className="bg-[#165dfc] hover:bg-[#0f4ee0] transition-all duration-300 text-black font-semibold px-8 py-4 rounded-2xl inline-flex items-center gap-2">
            Apply Now It Takes 5 Minutes
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionNine;