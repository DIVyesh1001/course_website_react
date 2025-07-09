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

export default function FooterSection() {
  return (
    <footer className="bg-white text-slate-700">
      {/* Top area: logo + social */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="mb-6 md:mb-0">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src='src\assets\Images\comercify360Logocropped.png'
              className="h-8 w-auto"
            />
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 text-slate-400 hover:text-slate-600">
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href="#" aria-label="YouTube"><FaYoutube /></a>
          <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
          <a href="#" aria-label="Slack"><FaSlack /></a>
          <a href="#" aria-label="Telegram"><FaTelegramPlane /></a>
        </div>
      </div>

      {/* Main columns */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 pb-12">
        {/* Pages */}
        <div>
          <h4 className="text-sm font-semibold text-green-600 uppercase mb-4">Pages</h4>
          <ul className="space-y-2 text-base">
            {['Home', 'About the Teacher', 'Courses', 'Course', 'Video Page'].map((label) => (
              <li key={label} className="flex items-center">
                <a href="#" className="hover:underline">{label}</a>
                {['Courses', 'Course'].includes(label) && (
                  <span className="ml-2 bg-green-600 text-white text-xs font-semibold px-2 py-0.5 rounded">eCommerce</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Utility Pages */}
        <div>
          <h4 className="text-sm font-semibold text-green-600 uppercase mb-4">Utility Pages</h4>
          <ul className="space-y-2 text-base">
            {['Style Guide', 'Start Here', '404 Not Found', 'Password Protected', 'Licenses'].map((label) => (
              <li key={label}>
                <a href="#" className="hover:underline">{label}</a>
              </li>
            ))}
            <li className="mt-2">
              <a href="#" className="text-green-600 font-semibold hover:underline">
                Browse More Templates
              </a>
              <div className="h-0.5 bg-green-600 w-24 mt-0.5" />
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-sm font-semibold text-green-600 uppercase mb-4">Marketing Newsletter</h4>
          <p className="text-base text-slate-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit dignissim arcu cursus tincidunt et odio enim aliquam.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Enter your Email"
              className="flex-1 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-green-600 text-white font-semibold rounded-full shadow hover:bg-green-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-slate-500 text-center">
          © Copyright – Commercify360 | Designed by
          <a href="#" className="text-green-600 hover:underline ml-1">Divyesh</a>
          <span> – Powered by </span>
          <a href="#" className="text-green-600 hover:underline">React.js</a>
        </div>
      </div>
    </footer>
  );
}
