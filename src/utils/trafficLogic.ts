export type LightColor = 'red' | 'yellow' | 'green'

export interface TrafficLights {
  north: LightColor
  south: LightColor
  east: LightColor
  west: LightColor
}

export interface Phase {
  seconds: number
  lights: TrafficLights
}

export const phases: Phase[] = [
  {
    seconds: 5,
    lights: {
      north: 'green',
      south: 'green',
      east: 'red',
      west: 'red',
    },
  },
  {
    seconds: 2,
    lights: {
      north: 'yellow',
      south: 'yellow',
      east: 'red',
      west: 'red',
    },
  },
  {
    seconds: 1,
    lights: {
      north: 'red',
      south: 'red',
      east: 'red',
      west: 'red',
    },
  },
  {
    seconds: 5,
    lights: {
      north: 'red',
      south: 'red',
      east: 'green',
      west: 'green',
    },
  },
  {
    seconds: 2,
    lights: {
      north: 'red',
      south: 'red',
      east: 'yellow',
      west: 'yellow',
    },
  },
  {
    seconds: 1,
    lights: {
      north: 'red',
      south: 'red',
      east: 'red',
      west: 'red',
    },
  },
]

/**
 * Busca la siguiente fase. Si llega al final, vuelve al inicio.
 *
 * @param currentPhase Fase actual.
 * @returns Numero de la siguiente fase.
 */
export function getNextPhase(currentPhase: number): number {
  if (currentPhase === phases.length - 1) {
    return 0
  }

  return currentPhase + 1
}
