import React, { useState, useRef } from 'react';
import { Download, Upload, Save, RefreshCw } from 'lucide-react';
import { usePortfolio } from '../contexts/PortfolioContext';
import { PortfolioData } from '../types';

const AdminPanel: React.FC = () => {
  const { data, exportToJSON, importFromJSON } = usePortfolio();
  const [importError, setImportError] = useState<string | null>(null);
  const [importSuccess, setImportSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleExport = () => {
    exportToJSON();
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const jsonData = JSON.parse(e.target?.result as string);

        // Basic validation
        if (!jsonData.personalInfo || !jsonData.skills || !jsonData.projects) {
          throw new Error('Invalid portfolio data format');
        }

        importFromJSON(jsonData as PortfolioData);
        setImportSuccess(true);
        setImportError(null);
        setTimeout(() => setImportSuccess(false), 3000);
      } catch (error) {
        setImportError(error instanceof Error ? error.message : 'Failed to import data');
        setImportSuccess(false);
      }
    };

    reader.readAsText(file);
    event.target.value = ''; // Reset input
  };

  const resetToDefaults = () => {
    if (window.confirm('Are you sure you want to reset all data to defaults? This cannot be undone.')) {
      localStorage.removeItem('portfolioData');
      window.location.reload();
    }
  };

  const stats = {
    projects: data.projects.length,
    skills: data.skills.length,
    experience: data.experience.length,
    education: data.education.length
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">
        Admin Panel
      </h3>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-primary-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-primary-600">{stats.projects}</div>
          <div className="text-sm text-gray-600">Projects</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-green-600">{stats.skills}</div>
          <div className="text-sm text-gray-600">Skills</div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-blue-600">{stats.experience}</div>
          <div className="text-sm text-gray-600">Experience</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-purple-600">{stats.education}</div>
          <div className="text-sm text-gray-600">Education</div>
        </div>
      </div>

      {/* Data Management */}
      <div className="space-y-4">
        <h4 className="text-lg font-medium text-gray-900">
          Data Management
        </h4>

        {/* Messages */}
        {importError && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            Error: {importError}
          </div>
        )}

        {importSuccess && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
            Data imported successfully!
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleExport}
            className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
          >
            <Download size={16} />
            <span>Export Data</span>
          </button>

          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            <Upload size={16} />
            <span>Import Data</span>
          </button>

          <button
            onClick={resetToDefaults}
            className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            <RefreshCw size={16} />
            <span>Reset to Defaults</span>
          </button>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="application/json"
          onChange={handleImport}
          className="hidden"
        />

        {/* Instructions */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h5 className="font-medium text-gray-900 mb-2">Instructions:</h5>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• <strong>Export Data:</strong> Download your current portfolio data as a JSON file for backup</li>
            <li>• <strong>Import Data:</strong> Upload a previously exported JSON file to restore your data</li>
            <li>• <strong>Reset to Defaults:</strong> Clear all customizations and return to the original template</li>
            <li>• All changes are automatically saved to your browser's local storage</li>
          </ul>
        </div>

        {/* Current Data Preview */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h5 className="font-medium text-gray-900 mb-2">Current Profile:</h5>
          <div className="text-sm text-gray-600">
            <p><strong>Name:</strong> {data.personalInfo.name}</p>
            <p><strong>Title:</strong> {data.personalInfo.title}</p>
            <p><strong>Email:</strong> {data.personalInfo.email}</p>
            <p><strong>Company:</strong> {data.personalInfo.company}</p>
            <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;