import React from 'react'
import { Link } from 'react-router'
export default function InstructorSection() {
    return (
        <section data-aos="fade-in" className="bg-white py-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 px-6">
                {/* Left Side – Image with decorations */}
                <div className="relative w-full h-full">
                    {/* Decorative Half Circle */}
                    {/* <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full border-[20px] border-red-600 border-t-0 border-r-0 z-0"></div> */}
                    <img
                        src="https://i.ibb.co/MJCk2ZR/red-circle.png"
                        alt="Man at laptop"
                        className="absolute -top-20 -left-20 w-64 h-64 z-0"
                    />

                    {/* Image */}
                    <img
                        src="https://plus.unsplash.com/premium_photo-1661508196384-333e4ebd90db?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Decorative"
                        className="relative z-10 w-full rounded-lg shadow-xl object-cover"
                    />

                    {/* Decorative Dots (Bottom Left) */}
                    {/* <div className="absolute bottom-4 left-0 grid grid-cols-1 gap-2 z-0">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-2 w-2 rounded-full bg-red-600 mb-2"></div>
            ))}
          </div> */}

                    <div className="absolute bottom-[-40px] right-[-40px]  bg-white rounded-sm shadow-xl p-6 w-80 h-60 z-20 ">
                        <h3 className="text-lg font-bold text-slate-900">Renu Bisht</h3>
                        <p className="text-red-600 text-sm font-medium mb-2">Founder, Commercify360, DTC & Marketplace Coach, and Amazon Ads expert</p>
                        {/* <p className="text-slate-500 italic text-sm mb-4 ">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, venenatis.”</p> */}
                        <div className="flex items-center justify-between ">
                            <img
                                src="https://i.ibb.co/s91YFxwj/signature-stock-image.jpg"
                                alt="signature"
                                className="h-20"
                            />
                            <div className="flex gap-3 text-slate-400">
                                <img src="https://i.ibb.co/twz2Kxn7/facebook-brand-fb-logo-icon.png" className="h-5 w-5" />
                                <img src="https://i.ibb.co/bpHVfyy/firefox-logo-logos-icon.png" className="h-5 w-5" />
                                <img src="https://i.ibb.co/RpJjm7xc/instagram-brand-logo-icon.png" className="h-5 w-5" />
                                <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" className="h-5 w-5" />
                            </div>
                        </div>
                    </div>

                </div>

                {/* Right Side – Text & CTA */}
                <div className='mx-10'>
                    <h1 className="text-3xl lg:text-5xl font-bold text-slate-900 leading-tight">
                        Meet Renu Bisht , your course teacher
                    </h1>
                    <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                        Founder of Commercify360, an award-winning Amazon growth partner, Renu has empowered 200+ brands to achieve breakthrough results through high-performance advertising and marketplace strategy.
                        Now, learn directly from her real-world playbook with hands-on lessons, proven frameworks, and practical tools built for scale.
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link to="/course" className="px-10 py-4 text-xl font-semibold text-white bg-red-600 rounded-full shadow-lg hover:bg-red-700 transition-transform duration-200 hover:scale-95">
                                Get Started
                        </Link>
                        <Link to="/course" className="px-10 py-4 text-xl font-semibold text-slate-900 bg-white border border-slate-200 rounded-full shadow hover:bg-slate-100 transition-transform duration-200 hover:scale-95">
                                Learn More
                        </Link>
                        <Link to="/course" className="px-10 py-4 text-xl font-semibold text-slate-900 bg-white border border-slate-200 rounded-full shadow hover:bg-slate-100 transition-transform duration-200 hover:scale-95">
                                Learn More about Comemrcify360
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
