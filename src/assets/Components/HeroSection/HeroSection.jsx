import React from 'react';
import { Link } from 'react-router'
export default function HeroSection() {
    return (
        <section data-aos="fade-up" className="bg-white py-20 mx-10">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 px-1 py-20">
                {/* Left Side */}
                <div>
                    <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                        Master Amazon Ads: <br /> From Zero to Pro
                    </h1>
                    <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                        Learn how to drive traffic, boost conversions, and scale your brand using Amazon’s powerful ad ecosystem.
                        🛒 Perfect for sellers, marketers, and agencies. No prior experience required.

                    </p>

                    {/* Author */}
                    <div className="mt-8 flex items-center gap-4">
                        <img
                            src="https://i.ibb.co/RXr14wd/businesswoman.png"
                            alt="Renu Bisht"
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                            <p className="text-xl font-bold text-slate-900">Renu Bisht</p>
                            <p className="text-xl text-red-600">Amazon Growth Strategist</p>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link to="/course" className="px-10 py-4 text-xl font-semibold text-white bg-red-600 rounded-full shadow-lg hover:bg-red-700 transition-transform duration-200 hover:scale-95" >
                                Enroll Now 
                        </Link>
                        <Link to="/course" className="px-10 py-4 text-xl font-semibold text-slate-900 bg-white border border-slate-200 rounded-full shadow hover:bg-slate-100 transition-transform duration-200 hover:scale-95">
                                Learn more</Link>
                    </div>

                </div>

                {/* Right Side */}
                <div className="relative w-full h-full py-15">
                    {/* Decorative Top Left red Half Circle */}
                    {/* <img
                        src="src\assets\Images\redring.svg"
                        alt="Man at laptop"
                        className="absolute -top-8 -left-8 w-64 h-64 z-0"
                    /> */}

                    {/* Image */}
                    <img
                        src="https://i.ibb.co/0yBLDVVM/amazon-logo.png"
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
            <div class="bg-white w-full px-4 pt-16 pb-16 xl:grid grid-cols-[1fr_2fr] " id="faq">
                <h2 class="text-4xl p-5 font-bold text-center">Featured in:</h2>

                <div
                    class="mx-auto w-full max-w-4xl bg-white justify-center items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                    <a target="_blank" href="">
                        <img alt="" class="h-20  mx-auto" src="https://www.svgrepo.com/show/442910/brand-apple.svg" />
                    </a>
                    <a target="_blank" href="">
                        <img alt="" class="h-20  mx-auto" src="https://www.svgrepo.com/show/443329/brand-pixar.svg" />
                    </a>
                    <a target="_blank" href="">
                        <img alt="" class="h-20  mx-auto" src="https://www.svgrepo.com/show/443079/brand-geforce.svg" />
                    </a>
                    <a target="_blank" href="">
                        <img alt="" class="h-20  mx-auto" src="https://www.svgrepo.com/show/443042/brand-ethereum.svg" />
                    </a>
                    <a target="_blank" href="">
                        <img alt="" class="h-20  mx-auto" src="https://www.svgrepo.com/show/443206/brand-line.svg" />
                    </a>
                    <a target="_blank" href="">
                        <img alt="" class="h-20  mx-auto" src="https://www.svgrepo.com/show/519278/slack.svg" />
                    </a>
                </div>
            </div>
        </section>
    );
}
