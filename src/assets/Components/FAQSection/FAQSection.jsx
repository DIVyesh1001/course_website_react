import React from 'react';

const faqs = [
  {  
    question: 'What is your past experience on marketing?',  
    answer: 'Explain your background in marketing, any courses you’ve taken, or campaigns you’ve worked on.'  
  },
  {  
    question: 'Do you offer discounts for students?',  
    answer: 'Yes—students get a 20 % discount with a valid .edu email address.'  
  },
  {  
    question: 'What topics are included in the course?',  
    answer: 'We cover email marketing, SEO, paid ads, analytics, content strategy, social media, and more.'  
  },
  {  
    question: 'When was the course recorded?',  
    answer: 'All lessons were recorded in June and July 2025, so the content is fully up-to-date.'  
  },
  {  
    question: 'Is the course good for marketing beginners?',  
    answer: 'Absolutely—it starts with the fundamentals and gradually ramps up to advanced tactics.'  
  },
  {  
    question: 'Do you offer discounts for big teams?',  
    answer: 'Yes—teams of 5 or more receive a tiered discount. Contact us for a quote.'  
  },
  {  
    question: 'Do you have a refund policy for the course?',  
    answer: 'Full refund within 14 days if you’re not satisfied—no questions asked.'  
  },
  {  
    question: 'Do you have a free class trial for the course?',  
    answer: 'Yes—you can access the first module (3 lessons) at no cost.'  
  },
];

export default function FAQSection() {
  return (
    <section  className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit.<br />Ac eu et ac elit senectus
            mauris blandit tempore gestas.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map(({ question, answer }, idx) => (
            <details
              key={idx}
              className="group bg-white shadow p-4"
            >
              <summary className="flex items-center gap-5 cursor-pointer list-none h-20">
                <span className="flex items-center justify-center w-8 h-8 bg-red-100 text-red-600 rounded-full transition-transform group-open:rotate-45">
                  +
                </span>
                <span className="text-2xl font-bold text-slate-900">
                  {question}
                </span>
              </summary>
              <p className="mt-3 text-slate-600">{answer}</p>
            </details>
          ))}
        </div>
      </div>
      <div className="mt-10 flex flex-wrap gap-4 justify-center">
                        <a
                            href="#"
                            className="px-10 py-4 text-xl font-semibold text-white bg-red-600 rounded-full shadow-lg hover:bg-red-700 transition-transform duration-200 hover:scale-95"
                        >
                            Get the course
                        </a>
                        <a
                            href="#"
                            className="px-10 py-4 text-xl font-semibold text-slate-900 bg-white border border-slate-200 rounded-full shadow hover:bg-slate-100 transition-transform duration-200 hover:scale-95"
                        >
                            Learn more
                        </a>
                    </div>
    </section>
  );
}
