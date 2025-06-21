import Header from "../components/Header";
import Hero from "../components/Hero";
import ContentRow from "../components/ContentRow";
import { Terminal, Cpu, Globe, Shield } from "lucide-react";

const Index = () => {
  const neuralNetworks = [
    { 
      id: 1, 
      title: "Neural Echo", 
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop", 
      type: "movie" as const,
      neuralRating: 9.7,
      year: "2024",
      isNew: true
    },
    { 
      id: 2, 
      title: "Digital Uprising", 
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop", 
      type: "series" as const,
      neuralRating: 9.2,
      year: "2024",
      episodes: 12,
      isNew: true
    },
    { 
      id: 3, 
      title: "Ghost Protocol", 
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop", 
      type: "movie" as const,
      neuralRating: 8.9,
      year: "2023"
    },
    { 
      id: 4, 
      title: "Cyber Dreams", 
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop", 
      type: "series" as const,
      neuralRating: 9.5,
      year: "2024",
      episodes: 8
    },
    { 
      id: 5, 
      title: "Matrix Reborn", 
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=400&h=300&fit=crop", 
      type: "movie" as const,
      neuralRating: 8.7,
      year: "2023"
    },
    { 
      id: 6, 
      title: "Data Stream", 
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop", 
      type: "series" as const,
      neuralRating: 9.1,
      year: "2024",
      episodes: 10
    },
  ];

  const cyberChronicles = [
    { 
      id: 7, 
      title: "Neon Runner", 
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop", 
      type: "movie" as const,
      neuralRating: 8.8,
      year: "2024"
    },
    { 
      id: 8, 
      title: "Quantum Break", 
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop", 
      type: "movie" as const,
      neuralRating: 9.0,
      year: "2023"
    },
    { 
      id: 9, 
      title: "Virtual Mind", 
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop", 
      type: "movie" as const,
      neuralRating: 8.6,
      year: "2024",
      isNew: true
    },
    { 
      id: 10, 
      title: "Code Black", 
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop", 
      type: "movie" as const,
      neuralRating: 9.3,
      year: "2024"
    },
    { 
      id: 11, 
      title: "Syn City", 
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop", 
      type: "movie" as const,
      neuralRating: 8.5,
      year: "2023"
    },
    { 
      id: 12, 
      title: "Future Shock", 
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop", 
      type: "movie" as const,
      neuralRating: 8.9,
      year: "2024"
    },
  ];

  const matrixOriginals = [
    { 
      id: 13, 
      title: "Zero Day Protocol", 
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop", 
      type: "series" as const,
      neuralRating: 9.8,
      year: "2024",
      episodes: 6,
      isNew: true
    },
    { 
      id: 14, 
      title: "Neural Pathways", 
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop", 
      type: "series" as const,
      neuralRating: 9.4,
      year: "2024",
      episodes: 10
    },
    { 
      id: 15, 
      title: "Hacker's Paradise", 
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop", 
      type: "series" as const,
      neuralRating: 9.1,
      year: "2023",
      episodes: 12
    },
    { 
      id: 16, 
      title: "Digital Consciousness", 
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop", 
      type: "series" as const,
      neuralRating: 9.6,
      year: "2024",
      episodes: 8,
      isNew: true
    },
    { 
      id: 17, 
      title: "Chrome Hearts", 
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop", 
      type: "series" as const,
      neuralRating: 8.8,
      year: "2023",
      episodes: 14
    },
    { 
      id: 18, 
      title: "System Override", 
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop", 
      type: "series" as const,
      neuralRating: 9.2,
      year: "2024",
      episodes: 7
    },
  ];

  const undergroundStream = [
    { 
      id: 19, 
      title: "Darknet", 
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop", 
      type: "series" as const,
      neuralRating: 9.0,
      year: "2024",
      episodes: 5,
      isNew: true
    },
    { 
      id: 20, 
      title: "Analog Heart", 
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop", 
      type: "movie" as const,
      neuralRating: 8.7,
      year: "2024"
    },
    { 
      id: 21, 
      title: "Signal Lost", 
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop", 
      type: "movie" as const,
      neuralRating: 8.9,
      year: "2023"
    },
    { 
      id: 22, 
      title: "Binary Souls", 
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop", 
      type: "series" as const,
      neuralRating: 9.3,
      year: "2024",
      episodes: 9
    },
  ];

  return (
    <div className="min-h-screen bg-cyber-black relative overflow-hidden">
      {/* Background Matrix Effect */}
      <div className="fixed inset-0 matrix-rain opacity-5 pointer-events-none" />
      
      <Header />
      <Hero />
      
      <div className="relative z-10 -mt-32">
        <ContentRow 
          title="NEURAL_NETWORKS" 
          subtitle="Experiências conectadas à consciência digital"
          items={neuralNetworks} 
          accentColor="cyan"
        />
        
        <ContentRow 
          title="CYBER_CHRONICLES" 
          subtitle="Filmes que redefinem a realidade"
          items={cyberChronicles} 
          accentColor="magenta"
        />
        
        <ContentRow 
          title="MATRIX_ORIGINALS" 
          subtitle="Produções exclusivas do futuro"
          items={matrixOriginals} 
          accentColor="green"
        />
        
        <ContentRow 
          title="UNDERGROUND_STREAM" 
          subtitle="Conteúdo alternativo da dark web"
          items={undergroundStream} 
          accentColor="purple"
        />
      </div>
      
      {/* Cyberpunk Footer */}
      <footer className="relative bg-cyber-dark/90 border-t border-cyber-cyan/30 mt-24 overflow-hidden">
        {/* Background Grid */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(var(--cyber-cyan) 1px, transparent 1px),
              linear-gradient(90deg, var(--cyber-cyan) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }}
        />
        
        <div className="relative container mx-auto px-4 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            
            {/* Brand Section */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-3xl font-orbitron font-black cyber-gradient-text mb-4">
                  NEXUS<span className="text-cyber-magenta">.</span>STREAM
                </h3>
                <p className="text-cyber-cyan/80 font-rajdhani text-lg leading-relaxed">
                  Portal neural de entretenimento conectando consciências através de 
                  <span className="text-cyber-magenta"> experiências digitais imersivas</span>. 
                  Entre na matrix do futuro do streaming.
                </p>
              </div>
              
              {/* Status Display */}
              <div className="cyber-glass p-4 border border-cyber-cyan/30 rounded-lg">
                <div className="grid grid-cols-2 gap-4 font-electrolize text-sm">
                  <div className="flex items-center space-x-2">
                    <Cpu className="w-4 h-4 text-cyber-green" />
                    <span className="text-cyber-cyan/60">NEURAL_STATUS:</span>
                    <span className="text-cyber-green font-bold">ONLINE</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 text-cyber-blue" />
                    <span className="text-cyber-cyan/60">NETWORK:</span>
                    <span className="text-cyber-blue font-bold">GLOBAL</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-cyber-purple" />
                    <span className="text-cyber-cyan/60">SECURITY:</span>
                    <span className="text-cyber-purple font-bold">QUANTUM</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Terminal className="w-4 h-4 text-cyber-orange" />
                    <span className="text-cyber-cyan/60">UPTIME:</span>
                    <span className="text-cyber-orange font-bold">99.98%</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Access */}
            <div className="space-y-4">
              <h4 className="font-orbitron font-bold text-cyber-cyan text-lg">
                QUICK_ACCESS
              </h4>
              <div className="space-y-3 font-electrolize">
                {[
                  { name: "NEURAL_CORE", href: "#" },
                  { name: "CYBER_SERIES", href: "#" },
                  { name: "QUANTUM_FILMS", href: "#" },
                  { name: "MATRIX_ORIGINALS", href: "#" },
                  { name: "UNDERGROUND", href: "#" }
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-cyber-cyan/70 hover:text-cyber-cyan transition-colors duration-300 text-sm tracking-wider"
                  >
                    {'>'}&gt; {link.name}
                  </a>
                ))}
              </div>
            </div>
            
            {/* System Info */}
            <div className="space-y-4">
              <h4 className="font-orbitron font-bold text-cyber-magenta text-lg">
                SYSTEM_INFO
              </h4>
              <div className="space-y-3 font-electrolize text-sm">
                <div className="text-cyber-cyan/70">
                  <div className="text-cyber-cyan">VERSION:</div>
                  <div>NEXUS_V2.4.7</div>
                </div>
                <div className="text-cyber-cyan/70">
                  <div className="text-cyber-cyan">BUILD:</div>
                  <div>2024.12.21_NEURAL</div>
                </div>
                <div className="text-cyber-cyan/70">
                  <div className="text-cyber-cyan">PROTOCOL:</div>
                  <div>HTTPS_QUANTUM</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-cyber-cyan/30 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="font-electrolize text-cyber-cyan/60 text-sm">
                © 2024 NEXUS_STREAM_CORP. All neural rights reserved.
              </div>
              
              <div className="flex space-x-6 text-sm font-electrolize">
                {[
                  "TERMS_OF_SERVICE",
                  "PRIVACY_POLICY", 
                  "NEURAL_CONTACT",
                  "SYSTEM_HELP"
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-cyber-cyan/60 hover:text-cyber-cyan transition-colors duration-300"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Effects */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-cyber-gradient-main opacity-50" />
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-cyber-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-24 h-24 bg-cyber-magenta/5 rounded-full blur-2xl" />
      </footer>
    </div>
  );
};

export default Index;
