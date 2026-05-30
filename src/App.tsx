import './App.css'
import { useTrafficController } from './hooks/useTrafficController'
import type { LightColor } from './utils/trafficLogic'

interface TrafficLightProps {
  name: string
  color: LightColor
  className: string
}

/**
 * Pinta un semaforo simple con tres circulos.
 *
 * @param props Datos basicos del semaforo.
 * @returns Un semaforo en pantalla.
 */
function TrafficLight({ name, color, className }: TrafficLightProps) {
  return (
    <div className={`trafficLight ${className}`}>
      <p>{name}</p>
      <div className="box">
        <span className={color === 'red' ? 'red on' : 'red'}></span>
        <span
          className={color === 'yellow' ? 'yellow on' : 'yellow'}
        ></span>
        <span className={color === 'green' ? 'green on' : 'green'}></span>
      </div>
    </div>
  )
}

function App() {
  const { phase, seconds } = useTrafficController()

  return (
    <main>
      <p className="counter">Cambio en: {seconds} segundos</p>

      <div className="crossing">
        <TrafficLight name="Norte" color={phase.lights.north} className="north"/>
        <TrafficLight name="Sur" color={phase.lights.south} className="south" />
        <TrafficLight name="Este" color={phase.lights.east} className="east" />
        <TrafficLight name="Oeste" color={phase.lights.west} className="west"/>
      </div>
    </main>
  )
}

export default App
