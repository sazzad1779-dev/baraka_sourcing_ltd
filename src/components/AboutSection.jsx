import React from 'react';
import { CheckCircle, Target, Eye, Users, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  const values = [
    { icon: CheckCircle, title: 'Integrity', desc: 'Honest and transparent business practices' },
    { icon: Target, title: 'Quality', desc: 'Uncompromising standards in every product' },
    { icon: Users, title: 'Sustainability', desc: 'Eco-friendly and ethical manufacturing' },
    { icon: TrendingUp, title: 'Innovation', desc: 'Cutting-edge solutions and technology' }
  ];

  const stats = [
    { number: '500+', label: 'Global Partners' },
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Countries Served' },
    { number: '98%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="about" className="  bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            <span className="text-blue-800 font-medium text-sm">About Baraka Sourcing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Connecting Brands with 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a global apparel sourcing partner, bridging the gap between innovative brands 
            and exceptional manufacturers worldwide through expertise, integrity, and innovation.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg"></div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Baraka Sourcing Ltd, we bridge the gap between innovative brands and exceptional manufacturers. 
                With years of experience in the global apparel industry, we have built a reputation for delivering 
                quality products while maintaining the highest standards of ethics and sustainability.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our expert team combines deep industry knowledge with cutting-edge technology to streamline 
                the sourcing process, ensuring our clients receive the best value without compromising on quality.
              </p>
              
              {/* Mission & Vision Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                  <Target className="text-blue-600 mb-3" size={32} />
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h4>
                  <p className="text-gray-600 leading-relaxed">
                    To provide seamless apparel solutions with quality, ethics, and on-time delivery 
                    at the heart of everything we do.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-100">
                  <Eye className="text-indigo-600 mb-3" size={32} />
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h4>
                  <p className="text-gray-600 leading-relaxed">
                    To be the most reliable and innovative apparel buying house, driving sustainable 
                    growth for brands and manufacturers worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* Values Section */}
            <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6 text-center">Our Core Values</h4>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent size={16} />
                      </div>
                      <div>
                        <h5 className="font-semibold text-sm">{value.title}</h5>
                        <p className="text-xs text-blue-100 mt-1">{value.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Preview */}
        <div className="text-center bg-white rounded-2xl shadow-xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-50"></div>
          <div className="relative">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Experienced Leadership</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our experienced leadership team combines global expertise with local insights to deliver 
              reliable, ethical, and on-time apparel solutions that exceed expectations.
            </p>
            <a
              href="#leadership"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
            >
              Meet Our Team
              <Users className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;