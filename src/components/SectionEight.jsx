

import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Being a Chapter Lead gave me more than I expected. The experience was real, the network was incredible, and the communityX team always had my back.",
    role: "CS Student",
    college: "DSCE Bangalore",
    badge: "Community Champion",
  },
  {
    quote:
      "I organised 4 events in 3 months and unlocked the Community Champion tier. The internship referral alone was worth it. I got placed through the network.",
    role: "ECE Student",
    college: "HBTU Kanpur",
    badge: "Campus Builder",
  },
  {
    quote:
      "My college didn't have a chapter before I started one. Now we have 120+ members and a team of 8. communityX made it simple. I just had to start.",
    role: "IT Student",
    college: "Reva University",
    badge: "Rising Leader",
  },
];

const SectionEight = () => {
  return (
    <section className="py-24 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className=" uppercase tracking-[4px] text-xs mb-4">
            Chapter Lead Stories
          </p>

          <h2 className="text-2xl font-bold mb-4 text-[#165dfc]">
            From Students Who Did It
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Real words from students who built chapters, earned rewards, and
            changed their careers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                relative
                rounded-3xl
                p-[1px]
                bg-gradient-to-br
                from-purple-500/60
                via-purple-400/20
                to-green-500/50
              "
            >
              <div
                className="
                  h-full
                  rounded-3xl
                  bg-black/70
                  backdrop-blur-xl
                  p-8
                "
              >
                <Quote
                  size={32}
                  className="text-[#165dfc] mb-6"
                  strokeWidth={3}
                />

                <p className="text-gray-200 leading-8 mb-8">
                  {item.quote}
                </p>

                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h3 className="text-white font-semibold">
                      {item.role}
                    </h3>

                    <p className="text-sm text-gray-400 mt-1">
                      {item.college}
                    </p>
                  </div>

                  <span
                    className="
                      text-xs
                      px-3
                      py-2
                      rounded-lg
                      border
                      border-[#165dfc]/30
                      text-[#165dfc]
                      whitespace-nowrap
                    "
                  >
                    {item.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionEight;