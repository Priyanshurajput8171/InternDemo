import React from "react";

const rewardLevels = [
  {
    level: "LEVEL 1 • 100 PTS",
    title: "Rising Leader",
    benefits: [
      "Official swag box",
      "Digital chapter badge",
      "Access to student network",
    ],
    gradient: "from-slate-900 to-slate-800",
    border: "border-white/10",
  },
  {
    level: "LEVEL 2 • 300 PTS",
    title: "Campus Builder",
    benefits: [
      "Social media feature",
      "Free hackathon access",
      "1-on-1 mentorship session",
    ],
    gradient: "from-orange-950 to-slate-900",
    border: "border-orange-500/30",
  },
  {
    level: "LEVEL 3 • 700 PTS",
    title: "Community Champion",
    benefits: [
      "Priority internship referrals",
      "Featured website profile",
      "National event invitations",
    ],
    gradient: "from-slate-800 to-slate-900",
    border: "border-white/10",
  },
  {
    level: "LEVEL 4 • 1500+ PTS",
    title: "National Leader",
    benefits: [
      "Direct hiring referrals",
      "Speaker opportunities",
      "Leadership summit invite",
    ],
    gradient: "from-yellow-950 to-slate-900",
    border: "border-yellow-500/30",
  },
];

const SectionSix = () => {
  return (
    <section className="bg-transparent py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
          <div>
            <p className="text-white uppercase tracking-[4px] text-xs mb-4">
              Perks & Benefits
            </p>

            <h2 className="text-4xl md:text-xl font-bold text-[#165dfc] mb-6">
              Chapter Leader Reward Levels
            </h2>

            <p className="text-gray-400 text-base leading-relaxed mb-10">
              Every event you host earns points. Hit milestones and unlock
              increasingly powerful rewards designed to accelerate your career
              and expand your professional network.
            </p>

            <button className="px-8 py-4 rounded-2xl bg-[#165dfc] text-white font-bold hover:bg-[#165dfc]/80 transition">
              Apply as Chapter Lead →
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {rewardLevels.map((item, index) => (
              <div
                key={index}
                className={`
                  relative overflow-hidden
                  rounded-3xl border ${item.border}
                  bg-gradient-to-br ${item.gradient}
                  p-8 min-h-[280px]
                  hover:-translate-y-2
                  transition-all duration-300
                `}
              >
                <div className="absolute -bottom-20 -right-20 w-52 h-52 bg-white/5 rounded-full blur-3xl" />

                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 rounded-full border border-white/10 text-xs tracking-wider text-gray-300 mb-6">
                    {item.level}
                  </span>

                  <h3 className="text-2xl font-semibold text-white mb-6">
                    {item.title}
                  </h3>

                  <div className="space-y-4">
                    {item.benefits.map((benefit, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <span className="text-cyan-400 mt-1">✓</span>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-3xl border border-white/10 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-950/50 via-slate-950 to-cyan-950/50 p-12 text-center">
            <h3 className="text-xl font-bold text-white mb-4">
              Ready to Start Earning Rewards?
            </h3>

            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Join hundreds of student leaders already building their careers
              while making an impact on campus.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 rounded-xl bg-[#165dfc] text-black font-semibold hover:pointer">
                Apply as Chapter Lead
              </button>

              <button className="px-8 py-4 rounded-xl border border-white/10 text-white">
                See How It Works
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSix;