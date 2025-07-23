import React from "react";

export default function WhoIsThisCourseFor() {
    const cardData = [
        {
            title: "Amazon Sellers & DTC Entrepreneurs",
            desc: "Founders, brand owners, and private-label sellers who want to take control of their advertising strategy, boost product visibility, and scale profitably on Amazon."
        },
        {
            title: "Performance & Digital Marketers",
            desc: "Marketing professionals looking to upskill in one of the most in-demand platforms – Amazon Ads – by learning how to plan, launch, and optimize campaigns across the funnel."
        },
        {
            title: "Agencies & eCommerce Consultants",
            desc: "Service providers and consultants managing Amazon ad accounts for clients who want to sharpen their strategies, stay current with Amazon’s evolving tools, and deliver better results."
        },
        {
            title: "Marketing Students & Early-Career Professionals",
            desc: "Aspiring eCommerce marketers and students who want hands-on experience and practical frameworks to break into Amazon performance marketing with confidence."
        }
    ];

    return (
        <div className="bg-white py-20 px-4 lg:px-8">
            {/* Centered Heading */}
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h1 className="text-4xl font-semibold  sm:text-5xl text-gray-900 mb-6">
                    Who This Course is For?
                </h1>
                <p className="text-xl text-gray-700">
                    This course is built for professionals across industries seeking to dominate the Amazon advertising ecosystem with real-world strategies and tools.
                </p>
            </div>

            {/* Cards */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {cardData.map((card, index) => (
                    <div key={index} className="bg-slate-50 rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300 border border-gray-200">
                        <h5 className="text-xl font-semibold text-gray-900 mb-3">{card.title}</h5>
                        <p className="text-gray-600 text-base">{card.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
