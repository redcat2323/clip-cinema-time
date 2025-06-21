
import { Play, Plus, Star, Zap } from "lucide-react";
import { useState } from "react";

interface ContentCardProps {
  title: string;
  image: string;
  type?: 'movie' | 'series';
  neuralRating?: number;
  year?: string;
  episodes?: number;
  isNew?: boolean;
}

const ContentCard = ({ 
  title, 
  image, 
  type = 'movie', 
  neuralRating = 8.5, 
  year = "2024",
  episodes,
  isNew = false 
}: ContentCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);

  const handleGlitch = () => {
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 300);
  };

  return (
    <div 
      className="group cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleGlitch}
    >
      {/* Main Card */}
      <div className={`
        relative rounded-lg overflow-hidden bg-cyber-dark transition-all duration-500 ease-out
        ${isHovered ? 'transform scale-105 z-20' : 'transform scale-100'}
        ${isGlitching ? 'cyber-glitch' : ''}
      `}>
        
        {/* Image */}
        <div className="relative">
          <img 
            src={image} 
            alt={title}
            className="w-full h-40 md:h-48 object-cover transition-all duration-500"
          />
          
          {/* Cyber Overlay */}
          <div className={`
            absolute inset-0 transition-all duration-500
            ${isHovered ? 'bg-cyber-gradient-main/20' : 'bg-black/20'}
          `} />
          
          {/* Scan Lines */}
          <div className="absolute inset-0 cyber-scanlines opacity-30" />
          
          {/* Corner Brackets */}
          <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-cyber-cyan" />
          <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-cyber-cyan" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-cyber-cyan" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-cyber-cyan" />
          
          {/* Type Badge */}
          <div className="absolute top-3 right-3">
            <span className={`
              px-2 py-1 text-xs font-electrolize font-bold tracking-wider cyber-glass border rounded
              ${type === 'series' 
                ? 'border-cyber-magenta text-cyber-magenta' 
                : 'border-cyber-cyan text-cyber-cyan'
              }
            `}>
              {type === 'series' ? 'SERIES' : 'FILM'}
            </span>
          </div>
          
          {/* New Badge */}
          {isNew && (
            <div className="absolute top-3 left-3">
              <span className="px-2 py-1 text-xs font-electrolize font-bold tracking-wider bg-cyber-orange text-cyber-black rounded cyber-pulse">
                NEW
              </span>
            </div>
          )}
          
          {/* Hover Play Button */}
          <div className={`
            absolute inset-0 flex items-center justify-center transition-all duration-300
            ${isHovered ? 'opacity-100' : 'opacity-0'}
          `}>
            <div className="cyber-glass p-4 rounded-full border-2 border-cyber-cyan cyber-glow-cyan">
              <Play className="w-8 h-8 text-cyber-cyan fill-current" />
            </div>
          </div>
        </div>
        
        {/* Info Section */}
        <div className={`
          p-4 space-y-3 transition-all duration-500
          ${isHovered ? 'bg-cyber-gradient-main/10 border-t border-cyber-cyan/50' : 'bg-cyber-dark/90'}
        `}>
          
          {/* Title */}
          <h3 className="text-cyber-cyan font-orbitron font-bold text-sm md:text-base tracking-wide">
            {title}
          </h3>
          
          {/* Metadata */}
          <div className="flex items-center justify-between text-xs font-electrolize">
            <div className="space-y-1">
              <div className="text-cyber-cyan/80">{year}</div>
              {episodes && (
                <div className="text-cyber-magenta">{episodes} eps</div>
              )}
            </div>
            
            {/* Neural Rating */}
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-cyber-orange fill-current" />
              <span className="text-cyber-orange font-bold">{neuralRating}</span>
            </div>
          </div>
          
          {/* Actions (shown on hover) */}
          <div className={`
            flex items-center justify-between transition-all duration-300
            ${isHovered ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}
          `}>
            <div className="flex space-x-2">
              <button className="cyber-glass p-2 border border-cyber-cyan/50 rounded hover:border-cyber-cyan hover:bg-cyber-cyan/20 transition-all">
                <Plus className="w-4 h-4 text-cyber-cyan" />
              </button>
              <button className="cyber-glass p-2 border border-cyber-magenta/50 rounded hover:border-cyber-magenta hover:bg-cyber-magenta/20 transition-all">
                <Zap className="w-4 h-4 text-cyber-magenta" />
              </button>
            </div>
            
            <div className="text-xs font-electrolize text-cyber-green">
              NEURAL_MATCH: {Math.floor(neuralRating * 10)}%
            </div>
          </div>
        </div>
        
        {/* Glowing Border on Hover */}
        <div className={`
          absolute inset-0 rounded-lg transition-all duration-500 pointer-events-none
          ${isHovered ? 'border-2 border-cyber-cyan cyber-glow-cyan' : 'border border-cyber-cyan/20'}
        `} />
      </div>
    </div>
  );
};

export default ContentCard;
