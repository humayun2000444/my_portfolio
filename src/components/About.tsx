import React from 'react';
import { MapPin, Building, Calendar } from 'lucide-react';
import { usePortfolio } from '../contexts/PortfolioContext';

const About: React.FC = () => {
  const { data } = usePortfolio();
  const { personalInfo, experience } = data;

  const currentExperience = experience.find(exp => exp.isCurrentRole);
  const totalYears = experience.reduce((total, exp) => {
    const startYear = new Date(exp.startDate).getFullYear();
    const endYear = exp.isCurrentRole ? new Date().getFullYear() : new Date(exp.endDate || Date.now()).getFullYear();
    return total + (endYear - startYear);
  }, 0);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Professional Journey
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
            </div>

            {/* Quick Info */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <MapPin className="text-primary-600" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium text-gray-900">{personalInfo.location}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Building className="text-primary-600" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Current Company</p>
                  <p className="font-medium text-gray-900">{personalInfo.company}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Calendar className="text-primary-600" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Experience</p>
                  <p className="font-medium text-gray-900">{totalYears}+ Years</p>
                </div>
              </div>

              {currentExperience && (
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Building className="text-green-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Current Role</p>
                    <p className="font-medium text-gray-900">{currentExperience.position}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Expertise Areas */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Areas of Expertise
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Frontend Development',
                  'Backend Systems',
                  'VoIP Solutions',
                  'WebRTC Integration',
                  'Database Design',
                  'System Architecture'
                ].map((area, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-gray-700"
                  >
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {totalYears}+
              </div>
              <p className="text-gray-600">Years of Experience</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {data.projects.length}+
              </div>
              <p className="text-gray-600">Projects Completed</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {data.skills.length}+
              </div>
              <p className="text-gray-600">Technologies</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                100%
              </div>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        {experience.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              Professional Experience
            </h3>
            <div className="max-w-3xl mx-auto">
              {experience.map((exp, index) => (
                <div key={exp.id} className="relative flex items-start mb-8 last:mb-0">
                  {/* Timeline line */}
                  {index < experience.length - 1 && (
                    <div className="absolute left-4 top-8 w-0.5 h-16 bg-gray-200"></div>
                  )}

                  {/* Timeline dot */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-6 ${
                    exp.isCurrentRole ? 'bg-green-600' : 'bg-primary-600'
                  }`}>
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-gray-50 rounded-lg p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {exp.position}
                      </h4>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        exp.isCurrentRole
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {exp.startDate} - {exp.isCurrentRole ? 'Present' : exp.endDate}
                      </span>
                    </div>
                    <p className="text-primary-600 font-medium mb-3">{exp.company}</p>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;