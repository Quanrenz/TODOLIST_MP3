import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [word, setword] = useState('')
  console.log(word)
  return (
    <>
      <div className="flex gap-8 h-screen items-center border border-red-500 justify-center">
          <input 
              type="text" 
              className="outline-none border border-blue-600 px-4 py-2 w-[400px]"
              value={word}
              onChange={e => setword(e.target.value)}
          />
          <button
           type="button"
           className="outline-none px-4 py-2 bg-blue-500 rounded-md text-white"
          >
              Add
          </button>
      </div>
    </>
  )
}

export default App
