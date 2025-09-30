import React from 'react';
import { Trophy, Code, ExternalLink } from 'lucide-react';
import { usePortfolio } from '../contexts/PortfolioContext';

const Achievements: React.FC = () => {
  const { data } = usePortfolio();
  const { achievements = [], problemSolvingProfiles = [] } = data;

  if (!achievements.length && !problemSolvingProfiles.length) {
    return null;
  }

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Achievements & Problem Solving
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>

        {/* Achievements */}
        {achievements.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <Trophy className="text-primary-600 mr-3" size={28} />
              <h3 className="text-2xl font-semibold text-gray-900">
                Programming Contests
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow border-l-4 border-primary-600"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Trophy className="text-primary-600" size={24} />
                    </div>
                    <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                      {achievement.year}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Problem Solving Profiles */}
        {problemSolvingProfiles.length > 0 && (
          <div>
            <div className="flex items-center justify-center mb-8">
              <Code className="text-green-600 mr-3" size={28} />
              <h3 className="text-2xl font-semibold text-gray-900">
                Problem Solving Profiles
              </h3>
            </div>

            <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-6">
              {problemSolvingProfiles.map((profile, index) => (
                <a
                  key={index}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-200"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mb-4">
                      <Code className="text-green-600" size={28} />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {profile.platform}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3 font-mono">
                      {profile.username}
                    </p>
                    <div className="flex items-center text-primary-600 text-sm font-medium">
                      <span>View Profile</span>
                      <ExternalLink size={14} className="ml-1" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Achievements;
