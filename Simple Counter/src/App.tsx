import { useState } from "react"

const App = () => {
  const [count , setCount] = useState(0)
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-4xl font-bold mb-4">{count}</p>
      <div className="flex space-x-4">
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600" onClick={() => setCount(count + 1)}>Incress</button><br />
      <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600" disabled={count === 0} onClick={() => setCount(count - 1)}>Decress</button>
      </div>
    </div>
  )
}

export default App
