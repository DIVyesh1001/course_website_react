import React, { useState } from 'react';

const tabs = [
  { id: 'about', label: 'About the course' },
  { id: 'content', label: 'Course content' },
  // { id: 'PDF', label: 'Course PDF' },
];

export default function CourseTabs() {
  const [activeTab, setActiveTab] = useState('about');

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <div className="text-xl text-stone-700 space-y-3 leading-relaxed">
            <p><strong>Master Amazon Ads: From Setup to Scale</strong></p>
            <p>
              This live, instructor-led course is designed to help founders, marketers, and brand teams unlock the full power of Amazon’s advertising ecosystem. Whether you’re launching your first campaign or looking to scale existing efforts, this course equips you with the skills, tools, and strategies needed to drive real performance.
            </p>
            <p>
              Led by Renu Bisht, Founder of award-winning growth consultancy Commercify360, the course is packed with hands-on walkthroughs, real case studies, and practical frameworks trusted by over 200+ brands.
            </p>
            <p>
              Built specifically for Amazon sellers, DTC founders, marketers, and consultants, the course is designed to help you go beyond guesswork and start building high-performing campaigns with confidence and clarity.
            </p>
            <p>
              You’ll dive deep into Sponsored Ads, Amazon DSP, Sponsored TV, keyword and audience targeting, campaign optimization, and more - using the most current 2025 ad console interface.
            </p>
            <p><strong>What Makes This Course Different?</strong></p>
            <ul className="list-disc list-inside space-y-1 list-outside ml-5">
              <li><strong>Live Learning, Not Pre-Recorded:</strong> Engage directly with Renu Bisht, Founder of Commercify360, as she shares real-world strategies that have helped 200+ brands grow on Amazon.</li>
              <li><strong>Built for Indian & Global Brands:</strong> While tailored for Indian SMBs and D2C businesses, the course applies globally across any Amazon marketplace.</li>
              <li><strong>Real Campaigns. Real Case Studies:</strong> Every module is rooted in practical execution—from setting up your first Sponsored Product ad to advanced DSP tactics.</li>
              <li><strong>Structured & Actionable:</strong> This isn’t theory-heavy or overwhelming. You’ll follow a step-by-step system and complete assignments as you go, so by the end, your campaigns are live and optimized.</li>
              <li><strong>Community + Support:</strong> Get exclusive access to a WhatsApp group for learner discussions, direct support, and post-course networking.</li>
            </ul>
            <div className='bg-stone-200 p-4 rounded-lg'>
              <p><strong>What’s Included</strong></p>
              <ul className="list-disc list-inside space-y-1 list-outside ml-5">
                <li>Live Zoom-based instructor-led sessions</li>
                <li>Campaign setup walkthroughs (inside the 2025 Amazon Ads Console)</li>
                <li>Templates, worksheets & optimization checklists</li>
                <li>Certificate of completion</li>
                <li>Access to bonus webinars + advanced workshops</li>
              </ul>
            </div>
          </div>
        );
      case 'content':
        return (
          <div className="text-xl text-stone-700 space-y-4 leading-relaxed">
            <p>
              This comprehensive course is designed for D2C brand owners, retail founders, and marketers looking to unlock growth on Amazon India. Over two core sessions and one Q&A session, the program covers everything from foundational setup to advertising, conversion optimization, and scaling strategies.
            </p>

            <div className="bg-stone-200 p-4 rounded-lg">
              <p><strong>Session 1 – Day 1 (4 Hours)</strong></p>
              <p className="text-lg text-stone-600 italic">Objective: Lay a strong foundation for succeeding on Amazon by understanding the ecosystem, setting up correctly, and launching effective advertising.</p>
            </div>

            <p><strong>1. Introduction to Amazon Ecosystem (1.5 Hours)</strong></p>
            <ul className="list-disc list-inside space-y-1 list-outside ml-5">
              <li>The role of Amazon in the D2C ecosystem: How Amazon complements D2C, omnichannel, and offline strategies</li>
              <li>How Amazon differs from Shopify & Offline Retail (Traffic ownership, CAC, Ecosystem Control)</li>
              <li>Marketplace vs 1P vs 3P vs Launchpad: Key differences, pros & cons for brands</li>
              <li>Amazon's category structures and compliance basics (approval categories, documentation, restrictions)</li>
              <li>Key Amazon Success Metrics:
                <ul className="list-disc list-inside ml-6 mt-1 list-outside ml-5">
                  <li>TACOS (Total Advertising Cost of Sale)</li>
                  <li>RoAS (Return on Ad Spend)</li>
                  <li>Buy Box mechanics</li>
                  <li>BSR (Best Seller Rank)</li>
                  <li>Organic Ranking</li>
                </ul>
              </li>
              <li>Case Study: A D2C brand that scaled to ₹1Cr+/month using Amazon effectively</li>
            </ul>

            <p><strong>2. Setting Up for Success (1 Hour)</strong></p>
            <ul className="list-disc list-inside space-y-1 list-outside ml-5">
              <li>Seller Central vs Vendor Central: Which suits your business model</li>
              <li>Seller account setup checklist (GST, banking, trademarks, brand registry, barcodes)</li>
              <li>Product Listing Fundamentals:
                <ul className="list-disc list-inside ml-6 mt-1 list-outside ml-5">
                  <li>Titles, Bullets, Images, Keywords (SEO best practices)</li>
                  <li>A+ Content / Enhanced Brand Content</li>
                  <li>Catalog structuring for easy management</li>
                </ul>
              </li>
              <li>Live Exercise: Create a dummy product listing and explore Amazon backend</li>
              <li>Listing Hygiene SOP: Avoid common pitfalls that impact discoverability</li>
            </ul>

            <p><strong>3. Amazon Advertising Essentials (1.5 Hours)</strong></p>
            <ul className="list-disc list-inside space-y-1 list-outside ml-5">
              <li>Ad Types Explained: Sponsored Products (SP), Sponsored Brands (SB), Sponsored Display (SD)</li>
              <li>Auto vs Manual Campaign Structures</li>
              <li>Funnel Strategy: TOFU (Top), MOFU (Middle), BOFU (Bottom) for Amazon Ads</li>
              <li>Budgeting and Bidding Tactics for different goals</li>
              <li>Optimizing for RoAS vs TACOS: Finding balance</li>
              <li>Analyzing Ad Performance Metrics (ACOS, CTR, CVR)</li>
              <li>Practical Exercise: Review and optimize a sample campaign</li>
            </ul>

            <p className="bg-red-50 p-3 rounded-lg"><strong>📝 Assignment #1:</strong> Setup Amazon Seller Central + Draft Ads Strategy Playbook</p>

            <div className="bg-stone-200 p-4 rounded-lg">
              <p><strong>Session 2 – Day 2 (4 Hours)</strong></p>
              <p className="text-lg text-stone-600 italic">Objective: Learn how to drive conversions, scale systematically, and leverage growth levers.</p>
            </div>

            <p><strong>1. Conversion Optimization & Reviews (1 Hour)</strong></p>
            <ul className="list-disc list-inside space-y-1 list-outside ml-5">
              <li>Anatomy of High-Converting Listings:
                <ul className="list-disc list-inside ml-6 mt-1 list-outside ml-5">
                  <li>Visual Strategy: Images, Infographics, A+ Content</li>
                  <li>Pricing Optimization: Deals, Discounts, Anchoring</li>
                </ul>
              </li>
              <li>Getting First 20 Reviews (ethical and compliant strategies)</li>
              <li>Managing Negative Reviews & Feedback Loops</li>
              <li>Live Analysis: Real listing teardown (before & after optimization)</li>
            </ul>

            <p><strong>2. Scaling & Growth Hacks (1.5 Hours)</strong></p>
            <ul className="list-disc list-inside space-y-1 list-outside ml-5">
              <li>Winning the Amazon Choice Badge & BSR Game</li>
              <li>Promotional Strategies: Lightning Deals, Coupons, Prime Day Playbook</li>
              <li>Operational Levers: Subscribe & Save, FBA vs FBM, Multi-Channel Fulfillment (MCF)</li>
              <li>Return Management & Operational Hygiene</li>
              <li>New SKU Launch Playbook: Using Amazon Data for innovation</li>
              <li>Tool Demos:
                <ul className="list-disc list-inside ml-6 mt-1 list-outside ml-5">
                  <li>Helium 10</li>
                  <li>Jungle Scout</li>
                  <li>Amazon Brand Analytics</li>
                </ul>
              </li>
            </ul>

            <p><strong>3. Bonus Tips, Live Audit, and Q&A (1.5 Hours)</strong></p>
            <ul className="list-disc list-inside space-y-1 list-outside ml-5">
              <li>Tools every Amazon founder must use</li>
              <li>7 Common Mistakes in Amazon Growth Journey</li>
              <li>How to Scale from ₹1 Lakh to ₹1 Crore per Month</li>
              <li>Live Audit of One Attendee's Amazon Store</li>
            </ul>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p><strong>Templates Provided:</strong></p>
              <ul className="list-disc list-inside space-y-1 mt-2 list-outside ml-5">
                <li>Ad Management SOP</li>
                <li>Listing Hygiene Checklist</li>
                <li>Review Monitoring & Reporting SOP</li>
              </ul>
            </div>

            <div className="bg-stone-200 p-4 rounded-lg">
              <p><strong>Session 3 – Open Q&A (Flexible Duration)</strong></p>
              <ul className="list-disc list-inside space-y-1 mt-2 list-outside ml-5">
                <li>Open-ended session for clarifying doubts</li>
                <li>Personalized feedback on strategies and listings</li>
                <li>Live problem-solving for attendees</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <p><strong>Inclusions for Participants:</strong></p>
              <ul className="list-disc list-inside space-y-1 mt-2 list-outside ml-5">
                <li>Amazon Course Workbook</li>
                <li>SOP Templates for Account Management, Advertising, and Reviews</li>
                <li>Cheat Sheet: "Amazon Playbook for D2C Brands" (Growth Checklist + Tools + Frameworks)</li>
                <li>Practical Assignments with Feedback</li>
              </ul>
            </div>
          </div>
        );
      case 'tbd':
      default:
        return <p className="text-stone-500 text-sm">Content coming soon...</p>;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex space-x-4 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-2 px-3 text-xl font-medium transition-colors duration-200 ${activeTab === tab.id
                ? 'text-red-500 border-b-2 border-red-500'
                : 'text-gray-600 hover:text-red-400'
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-6">{renderContent()}</div>
    </div>
  );
}
