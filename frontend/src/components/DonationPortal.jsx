import React, { useState } from 'react';
import { Heart, ShieldCheck, X, Copy, CheckCircle2 } from 'lucide-react';
import axios from 'axios';

export default function DonationPortal() {
  const [type, setType] = useState('one-time');
  const [amount, setAmount] = useState('1000');
  const [customAmount, setCustomAmount] = useState('');

  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');

  const [showPayment, setShowPayment] = useState(false);
  const [copied, setCopied] = useState('');

  const [paymentSubmitted, setPaymentSubmitted] = useState(false);

  const amounts = ['500', '1000', '2500', '5000'];

  /*
  |--------------------------------------------------------------------------
  | DONATION DETAILS
  |--------------------------------------------------------------------------
  | Replace these with the foundation's real details.
  |--------------------------------------------------------------------------
  */

  const donationDetails = {
    upiId: 'yourfoundation@upi',

    accountName: 'AASHIANA FOUNDATION',

    accountNumber: 'XXXXXXXXXXXX',

    ifsc: 'XXXXXXXXXXX',

    bankName: 'YOUR BANK NAME',

    branch: 'YOUR BRANCH',

    qrImage: '/images/donation-qr.png'
  };

  /*
  |--------------------------------------------------------------------------
  | Open Payment Window
  |--------------------------------------------------------------------------
  */

  const handleDonate = (e) => {
    e.preventDefault();

    const finalAmount = customAmount || amount;

    if (!finalAmount || Number(finalAmount) <= 0) {
      alert('Please enter a valid donation amount.');
      return;
    }

    if (!donorName || !donorEmail) {
      alert('Please enter your name and email.');
      return;
    }

    setShowPayment(true);
  };

  /*
  |--------------------------------------------------------------------------
  | Copy To Clipboard
  |--------------------------------------------------------------------------
  */

  const handleCopy = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);

      setCopied(field);

      setTimeout(() => {
        setCopied('');
      }, 2000);

    } catch (error) {
      console.error('Copy failed:', error);
    }
  };

  /*
  |--------------------------------------------------------------------------
  | Payment Completed
  |--------------------------------------------------------------------------
  */

  const handlePaymentCompleted = async () => {

    const finalAmount = customAmount || amount;

    try {

      await axios.post(
        `${
          import.meta.env.VITE_API_URL ||
          'http://localhost:5000'
        }/api/donations`,
        {
          transactionId: `TXN_${Date.now()}`,

          donorName:
            donorName || 'Anonymous',

          email:
            donorEmail,

          amount:
            Number(finalAmount),

          type,

          paymentMethod:
            'UPI / Bank Transfer'
        }
      );

      setPaymentSubmitted(true);

    } catch (error) {

      console.error(
        'Donation submission error:',
        error
      );

      alert(
        'Payment details could not be submitted. Please contact the foundation.'
      );
    }
  };

  /*
  |--------------------------------------------------------------------------
  | Close Payment Modal
  |--------------------------------------------------------------------------
  */

  const closePayment = () => {
    setShowPayment(false);
    setPaymentSubmitted(false);
  };

  return (
    <>
      {/* =========================================================
          DONATION SECTION
      ========================================================= */}

      <section
        id="donate"
        className="py-20 bg-offWhite px-4"
      >
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 grid md:grid-cols-5">

          {/* =====================================================
              LEFT SIDE
          ===================================================== */}

          <div className="md:col-span-2 bg-brandNavy text-white p-8 flex flex-col justify-between">

            <div>

              <span className="inline-block bg-brandRed/30 text-black border border-white/20 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                Tax Exempt (80G)
              </span>

              <h2 className="font-heading font-extrabold text-black lg:text-3xl mt-4 mb-4 leading-tight">
                Every Contribution Saves Lives
              </h2>

              <p className="text-black text-sm leading-relaxed mb-6">
                Your donations directly fund confidential testing kits,
                ART medical support, and community education.
              </p>

            </div>

            <div className="space-y-3 text-xs text-black border-t border-white/10 pt-4">

              <div className="flex items-center gap-2">

                <ShieldCheck className="w-4 h-4 text-brandGold" />

                256-Bit SSL Encrypted

              </div>

            </div>

          </div>

          {/* =====================================================
              RIGHT SIDE FORM
          ===================================================== */}

          <form
            onSubmit={handleDonate}
            className="md:col-span-3 p-8"
          >

            {/* Donation Type */}

            <div className="flex rounded-xl bg-gray-100 p-1 mb-6">

              <button
                type="button"
                onClick={() =>
                  setType('one-time')
                }
                className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
                  type === 'one-time'
                    ? 'bg-brandRed text-slate shadow'
                    : 'text-gray-600'
                }`}
              >
                One-Time
              </button>

              <button
                type="button"
                onClick={() =>
                  setType('monthly')
                }
                className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
                  type === 'monthly'
                    ? 'bg-brandRed text-slate shadow'
                    : 'text-gray-600'
                }`}
              >
                Monthly Supporter
              </button>

            </div>

            {/* Preset Amount */}

            <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
              Select Preset Amount (INR)
            </label>

            <div className="grid grid-cols-4 gap-2 mb-4">

              {amounts.map((val) => (

                <button
                  key={val}
                  type="button"
                  onClick={() => {
                    setAmount(val);
                    setCustomAmount('');
                  }}
                  className={`py-2.5 rounded-xl text-sm font-bold border transition-all ${
                    amount === val &&
                    !customAmount
                      ? 'border-brandRed bg-red-50 text-brandRed'
                      : 'border-gray-200 text-gray-700 hover:border-gray-300'
                  }`}
                >
                  ₹{val}
                </button>

              ))}

            </div>

            {/* Custom Amount */}

            <input
              type="number"
              min="1"
              placeholder="Custom Amount (₹)"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(
                  e.target.value
                );
                setAmount(
                  e.target.value
                );
              }}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brandRed/50 mb-4"
            />

            {/* Donor Details */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">

              <input
                type="text"
                placeholder="Your Name"
                value={donorName}
                onChange={(e) =>
                  setDonorName(
                    e.target.value
                  )
                }
                className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                value={donorEmail}
                onChange={(e) =>
                  setDonorEmail(
                    e.target.value
                  )
                }
                className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none"
                required
              />

            </div>

            {/* Donate Button */}

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all duration-200"
            >

              <Heart className="w-5 h-5 text-white" />

              <span>
                Proceed to Donate ₹
                {customAmount ||
                  amount ||
                  0}
              </span>

            </button>

          </form>

        </div>
      </section>


      {/* =========================================================
          PAYMENT MODAL
      ========================================================= */}

      {showPayment && (

        <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">

          <div className="relative bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl">

            {/* Close */}

            <button
              type="button"
              onClick={closePayment}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <X className="w-5 h-5" />
            </button>


            {paymentSubmitted ? (

              /* =================================================
                 SUCCESS
              ================================================= */

              <div className="p-10 text-center">

                <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-4" />

                <h2 className="text-2xl font-bold text-gray-800">
                  Thank You! ❤️
                </h2>

                <p className="text-gray-600 mt-3">
                  Your donation details have been submitted.
                  Thank you for supporting our mission.
                </p>

                <p className="font-bold text-green-600 text-xl mt-4">
                  ₹{customAmount || amount}
                </p>

                <button
                  type="button"
                  onClick={() => {
                    closePayment();

                    setDonorName('');
                    setDonorEmail('');
                  }}
                  className="mt-6 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800"
                >
                  Done
                </button>

              </div>

            ) : (

              /* =================================================
                 PAYMENT DETAILS
              ================================================= */

              <div className="p-6">

                <div className="text-center mb-6">

                  <h2 className="text-2xl font-bold text-gray-900">
                    Complete Your Donation
                  </h2>

                  <p className="text-gray-500 text-sm mt-1">
                    Donation Amount
                  </p>

                  <p className="text-3xl font-extrabold text-green-600 mt-1">
                    ₹{customAmount || amount}
                  </p>

                </div>


                {/* =================================================
                    QR CODE
                ================================================= */}

                <div className="bg-gray-50 rounded-2xl p-5 text-center">

                  <h3 className="font-bold text-gray-800 mb-3">
                    Scan & Pay with UPI
                  </h3>

                  <div className="bg-white p-4 rounded-xl inline-block shadow-sm">

                    <img
                      src={donationDetails.qrImage}
                      alt="Donation UPI QR Code"
                      className="w-56 h-56 object-contain mx-auto"
                    />

                  </div>

                  <p className="text-xs text-gray-500 mt-3">
                    Scan this QR code using
                    Google Pay, PhonePe,
                    Paytm or any UPI app.
                  </p>

                </div>


                {/* =================================================
                    UPI ID
                ================================================= */}

                <div className="mt-5">

                  <label className="text-xs font-bold text-gray-500 uppercase">
                    UPI ID
                  </label>

                  <div className="flex items-center gap-2 mt-1">

                    <div className="flex-1 bg-gray-100 px-4 py-3 rounded-xl font-semibold text-sm">
                      {donationDetails.upiId}
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        handleCopy(
                          donationDetails.upiId,
                          'upi'
                        )
                      }
                      className="p-3 bg-green-600 text-white rounded-xl hover:bg-green-700"
                    >
                      {copied === 'upi' ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        <Copy className="w-5 h-5" />
                      )}
                    </button>

                  </div>

                </div>


                {/* =================================================
                    BANK DETAILS
                ================================================= */}

                <div className="mt-5">

                  <h3 className="font-bold text-gray-800 mb-3">
                    Bank Account Details
                  </h3>

                  <div className="bg-gray-50 rounded-xl p-4 space-y-3 text-sm">

                    <div className="flex justify-between gap-4">
                      <span className="text-gray-500">
                        Account Name
                      </span>

                      <strong className="text-right">
                        {donationDetails.accountName}
                      </strong>
                    </div>

                    <div className="flex justify-between gap-4">
                      <span className="text-gray-500">
                        Account Number
                      </span>

                      <strong className="text-right">
                        {donationDetails.accountNumber}
                      </strong>
                    </div>

                    <div className="flex justify-between gap-4">
                      <span className="text-gray-500">
                        IFSC
                      </span>

                      <strong className="text-right">
                        {donationDetails.ifsc}
                      </strong>
                    </div>

                    <div className="flex justify-between gap-4">
                      <span className="text-gray-500">
                        Bank
                      </span>

                      <strong className="text-right">
                        {donationDetails.bankName}
                      </strong>
                    </div>

                    <div className="flex justify-between gap-4">
                      <span className="text-gray-500">
                        Branch
                      </span>

                      <strong className="text-right">
                        {donationDetails.branch}
                      </strong>
                    </div>

                  </div>

                </div>


                {/* =================================================
                    PAYMENT INSTRUCTIONS
                ================================================= */}

                <div className="mt-5 p-4 bg-blue-50 border border-blue-100 rounded-xl">

                  <h4 className="font-bold text-blue-900 text-sm">
                    Payment Instructions
                  </h4>

                  <ol className="text-sm text-blue-800 mt-2 space-y-1 list-decimal list-inside">

                    <li>
                      Pay exactly ₹
                      {customAmount ||
                        amount}
                    </li>

                    <li>
                      Use the QR code, UPI ID,
                      or bank details above.
                    </li>

                    <li>
                      Keep your transaction
                      ID / UTR number.
                    </li>

                    <li>
                      Click the button below
                      after completing payment.
                    </li>

                  </ol>

                </div>


                {/* =================================================
                    COMPLETED BUTTON
                ================================================= */}

                <button
                  type="button"
                  onClick={
                    handlePaymentCompleted
                  }
                  className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2"
                >

                  <CheckCircle2 className="w-5 h-5" />

                  I Have Completed Payment

                </button>


                <p className="text-center text-xs text-gray-400 mt-3">
                  Thank you for supporting
                  AASHIANA Foundation ❤️
                </p>

              </div>

            )}

          </div>

        </div>

      )}

    </>
  );
}

