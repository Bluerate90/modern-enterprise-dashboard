import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Activity, TrendingUp, AlertTriangle, CheckCircle, Database, Cloud, Zap, Shield } from 'lucide-react';

const App = () => {
  const [metrics, setMetrics] = useState({
    systemHealth: 98,
    activeUsers: 1247,
    responseTime: 145,
    alerts: 3
  });

  const [aiInsights, setAiInsights] = useState([
    "Database query optimization detected - 23% performance improvement available",
    "Unusual traffic pattern in banking module - recommend scaling",
    "Compliance check: All GDPR requirements met ✓"
  ]);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 20) - 10,
        responseTime: prev.responseTime + Math.floor(Math.random() * 30) - 15,
        systemHealth: Math.max(95, Math.min(100, prev.systemHealth + Math.random() * 2 - 1))
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const performanceData = [
    { time: '00:00', cpu: 45, memory: 62, requests: 1200 },
    { time: '06:00', cpu: 52, memory: 68, requests: 1800 },
    { time: '12:00', cpu: 78, memory: 85, requests: 3200 },
    { time: '18:00', cpu: 65, memory: 72, requests: 2400 },
    { time: '24:00', cpu: 48, memory: 58, requests: 1400 }
  ];

  const industryData = [
    { name: 'Banking', value: 35, color: '#3b82f6' },
    { name: 'Healthcare', value: 25, color: '#10b981' },
    { name: 'Energy', value: 20, color: '#f59e0b' },
    { name: 'Public Sector', value: 20, color: '#8b5cf6' }
  ];

  const complianceData = [
    { module: 'GDPR', status: 'Compliant', score: 98 },
    { module: 'PCI DSS', status: 'Compliant', score: 96 },
    { module: 'SOX', status: 'Warning', score: 87 },
    { module: 'ISO 27001', status: 'Compliant', score: 94 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Activity className="w-8 h-8 text-blue-400" />
            <h1 className="text-3xl font-bold text-white">Wonna Smart Monitor</h1>
          </div>
          <p className="text-blue-200">AI-Powered Industry Monitoring Dashboard</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-200 text-sm">System Health</p>
                <p className="text-2xl font-bold text-white">{metrics.systemHealth.toFixed(1)}%</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-200 text-sm">Active Users</p>
                <p className="text-2xl font-bold text-white">{metrics.activeUsers.toLocaleString()}</p>
              </div>
              <TrendingUp className="w-8 h-8 text-blue-400" />
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-200 text-sm">Response Time</p>
                <p className="text-2xl font-bold text-white">{metrics.responseTime}ms</p>
              </div>
              <Zap className="w-8 h-8 text-yellow-400" />
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-200 text-sm">Active Alerts</p>
                <p className="text-2xl font-bold text-white">{metrics.alerts}</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-orange-400" />
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Performance Chart */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-white text-lg font-semibold mb-4 flex items-center gap-2">
              <Database className="w-5 h-5" />
              System Performance
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1f2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px'
                  }} 
                />
                <Line type="monotone" dataKey="cpu" stroke="#3b82f6" strokeWidth={2} />
                <Line type="monotone" dataKey="memory" stroke="#10b981" strokeWidth={2} />
                <Line type="monotone" dataKey="requests" stroke="#f59e0b" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Industry Distribution */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-white text-lg font-semibold mb-4 flex items-center gap-2">
              <Cloud className="w-5 h-5" />
              Industry Distribution
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={industryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {industryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1f2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AI Insights & Compliance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* AI Insights */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-white text-lg font-semibold mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5" />
              AI-Powered Insights
            </h3>
            <div className="space-y-3">
              {aiInsights.map((insight, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <p className="text-blue-100 text-sm">{insight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance Status */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-white text-lg font-semibold mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Compliance Status
            </h3>
            <div className="space-y-3">
              {complianceData.map((item, index) => (
                <div key={index} className="flex items-center justify-between bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${
                      item.status === 'Compliant' ? 'bg-green-400' : 'bg-yellow-400'
                    }`} />
                    <span className="text-white font-medium">{item.module}</span>
                  </div>
                  <span className="text-blue-200">{item.score}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-blue-200 text-sm">
            Built with React, TypeScript & Recharts | Wonna Technologies Demo
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
