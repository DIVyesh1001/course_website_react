import React from 'react'
import Navbar from './assets/Components/Navbar/Navbar'
import HeroSection from './assets/Components/HeroSection/HeroSection'
import InstructorSection from './assets/Components/InstructorSection/InstructorSection'
import LearnSection from './assets/Components/LearnSection/LearnSection'
import TopicsSection from './assets/Components/TopicsSection/TopicsSection'

export default function App() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <InstructorSection/>
      <LearnSection/>
      <TopicsSection/>
    </div>
  )
}
