import React, { useRef, useState } from 'react';
import { Github, Linkedin, Mail, Edit3, Check, X } from 'lucide-react';
import { usePortfolio } from '../contexts/PortfolioContext';
import { handleImageUpload } from '../utils/imageHandler';

const Hero: React.FC = () => {
  const { data, admin, updatePersonalInfo } = usePortfolio();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(data.personalInfo);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleEdit = () => {
    if (isEditing) {
      updatePersonalInfo(editData);
      setIsEditing(false);
    } else {
      setEditData(data.personalInfo);
      setIsEditing(true);
    }
  };

  const handleCancel = () => {
    setEditData(data.personalInfo);
    setIsEditing(false);
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const imageUrl = await handleImageUpload(file);
        setEditData(prev => ({ ...prev, profileImage: imageUrl }));
      } catch (error) {
        alert(error instanceof Error ? error.message : 'Failed to upload image');
      }
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8 relative inline-block">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gray-200 relative">
              {(isEditing ? editData.profileImage : data.personalInfo.profileImage) ? (
                <img
                  src={isEditing ? editData.profileImage : data.personalInfo.profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500 text-2xl font-bold">
                  {(isEditing ? editData.name : data.personalInfo.name).charAt(0)}
                </div>
              )}

              {admin.isEditMode && (
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity"
                >
                  <Edit3 size={20} />
                </button>
              )}
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>

          {/* Name and Title */}
          <div className="mb-6">
            {isEditing ? (
              <div className="space-y-4 max-w-md mx-auto">
                <input
                  type="text"
                  value={editData.name}
                  onChange={(e) => setEditData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full text-4xl font-bold text-center bg-transparent border-b-2 border-primary-300 focus:border-primary-600 outline-none"
                />
                <input
                  type="text"
                  value={editData.title}
                  onChange={(e) => setEditData(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full text-xl text-center bg-transparent border-b-2 border-primary-300 focus:border-primary-600 outline-none text-primary-600"
                />
              </div>
            ) : (
              <>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                  Hi, I'm{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
                    {data.personalInfo.name}
                  </span>
                </h1>
                <h2 className="text-xl md:text-2xl text-primary-600 font-medium mb-6">
                  {data.personalInfo.title}
                </h2>
              </>
            )}
          </div>

          {/* Bio */}
          <div className="mb-8 max-w-3xl mx-auto">
            {isEditing ? (
              <textarea
                value={editData.bio}
                onChange={(e) => setEditData(prev => ({ ...prev, bio: e.target.value }))}
                rows={4}
                className="w-full text-lg text-gray-600 bg-white border border-gray-300 rounded-lg p-4 focus:border-primary-600 outline-none resize-none"
              />
            ) : (
              <p className="text-lg text-gray-600 leading-relaxed">
                {data.personalInfo.bio}
              </p>
            )}
          </div>

          {/* Edit Controls */}
          {admin.isEditMode && (
            <div className="mb-8 flex justify-center space-x-4">
              {isEditing ? (
                <>
                  <button
                    onClick={handleEdit}
                    className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <Check size={16} />
                    <span>Save</span>
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <X size={16} />
                    <span>Cancel</span>
                  </button>
                </>
              ) : (
                <button
                  onClick={handleEdit}
                  className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <Edit3 size={16} />
                  <span>Edit Profile</span>
                </button>
              )}
            </div>
          )}

          {/* CTA Buttons */}
          <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-primary-600 hover:text-white transition-colors transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href={data.personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href={data.personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={`mailto:${data.personalInfo.email}`}
              className="text-gray-600 hover:text-primary-600 transition-colors transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;