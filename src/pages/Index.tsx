
import Header from "../components/Header";
import Hero from "../components/Hero";
import ContentRow from "../components/ContentRow";

const Index = () => {
  const trendingContent = [
    { id: 1, title: "The Witcher", image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop", type: "series" as const },
    { id: 2, title: "Ozark", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop", type: "series" as const },
    { id: 3, title: "House of Cards", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop", type: "series" as const },
    { id: 4, title: "Black Mirror", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop", type: "series" as const },
    { id: 5, title: "Narcos", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop", type: "series" as const },
    { id: 6, title: "Money Heist", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop", type: "series" as const },
  ];

  const moviesContent = [
    { id: 7, title: "Extraction", image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop", type: "movie" as const },
    { id: 8, title: "The Irishman", image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop", type: "movie" as const },
    { id: 9, title: "Bird Box", image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop", type: "movie" as const },
    { id: 10, title: "Roma", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop", type: "movie" as const },
    { id: 11, title: "The Platform", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop", type: "movie" as const },
    { id: 12, title: "Okja", image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop", type: "movie" as const },
  ];

  const originalContent = [
    { id: 13, title: "Orange is the New Black", image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop", type: "series" as const },
    { id: 14, title: "Mindhunter", image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop", type: "series" as const },
    { id: 15, title: "Dark", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop", type: "series" as const },
    { id: 16, title: "The Crown", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop", type: "series" as const },
    { id: 17, title: "Russian Doll", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop", type: "series" as const },
    { id: 18, title: "The Umbrella Academy", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop", type: "series" as const },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      
      <div className="relative z-10 -mt-32">
        <ContentRow title="Em alta" items={trendingContent} />
        <ContentRow title="Filmes populares" items={moviesContent} />
        <ContentRow title="Originais Netflix" items={originalContent} />
      </div>
      
      <footer className="bg-gray-900 py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold netflix-gradient bg-clip-text text-transparent mb-4">
            STREAMFLIX
          </h3>
          <p className="text-gray-400 mb-4">
            Sua plataforma de streaming favorita
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Contato</a>
            <a href="#" className="hover:text-white transition-colors">Ajuda</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
