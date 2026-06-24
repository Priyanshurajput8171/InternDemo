import React from 'react';

const SectionSecond = () => {
    return (
    <div className="w-full bg-transparent text-white py-20 px-4 md:px-8 font-sans flex flex-col items-center justify-center min-h-[500px]">
      
      <div className="flex items-center gap-3 mb-5">
        <div className="w-[2px] h-5 bg-white/50"></div>
        <span className="text-xs font-bold tracking-[0.2em] text-white/80 uppercase">
          Check Your Campus
        </span>
      </div>

      <h1 className="text-2xl md:text-2xl font-bold text-center max-w-3xl leading-tight tracking-tight text-[#165dfc]">
        Is Your College Already Part of <br className="hidden md:block" /> <span
         className='text-2xl md:text-2xl font-bold text-center max-w-3xl leading-tight tracking-tight text-white'>
          communityX?</span>
      </h1>

      <p className="text-white/70 text-center max-w-2xl mt-5 mb-12 text-sm md:text-base leading-relaxed">
        Search your college below. If it's listed, you can join the chapter. If not, you could be the one to start it.
      </p>

      <div className="w-full max-w-lg relative mb-12">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg 
            className="w-5 h-5 text-white/60" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2} 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>
          <input
          id='search-bar'
          type="text"
          className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl py-4 pl-12 pr-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
          placeholder="Type your college name or city..."
         />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:bg-white/20 hover:scale-[1.01] cursor-pointer">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">
            Campus already listed?
          </h3>
          <p className="text-white/70 text-sm md:text-base leading-relaxed">
            Join the existing chapter and become part of the core team.
          </p>
        </div>
        
        <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:bg-white/20 hover:scale-[1.01] cursor-pointer">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">
            Campus not listed?
          </h3>
          <p className="text-white/70 text-sm md:text-base leading-relaxed">
            Be the Founding Chapter Lead and build something from scratch.
          </p>
        </div>
      </div>

    </div>
  );
};

export default SectionSecond;
