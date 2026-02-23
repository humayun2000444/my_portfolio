import React, { useState } from 'react';
import { Award, Calendar, MapPin, Building, X } from 'lucide-react';
import { usePortfolio } from '../contexts/PortfolioContext';

const Certifications: React.FC = () => {
  const { data } = usePortfolio();
  const { certifications = [] } = data;
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);

  if (!certifications.length) {
    return null;
  }

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Certifications
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-gradient-to-br from-primary-50 to-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer border border-gray-100"
              onClick={() => setSelectedCert(cert)}
            >
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-xs font-medium text-white bg-primary-600/90 px-2 py-1 rounded-full">
                    {cert.startDate === cert.endDate ? cert.endDate : `${cert.startDate} - ${cert.endDate}`}
                  </span>
                </div>
              </div>

              {/* Certificate Info */}
              <div className="p-5">
                <div className="flex items-start mb-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-3">
                    <Award className="text-primary-600" size={20} />
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900 line-clamp-2">
                    {cert.title}
                  </h4>
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Building size={14} className="mr-2 text-gray-400" />
                    <span className="truncate">{cert.institution}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2 text-gray-400" />
                    <span>{cert.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Certificate Preview */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900 pr-8">
                {selectedCert.title}
              </h3>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={20} className="text-gray-500" />
              </button>
            </div>

            <div className="p-4">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full rounded-lg shadow-lg"
              />

              <div className="mt-4 grid sm:grid-cols-3 gap-4">
                <div className="flex items-center text-gray-600">
                  <Building size={18} className="mr-2 text-primary-600" />
                  <span>{selectedCert.institution}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin size={18} className="mr-2 text-primary-600" />
                  <span>{selectedCert.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar size={18} className="mr-2 text-primary-600" />
                  <span>
                    {selectedCert.startDate === selectedCert.endDate
                      ? selectedCert.endDate
                      : `${selectedCert.startDate} - ${selectedCert.endDate}`}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
