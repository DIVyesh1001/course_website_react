import React, { useState } from 'react';

const testimonials = [
  {
    avatarUrl: 'https://cdn.prod.website-files.com/60d9feb9c76d589e5bee9402/60da4e8c0a1f6ecff5b19314_image-1-testimonials-slider-course-x-template.png',
    quote:
      '“The best course available to power up your marketing team.”',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, aliquet duis pellentesque pretium mattis orci. Vestibulum nunc diam tellus ac tempor. Nulla a commodo.',
    name: 'Will Woodward',
    role: 'Head of Growth Marketing',
    companyLogoUrl: 'https://via.placeholder.com/100x40?text=Startup',
  },
  // you can add more testimonial objects here
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);
  const { avatarUrl, quote, text, name, role, companyLogoUrl } = testimonials[current];

  return (
    <section className="bg-slate-900 py-20 relative overflow-hidden">
      {/* Heading */}
      <div className="text-center px-6 mb-12 text-white">
        <h2 className="text-4xl font-bold mb-4">Hear what our amazing students say</h2>
        <p className="max-w-2xl mx-auto text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac eu et ac elit senectus mauris
          blandit tempore gestas.
        </p>
      </div>

      {/* Testimonial Card */}
      <div className="max-w-5xl  mx-auto relative">
        <div className="bg-white  h-120 rounded-sm shadow-2xl flex flex-col md:flex-row items-center p-8 md:p-12">
          {/* Avatar */}
          <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-10">
            <div className="w-full h-90  ">
              <img
                src={avatarUrl}
                alt={name}
                className="w-full h-full  "
              />
            </div>
          </div>
          {/* Content */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{quote}</h3>
            <p className="text-slate-600 mb-6">{text}</p>
            <hr className="border-slate-200 mb-6" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="font-semibold text-slate-900">{name}</p>
                <p className="text-green-600">{role}</p>
              </div>
              <div className="opacity-60">
                <img src={companyLogoUrl} alt="company logo" className="h-8 object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-opacity ${
                idx === current ? 'bg-white opacity-100' : 'bg-white opacity-50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
