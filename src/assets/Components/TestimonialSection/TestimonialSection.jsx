import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    avatarUrl: 'https://i.postimg.cc/WpkGbSFJ/1671690333384.png', // Replace with Dr. Vaidya logo or image
    name: 'Arjun Vaidya',
    role: 'Founder',
    brand: 'Dr Vaidya',
    text: `In 2019, we connected with Renu and the Commercify360 Team and brought them on board to support our Amazon business. Working with them was a great experience. Our Dr. Vaidya business saw a 5X increase in revenue while collaborating with them. We appreciated how proactive and detail-oriented the team was, and they genuinely cared about our brand, which is not common among many agencies.`,
    companyLogoUrl:'https://i.postimg.cc/0y2z74hH/vaidya-e1628684769180.png'
  },
  {
    avatarUrl: 'https://i.postimg.cc/vBjt2N1G/NISHIT-720x.png', // Replace with XP Pen logo or image
    name: 'Nishit Shah',
    role: 'Country Manager',
    brand: 'XP Pen',
    text: `Renu and the Commercify360 team have done a fantastic job in driving and sustaining our growth on Amazon and Flipkart. Their dedication, deep knowledge of the platforms, and keen eye for detail have made a real difference to our business. We truly value their strategic support and hands-on approach.`,
    companyLogoUrl:'https://i.postimg.cc/prfmBM23/xp-pen.png'
  },
  {
    avatarUrl: 'https://i.postimg.cc/FzLzGd4P/Neeraj-Biyani1-1588435586237.png', // Replace with Asaya logo or image
    name: 'Neeraj Biyani',
    role: 'Founder',
    brand: 'Asaya',
    text: `We grew 16x on Amazon in just 12 months — with Renu and the Commercify360 team by our side. Their strategic AMS planning, creative innovations, and relentless optimisation truly stood out. From FBA enablement to A+ content, every lever was executed to perfection. Excited to continue this growth journey together!`,
    companyLogoUrl:'https://i.postimg.cc/FHBH3Hy7/asaya.png'
  },
  {
    avatarUrl: 'https://i.postimg.cc/HsbXgWtm/gaurav-zatakia.jpg', // Replace with FLO logo or image
    name: 'Gaurav Zatakia',
    role: 'Founder',
    brand: 'FLO Mattress',
    text: `Renu and the Commercify360 team have been managing our Amazon and Flipkart accounts for the past 4 years, and we’ve consistently grown with them. Their deep platform expertise, sharp eye for detail, and instant support have made them an invaluable partner in our journey. From driving sales growth to guiding us through strategic decisions — including FBA adoption, A+ content, and campaign optimisation — they’ve helped us scale efficiently.`,
    companyLogoUrl:'https://i.postimg.cc/3JQp0nKP/Flo.webp'
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 7000);
    return () => clearInterval(interval);
  }, [total]);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const { avatarUrl, name, role, brand, text,companyLogoUrl } = testimonials[current];

  return (
    <section className="bg-slate-900 py-20 relative overflow-hidden">
      <div className="text-center px-6 mb-12 text-white">
        <h2 className="text-4xl font-semibold  sm:text-5xl mb-4">Client Testimonials</h2>
        <p className="max-w-2xl mx-auto text-lg">
          What our brand partners say about working with Commercify360
        </p>
      </div>
      {/* testimonial card */}
      <div className="max-w-5xl mx-auto relative px-6">
        <div className="bg-white rounded-lg sm:rounded-xl shadow-2xl flex flex-col lg:flex-row items-center sm:items-start p-6 sm:p-8 lg:p-12 min-h-[400px] sm:min-h-[350px] lg:min-h-[300px]">
          {/* Avatar */}
          <div className="flex-shrink-0 mb-0 md:mb-5 md:mr-10 sm:mb-6 place-self-center">
            <div className=" w-full h-90 items-center ">
              <img
                src={avatarUrl}
                alt={brand}
                className="w-full sm:h-full h-70 rounded-4xl"
              />
            </div>
          </div>
          {/* Content */}
          <div className="flex-1">
            {/* <h3 className="text-2xl font-bold text-slate-900 mb-4">{text}</h3> */}
            <p className="text-slate-600 mb-4 sm:mb-6">{text}</p>
            <hr className="border-slate-200 mb-6" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="font-semibold text-slate-900">{name}</p>
                <p className="text-red-600">{role}</p>
              </div>
              <div className="opacity-60">
                <img src={companyLogoUrl} alt="company logo" className="h-20 object-contain place-self-center" />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation + Dots */}
        <div className="flex items-center justify-center gap-8 mt-10">
          {/* <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white text-xl flex items-center justify-center"
            aria-label="Previous"
          >
            ‹
          </button> */}

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full ${i === current ? 'bg-white' : 'bg-white/50'
                  }`}
              />
            ))}
          </div>

          {/* <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white text-xl flex items-center justify-center"
            aria-label="Next"
          >
            ›
          </button> */}
        </div>
      </div>
    </section>
  );
}
