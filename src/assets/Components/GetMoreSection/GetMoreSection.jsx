import React from 'react';
import { motion } from 'framer-motion';
import {
  Rocket,
  SearchCheck,
  Briefcase,
  BadgeCheck,
} from 'lucide-react';

const InfoCard = ({ icon: Icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
    className="border border-gray-200 rounded-xl p-6 bg-slate-50 shadow-md hover:shadow-xl transition-all"
  >
    <div className="mb-4 flex items-center justify-center bg-blue-100 w-12 h-12 rounded-full">
      <Icon className="text-red-600 w-6 h-6" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default function GetMoreSection() {
  return (
    <section className="relative px-6 py-5 from-white to-blue-50">
      {/* <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center mb-14"
      > */}
        <h2 className="text-4xl font-semibold  sm:text-5xl text-center text-gray-900 relative ">
          Get More Than Just Learning
        </h2>
        <p className="mt-4 text-lg text-gray-700 text-center mb-10">
          Whether you're a founder or a marketing enthusiast, gain hands-on experience, real-world results, and expert guidance — not just theory.
        </p>
      {/* </motion.div> */}

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Founders */}
        {/* <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6"
        > */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center text-gray-900">For Founders & D2C Brand Owners</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <InfoCard
              icon={Rocket}
              title="Collaborate on Live Campaigns"
              description="Work with our team on live Amazon ad campaigns — from strategy to execution. Watch real-time results."
            />
            <InfoCard
              icon={SearchCheck}
              title="Free Amazon Store Audit"
              description="Get an expert review of your Amazon storefront and ads. Receive actionable insights to improve performance."
            />
          </div></div>
        {/* </motion.div> */}

        {/* Students */}
        {/* <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6"
        > */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center text-gray-900">For Students & Marketing Professionals</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <InfoCard
              icon={Briefcase}
              title="Work on Real Amazon Campaigns"
              description="Gain practical experience working on real ad budgets and marketing strategies with live brands."
            />
            <InfoCard
              icon={BadgeCheck}
              title="Amazon Advertising Certification"
              description="Earn a Certificate of Completion — a valuable credential for your resume and LinkedIn."
            />
          </div></div>
        {/* </motion.div> */}
      </div>
    </section>
  );
}
