import React from 'react'
import { MdOutlineCloudUpload } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import { FaServer } from "react-icons/fa6";

export default function QASection() {
    return (
        <div data-aos="fade-in" className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            {/* <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div> */}
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            {/* <p className="text-base/7 font-semibold text-indigo-600">Deploy faster</p> */}
                            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                                Who This Course is For
                            </h1>
                            <p className="mt-6 text-xl/8 text-gray-700">
                                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam
                                eget aliquam. Quisque id at vitae feugiat egestas.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                        alt=""
                        src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg"
                        className="w-3xl max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
                    />
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
                            {/* <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                semper sed amet vitae sed turpis id.
              </p> */}
                            <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                <li className="flex gap-x-3">
                                    <MdOutlineCloudUpload aria-hidden="true" className="mt-1 size-5 flex-none text-emerald-600" />
                                    <span className='text-xl'>
                                        Amazon Sellers & DTC Entrepreneurs
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <FaLock aria-hidden="true" className="mt-1 size-5 flex-none text-emerald-600" />
                                    <span className='text-xl'>
                                        Performance & Digital Marketers
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <FaServer aria-hidden="true" className="mt-1 size-5 flex-none text-emerald-600" />
                                    <span className='text-xl'>
                                        Agencies & Consultants supporting Amazon clients
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <FaServer aria-hidden="true" className="mt-1 size-5 flex-none text-emerald-600" />
                                    <span className='text-xl'>
                                        Marketing Students seeking an eCommerce edge
                                    </span>
                                </li>
                            </ul>
                            <p className="mt-8 text-xl">
                                Amazon Sellers & DTC Entrepreneurs
                                Founders, brand owners, and private-label sellers who want to take control of their advertising strategy, boost product visibility, and scale profitably on Amazon.
                                Performance & Digital Marketers
                                Marketing professionals looking to upskill in one of the most in-demand platforms - Amazon Ads - by learning how to plan, launch, and optimize campaigns across the funnel.
                                Agencies & eCommerce Consultants
                                Service providers and consultants managing Amazon ad accounts for clients who want to sharpen their strategies, stay current with Amazon’s evolving tools, and deliver better results.
                                Marketing Students & Early-Career Professionals
                                Aspiring eCommerce marketers and students who want hands-on experience and practical frameworks to break into Amazon performance marketing with confidence.

                            </p>
                            {/* <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2>
              <p className="mt-6">
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
                tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                turpis ipsum eu a sed convallis diam.
              </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
