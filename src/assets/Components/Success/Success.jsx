import { useSearchParams } from 'react-router';
import { Link } from 'react-router';
import { FaCheckCircle } from 'react-icons/fa';

export default function Success() {
  const [params] = useSearchParams();
  const paymentId = params.get('payment_id');

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full bg-white shadow-xl rounded-xl p-10 text-left animate-fade-in-up">
        <div className="flex items-center gap-3 mb-6">
          <FaCheckCircle className="text-green-500 text-3xl" />
          <h1 className="text-2xl font-bold text-green-700">Payment Successful</h1>
        </div>

        {paymentId && (
          <p className="text-sm text-gray-600 mb-6">
            <strong className="text-slate-800">Payment ID:</strong>{' '}
            <span className="font-mono text-slate-700">{paymentId}</span>
          </p>
        )}

        <h2 className="text-xl font-bold text-slate-800 mb-2">🎉 You’re In!</h2>
        <p className="text-gray-700 mb-4">
          Thanks for registering for the <strong>Amazon Ads Masterclass</strong> with <strong>Commercify360</strong>.
        </p>

        <p className="text-gray-700 mb-6">
          Your learning journey is about to begin. Get ready to unlock proven strategies to scale your brand on Amazon with
          data-backed advertising, expert insights, and hands-on guidance.
        </p>

        <h3 className="text-lg font-semibold text-slate-800 mb-2">✅ What Happens Next:</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Course Access Details:</strong> You’ll receive an email shortly with your login credentials and session
            calendar.
          </li>
          <li>
            <strong>Join the Community:</strong> Look out for an invite to our exclusive WhatsApp group — connect with peers, ask
            questions, and stay updated.
          </li>
          <li>
            <strong>Prepare to Learn:</strong> Check your inbox for tips on how to get the most from this course.
          </li>
        </ul>

        <h3 className="text-lg font-semibold text-slate-800 mb-2">🚀 What You’ll Learn:</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            How to leverage Amazon Ads for growth across Sponsored Products, Brands, Display, DSP, and Sponsored TV
          </li>
          <li>
            Practical strategies for targeting, bidding, and scaling campaigns
          </li>
          <li>
            Real-world insights from 200+ brands and millions in ad spend managed
          </li>
        </ul>

        <p className="text-gray-700 mb-4">
          If you have any questions, feel free to reach out at{' '}
          <a href="mailto:support@commercify360.com" className="text-red-600 underline">
            support@commercify360.com
          </a>
          .
        </p>

        <p className="text-gray-700 font-semibold mb-8">See you in class!<br />— The Commercify360 Team</p>

        <div className="text-center">
          <Link
            to="/"
            className="inline-block mt-2 bg-red-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-red-700 transition"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
