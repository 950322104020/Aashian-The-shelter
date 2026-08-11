
import React, { useState } from 'react';
import {
  X,
  Heart,
  User,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2
} from 'lucide-react';
import axios from 'axios';

export default function VolunteerModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    interest: 'Community Outreach',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: ''
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      loading: true,
      success: false,
      error: ''
    });

    try {
      const API_BASE =
        import.meta.env.VITE_API_URL || 'http://localhost:5000';

      const res = await axios.post(
        `${API_BASE}/api/volunteers`,
        formData
      );

      if (res.data?.success) {
        setStatus({
          loading: false,
          success: true,
          error: ''
        });

        setFormData({
          name: '',
          email: '',
          phone: '',
          city: '',
          interest: 'Community Outreach',
          message: ''
        });
      } else {
        setStatus({
          loading: false,
          success: false,
          error: res.data?.error || 'Registration failed.'
        });
      }
    } catch (err) {
      console.error('Volunteer form error:', err);

      setStatus({
        loading: false,
        success: false,
        error:
          err.response?.data?.error ||
          err.response?.data?.message ||
          'Something went wrong. Please try again.'
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">

        {/* Modal Header */}
        <div className="bg-gradient-to-r from-green-700 to-green-600 px-6 py-5 text-white flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-green-200 fill-green-200" />

            <h3 className="text-xl font-bold">
              Join Us as a Volunteer
            </h3>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="p-1 rounded-lg hover:bg-white/20 transition-colors text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">

          {status.success ? (
            <div className="text-center py-8">

              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-3 animate-bounce" />

              <h4 className="text-2xl font-bold text-gray-800">
                Thank You!
              </h4>

              <p className="text-gray-600 mt-2">
                Your volunteer request has been submitted successfully.
                Our team will contact you shortly.
              </p>

              <button
                type="button"
                onClick={() => {
                  setStatus({
                    loading: false,
                    success: false,
                    error: ''
                  });

                  onClose();
                }}
                className="mt-6 px-6 py-2.5 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition"
              >
                Close Window
              </button>

            </div>
          ) : (

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Error Message */}
              {status.error && (
                <div className="p-3 bg-red-50 text-red-700 text-sm rounded-lg border border-red-200">
                  {status.error}
                </div>
              )}

              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                  Full Name
                </label>

                <div className="relative">
                  <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />

                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none text-sm"
                  />
                </div>
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />

                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                    Phone Number
                  </label>

                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />

                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 9876543210"
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none text-sm"
                    />
                  </div>
                </div>

              </div>

              {/* City + Interest */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                    City / Location
                  </label>

                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />

                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Your City"
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                    Area of Interest
                  </label>

                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full py-2.5 px-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none text-sm bg-white"
                  >
                    <option value="Community Outreach">
                      Community Outreach
                    </option>

                    <option value="Health Camps & Testing">
                      Health Camps & Testing
                    </option>

                    <option value="Ration & Food Security">
                      Ration & Food Security
                    </option>

                    <option value="Counseling & Support">
                      Counseling & Support
                    </option>

                    <option value="Event Organization">
                      Event Organization
                    </option>
                  </select>
                </div>

              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                  Message / Experience (Optional)
                </label>

                <textarea
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us why you'd like to join..."
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none text-sm resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status.loading}
                className="w-full py-3 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-semibold rounded-xl transition duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status.loading ? (
                  'Submitting...'
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Application
                  </>
                )}
              </button>

            </form>
          )}

        </div>
      </div>
    </div>
  );
}

