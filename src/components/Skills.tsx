import React, { useState } from 'react';
import { Plus, Edit3, Trash2, Check, X } from 'lucide-react';
import { usePortfolio } from '../contexts/PortfolioContext';
import { Skill } from '../types';

const Skills: React.FC = () => {
  const { data, admin, addSkill, updateSkill, deleteSkill } = usePortfolio();
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newSkill, setNewSkill] = useState<Omit<Skill, 'id'>>({
    name: '',
    category: '',
    level: 50
  });

  const skillCategories = [...new Set(data.skills.map(skill => skill.category))];

  const handleAddSkill = () => {
    if (newSkill.name.trim() && newSkill.category.trim()) {
      addSkill(newSkill);
      setNewSkill({ name: '', category: '', level: 50 });
      setIsAdding(false);
    }
  };

  const handleUpdateSkill = (id: string, updatedSkill: Partial<Skill>) => {
    updateSkill(id, updatedSkill);
    setEditingId(null);
  };

  const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
    const [editData, setEditData] = useState(skill);
    const isEditing = editingId === skill.id;

    const handleSave = () => {
      handleUpdateSkill(skill.id, editData);
    };

    const handleCancel = () => {
      setEditData(skill);
      setEditingId(null);
    };

    return (
      <div className="mb-4 p-4 bg-white rounded-lg shadow-sm border">
        {isEditing ? (
          <div className="space-y-3">
            <div className="flex space-x-2">
              <input
                type="text"
                value={editData.name}
                onChange={(e) => setEditData(prev => ({ ...prev, name: e.target.value }))}
                className="flex-1 px-3 py-1 border border-gray-300 rounded focus:border-primary-600 outline-none"
                placeholder="Skill name"
              />
              <input
                type="text"
                value={editData.category}
                onChange={(e) => setEditData(prev => ({ ...prev, category: e.target.value }))}
                className="flex-1 px-3 py-1 border border-gray-300 rounded focus:border-primary-600 outline-none"
                placeholder="Category"
              />
            </div>
            <div className="flex items-center space-x-3">
              <input
                type="range"
                min="0"
                max="100"
                value={editData.level}
                onChange={(e) => setEditData(prev => ({ ...prev, level: parseInt(e.target.value) }))}
                className="flex-1"
              />
              <span className="w-12 text-sm font-medium text-gray-600">
                {editData.level}%
              </span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={handleSave}
                className="flex items-center space-x-1 bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
              >
                <Check size={14} />
                <span>Save</span>
              </button>
              <button
                onClick={handleCancel}
                className="flex items-center space-x-1 bg-gray-600 text-white px-3 py-1 rounded text-sm hover:bg-gray-700"
              >
                <X size={14} />
                <span>Cancel</span>
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-lg font-medium text-gray-900">{skill.name}</h4>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-primary-600">
                  {skill.level}%
                </span>
                {admin.isEditMode && (
                  <div className="flex space-x-1">
                    <button
                      onClick={() => setEditingId(skill.id)}
                      className="text-gray-400 hover:text-primary-600"
                    >
                      <Edit3 size={14} />
                    </button>
                    <button
                      onClick={() => deleteSkill(skill.id)}
                      className="text-gray-400 hover:text-red-600"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        {/* Add New Skill Form */}
        {admin.isEditMode && (
          <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
            {isAdding ? (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Add New Skill</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    value={newSkill.name}
                    onChange={(e) => setNewSkill(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Skill name"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:border-primary-600 outline-none"
                  />
                  <input
                    type="text"
                    value={newSkill.category}
                    onChange={(e) => setNewSkill(prev => ({ ...prev, category: e.target.value }))}
                    placeholder="Category"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:border-primary-600 outline-none"
                  />
                  <div className="flex items-center space-x-2">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={newSkill.level}
                      onChange={(e) => setNewSkill(prev => ({ ...prev, level: parseInt(e.target.value) }))}
                      className="flex-1"
                    />
                    <span className="w-12 text-sm font-medium text-gray-600">
                      {newSkill.level}%
                    </span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={handleAddSkill}
                    className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700"
                  >
                    <Check size={16} />
                    <span>Add Skill</span>
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
                <span>Add New Skill</span>
              </button>
            )}
          </div>
        )}

        {/* Skills by Category */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map(category => (
            <div key={category} className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                {category}
              </h3>
              <div className="space-y-4">
                {data.skills
                  .filter(skill => skill.category === category)
                  .map(skill => (
                    <SkillBar key={skill.id} skill={skill} />
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Overview */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skillCategories.map(category => {
              const categorySkills = data.skills.filter(skill => skill.category === category);
              const avgLevel = categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length;

              return (
                <div key={category} className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{category}</h4>
                  <div className="text-3xl font-bold text-primary-600 mb-1">
                    {Math.round(avgLevel)}%
                  </div>
                  <p className="text-sm text-gray-500">
                    {categorySkills.length} skill{categorySkills.length !== 1 ? 's' : ''}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;