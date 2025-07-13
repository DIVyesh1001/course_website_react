import React from 'react';
import { FaChartBar, FaClock, FaPlay, FaDownload, FaInfinity, FaTabletAlt } from 'react-icons/fa';
import CourseTabs from '../CourseTabs/CourseTabs';
import RazorpayButton from '../RazorpayButton/RazorpayButton';


export default function CourseBuySection() {
  return (
    <div id='course' data-aos="fade-right" className="max-w-7xl mx-auto grid md:grid-cols-[2fr_1fr] gap-12 px-4 py-20 items-start">
      {/* Left Section */}
      <div>
        <CourseTabs/>
        {/* <div className="relative tab-group">
          <div className="flex p-0.5 relative rounded-lg" role="tablist">
            <div
              ref={indicatorRef}
              className="absolute top-1 left-0.5 h-8 bg-white rounded-md shadow-sm transition-all duration-300 transform scale-x-0 translate-x-0 tab-indicator z-0"
            ></div>

            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                ref={(el) => (tabRefs.current[index] = el)}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-link text-sm inline-block py-2 px-4 transition-all duration-300 relative z-1 mr-1 
                  ${activeTab === tab.id 
                    ? 'text-red-500 border-b-2 border-red-500 font-semibold'
                    : 'text-stone-800'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-4 tab-content-container">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                id={tab.id}
                className={`tab-content text-stone-500 text-sm ${activeTab === tab.id ? 'block' : 'hidden'
                  }`}
              >
                <p>{tab.content}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>

      {/* Right Section */}
      <div className="bg-white sticky top-10 rounded-xl shadow-md p-8 space-y-6 ">
        <h2 className="text-xl font-semibold text-slate-900">Get the course today</h2>

        <select className="w-full border border-slate-300 rounded-3xl px-4 py-4 text-slate-700 focus:outline-none focus:ring-2 focus:ring-red-400">
          <option>Select Course Option</option>
          <option>Standard Access</option>
          <option>Premium Access</option>
        </select>

        <div className="flex items-end space-x-4">
          <p className="text-3xl font-semibold text-slate-900">$399.00 USD</p>
          <p className="text-slate-400 line-through text-lg">$999.00 USD</p>
        </div>


        {/* <form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_QhlenOX8XnfkWA" async> </script> </form> */}

        {/* <button className="w-full py-4 text-lg font-semibold bg-red-600 text-white rounded-full shadow hover:bg-red-700 transition-transform hover:scale-95">
          Buy Now
        </button> */}
        
        <RazorpayButton/>

        <hr />

        <ul className="space-y-4 text-slate-700 text-sm">
          <li className="flex items-center gap-3">
            <FaChartBar className="text-red-600" />
            <span>Level: <strong>Intermediate</strong></span>
          </li>
          <li className="flex items-center gap-3">
            <FaClock className="text-red-600" />
            <span>Duration: <strong>5hr 32min</strong></span>
          </li>
          <li className="flex items-center gap-3">
            <FaPlay className="text-red-600" />
            <span>Videos: <strong>23</strong></span>
          </li>
          <li className="flex items-center gap-3">
            <FaDownload className="text-red-600" />
            <span>Downloadable Files: <strong>9</strong></span>
          </li>
          <li className="flex items-center gap-3">
            <FaInfinity className="text-red-600" />
            <span>Lifetime Access</span>
          </li>
          <li className="flex items-center gap-3">
            <FaTabletAlt className="text-red-600" />
            <span>Access from any computer, tablet or mobile</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
