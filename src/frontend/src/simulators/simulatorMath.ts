export interface SimulatorOutput {
  label: string;
  value: string;
  unit: string;
  percentage?: number;
}

export function calculateOutputs(energyTypeId: string, inputs: Record<string, number>): SimulatorOutput[] {
  const calculators: Record<string, (inputs: Record<string, number>) => SimulatorOutput[]> = {
    'oil-gas': (inp) => {
      const energyOutput = (inp.capacity * inp.efficiency / 100 * inp.utilization / 100 * 8760 / 1000).toFixed(1);
      const emissions = (inp.capacity * inp.utilization / 100 * 0.5 * 8760 / 1000).toFixed(0);
      const costIndex = (inp.capacity * 0.8 + (100 - inp.efficiency) * 2).toFixed(0);
      const reliability = (85 + inp.utilization / 10).toFixed(0);
      
      return [
        { label: 'Annual Energy Output', value: energyOutput, unit: 'GWh/year', percentage: parseFloat(energyOutput) / 50 },
        { label: 'CO₂ Emissions', value: emissions, unit: 'kt/year', percentage: parseFloat(emissions) / 40 },
        { label: 'Cost Index', value: costIndex, unit: 'points', percentage: parseFloat(costIndex) / 10 },
        { label: 'Reliability Score', value: reliability, unit: '%', percentage: parseFloat(reliability) }
      ];
    },
    'coal': (inp) => {
      const energyOutput = (inp.capacity * inp.efficiency / 100 * inp.utilization / 100 * 8760 / 1000).toFixed(1);
      const emissions = (inp.capacity * inp.utilization / 100 * 0.9 * 8760 / 1000).toFixed(0);
      const costIndex = (inp.capacity * 0.5 + (100 - inp.efficiency) * 3).toFixed(0);
      const reliability = (80 + inp.utilization / 10).toFixed(0);
      
      return [
        { label: 'Annual Energy Output', value: energyOutput, unit: 'GWh/year', percentage: parseFloat(energyOutput) / 60 },
        { label: 'CO₂ Emissions', value: emissions, unit: 'kt/year', percentage: parseFloat(emissions) / 60 },
        { label: 'Cost Index', value: costIndex, unit: 'points', percentage: parseFloat(costIndex) / 8 },
        { label: 'Reliability Score', value: reliability, unit: '%', percentage: parseFloat(reliability) }
      ];
    },
    'solar': (inp) => {
      const energyOutput = (inp.area * inp.efficiency / 100 * inp.sunlight * 365 / 1000000).toFixed(2);
      const emissions = '0';
      const costIndex = (inp.area * 0.15 + (25 - inp.efficiency) * 5).toFixed(0);
      const reliability = (50 + inp.sunlight * 3).toFixed(0);
      
      return [
        { label: 'Annual Energy Output', value: energyOutput, unit: 'GWh/year', percentage: parseFloat(energyOutput) * 10 },
        { label: 'CO₂ Emissions', value: emissions, unit: 'kt/year', percentage: 0 },
        { label: 'Cost Index', value: costIndex, unit: 'points', percentage: parseFloat(costIndex) / 15 },
        { label: 'Reliability Score', value: reliability, unit: '%', percentage: parseFloat(reliability) }
      ];
    },
    'wind': (inp) => {
      const energyOutput = (inp.turbines * inp.capacity * (inp.windSpeed / 10) * 0.35 * 8760 / 1000).toFixed(1);
      const emissions = '0';
      const costIndex = (inp.turbines * inp.capacity * 15 + (15 - inp.windSpeed) * 10).toFixed(0);
      const reliability = (40 + inp.windSpeed * 4).toFixed(0);
      
      return [
        { label: 'Annual Energy Output', value: energyOutput, unit: 'GWh/year', percentage: parseFloat(energyOutput) / 40 },
        { label: 'CO₂ Emissions', value: emissions, unit: 'kt/year', percentage: 0 },
        { label: 'Cost Index', value: costIndex, unit: 'points', percentage: parseFloat(costIndex) / 30 },
        { label: 'Reliability Score', value: reliability, unit: '%', percentage: parseFloat(reliability) }
      ];
    },
    'hydro': (inp) => {
      const energyOutput = (9.81 * inp.flow * inp.head * inp.efficiency / 100 * 8760 / 1000000).toFixed(1);
      const emissions = '0';
      const costIndex = (inp.head * 2 + inp.flow * 0.5).toFixed(0);
      const reliability = (90 + inp.efficiency / 10).toFixed(0);
      
      return [
        { label: 'Annual Energy Output', value: energyOutput, unit: 'GWh/year', percentage: parseFloat(energyOutput) / 50 },
        { label: 'CO₂ Emissions', value: emissions, unit: 'kt/year', percentage: 0 },
        { label: 'Cost Index', value: costIndex, unit: 'points', percentage: parseFloat(costIndex) / 5 },
        { label: 'Reliability Score', value: reliability, unit: '%', percentage: parseFloat(reliability) }
      ];
    },
    'geothermal': (inp) => {
      const energyOutput = (inp.flow * (inp.temperature - 100) * 4.18 * inp.efficiency / 100 * 8760 / 3600000).toFixed(1);
      const emissions = (parseFloat(energyOutput) * 0.05).toFixed(1);
      const costIndex = (inp.temperature * 0.5 + inp.flow * 2).toFixed(0);
      const reliability = (92 + inp.efficiency / 5).toFixed(0);
      
      return [
        { label: 'Annual Energy Output', value: energyOutput, unit: 'GWh/year', percentage: parseFloat(energyOutput) / 30 },
        { label: 'CO₂ Emissions', value: emissions, unit: 'kt/year', percentage: parseFloat(emissions) * 10 },
        { label: 'Cost Index', value: costIndex, unit: 'points', percentage: parseFloat(costIndex) / 8 },
        { label: 'Reliability Score', value: reliability, unit: '%', percentage: parseFloat(reliability) }
      ];
    }
  };

  return calculators[energyTypeId]?.(inputs) || [];
}
