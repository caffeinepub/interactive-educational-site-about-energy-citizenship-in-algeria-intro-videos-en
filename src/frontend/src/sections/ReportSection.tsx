import { createElement } from 'react';
import DecoratedHeading from '../components/DecoratedHeading';

interface ContentBlock {
  type: 'paragraph' | 'heading' | 'list';
  text?: string;
  items?: string[];
  level?: number;
}

interface ReportSectionProps {
  id: string;
  title: string;
  content: ContentBlock[];
  highlight?: boolean;
}

export default function ReportSection({ id, title, content, highlight }: ReportSectionProps) {
  return (
    <section id={id} className="scroll-mt-20 mb-20">
      <div className={`${highlight ? 'bg-primary/5 border-2 border-primary/20' : 'bg-card'} rounded-2xl p-8 md:p-12 shadow-lg`}>
        <DecoratedHeading>
          {title}
        </DecoratedHeading>
        
        <div className="prose prose-lg max-w-none">
          {content.map((block, index) => {
            if (block.type === 'paragraph') {
              return (
                <p key={index} className="text-lg text-muted-foreground mb-6 leading-relaxed text-right">
                  {block.text}
                </p>
              );
            }
            
            if (block.type === 'heading') {
              const headingLevel = block.level || 3;
              const headingTag = `h${headingLevel}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
              return createElement(
                headingTag,
                {
                  key: index,
                  className: 'text-2xl md:text-3xl font-semibold mt-8 mb-4 text-foreground text-right'
                },
                block.text
              );
            }
            
            if (block.type === 'list' && block.items) {
              return (
                <ul key={index} className="space-y-3 mb-6 mr-6">
                  {block.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-lg text-muted-foreground leading-relaxed list-disc text-right">
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }
            
            return null;
          })}
        </div>
      </div>
    </section>
  );
}
