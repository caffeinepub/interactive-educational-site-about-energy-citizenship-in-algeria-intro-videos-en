import { type ReactNode } from 'react';
import HelpBotPanel from './HelpBotPanel';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Subtle background */}
      <div 
        className="fixed inset-0 opacity-5 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: 'url(/assets/generated/algeria-backdrop.dim_1920x1080.png)' }}
      />
      
      <div className="relative z-10 flex-1">
        {children}
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/60 bg-card/80 backdrop-blur-sm mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} الطاقة والمواطنة في الجزائر. مشروع تعليمي.
            </p>
          </div>
        </div>
      </footer>

      {/* Help Bot */}
      <HelpBotPanel />
    </div>
  );
}
