import React, { useState, useEffect } from 'react';
import { FaChartBar, FaClock, FaPlay, FaDownload, FaInfinity, FaTabletAlt } from 'react-icons/fa';
import CourseTabs from '../CourseTabs/CourseTabs';
import RazorpayButton from '../RazorpayButton/RazorpayButton';

export default function CourseBuySection() {
  const [userData, setUserData] = useState({
    email: '',
    phone: '',
    linkedin: '',
    name: '',
  });

  const [formValid, setFormValid] = useState(false);

  // Validation function
  useEffect(() => {
    const isValidEmail = /^\S+@\S+\.\S+$/.test(userData.email);
    const isValidPhone = /^[6-9]\d{9}$/.test(userData.phone);
    const isValidLinkedIn = /^https:\/\/(www\.)?linkedin\.com\/.+/.test(userData.linkedin);
    const isValidName = userData.name.trim().length > 0;

    setFormValid(isValidEmail && isValidPhone && isValidLinkedIn && isValidName);
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div id='course' data-aos="fade-right" className="max-w-7xl mx-auto grid md:grid-cols-[2fr_1fr] gap-12 px-4 py-20 items-start">
      {/* Left Section */}
      <div>
        <CourseTabs />
      </div>

      {/* Right Section */}
      <div className="bg-stone-100 sticky top-10 rounded-xl shadow-md p-8 space-y-6">
        <h2 className="text-xl font-semibold text-slate-900">Get the course today</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={userData.name}
          onChange={handleChange}
          className="w-full border border-black rounded-3xl px-4 py-3 text-black"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={userData.email}
          onChange={handleChange}
          className="w-full border border-black rounded-3xl px-4 py-3 text-black"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={userData.phone}
          onChange={handleChange}
          className="w-full border border-black rounded-3xl px-4 py-3 text-black"
        />
        <input
          type="text"
          name="linkedin"
          placeholder="LinkedIn Profile URL"
          value={userData.linkedin}
          onChange={handleChange}
          className="w-full border border-black rounded-3xl px-4 py-3 text-black"
        />

        <RazorpayButton userData={userData} disabled={!formValid} />

        <hr />
        <ul className="space-y-4 text-slate-700 text-sm">
          <li className="flex items-center gap-3"><FaChartBar className="text-red-600" /><span>Level: <strong>Intermediate</strong></span></li>
          <li className="flex items-center gap-3"><FaClock className="text-red-600" /><span>Duration: <strong>10hr </strong></span></li>
          <li className="flex items-center gap-3"><FaPlay className="text-red-600" /><span> Interactive & live Q&A</span></li>
          <li className="flex items-center gap-3"><FaDownload className="text-red-600" /><span>Work on live Campaigns</span></li>
          <li className="flex items-center gap-3"><FaInfinity className="text-red-600" /><span>Amazon store audit for founders</span></li>
          <li className="flex items-center gap-3"><FaTabletAlt className="text-red-600" /><span>Certificate of Completeion</span></li>
        </ul>
      </div>
    </div>
  );
}
