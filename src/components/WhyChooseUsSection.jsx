import React from 'react';
import { 
  Globe, Users, Award, Truck, Shield, Leaf, Clock, TrendingUp,
  CheckCircle, ArrowRight, Star, Zap
} from 'lucide-react';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Globe,
      title: 'End-to-End Solutions',
      description: 'From product development to final shipment, we handle the entire sourcing process with expertise and precision.',
      benefits: ['Complete Process Management', 'Single Point of Contact', 'Streamlined Communication'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Trusted Network',
      description: 'Strong partnerships with compliant, reliable, and regularly audited manufacturers across the globe.',
      benefits: ['Pre-vetted Suppliers', 'Regular Audits', 'Quality Partnerships'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      title: 'Uncompromising Quality',
      description: 'Dedicated QA/QC team ensuring international quality standards are met and exceeded consistently.',
      benefits: ['Multi-stage Inspection', 'International Standards', 'Zero Defect Policy'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Efficient planning and execution to meet deadlines every time with our proven project management.',
      benefits: ['99.8% On-time Rate', 'Real-time Tracking', 'Contingency Planning'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: TrendingUp,
      title: 'Competitive Pricing',
      description: 'Optimized sourcing strategies to give buyers the best value without compromising on quality.',
      benefits: ['Cost Optimization', 'Volume Discounts', 'Transparent Pricing'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Leaf,
      title: 'Sustainability Focus',
      description: 'Commitment to eco-friendly practices and ethical manufacturing for a better tomorrow.',
      benefits: ['Eco-friendly Materials', 'Ethical Manufacturing', 'Carbon Neutral Shipping'],
      color: 'from-green-600 to-lime-500'
    }
  ];

  const stats = [
    { icon: Users, number: '500+', label: 'Satisfied Clients', color: 'text-blue-600' },
    { icon: Globe, number: '50+', label: 'Countries Served', color: 'text-green-600' },
    { icon: Award, number: '98%', label: 'Quality Score', color: 'text-purple-600' },
    { icon: Truck, number: '99.8%', label: 'On-time Delivery', color: 'text-orange-600' }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full px-6 py-3 mb-6">
            <Zap className="text-blue-600" size={20} />
            <span className="text-blue-800 font-semibold">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Makes Us
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Different
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We don't just source apparel – we build partnerships that drive success. Here's why 
            leading brands trust us with their most important sourcing needs.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className={`w-12 h-12 mx-auto mb-4 ${stat.color} bg-opacity-10 rounded-xl flex items-center justify-center`}>
                  <IconComponent className={stat.color} size={24} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
                {/* Header */}
                <div className={`bg-gradient-to-r ${feature.color} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-10 rounded-full -translate-y-12 translate-x-12"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent size={24} />
                    </div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  <div className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="text-green-600" size={12} />
                        </div>
                        <span className="text-gray-700 text-sm font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/></%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Sourcing?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful brands who trust us with their apparel sourcing needs. 
              Let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Your Project
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="tel:+8801727521010"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;