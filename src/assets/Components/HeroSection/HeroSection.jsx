import React from 'react';

export default function HeroSection() {
    return (
        <section className="bg-white py-20 mx-10">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 px-1 py-20">
                {/* Left Side */}
                <div>
                    <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                        The ultimate growth <br /> marketing course
                    </h1>
                    <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac eu et ac elit senectus mauris blandit tempor. Egestas ut tincidunt a eget ultrices risus. Et lorem ut quam turpis dictum habitant.
                    </p>

                    {/* Author */}
                    <div className="mt-8 flex items-center gap-4">
                        <img
                            src="src\assets\Images\businesswoman.png"
                            alt="John Carter"
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                            <p className="text-xl font-bold text-slate-900">John Carter</p>
                            <p className="text-xl text-green-600">Expert Growth Hacker</p>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-wrap gap-4">
                        <a
                            href="#"
                            className="px-10 py-4 text-xl font-semibold text-white bg-green-600 rounded-full shadow-lg hover:bg-green-700 transition-transform duration-200 hover:scale-95"
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

                </div>

                {/* Right Side */}
                <div className="relative w-full h-full py-15">
                    {/* Decorative Top Left Green Half Circle */}
                    {/* <img
                        src="src\assets\Images\greenring.svg"
                        alt="Man at laptop"
                        className="absolute -top-8 -left-8 w-64 h-64 z-0"
                    /> */}

                    {/* Image */}
                    <img
                        src="src\assets\Images\amazon-logo.png"
                        alt="Man at laptop"
                        className="relative z-10 w-full my-20 rounded-lg object-cover"
                    />

                    {/* Decorative Green Dots (Bottom Right) */}
                    {/* <div className="absolute bottom-4 right-0 grid grid-cols-1 gap-2 z-0">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-2 w-2 rounded-full bg-green-600 mb-2"></div>
            ))}
          </div> */}
                </div>
            </div>
        </section>
    );
}
