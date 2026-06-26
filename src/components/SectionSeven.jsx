
import React, { useState } from "react";
import { ArrowRight, ArrowLeft, Medal } from "lucide-react";

const topPerformers = [
  {
    rank: "Gold",
    color: "border-yellow-500 text-yellow-400",
    name: "Muskan Ahamed",
    chapter: "OSCode BIT Chapter",
    points: 2850,
    impact: [
      "Organized 5 workshops",
      "Organized 10+ seminars",
      "Reached 1500+ students",
    ],
  },
  {
    rank: "Silver",
    color: "border-gray-400 text-gray-300",
    name: "T Pavan Teja",
    chapter: "OSCode NMIT Chapter",
    points: 2100,
    impact: [
      "Organized 3 workshops",
      "Organized 6+ seminars",
      "Reached 1000+ students",
    ],
  },
  {
    rank: "Bronze",
    color: "border-orange-500 text-orange-400",
    name: "Kumari Megha",
    chapter: "OSCode SKIT Chapter",
    points: 1750,
    impact: [
      "Organized 2 workshops",
      "Organized 3+ seminars",
      "Reached 500+ students",
    ],
  },
];

const allPerformers = [
  { name: "Muskan Ahamed", college: "OSCode BIT Chapter", points: 2850 },
  { name: "T Pavan Teja", college: "OSCode NMIT Chapter", points: 2100 },
  { name: "Kumari Megha", college: "OSCode SKIT Chapter", points: 1750 },
  { name: "Shruti Saxena", college: "OSCode BV Chapter", points: 1600 },
  { name: "Ayushman", college: "OSCode SAIT", points: 1550 },
  { name: "Pradeep", college: "OSCode BMSIT", points: 1500 },
  { name: "Sam", college: "OSCode Reva", points: 1400 },
];

const SectionSeven = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="w-full py-24 px-6 text-white bg-transparent">
      {!showAll ? (
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[4px] text-white text-xs mb-4">
              Recognition
            </p>

            <h2 className="text-2xl md:text-2xl font-bold mb-4 text-[#165dfc]">
              Chapter Leads of the Month
            </h2>

            <p className="text-gray-400">
              Celebrating top-performing chapter leads making real impact across
              colleges
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {topPerformers.map((person, index) => (
              <div
                key={index}
                className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-7"
              >
                <div
                  className={`absolute -top-4 right-5 px-4 py-1 rounded-full border text-xs ${person.color}`}
                >
                  <Medal size={12} className="inline mr-1" />
                  {person.rank}
                </div>

                <div className="flex gap-4 items-center mb-6">
                  <div className="w-16 h-16 rounded-full border-2 border-[#165dfc] flex items-center justify-center text-lg font-semibold">
                    {person.name.charAt(0)}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">{person.name}</h3>

                    <p className="text-sm text-gray-400">
                      {person.chapter}
                    </p>

                    <span className="inline-block mt-2 px-3 py-1 rounded-md border border-[#165dfc]/40 text-[#165dfc] text-xs">
                      {person.points} pts
                    </span>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-5">
                  <p className="uppercase text-[11px] tracking-[3px] text-gray-500 mb-4">
                    Impact
                  </p>

                  <ul className="space-y-3 text-gray-300 text-sm">
                    {person.impact.map((item, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-[#165dfc]">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-14">
            <button
              onClick={() => setShowAll(true)}
                className="bg-[#165dfc] hover:opacity-90 transition px-8 py-3 rounded-xl font-medium flex items-center gap-2"
            >
              View All Performers
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-2xl font-bold mb-4 text-[#165dfc]">
              All Performers
            </h2>

            <p className="text-gray-400">
              Every chapter lead making an impact
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left px-6 py-5 text-xs tracking-[3px] text-gray-500 uppercase">
                    Name
                  </th>
                  <th className="text-left px-6 py-5 text-xs tracking-[3px] text-gray-500 uppercase">
                    College
                  </th>
                  <th className="text-left px-6 py-5 text-xs tracking-[3px] text-gray-500 uppercase">
                    Points
                  </th>
                </tr>
              </thead>

              <tbody>
                {allPerformers.map((person, index) => (
                  <tr
                    key={index}
                    className="border-b border-white/10 hover:bg-white/[0.03]"
                  >
                    <td className="px-6 py-5 font-medium">{person.name}</td>

                    <td className="px-6 py-5 text-gray-400">
                      {person.college}
                    </td>

                    <td className="px-6 py-5">
                      <span className="px-3 py-1 rounded-md border border-[#165dfc]/40 text-[#165dfc] text-xs">
                        {person.points}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(false)}
              className="bg-[#165dfc] hover:opacity-90 transition px-8 py-3 rounded-xl font-medium flex items-center gap-2"
            >
              <ArrowLeft size={18} />
              Back to Top Performers
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default SectionSeven;