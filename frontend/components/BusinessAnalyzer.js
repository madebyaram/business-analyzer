import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { MapPin, TrendingUp, Users, AlertTriangle } from 'lucide-react';

// Ad Placeholder Component
const AdPlaceholder = ({ position }) => (
  <div className="ad-container bg-gray-100 border rounded flex items-center justify-center p-4 mb-4">
    <span className="text-gray-500">Advertisement Space - {position}</span>
  </div>
);

const BusinessAnalyzer = () => {
  const [formData, setFormData] = useState({
    state: '',
    city: '',
    industry: '',
    budget: ''
  });
  
  const [results, setResults] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Analysis error:', error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Top Banner Ad */}
      <AdPlaceholder position="Top Banner" />

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          {/* Main Form Content */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">State</label>
                <input
                  type="text"
                  value={formData.state}
                  onChange={(e) => setFormData({...formData, state: e.target.value})}
                  className="w-full p-2 border rounded"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">City</label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  className="w-full p-2 border rounded"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Industry</label>
                <input
                  type="text"
                  value={formData.industry}
                  onChange={(e) => setFormData({...formData, industry: e.target.value})}
                  className="w-full p-2 border rounded"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Budget</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  className="w-full p-2 border rounded"
                >
                  <option value="">Select Budget Range</option>
                  <option value="small">Under $50,000</option>
                  <option value="medium">$50,000 - $250,000</option>
                  <option value="large">Over $250,000</option>
                </select>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600"
            >
              Analyze Market
            </button>
          </form>

          {/* Results Section */}
          {results && (
            <div className="mt-8 space-y-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded shadow">
                  <h3 className="text-lg font-medium">Market Score</h3>
                  <p className="text-2xl font-bold">{results.marketScore}/100</p>
                </div>
                
                <div className="p-4 bg-white rounded shadow">
                  <h3 className="text-lg font-medium">Competition Level</h3>
                  <p className="text-2xl font-bold">{results.competition.level}</p>
                </div>
                
                <div className="p-4 bg-white rounded shadow">
                  <h3 className="text-lg font-medium">Growth Potential</h3>
                  <p className="text-2xl font-bold">{results.demographics.growth}%</p>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Sidebar Ad */}
        <div className="col-span-1">
          <AdPlaceholder position="Sidebar" />
        </div>
      </div>

      {/* Bottom Banner Ad */}
      <AdPlaceholder position="Bottom Banner" />
    </div>
  );
};

export default BusinessAnalyzer;
