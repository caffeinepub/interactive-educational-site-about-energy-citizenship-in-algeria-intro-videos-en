import { Menu, Zap } from 'lucide-react';
import { useState } from 'react';

interface TopNavProps {
  onReopenIntro: () => void;
}

export default function TopNav({ onReopenIntro }: TopNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'overview', label: 'نظرة عامة على الطاقة' },
    { id: 'citizenship', label: 'المواطنة' },
    { id: 'relationship', label: 'مواطنة الطاقة' },
    { id: 'algeria', label: 'السياق الجزائري' },
    { id: 'energy-types', label: 'أنواع الطاقة' },
    { id: 'simulators', label: 'المحاكيات' },
    { id: 'videos', label: 'الفيديوهات' },
    { id: 'conclusion', label: 'الخلاصة' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-xl border-b border-border/60 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={onReopenIntro}
            className="flex items-center gap-2 text-lg font-bold text-primary hover:text-primary/90 transition-colors"
          >
            <Zap className="w-6 h-6" />
            <span className="hidden sm:inline">الطاقة والمواطنة</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/70 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground hover:bg-accent/70 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/60">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-2 text-right text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/70 rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
