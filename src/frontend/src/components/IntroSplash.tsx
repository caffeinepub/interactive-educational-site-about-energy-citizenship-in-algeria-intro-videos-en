import { Zap } from 'lucide-react';

interface IntroSplashProps {
  onEnter: () => void;
}

export default function IntroSplash({ onEnter }: IntroSplashProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
      {/* Background image */}
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/generated/algeria-backdrop.dim_1920x1080.png)' }}
      />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 text-center">
        {/* Hero illustration */}
        <div className="mb-8 flex justify-center">
          <img 
            src="/assets/generated/intro-hero.dim_1600x900.png" 
            alt="الطاقة والمواطنة في الجزائر"
            className="w-full max-w-3xl rounded-2xl shadow-2xl"
          />
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
          الطاقة والمواطنة
        </h1>
        <p className="text-2xl md:text-3xl font-semibold mb-4 text-primary">
          في الجزائر
        </p>
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
          استكشاف العلاقة الحيوية بين موارد الطاقة والمسؤولية المدنية في رحلة الجزائر نحو التنمية المستدامة
        </p>

        {/* CTA Button */}
        <button
          onClick={onEnter}
          className="group relative inline-flex items-center gap-3 px-10 py-5 text-lg font-semibold text-primary-foreground bg-primary rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
        >
          <Zap className="w-6 h-6" />
          <span>ادخل إلى التجربة</span>
          <span className="absolute inset-0 rounded-full bg-primary/30 blur-xl group-hover:blur-2xl transition-all duration-300" />
        </button>

        {/* Subtitle */}
        <p className="mt-8 text-sm text-muted-foreground">
          رحلة تعليمية تفاعلية عبر أنواع الطاقة والمحاكيات والمشاركة المدنية
        </p>
      </div>
    </div>
  );
}
