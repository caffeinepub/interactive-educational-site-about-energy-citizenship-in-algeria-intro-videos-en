import { useState } from 'react';
import { energyTypes } from '../content/energyTypes';
import { getSimulatorModel } from '../simulators/simulatorModels';
import { calculateOutputs } from '../simulators/simulatorMath';

interface SimulatorPanelProps {
  energyTypeId: string;
}

export default function SimulatorPanel({ energyTypeId }: SimulatorPanelProps) {
  const energyType = energyTypes.find(t => t.id === energyTypeId);
  const model = getSimulatorModel(energyTypeId);
  
  const [inputs, setInputs] = useState<Record<string, number>>(
    model.inputs.reduce((acc, input) => ({ ...acc, [input.id]: input.default }), {})
  );

  if (!energyType || !model) return null;

  const outputs = calculateOutputs(energyTypeId, inputs);

  const handleInputChange = (inputId: string, value: number) => {
    setInputs(prev => ({ ...prev, [inputId]: value }));
  };

  return (
    <div className="bg-accent/30 rounded-xl p-6 md:p-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 text-right">
          <h3 className="text-2xl font-bold text-foreground">محاكي {energyType.name}</h3>
          <p className="text-sm text-muted-foreground">اضبط المعاملات لرؤية التأثيرات المقدرة</p>
        </div>
        <img src={energyType.icon} alt={energyType.name} className="w-16 h-16" />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-foreground mb-4 text-right">معاملات الإدخال</h4>
          {model.inputs.map((input) => (
            <div key={input.id} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-primary">
                  {inputs[input.id]} {input.unit}
                </span>
                <label className="text-sm font-medium text-foreground">{input.label}</label>
              </div>
              <input
                type="range"
                min={input.min}
                max={input.max}
                step={input.step}
                value={inputs[input.id]}
                onChange={(e) => handleInputChange(input.id, parseFloat(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                dir="ltr"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{input.max} {input.unit}</span>
                <span>{input.min} {input.unit}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Outputs */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-foreground mb-4 text-right">المخرجات المقدرة</h4>
          <div className="space-y-4">
            {outputs.map((output) => (
              <div key={output.label} className="bg-card rounded-lg p-4 border border-border">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-muted-foreground italic">توضيحي</span>
                  <span className="text-sm font-medium text-muted-foreground">{output.label}</span>
                </div>
                <div className="flex items-baseline gap-2 justify-end">
                  <span className="text-sm text-muted-foreground">{output.unit}</span>
                  <span className="text-3xl font-bold text-foreground">{output.value}</span>
                </div>
                {/* Visual bar */}
                <div className="mt-3 h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(output.percentage || 50, 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground italic mt-4 text-right">
            * هذه القيم هي تقديرات تعليمية لأغراض المقارنة ولا تمثل حسابات هندسية دقيقة.
          </p>
        </div>
      </div>
    </div>
  );
}
