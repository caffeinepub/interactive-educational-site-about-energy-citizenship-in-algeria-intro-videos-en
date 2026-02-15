import { useState } from 'react';
import { energyTypes } from '../content/energyTypes';
import SimulatorPanel from '../components/SimulatorPanel';
import DecoratedHeading from '../components/DecoratedHeading';

export default function SimulatorsSection() {
  const [selectedSimulator, setSelectedSimulator] = useState(energyTypes[0].id);

  return (
    <section id="simulators" className="scroll-mt-20 mb-20">
      <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg">
        <DecoratedHeading>
          المحاكيات التفاعلية للطاقة
        </DecoratedHeading>
        <p className="text-lg text-muted-foreground mb-8 text-right">
          استكشف كيف تؤثر المعاملات المختلفة على إنتاج الطاقة والتكاليف والأثر البيئي.
          <span className="block mt-2 text-sm italic">ملاحظة: هذه نماذج تعليمية توضيحية لأغراض التعلم.</span>
        </p>

        {/* Simulator Selector */}
        <div className="flex flex-wrap gap-3 mb-8 justify-end">
          {energyTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedSimulator(type.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedSimulator === type.id
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                  : 'bg-accent text-accent-foreground hover:bg-accent/80'
              }`}
            >
              <span>{type.name}</span>
              <img src={type.icon} alt={type.name} className="w-6 h-6" />
            </button>
          ))}
        </div>

        {/* Active Simulator */}
        <SimulatorPanel energyTypeId={selectedSimulator} />
      </div>
    </section>
  );
}
