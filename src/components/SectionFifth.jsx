import React from "react";

const responsibilities = [
  {
    id: "1",
    title: "Organise Events",
    description:
      "Organise at least 1 technical event per month including workshops, hackathons, or seminars.",
  },
  {
    id: "2",
    title: "Build Your Team",
    description:
      "Recruit and manage a core chapter team of 5–10 members from your campus.",
  },
  {
    id: "3",
    title: "Community Growth",
    description:
      "Share communityX content and updates with your college community regularly.",
  },
  {
    id: "4",
    title: "Represent Campus",
    description:
      "Represent communityX at college fests and inter-college tech events.",
  },
  {
    id: "5",
    title: "Monthly Reporting",
    description:
      "Maintain a monthly chapter log and report activities to the communityX team.",
  },
];

const SectionFifth = () => {
  return (
    <section className="bg-transparent py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-white uppercase tracking-[4px] text-xs mb-4">
            Chapter Lead Responsibilities
          </p>

          <h2 className="text-4xl md:text-2xl font-bold mb-5 text-[#165dfc]">
            What Chapter Leads Do
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            Every action earns points. Points unlock rewards. The more you do,
            the more you grow.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-[4px] bg-[#165dfc]/40 rounded-full" />

          <div className="grid lg:grid-cols-5 gap-10">
            {responsibilities.map((item) => (
              <div key={item.id} className="relative">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full
                 bg-gradient-to-br from-[#165dfc] to-cyan-600 text-black font-bold text-xl mb-8 shadow-lg shadow-cyan-500/20">
                  {item.id}
                </div>

                <div className="space-y-4">
                  <h3 className="text-white text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 max-w-4xl mx-auto">
          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-950/50 to-slate-950 p-8">
            <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-4">
              <h3 className="text-white font-semibold">
                communityX Impact System
              </h3>

              <span className="text-[#165dfc] text-sm">
                Activity → Points Earned
              </span>
            </div>

            <div className="space-y-4">
              {[
                ["Workshop", "+100 pts"],
                ["Hackathon", "+200 pts"],
                ["Seminar / Webinar", "+50 pts"],
                ["Speaker Session", "+80 pts"],
                ["100+ Student Reach", "+50 pts"],
              ].map(([activity, points]) => (
                <div
                  key={activity}
                  className="flex justify-between border-b border-white/5 pb-3"
                >
                  <span className="text-gray-300">{activity}</span>
                  <span className="text-[#165dfc] font-semibold">
                    {points}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFifth;