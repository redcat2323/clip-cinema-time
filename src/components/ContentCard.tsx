
interface ContentCardProps {
  title: string;
  image: string;
  type?: 'movie' | 'series';
}

const ContentCard = ({ title, image, type = 'movie' }: ContentCardProps) => {
  return (
    <div className="card-hover cursor-pointer group">
      <div className="relative rounded-lg overflow-hidden bg-gray-900">
        <img 
          src={image} 
          alt={title}
          className="w-full h-40 md:h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
        
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
          <h3 className="text-white font-semibold text-sm md:text-base">{title}</h3>
          <span className="text-gray-300 text-xs capitalize">{type}</span>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
