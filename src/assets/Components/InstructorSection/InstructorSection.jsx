import React from 'react'

export default function InstructorSection() {
    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 px-6">
                {/* Left Side – Image with decorations */}
                <div className="relative w-full h-full">
                    {/* Decorative Half Circle */}
                    {/* <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full border-[20px] border-green-600 border-t-0 border-r-0 z-0"></div> */}
                    <img
                        src="src\assets\Images\greenring.svg"
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
              <div key={i} className="h-2 w-2 rounded-full bg-green-600 mb-2"></div>
            ))}
          </div> */}

                    <div className="absolute bottom-[-40px] right-[-40px] bg-white rounded-sm shadow-xl p-6 w-80 h-60 z-20">
                        <h3 className="text-lg font-bold text-slate-900">John Carter</h3>
                        <p className="text-green-600 text-sm font-medium mb-2">Entrepreneur and Growth Hacker</p>
                        <p className="text-slate-500 italic text-sm mb-4">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, venenatis.”</p>
                        <div className="flex items-center justify-between">
                            <img
                                src="src\assets\Images\signature-stock-image.jpg"
                                alt="signature"
                                className="h-20"
                            />
                            <div className="flex gap-3 text-slate-400">
                                <img src="src\assets\Images\facebook_brand_fb_logo_icon.png" className="h-5 w-5"/>
                                <img src="src\assets\Images\instagram_brand_logo_icon.png" className="h-5 w-5"/>
                                <img src="src\assets\Images\firefox_logo_logos_icon.png" className="h-5 w-5"/>
                                <img src="src\assets\Images\adobe_brand_brands_logo_icon.png" className="h-5 w-5"/>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Right Side – Text & CTA */}
                <div className='mx-10'>
                    <h1 className="text-3xl lg:text-5xl font-bold text-slate-900 leading-tight">
                        Meet John Carter, your course teacher
                    </h1>
                    <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                        Discover the tools to scale your business to the next level. Get instant access to strategies that convert and elevate your marketing impact.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum distinctio reiciendis vel enim similique quas earum fugit voluptate expedita. Minus?
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-wrap gap-4">
                        <a
                            href="#"
                            className="px-10 py-4 text-xl font-semibold text-white bg-green-600 rounded-full shadow-lg hover:bg-green-700 transition-transform duration-200 hover:scale-95"
                        >
                            Get Started
                        </a>
                        <a
                            href="#"
                            className="px-10 py-4 text-xl font-semibold text-slate-900 bg-white border border-slate-200 rounded-full shadow hover:bg-slate-100 transition-transform duration-200 hover:scale-95"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
