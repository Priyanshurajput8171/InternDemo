import React from 'react';

const CollegeNetwork = () => {
  // Content from Image 1
  const colleges = [
    { name: "Dayananda Sagar College of Engineering", location: "Bangalore" },
    { name: "Dayananda Sagar University", location: "Bangalore" },
    { name: "East West College of Engineering", location: "Bangalore" },
    { name: "R R Institute of Technology", location: "Bangalore" },
    { name: "Reva University", location: "Bangalore" },
    { name: "RNS Institute of Technology", location: "Bangalore" },
    { name: "Sai Vidya Institute of Technology", location: "Bangalore" },
    { name: "Sambhram Institute of Technology", location: "Bangalore" },
    { name: "KCC Institute of Technology", location: "Bangalore" },
    { name: "AGMR College of Engineering", location: "Bangalore" },
    { name: "RV Institute of Technology", location: "Bangalore" },
    { name: "BMS Institute of Technology", location: "Bangalore" },
    { name: "Jain Trinity College", location: "Bangalore" },
    { name: "KLE Institute of Technology", location: "Hubli" },
    { name: "Banaasthali Vidyapith", location: "Banaasthali" },
    { name: "Nitte Meenakshi Institute of Technology", location: "Bangalore" },
    { name: "IIIT Dharwad", location: "Dharwad" },
    { name: "Cambridge Institute Of Technology", location: "Bangalore" }
  ];

  return (
    <section className="bg-transparent w-full  py-16 px-4 md:px-8 text-white font-sans flex flex-col items-center">
      
      {/* Header Section */}
      <div className="text-center max-w-4xl mb-12">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 block mb-4">
          communityX CAMPUS NETWORK
        </span>
        
        <h2 className="text-3xl md:text-2xl font-bold leading-tight">
          Chapters Active Across{" "}
          <span className="inline-block bg-white text-[#165dfc] px-3 py-1 mx-1 rounded-lg">
            55+
          </span>{" "}
          Engineering Colleges
        </h2>
        
        <p className="text-white/80 mt-4 text-sm md:text-base">
          Join a campus near you, or be the one to bring{" "}  
          <span className="inline-block text-[#165dfc] font-bold rounded-lg">
            OSCode
          </span>{" "} to your college.
        </p>
      </div>

      {/* Institutes Grid (Boxy white card design from Image 2) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 w-full max-w-[1400px]">
        {colleges.map((college, index) => (
          <div 
            key={index}
            className="bg-white rounded-2xl p-5 flex flex-col items-center justify-center text-center shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-black/30 cursor-default"
          >
            {/* Using requested image for all institutes */}
            <img 
              src="/image/institute1.png" 
              alt={college.name} 
              className="w-10 h-6 object-contain mb-3" 
            />
            <h4 className="text-[#165dfc] font-bold text-[13px] leading-tight">
              {college.name}
            </h4>
            <p className="text-[#165dfc]/60 text-xs mt-1">
              {college.location}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button className="mt-14 bg-white text-[#165dfc] font-bold py-3 px-8 rounded-full shadow-lg shadow-black/10 hover:scale-105 transition-all duration-200 flex items-center gap-2">
        Start a Chapter at Your Campus
        <span className="text-xl">&rarr;</span>
      </button>

    </section>
  );
};

export default CollegeNetwork;