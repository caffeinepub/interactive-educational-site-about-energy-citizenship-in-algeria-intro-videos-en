export interface SimulatorInput {
  id: string;
  label: string;
  min: number;
  max: number;
  default: number;
  step: number;
  unit: string;
}

export interface SimulatorModel {
  inputs: SimulatorInput[];
}

export function getSimulatorModel(energyTypeId: string): SimulatorModel {
  const models: Record<string, SimulatorModel> = {
    'oil-gas': {
      inputs: [
        { id: 'capacity', label: 'Plant Capacity', min: 100, max: 2000, default: 500, step: 50, unit: 'MW' },
        { id: 'efficiency', label: 'Conversion Efficiency', min: 30, max: 60, default: 45, step: 1, unit: '%' },
        { id: 'utilization', label: 'Capacity Utilization', min: 50, max: 95, default: 75, step: 5, unit: '%' }
      ]
    },
    'coal': {
      inputs: [
        { id: 'capacity', label: 'Plant Capacity', min: 200, max: 3000, default: 1000, step: 100, unit: 'MW' },
        { id: 'efficiency', label: 'Thermal Efficiency', min: 25, max: 45, default: 35, step: 1, unit: '%' },
        { id: 'utilization', label: 'Capacity Utilization', min: 60, max: 90, default: 75, step: 5, unit: '%' }
      ]
    },
    'solar': {
      inputs: [
        { id: 'area', label: 'Panel Area', min: 1000, max: 50000, default: 10000, step: 1000, unit: 'm²' },
        { id: 'efficiency', label: 'Panel Efficiency', min: 15, max: 25, default: 20, step: 1, unit: '%' },
        { id: 'sunlight', label: 'Daily Sunlight Hours', min: 4, max: 12, default: 8, step: 0.5, unit: 'hrs' }
      ]
    },
    'wind': {
      inputs: [
        { id: 'turbines', label: 'Number of Turbines', min: 5, max: 100, default: 25, step: 5, unit: 'units' },
        { id: 'capacity', label: 'Turbine Capacity', min: 2, max: 8, default: 5, step: 0.5, unit: 'MW' },
        { id: 'windSpeed', label: 'Average Wind Speed', min: 5, max: 15, default: 10, step: 0.5, unit: 'm/s' }
      ]
    },
    'hydro': {
      inputs: [
        { id: 'head', label: 'Water Head Height', min: 10, max: 200, default: 50, step: 10, unit: 'm' },
        { id: 'flow', label: 'Water Flow Rate', min: 50, max: 500, default: 200, step: 25, unit: 'm³/s' },
        { id: 'efficiency', label: 'Turbine Efficiency', min: 80, max: 95, default: 90, step: 1, unit: '%' }
      ]
    },
    'geothermal': {
      inputs: [
        { id: 'temperature', label: 'Reservoir Temperature', min: 150, max: 350, default: 250, step: 10, unit: '°C' },
        { id: 'flow', label: 'Steam Flow Rate', min: 50, max: 300, default: 150, step: 25, unit: 'kg/s' },
        { id: 'efficiency', label: 'Conversion Efficiency', min: 10, max: 20, default: 15, step: 1, unit: '%' }
      ]
    }
  };

  return models[energyTypeId] || models['solar'];
}
