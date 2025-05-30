import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [word, setword] = useState('')
  const [todos, settodos] = useState([])
  const handleAdd = ()=>{
    settodos(prev => [...prev, word])
    setword('')
  }
  return (
    <>
      <div className="flex flex-col gap-8  h-screen items-center border border-red-500 justify-center">
         <div className="flex gap-8">
             <input 
              type="text" 
              className="outline-none border border-blue-600 px-4 py-2 w-[400px]"
              value={word}
              onChange={e => setword(e.target.value)}
          />
          <button
           type="button"
           className="outline-none px-4 py-2 bg-blue-500 rounded-md text-white"
           onClick={handleAdd}
          >
              Add
          </button>
         </div>

         <div className="font-bold text-xl">
              <h3>Content: </h3>
         </div>
         <ul>
          {todos?.map((item, index)  =>{
            return(
              <li key ={index}>{item}</li>
            )
          })}
         </ul>
      </div>
    </>
  )
}


export default App
