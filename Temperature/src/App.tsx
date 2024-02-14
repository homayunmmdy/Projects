import { useState } from "react"

const App = () => {
  const [temperature , setTemperature] = useState(20)
  const backgroundColor = () => {
    if(temperature < 10) {
      return 'bg-blue-200'
    }else if(temperature >= 10 && temperature < 20) {
      return 'bg-blue-400'
    }else if(temperature >= 20 && temperature < 30) {
      return 'bg-yellow-300'
    }else if(temperature >= 30 && temperature < 40) {
      return 'bg-orange-500'
    }else {
      return 'bg-red-600'
    }
  }
  return (
    <div className={`${backgroundColor()}`}>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl mb-4">Tempertature: {temperature}°C</h1>
        <div className="flex gap-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {setTemperature(temperature + 1)}}>Incress</button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => {setTemperature(temperature - 1)}}>Dcress</button>
        </div>
      </div>
    </div>
  )
}

export default App
