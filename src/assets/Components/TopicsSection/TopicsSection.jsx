import React from 'react';

const topics = [
    {
        id: 1,
        iconUrl: 'https://cdn.prod.website-files.com/60d9feb9c76d589e5bee9402/60da4af5915a2e43953147ed_icon-1-topics-home-course-x-template.svg',
        title: 'Email Marketing',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac eu et ac elit senectus mauris blandit tempore gestas.',
    },
    {
        id: 2,
        iconUrl: 'https://cdn.prod.website-files.com/60d9feb9c76d589e5bee9402/60da4af591310654dc0b5849_icon-3-topics-home-course-x-template.svg',
        title: 'Paid Advertising',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac eu et ac elit senectus mauris blandit tempore gestas.',
    },
    {
        id: 3,
        iconUrl: 'https://cdn.prod.website-files.com/60d9feb9c76d589e5bee9402/60da4af55649e154e39c8200_icon-6-topics-home-course-x-template.svg',
        title: 'SEO',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac eu et ac elit senectus mauris blandit tempore gestas.',
    },
    {
        id: 4,
        iconUrl: 'https://cdn.prod.website-files.com/60d9feb9c76d589e5bee9402/60da4af5157ab60d0a9f7146_icon-2-topics-home-course-x-template.svg',
        title: 'Content Strategy',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac eu et ac elit senectus mauris blandit tempore gestas.',
    },
    {
        id: 5,
        iconUrl: 'https://cdn.prod.website-files.com/60d9feb9c76d589e5bee9402/60da4af64e30e472a44dbb64_icon-5-topics-home-course-x-template.svg',
        title: 'Social Media',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac eu et ac elit senectus mauris blandit tempore gestas.',
    },
    {
        id: 6,
        iconUrl: 'https://cdn.prod.website-files.com/60d9feb9c76d589e5bee9402/60da4af6187bb4096d0a3f20_icon-4-topics-home-course-x-template.svg',
        title: 'Analytics & Reporting',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac eu et ac elit senectus mauris blandit tempore gestas.',
    },
];

export default function TopicsSection() {
    return (
        <section  className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <h2 className="text-4xl font-bold text-slate-900">
                        What topics are covered in the course?
                    </h2>
                    <p className="text-lg text-slate-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac eu et ac elit senectus
                        mauris blandit tempore gestas.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {topics.map(({ id, iconUrl, title, description }) => (
                        <div
                            key={id}
                            data-aos="fade-left"
                            className="bg-white rounded-base shadow-lg p-8  flex flex-col items-center text-center"
                        >
                            <div className="bg-emerald-600 rounded-full p-4 mb-6">
                                <img src={iconUrl} alt={title + ' icon'} className="w-20 h-20 object-contain" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
                            <p className="text-lg text-slate-600">{description}</p>
                        </div>
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
                    className="px-10 py-4 text-lg font-base text-slate-900 bg-white border border-slate-200 rounded-full shadow hover:bg-slate-100 transition-transform duration-200 hover:scale-95"
                >
                    About the teacher
                </a>
            </div>
        </section>
    );
}
