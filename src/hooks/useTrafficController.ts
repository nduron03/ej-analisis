import { useEffect, useState } from 'react'
import { getNextPhase, phases } from '../utils/trafficLogic'

/**
 * Maneja el paso del tiempo para cambiar los semaforos.
 *
 * @returns La fase actual y los segundos que faltan.
 */
export function useTrafficController() {
  const [phaseNumber, setPhaseNumber] = useState(0)
  const [seconds, setSeconds] = useState(phases[0].seconds)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (seconds > 1) {
        setSeconds(seconds - 1)
      } else {
        const nextPhase = getNextPhase(phaseNumber)
        setPhaseNumber(nextPhase)
        setSeconds(phases[nextPhase].seconds)
      }
    }, 1000)

    return () => window.clearTimeout(timer)
  }, [seconds, phaseNumber])

  return {
    phase: phases[phaseNumber],
    seconds,
  }
}
