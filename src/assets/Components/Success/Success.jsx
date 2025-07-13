// src/pages/Success.jsx
import { useSearchParams } from 'react-router';

export default function Success() {
  const [params] = useSearchParams();
  const paymentId = params.get("payment_id");

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-green-600">✅ Payment Successful!</h1>
      <p className="mt-4 text-lg">Your payment ID: <strong>{paymentId}</strong></p>
    </div>
  );
}
