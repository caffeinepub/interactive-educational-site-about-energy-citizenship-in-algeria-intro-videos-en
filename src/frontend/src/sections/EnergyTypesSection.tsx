import { useState } from 'react';
import { energyTypes } from '../content/energyTypes';
import ProsConsCard from '../components/ProsConsCard';
import DecoratedHeading from '../components/DecoratedHeading';

export default function EnergyTypesSection() {
  const [selectedType, setSelectedType] = useState(energyTypes[0].id);
  const currentType = energyTypes.find(t => t.id === selectedType) || energyTypes[0];

  return (
    <section id="energy-types" className="scroll-mt-20 mb-20">
      <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg">
        <DecoratedHeading>
          مستكشف أنواع الطاقة
        </DecoratedHeading>
        <p className="text-lg text-muted-foreground mb-8 text-right">
          استكشف مصادر الطاقة المختلفة وخصائصها ومزاياها وتحدياتها.
        </p>

        {/* Energy Type Selector */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {energyTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`flex flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all duration-300 ${
                selectedType === type.id
                  ? 'border-primary bg-primary/10 shadow-lg scale-105'
                  : 'border-border bg-card hover:border-primary/50 hover:bg-accent'
              }`}
            >
              <img 
                src={type.icon} 
                alt={type.name}
                className="w-16 h-16 object-contain"
              />
              <span className="text-sm font-medium text-center">{type.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Type Details */}
        <div className="bg-accent/30 rounded-xl p-6 md:p-8 mb-6">
          <div className="flex items-start gap-4 mb-4">
            <img 
              src={currentType.icon} 
              alt={currentType.name}
              className="w-20 h-20 object-contain"
            />
            <div className="flex-1 text-right">
              <h3 className="text-3xl font-bold mb-2 text-foreground">{currentType.name}</h3>
              <p className="text-lg text-muted-foreground">{currentType.description}</p>
            </div>
          </div>
        </div>

        {/* Pros and Cons */}
        <ProsConsCard pros={currentType.pros} cons={currentType.cons} />
      </div>
    </section>
  );
}
