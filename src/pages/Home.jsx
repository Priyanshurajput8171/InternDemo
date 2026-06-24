import React from 'react'
import Navbar from '../components/Navbar'
import SectionOne from '../components/SectionOne'
import SectionSecond from '../components/SectionSecond'
import CollegeNetwork from '../components/CollegeNetwork'
import SectionFourth from '../components/SectionFourth'
import SectionFifth from '../components/SectionFifth'
import SectionSix from '../components/SectionSix'
import SectionSeven from '../components/SectionSeven'
import SectionEight from '../components/SectionEight'
import SectionNine from '../components/SectionNine'


const Home = () => {
  return (
     <div className="relative min-h-screen overflow-x-hidden text-white">
      
      <div className="fixed inset-0 -z-10 bg-black">
        <div className="absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full bg-purple-700/20 blur-[180px]" />
        <div className="absolute bottom-0 right-0 h-[700px] w-[700px] rounded-full bg-cyan-500/20 blur-[220px]" />
      </div>
       <Navbar/>
     <main>
      <SectionOne/>
      <SectionSecond/>
      <CollegeNetwork/>
      <SectionFourth/>
      <SectionFifth/>
      <SectionSix/>
      <SectionSeven/>
      <SectionEight/>
      <SectionNine/>
     </main>
    </div>
  )
}

export default Home