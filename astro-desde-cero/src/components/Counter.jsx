import { useState } from 'react'

export function Counter() {
  const [counter, setCounter ] = useState(0)

  return (
    <>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xl" onClick={() => setCounter(counter => counter+1)}>+</button>
      <span className="text-yellow-300 text-xl mx-2">{counter}</span> 
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xl" onClick={() => setCounter(counter => counter-1)}>-</button>
    </>
  )
}