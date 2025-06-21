
import { Play, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-start">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1920&h=1080&fit=crop')"
        }}
      />
      <div className="absolute inset-0 hero-gradient" />
      
      <div className="relative z-10 container mx-auto px-4 max-w-2xl">
        <div className="fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            Stranger Things
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
            Quando um garoto desaparece, uma pequena cidade descobre um mistério 
            envolvendo experimentos secretos, forças sobrenaturais e uma garota muito estranha.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button className="bg-white text-black hover:bg-gray-200 flex items-center gap-2 px-8 py-3 text-lg font-semibold">
              <Play className="h-6 w-6 fill-current" />
              Assistir
            </Button>
            <Button variant="secondary" className="bg-gray-600/80 text-white hover:bg-gray-500/80 flex items-center gap-2 px-8 py-3 text-lg backdrop-blur-sm">
              <Info className="h-6 w-6" />
              Mais informações
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
