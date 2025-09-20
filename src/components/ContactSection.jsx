import React, { useState } from 'react';
import {
  Mail, Phone, MapPin, Clock, Send, CheckCircle,
  MessageCircle, ArrowRight
} from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // ✅ Use environment variables for security
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', company: '', service: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 3000);
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
        setIsSubmitting(false);
        alert("❌ Failed to send message. Please try again later.");
      });
  };

  const contactInfo = [
    { icon: Mail, title: 'Email Address', info: 'barakasourcing@gmail.com', action: 'mailto:barakasourcing@gmail.com', color: 'from-blue-500 to-cyan-500' },
    { icon: Phone, title: 'Phone Number', info: '+880 172 752 1010', action: 'tel:+8801727521010', color: 'from-green-500 to-emerald-500' },
    { icon: MapPin, title: 'Location', info: 'Dhaka, Bangladesh', action: '#', color: 'from-purple-500 to-pink-500' },
    { icon: Clock, title: 'Business Hours', info: 'Mon - Fri: 9:00 AM - 6:00 PM (GMT+6)', action: '#', color: 'from-orange-500 to-red-500' }
  ];

  const services = [
    'Product Development',
    'Quality Assurance',
    'Supply Chain Management',
    'Compliance & Auditing',
    'Sustainable Sourcing',
    'Technical Support',
    'Other'
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full px-6 py-3 mb-6">
            <MessageCircle className="text-blue-600" size={20} />
            <span className="text-blue-800 font-semibold">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Start Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Sourcing Journey?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Let's discuss your apparel sourcing needs. Our experts are ready to help you
            find the perfect manufacturing partners and solutions for your brand.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-green-600" size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                <p className="text-gray-600">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text" name="name" value={formData.name}
                      onChange={handleInputChange} required
                      className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <input
                      type="email" name="email" value={formData.email}
                      onChange={handleInputChange} required
                      className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <input
                  type="text" name="company" value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
                  placeholder="Company Name"
                />

                <select
                  name="service" value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a service</option>
                  {services.map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>

                <textarea
                  name="message" value={formData.message}
                  onChange={handleInputChange} required rows={4}
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your project requirements..."
                />

                <button
                  type="submit" disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 rounded-xl hover:scale-105 transition flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((contact, i) => {
              const Icon = contact.icon;
              return (
                <a key={i} href={contact.action}
                  className="group bg-white rounded-2xl shadow-lg p-6 border hover:shadow-xl transition flex items-center space-x-4"
                >
                  <div className={`w-14 h-14 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center text-white`}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">{contact.title}</h4>
                    <p className="text-gray-600 group-hover:text-blue-600">{contact.info}</p>
                  </div>
                  <ArrowRight className="text-gray-400 group-hover:text-blue-600 ml-auto" size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
