import React, { useState } from 'react';
import { 
  Palette, Shield, Truck, Users, Leaf, Wrench, 
  ChevronRight, CheckCircle, ArrowRight, Star 
} from 'lucide-react';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Palette,
      title: 'Product Development',
      shortDesc: 'From concept to creation',
      fullDesc: 'Our expert teams work closely with clients to bring their visions to life, ensuring innovation, quality, and market relevance. We handle everything from initial design concepts to technical specifications.',
      features: ['Design Consultation', 'Technical Drawings', 'Sample Development', 'Material Selection', 'Trend Forecasting'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      shortDesc: 'Uncompromising standards',
      fullDesc: 'Our rigorous quality assurance ensures every product exceeds client expectations with comprehensive testing, inspection, and compliance verification at every stage.',
      features: ['Pre-production Inspection', 'In-line Quality Control', 'Final Random Inspection', 'Lab Testing', 'Compliance Verification'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Truck,
      title: 'Supply Chain Management',
      shortDesc: 'Efficiency & reliability',
      fullDesc: 'We provide top-notch supply chain management solutions, guaranteeing efficiency, reliability, and timely delivery through optimized logistics and vendor management.',
      features: ['Vendor Management', 'Logistics Coordination', 'Inventory Planning', 'Risk Management', 'Cost Optimization'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Compliance & Auditing',
      shortDesc: 'Ethical manufacturing',
      fullDesc: 'Ensuring all manufacturing partners meet international standards for labor practices, environmental compliance, and social responsibility through regular auditing.',
      features: ['Factory Auditing', 'Social Compliance', 'Environmental Standards', 'Labor Practices', 'Certification Support'],
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Leaf,
      title: 'Sustainable Sourcing',
      shortDesc: 'Eco-friendly practices',
      fullDesc: 'Commitment to eco-friendly practices and sustainable manufacturing processes that minimize environmental impact while maintaining quality and efficiency.',
      features: ['Eco-friendly Materials', 'Waste Reduction', 'Energy Efficiency', 'Sustainable Packaging', 'Carbon Footprint Tracking'],
      color: 'from-green-600 to-lime-500'
    },
    {
      icon: Wrench,
      title: 'Technical Support',
      shortDesc: 'Expert guidance',
      fullDesc: 'Comprehensive technical support covering pattern making, grading, fit sessions, and production troubleshooting to ensure perfect execution.',
      features: ['Pattern Making', 'Grading Services', 'Fit Sessions', 'Production Support', 'Technical Training'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full opacity-30 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full px-6 py-3 mb-6">
            <Star className="text-blue-600" size={16} />
            <span className="text-blue-800 font-semibold">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Apparel
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Sourcing Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From design to delivery, we handle the entire sourcing process with expertise, 
            ensuring quality, compliance, and value at every step of your journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 ${
                  activeService === index ? 'ring-2 ring-blue-500 shadow-2xl' : ''
                }`}
                onClick={() => setActiveService(index)}
              >
                {/* Card Header */}
                <div className={`bg-gradient-to-r ${service.color} p-6 rounded-t-2xl text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-white/90 text-sm">{service.shortDesc}</p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.fullDesc}</p>
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="text-green-500" size={16} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group">
                    Learn More
                    <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                  </button>
                </div>

                {/* Active Indicator */}
                {activeService === index && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="text-white" size={16} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Detailed Service View */}
        {activeService !== null && (
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12 shadow-inner">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${services[activeService].color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                    {React.createElement(services[activeService].icon, { size: 32 })}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">{services[activeService].title}</h3>
                    <p className="text-gray-600">{services[activeService].shortDesc}</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {services[activeService].fullDesc}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-6">Key Features</h4>
                <div className="grid gap-4">
                  {services[activeService].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm">
                      <div className={`w-8 h-8 bg-gradient-to-r ${services[activeService].color} rounded-lg flex items-center justify-center`}>
                        <CheckCircle className="text-white" size={16} />
                      </div>
                      <span className="font-medium text-gray-800">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;