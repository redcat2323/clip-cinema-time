
import { Play, Info, Zap, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [glitchActive, setGlitchActive] = useState(false);
  const [neuraltActivity, setNeuralActivity] = useState(0);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 8000);

    const neuralInterval = setInterval(() => {
      setNeuralActivity(Math.random() * 100);
    }, 2000);

    return () => {
      clearInterval(glitchInterval);
      clearInterval(neuralInterval);
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-start overflow-hidden">
      {/* Cyberpunk Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop')"
        }}
      />
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 matrix-rain opacity-20" />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-black via-cyber-black/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-cyber-black/60" />
      
      {/* Cyberpunk Grid */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(var(--cyber-cyan) 1px, transparent 1px),
            linear-gradient(90deg, var(--cyber-cyan) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* HUD Elements */}
      <div className="absolute top-24 right-8 z-20">
        <div className="cyber-glass p-4 border border-cyber-cyan/30 rounded-lg">
          <div className="font-electrolize text-xs text-cyber-cyan space-y-1">
            <div className="flex justify-between">
              <span>NEURAL_SYNC:</span>
              <span className="text-cyber-green">{neuraltActivity.toFixed(1)}%</span>
            </div>
            <div className="flex justify-between">
              <span>STATUS:</span>
              <span className="text-cyber-magenta">ACTIVE</span>
            </div>
            <div className="flex justify-between">
              <span>VIEWERS:</span>
              <span className="text-cyber-orange">2.847.291</span>
            </div>
            <div className="w-full h-1 bg-cyber-dark rounded">
              <div 
                className="h-full bg-cyber-gradient-main rounded transition-all duration-1000"
                style={{ width: `${neuraltActivity}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating UI Elements */}
      <div className="absolute top-1/3 right-1/4 cyber-float">
        <div className="cyber-hexagon w-16 h-16 bg-cyber-cyan/20 border-2 border-cyber-cyan cyber-glow-cyan" />
      </div>
      
      <div className="absolute bottom-1/3 right-1/3 cyber-float" style={{ animationDelay: '2s' }}>
        <div className="cyber-octagon w-12 h-12 bg-cyber-magenta/20 border-2 border-cyber-magenta cyber-glow-magenta" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 max-w-4xl">
        <div className="space-y-8">
          {/* Categories */}
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-cyber-cyan/20 border border-cyber-cyan text-cyber-cyan font-electrolize text-xs tracking-wider rounded">
              NEURAL_THRILLER
            </span>
            <span className="px-3 py-1 bg-cyber-magenta/20 border border-cyber-magenta text-cyber-magenta font-electrolize text-xs tracking-wider rounded">
              CYBERPUNK
            </span>
            <span className="px-3 py-1 bg-cyber-green/20 border border-cyber-green text-cyber-green font-electrolize text-xs tracking-wider rounded">
              MATRIX_ORIGINAL
            </span>
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h1 className={`text-6xl md:text-8xl font-orbitron font-black leading-tight ${glitchActive ? 'cyber-glitch' : ''}`}>
              <span className="cyber-gradient-text">NEURAL</span><br/>
              <span className="text-cyber-magenta text-glow-magenta">ECHO</span>
            </h1>
            
            {/* Rating and Info */}
            <div className="flex items-center space-x-6 text-sm font-electrolize">
              <div className="flex items-center space-x-2">
                <span className="text-cyber-green">NEURAL_RATING:</span>
                <span className="text-cyber-cyan font-bold">9.7/10</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-cyber-orange">YEAR:</span>
                <span className="text-cyber-cyan">2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-cyber-purple">DURATION:</span>
                <span className="text-cyber-cyan">127_MIN</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-cyber-cyan/90 leading-relaxed max-w-2xl font-rajdhani">
            Em um futuro próximo onde a realidade e o digital se fundem, uma hacker de elite descobre 
            uma conspiração que ameaça destruir a última fronteira da consciência humana. 
            <span className="text-cyber-magenta"> Conecte-se à matrix neural</span> e experimente 
            uma jornada que desafia os limites da percepção.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 items-center">
            <Button className="bg-cyber-gradient-main text-cyber-black hover:bg-cyber-cyan font-orbitron font-bold flex items-center gap-3 px-8 py-4 text-lg cyber-glow-cyan transition-all duration-300 hover-cyber-scale">
              <Play className="h-6 w-6 fill-current" />
              INICIAR_STREAM
            </Button>
            
            <Button 
              variant="outline" 
              className="border-2 border-cyber-magenta text-cyber-magenta hover:bg-cyber-magenta/20 font-orbitron font-bold flex items-center gap-3 px-8 py-4 text-lg cyber-glow-magenta transition-all duration-300 hover-cyber-scale cyber-glass"
            >
              <Info className="h-6 w-6" />
              DADOS_NEURAL
            </Button>

            <Button 
              variant="outline" 
              className="border-2 border-cyber-green text-cyber-green hover:bg-cyber-green/20 font-orbitron font-bold flex items-center gap-3 px-6 py-4 cyber-glow-green transition-all duration-300 hover-cyber-scale cyber-glass"
            >
              <Eye className="h-5 w-5" />
              PREVIEW_MODE
            </Button>
          </div>

          {/* Technical Specs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "RESOLUTION", value: "8K_NEURAL", color: "cyan" },
              { label: "AUDIO", value: "DOLBY_MATRIX", color: "magenta" },
              { label: "HDR", value: "QUANTUM_HDR", color: "green" },
              { label: "IMMERSION", value: "FULL_DIVE", color: "purple" }
            ].map((spec) => (
              <div key={spec.label} className="cyber-glass p-3 border border-cyber-cyan/30 rounded">
                <div className="font-electrolize text-xs">
                  <div className={`text-cyber-${spec.color} font-bold`}>{spec.label}</div>
                  <div className="text-cyber-cyan/80">{spec.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom HUD */}
      <div className="absolute bottom-8 left-8 right-8 z-20">
        <div className="flex justify-between items-end">
          <div className="cyber-glass p-3 border border-cyber-cyan/30 rounded font-electrolize text-xs">
            <div className="text-cyber-cyan/60">NEXT_IN_QUEUE:</div>
            <div className="text-cyber-magenta font-bold">DIGITAL_UPRISING</div>
          </div>
          
          <div className="flex space-x-4">
            <Zap className="w-6 h-6 text-cyber-orange cyber-pulse" />
            <div className="font-electrolize text-xs text-cyber-cyan/60">
              STREAMING_IN_PROGRESS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
