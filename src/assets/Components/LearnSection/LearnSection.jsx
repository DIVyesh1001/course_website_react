import React from 'react';
import { Link } from 'react-router';

const topics = [
  {
    id: 1,
    title: 'Master the Amazon Ads Ecosystem',
    description:
      'Learn how Sponsored Products, Brands, Display, DSP, and Sponsored TV work together to drive results across the full customer journey.',
  },
  {
    id: 2,
    title: 'Launch & Manage High-Performing Campaigns',
    description:
      'Set up and manage campaigns using Amazon’s latest 2025 interface—covering targeting, bidding, budgeting, and performance tracking with hands-on guidance.',
  },
  {
    id: 3,
    title: 'Target the Right Shoppers',
    description:
      'Master keyword and audience targeting using automatic and manual methods. Reach high-intent shoppers with contextual, behavioral, and demographic signals from Amazon’s first-party data.',
  },
  {
    id: 4,
    title: 'Optimize, Scale & Build a Full-Funnel Strategy',
    description:
      'Improve ACOS, ROAS, CTR, and conversions with advanced tactics like dayparting, new-to-brand metrics, and multi-format campaigns. Build full-funnel strategies to drive awareness, sales, and loyalty across Amazon.',
  },
];

export default function LearnSection() {
  return (
    <section data-aos="fade-right" className="bg-white py-16 my-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">What will I learn?</h2>
        <p className="relative mx-auto max-w-2xl text-lg text-slate-600 mb-12 z-10">
          Gain practical, hands-on skills to launch, optimize, and scale high-performing Amazon ad campaigns across Sponsored Ads, DSP, and Sponsored TV.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Image */}
          <div className='relative w-full h-full'>
            {/* Decorative Half Circle */}
            {/* <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full border-[20px] border-red-600 border-t-0 border-r-0 z-0"></div> */}
            <img
              src="https://i.ibb.co/MJCk2ZR/red-circle.png"
              alt="red-ring"
              className="absolute -top-30 -left-50 w-100 h-100 z-0"
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1661605241052-c7d9de64a556?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Course preview"
              className="relative w-full h-full rounded-lg shadow-lg object-cover z-10"
            />
          </div>

          {/* Right: Topic List */}
          <div className="space-y-6">
            {topics.map((topic) => (
              <div
                key={topic.id}
                className="bg-slate-50 p-6 rounded-xl shadow-sm flex items-start gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-red-600 text-white font-bold">
                    {topic.id}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl  text-left font-bold text-slate-900">{topic.title}</h3>
                  <p className="mt-2 text-left text-lg text-slate-600">{topic.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTAs */}
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link to="/course"
            className="px-10 py-4 text-xl font-semibold text-white bg-red-600 rounded-full shadow-lg hover:bg-red-700 transition-transform duration-200 hover:scale-95"
          >
            Enroll Now
          </Link>
          <a
            href="#"
            className="px-10 py-4 text-xl font-base text-slate-900 bg-white border border-slate-200 rounded-full shadow hover:bg-slate-100 transition-transform duration-200 hover:scale-95"
          >
            About the teacher
          </a>
        </div>
      </div>
    </section>
  );
}
