
import { Search, Bell, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  return (
    <>
      {/* Particles Background */}
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 cyber-glass border-b border-cyber-cyan/30 cyber-scanlines">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="cyber-float">
                <h1 className="text-2xl md:text-3xl font-orbitron font-black cyber-gradient-text neon-flicker">
                  NEXUS<span className="text-cyber-magenta">.</span>STREAM
                </h1>
              </div>
              
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex space-x-8 ml-12">
                {[
                  { name: "NEURAL CORE", href: "#", glow: "cyan" },
                  { name: "CYBER SERIES", href: "#", glow: "magenta" },
                  { name: "QUANTUM FILMS", href: "#", glow: "purple" },
                  { name: "MATRIX ORIGINALS", href: "#", glow: "green" },
                  { name: "UNDERGROUND", href: "#", glow: "cyan" }
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`font-electrolize font-medium text-sm tracking-wider relative group transition-all duration-300 hover:text-cyber-${item.glow}`}
                  >
                    {item.name}
                    <div className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-${item.glow} transition-all duration-300 group-hover:w-full cyber-glow-${item.glow}`} />
                    <div className={`absolute inset-0 bg-cyber-${item.glow}/10 scale-0 group-hover:scale-100 transition-transform duration-300 blur-sm`} />
                  </a>
                ))}
              </nav>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className={`relative transition-all duration-300 ${isSearchActive ? 'w-64' : 'w-auto'}`}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="cyber-glass border border-cyber-cyan/50 text-cyber-cyan hover:bg-cyber-cyan/20 hover:border-cyber-cyan cyber-glow-cyan transition-all duration-300"
                  onClick={() => setIsSearchActive(!isSearchActive)}
                >
                  <Search className="h-5 w-5" />
                </Button>
                {isSearchActive && (
                  <input
                    type="text"
                    placeholder="Search neural networks..."
                    className="absolute right-0 top-0 w-64 h-full bg-cyber-dark/90 border border-cyber-cyan/50 rounded-md px-12 text-cyber-cyan placeholder-cyber-cyan/50 font-electrolize text-sm focus:outline-none focus:border-cyber-cyan cyber-glow-cyan"
                    autoFocus
                  />
                )}
              </div>

              {/* Notifications */}
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="cyber-glass border border-cyber-magenta/50 text-cyber-magenta hover:bg-cyber-magenta/20 hover:border-cyber-magenta cyber-glow-magenta transition-all duration-300"
                >
                  <Bell className="h-5 w-5" />
                </Button>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyber-orange rounded-full animate-pulse" />
              </div>

              {/* Profile */}
              <Button
                variant="ghost"
                size="icon"
                className="cyber-glass border border-cyber-purple/50 text-cyber-purple hover:bg-cyber-purple/20 hover:border-cyber-purple cyber-glow-purple transition-all duration-300 cyber-hexagon"
              >
                <User className="h-5 w-5" />
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden cyber-glass border border-cyber-green/50 text-cyber-green hover:bg-cyber-green/20"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-6 pb-4 border-t border-cyber-cyan/30">
              <div className="grid grid-cols-1 gap-4 mt-4">
                {[
                  { name: "NEURAL CORE", href: "#", color: "cyan" },
                  { name: "CYBER SERIES", href: "#", color: "magenta" },
                  { name: "QUANTUM FILMS", href: "#", color: "purple" },
                  { name: "MATRIX ORIGINALS", href: "#", color: "green" },
                  { name: "UNDERGROUND", href: "#", color: "cyan" }
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`font-electrolize font-medium text-cyber-${item.color} hover:text-glow-${item.color} transition-all duration-300 p-3 rounded border border-cyber-${item.color}/30 hover:border-cyber-${item.color}/80 cyber-glass`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>
          )}
        </div>

        {/* HUD Elements */}
        <div className="absolute top-2 right-20 text-xs font-electrolize text-cyber-cyan/60">
          <div>SYS: ONLINE</div>
          <div>NET: 99.9%</div>
        </div>
        
        <div className="absolute bottom-2 left-4 text-xs font-electrolize text-cyber-magenta/60">
          <div>{new Date().toLocaleDateString()} | {new Date().toLocaleTimeString()}</div>
        </div>
      </header>
    </>
  );
};

export default Header;
