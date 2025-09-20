import React from 'react';
import { Linkedin, Mail, Award, Users, Globe, TrendingUp } from 'lucide-react';

const LeadershipSection = () => {
  const leaders = [
    {
      name: 'Sarah Johnson',
      position: 'Chief Executive Officer',
      experience: '15+ Years',
      expertise: 'Global Supply Chain Strategy',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c9c36f4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Sarah leads our global operations with extensive experience in international trade and sustainable sourcing practices.',
      achievements: ['Built $100M+ sourcing network', 'Led sustainability initiatives', '20+ industry awards']
    },
    {
      name: 'Michael Chen',
      position: 'Chief Operating Officer',
      experience: '12+ Years',
      expertise: 'Operations & Quality Management',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Michael ensures operational excellence across all our manufacturing partners with rigorous quality standards.',
      achievements: ['99.8% on-time delivery rate', 'Zero-defect quality systems', 'ISO certification expert']
    },
    {
      name: 'Emily Rodriguez',
      position: 'Head of Sustainability',
      experience: '10+ Years',
      expertise: 'Sustainable Manufacturing',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: 'Emily drives our commitment to ethical and environmentally responsible manufacturing practices.',
      achievements: ['Carbon neutral initiatives', 'Ethical sourcing programs', 'Sustainability certifications']
    }
  ];

  const companyValues = [
    { icon: Globe, title: 'Global Expertise', desc: 'Local insights, global reach' },
    { icon: Users, title: 'Team Excellence', desc: 'Experienced professionals' },
    { icon: Award, title: 'Industry Recognition', desc: 'Award-winning solutions' },
    { icon: TrendingUp, title: 'Continuous Growth', desc: 'Innovation-driven approach' }
  ];

  return (
    <section id="leadership" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full px-6 py-3 mb-6">
            <Users className="text-blue-600" size={20} />
            <span className="text-blue-800 font-semibold">Our Leadership</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet the Experts Behind
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Our Success
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our experienced leadership team combines global expertise with local insights to deliver 
            reliable, ethical, and innovative apparel solutions that exceed expectations.
          </p>
        </div>

        {/* Leadership Team */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {leaders.map((leader, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              {/* Image */}
              <div className="relative h-64 bg-gradient-to-br from-blue-500 to-indigo-600 overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium text-blue-200">{leader.experience}</div>
                  <div className="text-xs text-blue-100">{leader.expertise}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{leader.position}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{leader.bio}</p>
                
                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Achievements</h4>
                  <div className="space-y-2">
                    {leader.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <Award className="text-blue-500 flex-shrink-0" size={12} />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                  >
                    <Mail size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Values */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Leadership Principles</h3>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Our leadership is guided by core principles that ensure consistent excellence 
              and sustainable growth for all our stakeholders.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-blue-400" size={32} />
                  </div>
                  <h4 className="text-lg font-bold mb-2">{value.title}</h4>
                  <p className="text-blue-200 text-sm">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;