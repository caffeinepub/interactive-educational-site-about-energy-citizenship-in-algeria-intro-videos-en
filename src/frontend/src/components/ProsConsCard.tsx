import { ThumbsUp, ThumbsDown } from 'lucide-react';

interface ProsConsCardProps {
  pros: string[];
  cons: string[];
}

export default function ProsConsCard({ pros, cons }: ProsConsCardProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Pros */}
      <div className="bg-card rounded-xl p-6 border-2 border-primary/30">
        <div className="flex items-center gap-3 mb-4 justify-end">
          <h4 className="text-2xl font-bold text-foreground">المزايا</h4>
          <div className="p-2 bg-primary/20 rounded-lg">
            <ThumbsUp className="w-6 h-6 text-primary" />
          </div>
        </div>
        <ul className="space-y-3">
          {pros.map((pro, index) => (
            <li key={index} className="flex items-start gap-3 text-right">
              <span className="text-muted-foreground flex-1">{pro}</span>
              <span className="text-primary mt-1">✓</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Cons */}
      <div className="bg-card rounded-xl p-6 border-2 border-destructive/30">
        <div className="flex items-center gap-3 mb-4 justify-end">
          <h4 className="text-2xl font-bold text-foreground">التحديات</h4>
          <div className="p-2 bg-destructive/20 rounded-lg">
            <ThumbsDown className="w-6 h-6 text-destructive" />
          </div>
        </div>
        <ul className="space-y-3">
          {cons.map((con, index) => (
            <li key={index} className="flex items-start gap-3 text-right">
              <span className="text-muted-foreground flex-1">{con}</span>
              <span className="text-destructive mt-1">✗</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
