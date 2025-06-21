
import ContentCard from "./ContentCard";

interface ContentItem {
  id: number;
  title: string;
  image: string;
  type: 'movie' | 'series';
}

interface ContentRowProps {
  title: string;
  items: ContentItem[];
}

const ContentRow = ({ title, items }: ContentRowProps) => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {items.map((item) => (
            <ContentCard
              key={item.id}
              title={item.title}
              image={item.image}
              type={item.type}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentRow;
