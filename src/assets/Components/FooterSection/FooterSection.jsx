
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

import React from 'react';

export default function DatumFooter() {
  return (
    <footer data-aos="fade-up" className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-12 ">
          <div className="inline-flex items-center space-x-2">
            <img src="https://i.ibb.co/bgQdHcVb/comercify360-Logocropped.png" className='h-8 w-auto' alt="" />
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://www.linkedin.com/company/commercify360/"
            className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 text-gray-600 hover:text-gray-800"
            aria-label="Twitter"
          >
            <FaLinkedinIn className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/commercify360?igsh=YTA4d3dvbDlyMGxw"
            className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 text-gray-600 hover:text-gray-800"
            aria-label="Instagram"
          >
            <FaInstagram className="w-5 h-5" />
          </a>
          {/* <a
            href="#"
            className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 text-gray-600 hover:text-gray-800"
            aria-label="RSS Feed"
          >
            <FaTelegramPlane className="w-5 h-5" />
          </a> */}
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center space-x-8 mb-12 flex-wrap">
          <a href="#" className="text-gray-600 hover:text-gray-800 underline transition-colors duration-200">
            Commercify360
          </a>
          <a href="https://commercify360.com/Terms" className="text-gray-600 hover:text-gray-800 underline transition-colors duration-200">
            Terms
          </a>
          <a href="https://commercify360.com/refund-policy" className="text-gray-600 hover:text-gray-800 underline transition-colors duration-200">
            Refund Policy
          </a>
          {/* <a href="#" className="text-gray-600 hover:text-gray-800 underline transition-colors duration-200">
            Privacy
          </a> */}
          <a href="https://commercify360.com/contact" className="text-gray-600 hover:text-gray-800 underline transition-colors duration-200">
            Contact
          </a>
        </div>

        {/* Copyright */}
        <div className="text-gray-500 text-sm">
          {"2025 ©  – "}
          <a href="https://commercify360.com/" className="underline hover:text-gray-700">
            Commercify360
          </a>
          {' All right reserved'}
        </div>
      </div>
    </footer>
  );
}