import React from 'react'
import { useState } from 'react'

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('card')

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className=" p-6 rounded-lg shadow-lg max-w-2xl  w-full">
        <div className="flex justify-between border-b pb-3 mb-4">
          <button
            className={`px-4 py-2 rounded-lg ${
              paymentMethod === 'card'
                ? 'bg-blue-100 text-blue-600'
                : 'bg-gray-200'
            }`}
            onClick={() => setPaymentMethod('card')}
          >
            💳 Card
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              paymentMethod === 'eps'
                ? 'bg-blue-100 text-blue-600'
                : 'bg-gray-200'
            }`}
            onClick={() => setPaymentMethod('eps')}
          >
            🏦 EPS
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              paymentMethod === 'giropay'
                ? 'bg-blue-100 text-blue-600'
                : 'bg-gray-200'
            }`}
            onClick={() => setPaymentMethod('giropay')}
          >
            💰 Giropay
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-700">Card Number</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg mt-1"
              placeholder="1234 1234 1234 1234"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Expiry</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg mt-1"
                placeholder="MM / YY"
              />
            </div>
            <div>
              <label className="block text-gray-700">CVC</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg mt-1"
                placeholder="CVC"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Country</label>
              <select className="w-full px-4 py-2 border rounded-lg mt-1">
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Postal Code</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg mt-1"
                placeholder="90210"
              />
            </div>
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Payment
