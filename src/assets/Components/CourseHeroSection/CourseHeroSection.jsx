import React from 'react'

export default function CourseHeroSection() {
    return (
        <section data-aos="fade-in" className="bg-white  mx-10">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 px-1 ">
                {/* Left Side */}
                <div>
                    <h1 className="text-5xl lg:+text-6xl font-bold text-slate-900 leading-tight">
                        Master Amazon Ads: <br /> From Setup to Scale
                    </h1>
                    <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                        This live, instructor-led course is designed to help founders, marketers, and brand teams unlock the full power of Amazon’s advertising ecosystem. Whether you’re launching your first campaign or looking to scale existing efforts, this course equips you with the skills, tools, and strategies needed to drive real performance.
                        
                    </p>
                    <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                        👥 Interactive & live Q&A, 📚 10 Hours of Learning,  
                        
                    </p>
                    <p className="mt-3 text-xl text-slate-600 leading-relaxed">
                         Dates: August 16th and 17th, 2025
                        
                    </p>



                    {/* Buttons */}
                    <div className="mt-10 flex flex-wrap gap-4">
                        <a
                            href="#course"
                            className="px-10 py-4 text-xl font-bold text-white bg-red-600 rounded-full shadow-lg hover:bg-red-700 transition-transform duration-200 hover:scale-95"
                        >
                            Enroll now
                        </a>
                    </div>

                </div>
                <div className="relative w-full h-full ">
                    {/* Decorative Top Left red Half Circle */}
                    {/* <img
                        src="src\assets\Images\redring.svg"
                        alt="Man at laptop"
                        className="absolute -top-8 -left-8 w-64 h-64 z-0"
                    /> */}

                    {/* Image */}
                    <img
                        src="https://images.pexels.com/photos/5912280/pexels-photo-5912280.jpeg"
                        alt="Man at laptop"
                        className="relative z-10 w-full my-20 rounded-lg object-cover"
                    />

                    {/* Decorative red Dots (Bottom Right) */}
                    {/* <div className="absolute bottom-4 right-0 grid grid-cols-1 gap-2 z-0">
                            {[...Array(6)].map((_, i) => (
                            <div key={i} className="h-2 w-2 rounded-full bg-red-600 mb-2"></div>
                                ))}
                                </div> */}
                </div>
            </div>
        </section>
    )
}
