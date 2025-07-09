import React from 'react';

const topics = [
  {
    id: 1,
    title: 'Introduction to Marketing',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac eu et ac elit senectus mauris blandit tempore gestas.',
  },
  {
    id: 2,
    title: 'Growth Marketing',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac eu et ac elit senectus mauris blandit tempore gestas.',
  },
  {
    id: 3,
    title: 'Marketing Strategies',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac eu et ac elit senectus mauris blandit tempore gestas.',
  },
  {
    id: 4,
    title: 'Marketing Scale & Automation',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac eu et ac elit senectus mauris blandit tempore gestas.',
  },
];

export default function LearnSection() {
  return (
    <section className="bg-white py-16 my-15">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">What will I learn?</h2>
        <p className="relative mx-auto max-w-2xl text-lg text-slate-600 mb-12 z-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac eu et ac elit senectus mauris
          blandit tempore gestas.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Image */}
          <div className='relative w-full h-full'>
            {/* Decorative Half Circle */}
            {/* <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full border-[20px] border-green-600 border-t-0 border-r-0 z-0"></div> */}
            <img
              src="src\assets\Images\greenring.svg"
              alt="Man at laptop"
              className="absolute -top-30 -left-50 w-100 h-100 z-0"
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1661605241052-c7d9de64a556?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Course preview"
              className="relative w-150 h-150 rounded-lg shadow-lg object-cover z-10"
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
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-green-600 text-white font-bold">
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
          <a
            href="#"
            className="px-10 py-4 text-xl font-semibold text-white bg-green-600 rounded-full shadow-lg hover:bg-green-700 transition-transform duration-200 hover:scale-95"
          >
            Get the course
          </a>
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
