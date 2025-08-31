import React, { useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import { 
  Leaf, 
  CalendarDays, 
  Info, 
  Heart, 
  ArrowLeft, 
  Droplets, 
  Sun, 
  Thermometer,
  Ruler,
  Sparkles,
  Shield,
  Clock,
  ChevronDown,
  ChevronUp,
  CloudRain,
  Wind,
  Zap,
  Sprout,
  Gauge,
  Calendar
} from 'lucide-react';

const ViewDetails = () => {
  const plants = useLoaderData();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('details');
  const [showCareGuide, setShowCareGuide] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const plant = plants.find(p => p._id === id);

  if (!plant) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 px-4">
        <div className="text-center p-8 bg-white rounded-2xl shadow-lg max-w-md">
          <div className="w-24 h-24 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
            <Heart className="text-red-500" size={48} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Plant Not Found</h2>
          <p className="text-gray-600 mb-6">Sorry, we couldn't find the plant you're looking for.</p>
          <Link to="/" className="btn btn-primary gap-2">
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const {
    plantname,
    photo,
    category,
    helthstatus,
    "plant-info": plantInfo,
    "nex-water-date": nextWaterDate,
    "text-area": textArea
  } = plant;

  // Mock data for additional features
  const plantDetails = {
    scientificName: "Chlorophytum comosum",
    family: "Asparagaceae",
    origin: "South Africa",
    height: "30-60 cm",
    temperature: "18-24°C",
    sunlight: "Bright, indirect light",
    watering: "Every 5-7 days",
    humidity: "Medium to high",
    toxicity: "Non-toxic to pets",
    growthRate: "Moderate",
    soilType: "Well-draining potting mix",
    difficulty: "Easy"
  };

  const careSchedule = [
    { task: "Watering", frequency: "Weekly", nextDue: nextWaterDate, icon: Droplets },
    { task: "Fertilizing", frequency: "Monthly", nextDue: "15th May 2023", icon: Leaf },
    { task: "Pruning", frequency: "As needed", nextDue: "When overgrown", icon: Shield },
    { task: "Repotting", frequency: "Yearly", nextDue: "Spring 2024", icon: Sparkles }
  ];

  const environmentData = [
    { title: "Ideal Temperature", value: "18-24°C", icon: Thermometer, color: "bg-red-50", iconColor: "text-red-500" },
    { title: "Humidity Level", value: "40-60%", icon: CloudRain, color: "bg-blue-50", iconColor: "text-blue-500" },
    { title: "Sunlight Needs", value: "Bright, indirect", icon: Sun, color: "bg-amber-50", iconColor: "text-amber-500" },
    { title: "Growth Speed", value: "Moderate", icon: Gauge, color: "bg-purple-50", iconColor: "text-purple-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4 bg-white p-4 rounded-2xl shadow-sm">
          <Link to="/" className="btn btn-ghost gap-2 text-green-700 hover:text-green-800 hover:bg-green-50 rounded-xl transition-all">
            <ArrowLeft size={18} />
            Back to Home
          </Link>
          <div className="flex gap-2">
            <Link to="/allplants" className="btn btn-outline gap-2 text-green-700 border-green-200 hover:bg-green-50 rounded-xl transition-all">
              <Leaf size={18} />
              All Plants
            </Link>
            <button 
              className={`btn gap-2 rounded-xl transition-all ${isFavorite ? 'bg-pink-100 text-pink-700 hover:bg-pink-200' : 'bg-green-600 text-white hover:bg-green-700'}`}
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <Heart size={18} fill={isFavorite ? "currentColor" : "none"} />
              {isFavorite ? 'Added to Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Plant Image */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div 
              className="h-80 bg-cover bg-center rounded-t-2xl relative"
              style={{ backgroundImage: `url(${photo})` }}
            >
              <div className="absolute top-4 right-4">
                <span className={`badge gap-1 px-3 py-2 rounded-full ${helthstatus === 'Healthy' || helthstatus === 'Good' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
                  <Heart size={16} /> {helthstatus}
                </span>
              </div>
            </div>
            
            {/* Environment Stats */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Zap size={20} className="text-green-600" />
                Ideal Environment
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {environmentData.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className={`flex items-center gap-3 p-3 ${item.color} rounded-xl`}>
                      <div className="p-2 bg-white rounded-lg shadow-sm">
                        <Icon size={20} className={item.iconColor} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{item.title}</p>
                        <p className="font-semibold">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Plant Info */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{plantname}</h1>
                <div className="flex items-center gap-2 mt-1">
                  <Sprout size={16} className="text-green-600" />
                  <p className="text-green-600 font-medium">{category}</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="badge badge-lg bg-green-50 text-green-700 gap-1 border-0 px-3 py-2 rounded-xl">
                <Info size={16} /> {plantInfo}
              </span>
              <span className="badge badge-lg bg-blue-50 text-blue-700 gap-1 border-0 px-3 py-2 rounded-xl">
                <CalendarDays size={16} /> Next water: {nextWaterDate}
              </span>
            </div>

            {/* Tabs */}
            <div className="tabs tabs-boxed bg-gray-100 p-1 mb-6 rounded-xl">
              <button 
                className={`tab tab-lg rounded-lg transition-all ${activeTab === 'details' ? 'tab-active bg-white shadow-sm font-semibold' : ''}`}
                onClick={() => setActiveTab('details')}
              >
                Details
              </button>
              <button 
                className={`tab tab-lg rounded-lg transition-all ${activeTab === 'care' ? 'tab-active bg-white shadow-sm font-semibold' : ''}`}
                onClick={() => setActiveTab('care')}
              >
                Care Schedule
              </button>
              <button 
                className={`tab tab-lg rounded-lg transition-all ${activeTab === 'history' ? 'tab-active bg-white shadow-sm font-semibold' : ''}`}
                onClick={() => setActiveTab('history')}
              >
                History
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'details' ? (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">About This Plant</h3>
                <p className="text-gray-600 leading-relaxed">{textArea}</p>
                
                <div className="mt-6">
                  <h4 className="text-lg font-medium text-gray-800 mb-3">Plant Characteristics</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-500">Scientific Name</span>
                      <span className="font-medium text-right">{plantDetails.scientificName}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-500">Family</span>
                      <span className="font-medium text-right">{plantDetails.family}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-500">Origin</span>
                      <span className="font-medium text-right">{plantDetails.origin}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-500">Toxicity</span>
                      <span className="font-medium text-right">{plantDetails.toxicity}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-500">Growth Rate</span>
                      <span className="font-medium text-right">{plantDetails.growthRate}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-500">Care Difficulty</span>
                      <span className="font-medium text-right">{plantDetails.difficulty}</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : activeTab === 'care' ? (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Care Schedule</h3>
                <div className="space-y-3">
                  {careSchedule.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl transition-all hover:bg-green-50">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-white rounded-lg shadow-sm">
                            <Icon size={20} className="text-green-600" />
                          </div>
                          <div>
                            <p className="font-medium">{item.task}</p>
                            <p className="text-sm text-gray-500">{item.frequency}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">Next due</p>
                          <p className="font-medium">{item.nextDue}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <div className="mt-6">
                  <button 
                    className="flex items-center justify-between w-full p-4 bg-green-50 rounded-xl text-green-700 font-medium transition-all hover:bg-green-100"
                    onClick={() => setShowCareGuide(!showCareGuide)}
                  >
                    <span>Complete Care Guide</span>
                    {showCareGuide ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  
                  {showCareGuide && (
                    <div className="mt-3 p-4 bg-white rounded-xl shadow-sm border animate-fadeIn">
                      <h4 className="font-medium mb-2 text-green-700">Watering</h4>
                      <p className="text-sm text-gray-600 mb-3">Water when the top inch of soil feels dry. Ensure proper drainage to prevent root rot.</p>
                      
                      <h4 className="font-medium mb-2 text-green-700">Light Requirements</h4>
                      <p className="text-sm text-gray-600 mb-3">Thrives in bright, indirect light. Can tolerate some direct morning sun but avoid harsh afternoon sun.</p>
                      
                      <h4 className="font-medium mb-2 text-green-700">Fertilizing</h4>
                      <p className="text-sm text-gray-600">Use a balanced liquid fertilizer diluted to half strength every 4-6 weeks during the growing season.</p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Plant History</h3>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <Calendar className="mx-auto text-gray-400 mb-2" size={32} />
                  <p className="text-gray-500">No history recorded yet</p>
                  <button className="mt-3 btn btn-outline btn-sm text-green-700 border-green-200 hover:bg-green-50 rounded-xl">
                    Add First Entry
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Watering Reminder */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <Clock className="text-blue-600" size={24} />
            <h3 className="text-xl font-semibold text-blue-900">Watering Reminder</h3>
          </div>
          <p className="text-blue-700 mb-4">Your <span className="font-bold">{plantname}</span> is scheduled to be watered on <span className="font-bold">{nextWaterDate}</span>. Would you like to set a reminder?</p>
          <div className="flex gap-3">
            <button className="btn bg-blue-600 text-white hover:bg-blue-700 gap-2 rounded-xl transition-all">
              <Clock size={18} />
              Set Reminder
            </button>
            <button className="btn btn-ghost text-blue-600 rounded-xl">Skip This Time</button>
            <button className="btn btn-ghost text-blue-600 rounded-xl ml-auto">
              <Calendar size={18} />
              View Calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;