import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaSlack,
  FaTelegramPlane,
} from 'react-icons/fa';

import { Link } from 'react-router';

export default function FooterSection() {
  return (
    <footer className=" bg-white text-slate-700" data-aos="fade-in">
      {/* Top area: logo + social */}
      {/* <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between"> */}
        {/* Logo */}
        {/* <div className="mb-6 md:mb-0">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src='https://i.ibb.co/bgQdHcVb/comercify360-Logocropped.png'
              className="h-8 w-auto"
            />
          </a>
        </div> */}
        
      {/* </div> */}

      {/* Main columns */}
      {/* <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 pb-12"> */}
        {/* Pages */}
        {/* <div>
          <h4 className="text-sm font-semibold text-red-600 uppercase mb-4">Pages</h4>
          <ul className="space-y-2 text-base">
            <li className="flex items-center">
              <Link to='/' className="hover:underline">
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <Link to="/course" className="hover:underline">
                Courses
              </Link>
              <span className="ml-2 bg-red-600 text-white text-xs font-semibold px-2 py-0.5 rounded">New</span>
            </li>
          </ul>
        </div> */}

        

        {/* Newsletter */}
        {/* <div>
          <h4 className="text-sm font-semibold text-red-600 uppercase mb-4">Newsletter</h4>
          <p className="text-base text-slate-600 mb-6">
            Stay ahead of the curve with the latest in Amazon Ads, marketplace trends, and growth strategies.
            Get curated insights, expert tips, and real-world brand case studies - delivered straight to your inbox.

          </p>
          <form className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Enter your Email"
              className="flex-1 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-red-600 text-white font-semibold rounded-full shadow hover:bg-red-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div> */}
      {/* </div> */}

      {/* Footer bottom */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-slate-500 text-center">
          Copyright © 2023 Commercify360 All rights reserved
        </div>
      </div>
    </footer>
  );
}
