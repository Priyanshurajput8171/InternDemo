import React from "react";
import { ArrowRight } from "lucide-react";

const SectionTen = () => {
  return (
    <section className="py-20 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black/20 backdrop-blur-sm">

          <div className="absolute -top-32 left-0 h-96 w-96 rounded-full bg-purple-700/10 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative z-10 px-3 md:px-6 py-5 md:py-10 text-center">
            <p className="uppercase tracking-[5px] text-white text-xs md:text-sm mb-2">
              Ready To Lead?
            </p>

            <h2 className="text-2xl md:text-2xl font-bold leading-tight text-[#165dfc]">
              Your Campus Needs
              <br />
              <span className="text-[#165dfc]">
                a Tech Leader.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-gray-400 text-base md:text-xl leading-relaxed">
              Start or join a communityX chapter and become the person who
              makes things happen at your college.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#165dfc] hover:bg-sky-600 text-white font-semibold transition flex items-center justify-center gap-2">
                Apply to Become a Chapter Lead
                <ArrowRight size={18} />
              </button>

              <button className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-white/10 text-white/70 hover:text-white hover:border-white/30 transition">
                Talk to the communityX Team
              </button>
            </div>

            <p className="mt-8 text-xs md:text-sm text-gray-500 tracking-wide">
              Free to apply • No experience required • Open to all engineering
              branches
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTen;