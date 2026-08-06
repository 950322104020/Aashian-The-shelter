import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
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
                  <h4 className="text-xs text-white font-bold uppercase">Helpline</h4>
                  <p className="font-semibold text-white">+1800-123-456</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brandRed">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs text-white font-bold uppercase">Email Support</h4>
                  <p className="font-semibold text-white">support@aasahivfoundation.org</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brandRed">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs text-white font-bold uppercase">Headquarters</h4>
                  <p className="font-semibold text-white">AASHIANA Foundation Center, Main Road, India</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-4">
            <h3 className="font-heading text-xl font-bold text-brandNavy mb-2">Send us a Message</h3>
            <div>
              <label className="block text-xs font-bold uppercase text-white-500 mb-1">Your Name</label>
              <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brandNavy text-sm" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-white-500 mb-1">Email Address</label>
              <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brandNavy text-sm" />
            </div>
             <div>
              <label className="block text-xs font-bold uppercase text-white-500 mb-1">Contact Number</label>
              <input type="tel" placeholder="123-456-7890" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brandNavy text-sm" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-white-500 mb-1">Message</label>
              <textarea rows="4" placeholder="How can we assist you?" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brandNavy text-sm"></textarea>
            </div>
            <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3.5 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200 text-sm">
              <Send className="w-4 h-4 text-white" />
              <span>Send Message</span>
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}   