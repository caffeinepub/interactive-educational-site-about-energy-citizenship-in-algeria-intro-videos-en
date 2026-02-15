import { Zap } from 'lucide-react';

interface DecoratedHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function DecoratedHeading({ children, className = '' }: DecoratedHeadingProps) {
  return (
    <div className={`flex items-center gap-4 mb-6 ${className}`}>
      <div className="flex items-center gap-3 flex-1">
        <div className="p-2 bg-primary/15 rounded-xl">
          <Zap className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground flex-1">
          {children}
        </h2>
      </div>
      <div className="hidden md:block h-1 w-20 bg-gradient-to-l from-primary via-primary/60 to-transparent rounded-full" />
    </div>
  );
}
