import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

export default function AccordionComponent() {
  const [openAccordions, setOpenAccordions] = useState({});

  const toggleAccordion = (id) => {
    setOpenAccordions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const accordionData = [
    {
      id: 'left1',
      title: 'Do I need prior experience with Amazon Ads to take this course?',
      content: 'Not at all. This course is designed for both beginners and intermediate learners. Whether you\'re just getting started or want to sharpen your current ad skills, the step-by-step modules will guide you through everything—from setup to advanced scaling.'
    },
    {
      id: 'left2',
      title: 'Who is the instructor?',
      content: 'The course is led by Renu Bisht, Founder of Commercify360, an award-winning Amazon growth consultancy. With hands-on experience scaling 200+ brands, Renu brings proven frameworks and campaign-tested strategies to help you grow on Amazon.'
    },
    {
      id: 'left3',
      title: 'Will I get hands-on practice?',
      content: 'Yes. This is not just theory - you\'ll walk through real campaign setups, optimization tactics, and performance dashboards. You\'ll also get access to practical templates and case studies.'
    },
    {
      id: 'left4',
      title: 'What will I be able to do after completing this course?',
      content: 'You\'ll be able to launch, manage, and scale Amazon ad campaigns confidently. You\'ll also understand how to interpret key metrics like ACOS, ROAS, and new-to-brand, and how to use tools like Sponsored Display, DSP, and Sponsored TV ads.'
    },
    {
      id: 'left5',
      title: 'Is this course relevant for global sellers or just India-based brands?',
      content: 'While the course is tailored with Indian SMBs and DTC brands in mind, the principles, strategies, and Amazon Ads platform features are globally applicable.'
    },
    {
      id: 'left6',
      title: 'Will I receive a certificate?',
      content: 'Yes. All learners will receive a certificate of completion upon finishing the course—great for showcasing your Amazon Ads expertise on LinkedIn or your resume.'
    },
    {
      id: 'left7',
      title: 'What if I have questions during the course?',
      content: 'You\'ll get access to a private learner support group or forum where you can ask questions, get feedback, and stay updated with bonus tips from Renu and her team.'
    },
    {
      id: 'left8',
      title: 'How is this course different from free YouTube tutorials or blogs?',
      content: 'This course is structured, up-to-date, and built from real brand success stories. You\'re learning directly from a top-performing practitioner—Renu Bisht—who has scaled 200+ brands, not just theories or guesswork.'
    },
    {
      id: 'right1',
      title: 'What tools or software will I need to follow along?',
      content: 'Just an Amazon Seller Central or Vendor Central account and basic access to Amazon Ads Console. No paid tools are required, although we\'ll also touch on third-party solutions for scaling (like DSP platforms and analytics tools).'
    },
    {
      id: 'right2',
      title: 'Will this course cover Amazon DSP and Sponsored TV?',
      content: 'Yes, we include introductory-to-advanced lessons on DSP and Sponsored TV, especially focusing on how Indian and global brands can leverage these channels to build awareness and scale faster.'
    },
    {
      id: 'right3',
      title: 'Is there a refund policy?',
      content: 'Yes. If you\'re not satisfied, we offer a 7-day money-back guarantee—no questions asked. We\'re confident in the course quality and want to make it risk-free for you.'
    },
    {
      id: 'right4',
      title: 'Can I get one-on-one help or consulting after the course?',
      content: 'Yes. Graduates of the course will receive special access to premium consulting sessions and bonus workshops through Commercify360 at a discounted rate.'
    },
    {
      id: 'right5',
      title: 'Is the course conducted live?',
      content: 'Yes! This is a live instructor-led course delivered in real-time by Renu Bisht. You\'ll have the opportunity to interact directly, ask questions, and get feedback during each session. Live delivery ensures you learn with the most up-to-date strategies and benefit from real-world discussions.'
    },
    {
      id: 'right6',
      title: 'What happens if I miss a live session?',
      content: 'Don\'t worry—all live sessions will be recorded and made available to enrolled participants. You\'ll have lifetime access to replays, resources, and any bonus materials shared during class.'
    },
    {
      id: 'right7',
      title: 'Is there a community I can join?',
      content: 'Absolutely. All course participants get access to an exclusive WhatsApp community where you can interact with fellow learners, ask questions, share insights, and stay updated. It\'s a supportive space to network, learn together, and get guidance from Renu and her team throughout the course and beyond.'
    }
  ];

  const leftAccordions = accordionData.filter(item => item.id.startsWith('left'));
  const rightAccordions = accordionData.filter(item => item.id.startsWith('right'));

  // Distribute items evenly between columns
  const midpoint = Math.ceil(accordionData.length / 2);
  const leftItems = accordionData.slice(0, midpoint);
  const rightItems = accordionData.slice(midpoint);

  const AccordionItem = ({ item }) => (
    <div className={`border rounded-lg mb-4 transition-all duration-200 overflow-hidden ${
      openAccordions[item.id] 
        ? 'border-red-500 bg-white shadow-lg' 
        : 'border-gray-200 bg-white hover:shadow-lg'
    }`}>
      <button
        onClick={() => toggleAccordion(item.id)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors duration-200"
      >
        <h3 className={`text-lg font-semibold transition-colors duration-200 ${
          openAccordions[item.id] ? 'text-red-500' : 'text-gray-800'
        }`}>
          {item.title}
        </h3>
        <div className="flex-shrink-0 ml-4">
          {openAccordions[item.id] ? (
            <X className="w-5 h-5 text-red-500 transition-all duration-200" />
          ) : (
            <Plus className="w-5 h-5 text-gray-600 transition-all duration-200" />
          )}
        </div>
      </button>
      <div className={`transition-all duration-300 ease-in-out ${
        openAccordions[item.id] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 pb-4 pt-0">
          <div className="border-t border-gray-100 pt-4">
            <p className="text-gray-600 leading-relaxed">{item.content}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fbfbfb] py-12 px-4" id='faqs'>
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold  sm:text-5xl text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          {/* <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get answers to all your questions about our comprehensive Amazon Ads course. Learn from industry expert Renu Bisht and master the art of scaling brands on Amazon.
          </p> */}
        </div>

        {/* Accordion Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-0">
            {leftItems.map((item) => (
              <AccordionItem key={item.id} item={item} />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-0">
            {rightItems.map((item) => (
              <AccordionItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}