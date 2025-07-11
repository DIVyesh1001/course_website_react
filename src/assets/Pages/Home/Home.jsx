import React from 'react'
import HeroSection from '../../Components/HeroSection/HeroSection'
import InstructorSection from '../../Components/InstructorSection/InstructorSection'
import LearnSection from '../../Components/LearnSection/LearnSection'
import TestimonialSection from '../../Components/TestimonialSection/TestimonialSection'
import FAQSection from '../../Components/FAQSection/FAQSection'
import BrandsSection from '../../Components/BrandsSection/BrandsSection'
import QASection from '../../Components/QASection/QASection'
export default function Home() {
    return (
        <div>
            <HeroSection />
            <InstructorSection />
            <QASection/>
            <LearnSection />
            <BrandsSection/>
            <TestimonialSection />
            <FAQSection />
        </div>
    )
}
