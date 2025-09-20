import React from 'react';
import {
  Mail,
  Phone,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  MapPin,
  Clock,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    'Product Development',
    'Quality Assurance',
    'Supply Chain Management',
    'Compliance & Auditing',
    'Sustainable Sourcing',
    'Technical Design Support'
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-indigo-900/20"></div>
      <div
        className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fillRule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fillOpacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"
      ></div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">B</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">BARAKA SOURCING LTD</h3>
                  <p className="text-blue-400 font-medium">
                    Your Trusted Partner in Apparel Sourcing
                  </p>
                </div>
              </div>
              <p className="text-gray-300 text-lg mb-6 max-w-md">
                We are a global apparel sourcing partner, connecting brands with
                trusted manufacturers. From design to delivery, we ensure
                quality, compliance, and value in every step.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <Mail className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email Address</p>
                    <a
                      href="mailto:barakasourcing@gmail.com"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      barakasourcing@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                    <Phone className="text-green-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone Number</p>
                    <a
                      href="tel:+8801727521010"
                      className="text-white hover:text-green-400 transition-colors"
                    >
                      +880 172 752 1010
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                    <MapPin className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li
                    key={service}
                    className="text-gray-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-indigo-400 rounded-full mr-3 opacity-60 group-hover:opacity-100 transition-opacity"></span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Media & Business Hours */}
          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-4">
              <Clock className="text-blue-400" size={20} />
              <div>
                <p className="text-sm text-gray-400">Business Hours</p>
                <p className="text-white font-medium">
                  Mon - Fri: 9:00 AM - 6:00 PM (GMT+6)
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <p className="text-gray-400 text-sm">Follow us:</p>
              <div className="flex space-x-3">
                {[
                  { icon: Linkedin, href: '#', color: 'hover:text-blue-500' },
                  { icon: Twitter, href: '#', color: 'hover:text-sky-400' },
                  { icon: Facebook, href: '#', color: 'hover:text-blue-600' }
                ].map(({ icon: Icon, href, color }, index) => (
                  <a
                    key={index}
                    href={href}
                    className={`w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 ${color} transition-all duration-300 hover:scale-110 hover:bg-gray-600`}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
                <p>&copy; 2025 Baraka Sourcing Ltd. All rights reserved.</p>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                  <span>•</span>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                  <span>•</span>
                  <a href="#" className="hover:text-white transition-colors">
                    Sitemap
                  </a>
                </div>
              </div>

              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Scroll to top"
              >
                <ArrowUp size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
