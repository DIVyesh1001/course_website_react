import React,{useEffect} from 'react'
import Navbar from './assets/Components/Navbar/Navbar'
import HeroSection from './assets/Components/HeroSection/HeroSection'
import InstructorSection from './assets/Components/InstructorSection/InstructorSection'
import LearnSection from './assets/Components/LearnSection/LearnSection'
import TopicsSection from './assets/Components/TopicsSection/TopicsSection'
import TestimonialSection from './assets/Components/TestimonialSection/TestimonialSection'
import FAQSection from './assets/Components/FAQSection/FAQSection'
import FooterSection from './assets/Components/FooterSection/FooterSection'
import Home from './assets/Pages/Home/Home'
import Course from './assets/Pages/Course/Course'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router';

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Router>
    <div>
      <Navbar/>
      {/* <HeroSection/>
      <InstructorSection/>
      <LearnSection/>
      <TopicsSection/>
      <TestimonialSection/>
      <FAQSection/> */}
      {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
        </Routes>
      <FooterSection/>
    </div>
    </Router>
  )
}
