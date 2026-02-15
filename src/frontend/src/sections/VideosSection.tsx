import VideosGallery from '../components/VideosGallery';
import DecoratedHeading from '../components/DecoratedHeading';

interface VideosSectionProps {
  themeVariant?: string;
}

export default function VideosSection({ themeVariant }: VideosSectionProps) {
  return (
    <section id="videos" className={`scroll-mt-20 mb-20 ${themeVariant || ''}`}>
      <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg">
        <DecoratedHeading>
          الفيديوهات التعليمية
        </DecoratedHeading>
        <p className="text-lg text-muted-foreground mb-8 text-right">
          شاهد الفيديوهات التي تستكشف موضوعات الطاقة والمواطنة والاستدامة المتعلقة بالانتقال الطاقوي في الجزائر.
        </p>
        
        <VideosGallery />
      </div>
    </section>
  );
}
