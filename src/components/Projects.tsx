import React, { useState, useRef } from 'react';
import { Github, ExternalLink, Plus, Edit3, Trash2, Check, X, Upload } from 'lucide-react';
import { usePortfolio } from '../contexts/PortfolioContext';
import { Project } from '../types';
import { handleImageUpload } from '../utils/imageHandler';

const Projects: React.FC = () => {
  const { data, admin, addProject, updateProject, deleteProject } = usePortfolio();
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newProject, setNewProject] = useState<Omit<Project, 'id'>>({
    title: '',
    description: '',
    technologies: [],
    githubUrl: '',
    liveUrl: '',
    image: '',
    featured: false
  });
  const [techInput, setTechInput] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAddProject = () => {
    if (newProject.title.trim() && newProject.description.trim()) {
      addProject(newProject);
      setNewProject({
        title: '',
        description: '',
        technologies: [],
        githubUrl: '',
        liveUrl: '',
        image: '',
        featured: false
      });
      setTechInput('');
      setIsAdding(false);
    }
  };

  const handleUpdateProject = (id: string, updatedProject: Partial<Project>) => {
    updateProject(id, updatedProject);
    setEditingId(null);
  };

  const addTechnology = (tech: string, isNew: boolean = false) => {
    if (tech.trim()) {
      if (isNew) {
        setNewProject(prev => ({
          ...prev,
          technologies: [...prev.technologies, tech.trim()]
        }));
      } else {
        // For editing existing project
        const project = data.projects.find(p => p.id === editingId);
        if (project) {
          handleUpdateProject(editingId!, {
            technologies: [...project.technologies, tech.trim()]
          });
        }
      }
    }
  };

  const removeTechnology = (index: number, isNew: boolean = false) => {
    if (isNew) {
      setNewProject(prev => ({
        ...prev,
        technologies: prev.technologies.filter((_, i) => i !== index)
      }));
    } else {
      const project = data.projects.find(p => p.id === editingId);
      if (project) {
        handleUpdateProject(editingId!, {
          technologies: project.technologies.filter((_, i) => i !== index)
        });
      }
    }
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>, isNew: boolean = false) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const imageUrl = await handleImageUpload(file);
        if (isNew) {
          setNewProject(prev => ({ ...prev, image: imageUrl }));
        } else {
          handleUpdateProject(editingId!, { image: imageUrl });
        }
      } catch (error) {
        alert(error instanceof Error ? error.message : 'Failed to upload image');
      }
    }
  };

  const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const [editData, setEditData] = useState(project);
    const [newTech, setNewTech] = useState('');
    const isEditing = editingId === project.id;

    const handleSave = () => {
      handleUpdateProject(project.id, editData);
    };

    const handleCancel = () => {
      setEditData(project);
      setEditingId(null);
    };

    return (
      <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
        {/* Project Image */}
        <div className="relative h-48 bg-gray-200 overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
              <span className="text-primary-600 text-lg font-medium">
                {project.title.charAt(0)}
              </span>
            </div>
          )}

          {admin.isEditMode && !isEditing && (
            <div className="absolute top-2 right-2 flex space-x-2">
              <button
                onClick={() => setEditingId(project.id)}
                className="bg-white/90 text-gray-700 p-2 rounded-lg hover:bg-white transition-colors"
              >
                <Edit3 size={16} />
              </button>
              <button
                onClick={() => deleteProject(project.id)}
                className="bg-white/90 text-red-600 p-2 rounded-lg hover:bg-white transition-colors"
              >
                <Trash2 size={16} />
              </button>
            </div>
          )}

          {project.featured && (
            <div className="absolute top-2 left-2">
              <span className="bg-primary-600 text-white px-2 py-1 rounded-lg text-xs font-medium">
                Featured
              </span>
            </div>
          )}
        </div>

        <div className="p-6">
          {isEditing ? (
            <div className="space-y-4">
              <input
                type="text"
                value={editData.title}
                onChange={(e) => setEditData(prev => ({ ...prev, title: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-primary-600 outline-none"
                placeholder="Project title"
              />

              <textarea
                value={editData.description}
                onChange={(e) => setEditData(prev => ({ ...prev, description: e.target.value }))}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-primary-600 outline-none resize-none"
                placeholder="Project description"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="url"
                  value={editData.githubUrl}
                  onChange={(e) => setEditData(prev => ({ ...prev, githubUrl: e.target.value }))}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:border-primary-600 outline-none"
                  placeholder="GitHub URL"
                />
                <input
                  type="url"
                  value={editData.liveUrl || ''}
                  onChange={(e) => setEditData(prev => ({ ...prev, liveUrl: e.target.value }))}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:border-primary-600 outline-none"
                  placeholder="Live URL (optional)"
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={editData.featured}
                  onChange={(e) => setEditData(prev => ({ ...prev, featured: e.target.checked }))}
                  className="w-4 h-4 text-primary-600"
                />
                <label className="text-sm text-gray-700">Featured project</label>
              </div>

              <div>
                <div className="flex space-x-2 mb-2">
                  <input
                    type="text"
                    value={newTech}
                    onChange={(e) => setNewTech(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        addTechnology(newTech);
                        setNewTech('');
                      }
                    }}
                    className="flex-1 px-3 py-1 border border-gray-300 rounded focus:border-primary-600 outline-none text-sm"
                    placeholder="Add technology"
                  />
                  <button
                    onClick={() => {
                      addTechnology(newTech);
                      setNewTech('');
                    }}
                    className="bg-primary-600 text-white px-3 py-1 rounded text-sm hover:bg-primary-700"
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {editData.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center space-x-1 bg-primary-100 text-primary-700 px-2 py-1 rounded-lg text-sm"
                    >
                      <span>{tech}</span>
                      <button
                        onClick={() => removeTechnology(index)}
                        className="text-primary-500 hover:text-primary-700"
                      >
                        <X size={12} />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Upload size={16} />
                <span>Upload Image</span>
              </button>

              <div className="flex space-x-2">
                <button
                  onClick={handleSave}
                  className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                >
                  <Check size={16} />
                  <span>Save</span>
                </button>
                <button
                  onClick={handleCancel}
                  className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
                >
                  <X size={16} />
                  <span>Cancel</span>
                </button>
              </div>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-primary-100 text-primary-700 px-2 py-1 rounded-lg text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
                >
                  <Github size={16} />
                  <span>Code</span>
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </>
          )}
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={(e) => handleImageChange(e)}
          className="hidden"
        />
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills and experience.
          </p>
        </div>

        {/* Add New Project Form */}
        {admin.isEditMode && (
          <div className="mb-12 bg-gray-50 p-6 rounded-lg">
            {isAdding ? (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Add New Project</h3>

                <input
                  type="text"
                  value={newProject.title}
                  onChange={(e) => setNewProject(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Project title"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-primary-600 outline-none"
                />

                <textarea
                  value={newProject.description}
                  onChange={(e) => setNewProject(prev => ({ ...prev, description: e.target.value }))}
                  rows={3}
                  placeholder="Project description"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-primary-600 outline-none resize-none"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="url"
                    value={newProject.githubUrl}
                    onChange={(e) => setNewProject(prev => ({ ...prev, githubUrl: e.target.value }))}
                    placeholder="GitHub URL"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:border-primary-600 outline-none"
                  />
                  <input
                    type="url"
                    value={newProject.liveUrl || ''}
                    onChange={(e) => setNewProject(prev => ({ ...prev, liveUrl: e.target.value }))}
                    placeholder="Live URL (optional)"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:border-primary-600 outline-none"
                  />
                </div>

                <div>
                  <div className="flex space-x-2 mb-2">
                    <input
                      type="text"
                      value={techInput}
                      onChange={(e) => setTechInput(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          addTechnology(techInput, true);
                          setTechInput('');
                        }
                      }}
                      placeholder="Add technology"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:border-primary-600 outline-none"
                    />
                    <button
                      onClick={() => {
                        addTechnology(techInput, true);
                        setTechInput('');
                      }}
                      className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700"
                    >
                      Add
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {newProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center space-x-1 bg-primary-100 text-primary-700 px-2 py-1 rounded-lg text-sm"
                      >
                        <span>{tech}</span>
                        <button
                          onClick={() => removeTechnology(index, true)}
                          className="text-primary-500 hover:text-primary-700"
                        >
                          <X size={12} />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={newProject.featured}
                      onChange={(e) => setNewProject(prev => ({ ...prev, featured: e.target.checked }))}
                      className="w-4 h-4 text-primary-600"
                    />
                    <span className="text-gray-700">Featured project</span>
                  </label>

                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Upload size={16} />
                    <span>Upload Image</span>
                  </button>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={handleAddProject}
                    className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700"
                  >
                    <Check size={16} />
                    <span>Add Project</span>
                  </button>
                  <button
                    onClick={() => setIsAdding(false)}
                    className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
                  >
                    <X size={16} />
                    <span>Cancel</span>
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setIsAdding(true)}
                className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700"
              >
                <Plus size={16} />
                <span>Add New Project</span>
              </button>
            )}
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {data.projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects yet.</p>
            {admin.isEditMode && (
              <button
                onClick={() => setIsAdding(true)}
                className="mt-4 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700"
              >
                Add Your First Project
              </button>
            )}
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={(e) => handleImageChange(e, true)}
          className="hidden"
        />
      </div>
    </section>
  );
};

export default Projects;