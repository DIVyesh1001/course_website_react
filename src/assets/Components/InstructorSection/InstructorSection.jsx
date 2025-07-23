import React from 'react'
import { Link } from 'react-router'
export default function InstructorSection() {
    return (
        <section data-aos="fade-in" className="bg-white py-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 px-6">
                {/* Left Side – Image with decorations */}
                <div className="relative w-full h-full">
                    {/* Decorative Half Circle */}
                    {/* <img
                        src="https://i.ibb.co/MJCk2ZR/red-circle.png"
                        alt="Man at laptop"
                        className="absolute -top-20 -left-20 w-64 h-64 z-0"
                    /> */}

                    {/* Image */}
                    <img
                        src="https://i.postimg.cc/QCSc70Yb/Renu-single.jpg"
                        alt="Renu Bisht"
                        className="relative z-10 w-full h-full rounded-lg shadow-xl object-cover"
                    />

                    {/* Info Card - Hidden on small screens */}
                    <div className="absolute bottom-[-40px] right-[-40px] bg-white rounded-sm shadow-xl p-6 w-80 h-60 z-20 hidden md:block">
                        <h3 className="text-4xl font-bold text-slate-900 mb-5">Renu Bisht</h3>
                        <p className="text-red-600 text-sm font-medium mb-5">Founder, Commercify360, DTC & Marketplace Coach, and Amazon Ads expert</p>
                        <div className="flex items-center justify-between ">
                            {/* <img
                                src="https://i.ibb.co/s91YFxwj/signature-stock-image.jpg"
                                alt="signature"
                                className="h-20"
                            /> */}
                            <div className="flex gap-3 text-slate-400">
                                {/* <img src="https://i.ibb.co/twz2Kxn7/facebook-brand-fb-logo-icon.png" className="h-5 w-5" />
                                <img src="https://i.ibb.co/bpHVfyy/firefox-logo-logos-icon.png" className="h-5 w-5" /> */}
                                <a href='https://www.instagram.com/rbisht5?igsh=ZnFvaTk0c2JrZXVo'><img src="https://i.ibb.co/RpJjm7xc/instagram-brand-logo-icon.png" className="h-5 w-5" /></a>
                                <a href='https://www.linkedin.com/in/renubisht?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'><img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" className="h-5 w-5" /></a>
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
                                Enroll now
                        </Link>
                        <a href='https://commercify360.com/' className="px-10 py-4 text-xl font-semibold text-slate-900 bg-white border border-slate-200 rounded-full shadow hover:bg-slate-100 transition-transform duration-200 hover:scale-95">
                                Learn More
                        </a>
                        {/* <Link to="/course" className="px-10 py-4 text-xl font-semibold text-slate-900 bg-white border border-slate-200 rounded-full shadow hover:bg-slate-100 transition-transform duration-200 hover:scale-95 ms:display:none;">
                                Learn More about Comemrcify360
                        </Link> */}
                    </div>
                </div>
            </div>
        </section>
    )
}