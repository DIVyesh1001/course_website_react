import React, { useState } from 'react';

export default function RazorpayButton() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [paymentId, setPaymentId] = useState(null);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const isLoaded = await loadRazorpayScript();
    if (!isLoaded) {
      alert('Razorpay SDK failed to load. Check your internet.');
      return;
    }

    const orderRes = await fetch('http://localhost:4000/create-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 499 }), // ₹499 for example
    });

    const order = await orderRes.json();

    const options = {
      key: 'rzp_test_t0YoXu5ipkbXAo', // 🔁 replace with your Razorpay key
      amount: order.amount,
      currency: order.currency,
      name: 'Your Brand Name',
      description: 'Payment for XYZ',
      order_id: order.id,
      handler: async function (response) {
        // backend verification
        const verifyRes = await fetch('http://localhost:4000/verify-payment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            userEmail: 'divyesh.dishu@gmail.com',
            userName: 'Divyesh Pandey',
          }),
        });

        const result = await verifyRes.json();

        if (result.status === 'success') {
          setPaymentId(response.razorpay_payment_id);
          setShowSuccess(true);
          setTimeout(() => {
            window.location.href = `/success?payment_id=${response.razorpay_payment_id}`;
          }, 5000);
        } else {
          alert('Payment verification failed.');
        }
      },
      prefill: {
        name: 'Divyesh Pandey',
        email: 'divyesh.dishu@gmail.com',
        contact: '9876543210',
      },
      notes: {
        product_id: 'xyz-123',
      },
      theme: {
        color: '#6366f1',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <>
      <button
        onClick={handlePayment}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
      >
        Pay ₹499
      </button>

      {showSuccess && (
        <div className="fixed inset-0 z-50 h-50  bg-opacity-40 flex justify-center">
          <div className="bg-white px-8 py-6 rounded-xl shadow-lg text-center max-w-sm w-full animate-fade-in-up">
            <h2 className="text-2xl font-bold text-green-600">✅ Payment Successful</h2>
            <p className="mt-2 text-gray-700">Thank you for your payment.</p>
            <p className="text-sm text-gray-500 mt-2">Redirecting to confirmation page...</p>
            <p className="mt-4 text-xs text-gray-400">
              Payment ID: <span className="font-mono">{paymentId}</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
