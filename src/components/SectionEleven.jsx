import React from 'react';

const SectionEleven = () => {
  const statsData = [
    { value: "360+", label: "Events Organized" },
    { value: "2000+", label: "Photos Captured" },
    { value: "25+", label: "Video Stories" },
    { value: "40+", label: "Colleges Featured" },
  ];

  const cardData = [
    { title: "Workshops", desc: "Hands-on learning experiences." },
    { title: "Hackathons", desc: "Intense coding & innovation sprints." },
    { title: "Technical Talks", desc: "Insights from industry leaders." },
    { title: "Buildathons", desc: "Collaborative project building." },
    { title: "Industry Sessions", desc: "Real-world business strategies." },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent p-4 md:p-6 lg:p-12">
      <div className="relative w-full max-w-[1200px] min-h-[350px] md:h-[750px] rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl bg-black group">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/College.jpg"
            alt="Community Background"
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-between h-full p-6 md:p-10 lg:p-14">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-left md:text-center w-full md:w-auto mb-2 md:mb-4">
            {statsData.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <h3 className="text-2xl md:text-4xl font-bold text-[#165dfc]">{stat.value}</h3>
                <p className="text-white text-xs md:text-sm font-light">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mt-2 md:mt-0">
            <p className="text-white text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              COMMUNITY IN ACTION
            </p>
            <h2 className="text-2xl md:text-2xl font-bold text-[#165dfc] leading-tight mb-4">
              360+ Engineering Events.<br />
              Countless Memories.
            </h2>
            <p className="text-gray-300 text-base md:text-lg lg:text-xl mb-2 font-light max-w-2xl">
              From workshops to hackathons, our chapters don't just talk tech they build it.
            </p>
          </div>

          <div className="flex flex-wrap items-start gap-2 md:grid md:grid-cols-5 md:gap-4 mt-2 md:mt-4">
            {cardData.map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col gap-1 md:gap-2 bg-transparent border-0 p-0 text-white transition-all duration-300 md:bg-emerald-900/40 md:backdrop-blur-sm md:border md:border-emerald-500/20 md:rounded-2xl md:p-5 md:hover:bg-emerald-700/40 md:hover:-translate-y-1"
              >
                <div className="hidden md:block p-2 bg-emerald-500/20 w-max rounded-lg mb-1">
                  <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                </div>
                
                <h3 className="text-xs md:text-lg font-bold text-white md:text-emerald-200">{item.title}</h3>
                <p className="hidden md:block text-xs text-gray-300 font-light">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-2 md:mt-2 flex justify-center md:justify-start w-full">
            <button className="
                  w-full md:w-auto
                  bg-[#165dfc]
                  hover:bg-sky-600
                  text-white
                  font-semibold
                  text-sm md:text-base
                  px-5 py-3 md:px-6 md:py-4
                  rounded-xl
                  transition
                  gap-2">
              Start a Chapter → Get Featured
            </button>
          </div>
          <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 text-white text-lg md:text-2xl font-bold opacity-0 
          group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none drop-shadow-lg bg-black/30 backdrop-blur-sm
           px-4 py-2 rounded-lg">
            HBTU Kanpur
          </div>

        </div>
      </div>
    </div>
  );
};

export default SectionEleven;