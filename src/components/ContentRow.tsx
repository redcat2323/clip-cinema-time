
import ContentCard from "./ContentCard";
import { ChevronLeft, ChevronRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ContentItem {
  id: number;
  title: string;
  image: string;
  type: 'movie' | 'series';
  neuralRating?: number;
  year?: string;
  episodes?: number;
  isNew?: boolean;
}

interface ContentRowProps {
  title: string;
  subtitle?: string;
  items: ContentItem[];
  accentColor?: 'cyan' | 'magenta' | 'purple' | 'green' | 'orange';
}

const ContentRow = ({ 
  title, 
  subtitle, 
  items, 
  accentColor = 'cyan' 
}: ContentRowProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    const container = document.getElementById(`scroll-${title}`);
    if (container) {
      const scrollAmount = 300;
      if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
        setScrollPosition(container.scrollLeft - scrollAmount);
      } else {
        container.scrollLeft += scrollAmount;
        setScrollPosition(container.scrollLeft + scrollAmount);
      }
    }
  };

  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-2">
            <div className="flex items-center space-x-4">
              <h2 className={`text-3xl md:text-4xl font-orbitron font-black text-cyber-${accentColor} text-glow-${accentColor}`}>
                {title}
              </h2>
              <Zap className={`w-6 h-6 text-cyber-${accentColor} cyber-pulse`} />
            </div>
            {subtitle && (
              <p className="text-cyber-cyan/70 font-electrolize text-sm tracking-wider">
                {subtitle}
              </p>
            )}
            
            {/* Decorative Line */}
            <div className="flex items-center space-x-4 mt-4">
              <div className={`h-px bg-cyber-${accentColor} w-24 cyber-glow-${accentColor}`} />
              <div className={`w-2 h-2 bg-cyber-${accentColor} rounded-full cyber-glow-${accentColor}`} />
              <div className={`h-px bg-cyber-${accentColor}/50 w-16`} />
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <div className="hidden md:flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('left')}
              className={`cyber-glass border-cyber-${accentColor}/50 text-cyber-${accentColor} hover:bg-cyber-${accentColor}/20 hover:border-cyber-${accentColor} transition-all duration-300`}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('right')}
              className={`cyber-glass border-cyber-${accentColor}/50 text-cyber-${accentColor} hover:bg-cyber-${accentColor}/20 hover:border-cyber-${accentColor} transition-all duration-300`}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="relative">
          {/* Desktop Scrollable Row */}
          <div 
            id={`scroll-${title}`}
            className="hidden md:flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {items.map((item, index) => (
              <div 
                key={item.id} 
                className="flex-shrink-0 w-64"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <ContentCard
                  title={item.title}
                  image={item.image}
                  type={item.type}
                  neuralRating={item.neuralRating}
                  year={item.year}
                  episodes={item.episodes}
                  isNew={item.isNew}
                />
              </div>
            ))}
          </div>

          {/* Mobile Grid */}
          <div className="md:hidden grid grid-cols-2 gap-4">
            {items.slice(0, 6).map((item, index) => (
              <div 
                key={item.id}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <ContentCard
                  title={item.title}
                  image={item.image}
                  type={item.type}
                  neuralRating={item.neuralRating}
                  year={item.year}
                  episodes={item.episodes}
                  isNew={item.isNew}
                />
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-8">
          <Button
            variant="outline"
            className={`cyber-glass border-cyber-${accentColor}/50 text-cyber-${accentColor} hover:bg-cyber-${accentColor}/20 hover:border-cyber-${accentColor} font-electrolize tracking-wider px-8 py-3 transition-all duration-300`}
          >
            ACCESS_ALL_DATA
          </Button>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-1/2 right-0 w-32 h-32 bg-cyber-${accentColor}/5 rounded-full blur-3xl`} />
        <div className={`absolute bottom-0 left-1/4 w-24 h-24 bg-cyber-${accentColor}/10 rounded-full blur-2xl`} />
      </div>
    </section>
  );
};

export default ContentRow;
