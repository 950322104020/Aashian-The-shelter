import React, { useState } from 'react';
import { Heart, ShieldCheck } from 'lucide-react';
import axios from 'axios';

export default function DonationPortal() {
  const [type, setType] = useState('one-time');
  const [amount, setAmount] = useState('1000');
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');

  const amounts = ['500', '1000', '2500', '5000'];

  const handleDonate = async (e) => {
    e.preventDefault();
    const finalAmount = customAmount || amount;
    try {
      await axios.post('http://localhost:5000/api/donations', {
        transactionId: `TXN_${Date.now()}`,
        donorName: donorName || 'Anonymous',
        donorEmail: donorEmail || 'donor@example.com',
        amount: Number(finalAmount),
        type
      });
      alert(`Thank you for your generous donation of ₹${finalAmount}!`);
      setDonorName('');
      setDonorEmail('');
    } catch (err) {
      alert('Error recording donation.');
    }
  };

  return (
    <section id="donate" className="py-20 bg-offWhite px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 grid md:grid-cols-5">
        
        {/* Left Side */}
        <div className="md:col-span-2 bg-brandNavy text-white p-8 flex flex-col justify-between">
          <div>
            <span className="bg-brandRed/30 text-black border border-white/20 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              Tax Exempt (80G)
            </span>
            <h2 className="font-heading font-extrabold text-black lg:text-3xl mt-4 mb-4 leading-tight text-black">
              Every Contribution Saves Lives
            </h2>
            <p className="text-black text-sm leading-relaxed mb-6">
              Your donations directly fund confidential testing kits, ART medical support, and community education.
            </p>
          </div>
          <div className="space-y-3 text-xs text-black border-t border-white/10 pt-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brandGold" /> 256-Bit SSL Encrypted
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <form onSubmit={handleDonate} className="md:col-span-3 p-8">
          <div className="flex rounded-xl bg-gray-100 p-1 mb-6">
            <button
              type="button"
              onClick={() => setType('one-time')}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${type === 'one-time' ? 'bg-brandRed text-slate shadow' : 'text-gray-600'}`}
            >
              One-Time
            </button>
            <button
              type="button"
              onClick={() => setType('monthly')}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${type === 'monthly' ? 'bg-brandRed text-slate shadow' : 'text-gray-600'}`}
            >
              Monthly Supporter
            </button>
          </div>

          <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Select Preset Amount (INR)</label>
          <div className="grid grid-cols-4 gap-2 mb-4">
            {amounts.map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => { setAmount(val); setCustomAmount(''); }}
                className={`py-2.5 rounded-xl text-sm font-bold border transition-all ${amount === val && !customAmount ? 'border-brandRed bg-red-50 text-brandRed' : 'border-gray-200 text-gray-700 hover:border-gray-300'}`}
              >
                ₹{val}
              </button>
            ))}
          </div>

          <input
            type="number"
            placeholder="Custom Amount (₹)"
            value={customAmount}
            onChange={(e) => { setCustomAmount(e.target.value); setAmount(e.target.value); }}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brandRed/50 mb-4"
          />

          <div className="grid grid-cols-2 gap-2 mb-6">
            <input
              type="text"
              placeholder="Your Name"
              value={donorName}
              onChange={(e) => setDonorName(e.target.value)}
              className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={donorEmail}
              onChange={(e) => setDonorEmail(e.target.value)}
              className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none"
              required
            />
          </div>

          <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all duration-200">
            <Heart className="w-5 h-5 text-white" />
            <span>Proceed to Donate ₹{customAmount || amount || 0}</span>
          </button>
        </form>
            
      </div>
    </section>
  );
}