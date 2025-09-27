import React, { useState, useEffect } from 'react';
import { Gift, ExternalLink } from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 12,
    minutes: 30,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleEnterGiveaway = () => {
    window.location.href = 'https://smrturl.co/a/s1b87bbe0c2/556?s1=';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-400 rounded-lg rotate-12 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-12 h-12 bg-green-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-blue-400 rounded-lg rotate-45 animate-pulse"></div>
        <div className="absolute bottom-20 right-32 w-14 h-14 bg-purple-400 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-10 h-10 bg-orange-400 rounded-lg rotate-12 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-pink-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/3 left-1/2 w-12 h-12 bg-cyan-400 rounded-lg rotate-45 animate-pulse"></div>
        <div className="absolute top-20 left-1/2 w-6 h-6 bg-red-400 rounded-full animate-bounce"></div>
      </div>
      
      <div className="max-w-4xl w-full text-center relative z-10">
        {/* Roblox Images */}
        <div className="flex justify-center items-center gap-8 mb-8 flex-wrap">
          <img 
            src="https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" 
            alt="Gaming" 
            className="w-24 h-24 rounded-full border-4 border-yellow-400 shadow-lg hover:scale-110 transition-transform duration-300"
          />
          <img 
            src="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" 
            alt="Gaming Controller" 
            className="w-32 h-32 rounded-full border-4 border-green-400 shadow-lg hover:scale-110 transition-transform duration-300"
          />
          <img 
            src="https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" 
            alt="Gaming Setup" 
            className="w-24 h-24 rounded-full border-4 border-blue-400 shadow-lg hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Main Content */}
        <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-2xl">
          {/* Limited Time Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full font-bold text-lg mb-8 animate-pulse">
            🔥 LIMITED TIME GIVEAWAY 🔥
          </div>
          
          {/* Main Title */}
          <h1 className="text-8xl md:text-9xl font-extrabold mb-6 bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
            $50
          </h1>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 drop-shadow-lg">
            ROBLOX GIVEAWAY
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            🎮 Win $50 worth of Robux! Get premium items, game passes, and exclusive content. 
            <br />
            <span className="text-yellow-300 font-semibold">Enter now for FREE!</span>
          </p>

          {/* Countdown Timer */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center gap-3">
              ⏰ Giveaway Ends In
            </h3>
            
            <div className="flex justify-center gap-4 flex-wrap mb-8">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-4 min-w-[80px] border border-gray-600 shadow-lg">
                  <div className="text-3xl font-bold text-yellow-400">{value.toString().padStart(2, '0')}</div>
                  <div className="text-gray-300 uppercase text-xs mt-1">{unit}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Single CTA Button */}
          <button
            onClick={handleEnterGiveaway}
            className="group relative bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:via-green-600 hover:to-green-700 text-white font-bold py-6 px-12 rounded-full text-2xl md:text-3xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl flex items-center gap-4 mx-auto border-4 border-white/20 hover:border-white/40"
          >
            <Gift className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
            ENTER GIVEAWAY NOW
            <ExternalLink className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            
            {/* Button glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
          </button>
          
          {/* Quick Info */}
          <div className="mt-8 text-gray-300 text-lg">
            ✨ <span className="text-green-400 font-semibold">100% Free Entry</span> • 
            🎯 <span className="text-blue-400 font-semibold">Fair Drawing</span> • 
            🏆 <span className="text-yellow-400 font-semibold">Instant Notification</span>
          </div>

          {/* Gaming Images Row */}
          <div className="flex justify-center items-center gap-6 mt-12 flex-wrap opacity-80">
            <img 
              src="https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg?auto=compress&cs=tinysrgb&w=150&h=100&fit=crop" 
              alt="Gaming" 
              className="w-20 h-14 rounded-lg border-2 border-purple-400 shadow-md hover:scale-105 transition-transform"
            />
            <img 
              src="https://images.pexels.com/photos/194511/pexels-photo-194511.jpeg?auto=compress&cs=tinysrgb&w=150&h=100&fit=crop" 
              alt="Gaming Controller" 
              className="w-20 h-14 rounded-lg border-2 border-blue-400 shadow-md hover:scale-105 transition-transform"
            />
            <img 
              src="https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=150&h=100&fit=crop" 
              alt="Gaming Setup" 
              className="w-20 h-14 rounded-lg border-2 border-green-400 shadow-md hover:scale-105 transition-transform"
            />
            <img 
              src="https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress&cs=tinysrgb&w=150&h=100&fit=crop" 
              alt="Gaming" 
              className="w-20 h-14 rounded-lg border-2 border-yellow-400 shadow-md hover:scale-105 transition-transform"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-gray-400 text-sm max-w-2xl mx-auto">
          <p>🎮 One entry per person • 13+ years old • Winner contacted via email</p>
          <p className="mt-2">This giveaway is not sponsored by or affiliated with Roblox Corporation</p>
        </div>
      </div>
    </div>
  );
}

export default App;