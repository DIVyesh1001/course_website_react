import React from 'react';
import { FaChartBar, FaClock, FaPlay, FaDownload, FaInfinity, FaTabletAlt } from 'react-icons/fa';

export default function CourseBuySection() {
  return (
    <div id='course' data-aos="fade-right" className="max-w-7xl mx-auto grid md:grid-cols-[2fr_1fr] gap-12 px-4 py-20 items-start">
      {/* Left Section */}
      <div>
        <h1 className="text-4xl font-bold text-slate-900">About the course</h1>
        <p className="mt-6 text-slate-600 leading-relaxed text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet fringilla praesent nibh
          sociis ullamcorper. Ultrices facilisi sit faucibus pulvinar pellentesque semper tortor sem.
          Et in elit, nec enim, sollicitudin habitant ultrices enim purus.
        </p>

        <ul className="list-disc mt-6 space-y-3 pl-6 text-slate-600">
          <li>Ut venenatis tellus in metus vulputate eu scelerisque</li>
          <li>Tristique et egestas quis ipsum suspendisse ultrices. Amet dictum sit</li>
          <li>Tellus integer feugiat scelerisque varius morbi.</li>
          <li>Eu tincidunt tortor aliquam nulla. Pharetra massa massa ultricies</li>
        </ul>

        <p className="mt-6 text-slate-600 leading-relaxed">
          Tristique et egestas quis ipsum suspendisse ultrices. Amet dictum sit amet justo donec enim diam.
          Laoreet sit amet cursus sit amet dictum. Ut tristique et egestas quis ipsum suspendisse ultrices gravida.
          Morbi tristique senectus et netus et malesuada fames ac.
        </p>
      </div>

      {/* Right Section */}
      <div className="bg-white rounded-xl shadow-md p-8 space-y-6">
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

        <button className="w-full py-4 text-lg font-semibold bg-red-600 text-white rounded-full shadow hover:bg-red-700 transition-transform hover:scale-95">
          Buy Now
        </button>
        

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
