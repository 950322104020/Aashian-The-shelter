import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import axios from 'axios';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [status, setStatus] = useState({ loading: false, success: null, error: '' });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: null, error: '' });
        try {
            const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            const res = await axios.post(`${API_BASE}/api/contact`, formData);
            if (res.data?.success) {
                setStatus({ loading: false, success: true, error: '' });
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                setStatus({ loading: false, success: false, error: res.data?.error || 'Unexpected response' });
            }
        } catch (err) {
            setStatus({ loading: false, success: false, error: err.response?.data?.error || err.message });
        }
    };

    return (
        <section id="contact" className="py-20 bg-offWhite font-body">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    <div>
                        <span className="text-white font-bold text-xs uppercase tracking-widest">Get In Touch</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white mt-2 mb-6">
                            We Are Here To Listen & Help
                        </h2>
                        <p className="text-white mb-8 text-base">
                            Have questions regarding testing centers, volunteering, or donations? Contact our support team for confidential guidance.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brandRed">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-xs text-white font-bold uppercase">Contact</h4>
                                    <p className="font-semibold text-white">+91 9811566561 </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brandRed">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-xs text-white font-bold uppercase">Email Support</h4>
                                    <p className="font-semibold text-white">aashiana.theshelter@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brandRed">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-xs text-white font-bold uppercase">Headquarters</h4>
                                    <p className="font-semibold text-white">RZ-61, First Floor. Palam Vihar. Sector-6. Dwarka. New Delhi- 110075</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-4">
                        <h3 className="font-heading text-xl font-bold text-brandNavy mb-2">Send us a Message</h3>

                        {status.success && (
                            <div className="p-3 bg-green-50 text-green-800 rounded">Message sent successfully.</div>
                        )}
                        {status.success === false && status.error && (
                            <div className="p-3 bg-red-50 text-red-800 rounded">{status.error}</div>
                        )}

                        <div>
                            <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Your Name</label>
                            <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brandNavy text-sm" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Email Address</label>
                            <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brandNavy text-sm" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Contact Number</label>
                            <input name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="123-456-7890" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brandNavy text-sm" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Message</label>
                            <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="How can we assist you?" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brandNavy text-sm"></textarea>
                        </div>
                        <button disabled={status.loading} type="submit" className="w-full bg-green-600 disabled:opacity-50 hover:bg-green-700 text-white font-semibold py-3.5 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200 text-sm">
                            <Send className="w-4 h-4 text-white" />
                            <span>{status.loading ? 'Sending...' : 'Send Message'}</span>
                        </button>
                    </form>

                </div>
            </div>
        </section>
    );
}