import React, { useState } from 'react';

const tabs = [
  { id: 'about', label: 'About the course' },
  { id: 'content', label: 'Course content' },
  { id: 'PDF', label: 'Course PDF' },
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
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Live Learning, Not Pre-Recorded:</strong> Engage directly with Renu Bisht, Founder of Commercify360, as she shares real-world strategies that have helped 200+ brands grow on Amazon.</li>
              <li><strong>Built for Indian & Global Brands:</strong> While tailored for Indian SMBs and D2C businesses, the course applies globally across any Amazon marketplace.</li>
              <li><strong>Real Campaigns. Real Case Studies:</strong> Every module is rooted in practical execution—from setting up your first Sponsored Product ad to advanced DSP tactics.</li>
              <li><strong>Structured & Actionable:</strong> This isn’t theory-heavy or overwhelming. You’ll follow a step-by-step system and complete assignments as you go, so by the end, your campaigns are live and optimized.</li>
              <li><strong>Community + Support:</strong> Get exclusive access to a WhatsApp group for learner discussions, direct support, and post-course networking.</li>
            </ul>
            <p><strong>What’s Included</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>Live Zoom-based instructor-led sessions</li>
              <li>Campaign setup walkthroughs (inside the 2025 Amazon Ads Console)</li>
              <li>Templates, worksheets & optimization checklists</li>
              <li>Certificate of completion</li>
              <li>Access to bonus webinars + advanced workshops</li>
            </ul>
          </div>
        );
      case 'content':
        return (
          <div className="text-xl text-stone-700 space-y-3 leading-relaxed">
            <p>
              Each session is designed to combine concept clarity, real-world application, and hands-on execution using the latest Amazon Ads interface (2025).
            </p>
            <p><strong>Module 1: Introduction to Amazon Advertising</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>Understand the Amazon Ads ecosystem: Sponsored Products, Brands, Display, DSP, and Sponsored TV</li>
              <li>How ads fit into the Amazon search and shopping experience</li>
              <li>Navigating the new 2025 Amazon Ads Console</li>
              <li>Setting up your account for success (Brand Registry, billing, access)</li>
            </ul>
            <p><strong>Module 2: Sponsored Products & Sponsored Brands</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>Building your first Sponsored Product campaign</li>
              <li>Keyword targeting: Automatic vs Manual</li>
              <li>Match types explained (broad, phrase, exact, negative)</li>
              <li>Sponsored Brands: headline creatives, custom store pages, and product collections</li>
              <li>Bidding strategies & budget setting for different ad types</li>
            </ul>
            <p><strong>Module 3: Advanced Targeting & Campaign Structuring</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>Product targeting vs category targeting</li>
              <li>Audience targeting with Sponsored Display</li>
              <li>Structuring campaigns by ASINs, categories, and objectives</li>
              <li>Using portfolios and naming conventions for scalable management</li>
              <li>Geo-targeting, placements, and dayparting explained</li>
            </ul>
            <p><strong>Module 4: Performance Metrics & Optimization</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>Deep dive into ACOS, ROAS, CTR, CVR, TACoS, and New-to-Brand metrics</li>
              <li>Analyzing Campaign Manager reports</li>
              <li>Bid optimization tactics and budget reallocation</li>
              <li>Using placement reports and performance dashboards for decision-making</li>
            </ul>
            <p><strong>Module 5: Scaling Strategies & Sponsored TV / DSP</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>When and how to scale: thresholds, testing, and profit zones</li>
              <li>Introduction to Amazon DSP – use cases, targeting, and creative formats</li>
              <li>Leveraging Sponsored TV for brand awareness campaigns</li>
              <li>Retargeting strategies and cross-ASIN promotion</li>
            </ul>
            <p><strong>Module 6: Full-Funnel Strategy & Launch Plan</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>Mapping campaigns to the customer journey: awareness → consideration → conversion → loyalty</li>
              <li>Building a full-funnel campaign architecture using Sponsored and Display ads</li>
              <li>Launching your first complete campaign set</li>
              <li>Final review, Q&A, and personal feedback on your ad strategy</li>
            </ul>
            <p><strong>Bonus Content</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>📄 Downloadable templates (Campaign Planner, ROAS Tracker, Optimization Checklist)</li>
              <li>🎥 Access to future bonus webinars and case studies</li>
              <li>💬 Post-course support in exclusive WhatsApp community</li>
            </ul>
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
            className={`py-2 px-3 text-xl font-medium transition-colors duration-200 ${
              activeTab === tab.id
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
