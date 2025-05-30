import { useState } from 'react'
  import { ToastContainer, toast} from 'react-toastify'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [work, setwork] = useState('')
  const [todos, settodos] = useState([])
  const handleAdd = ()=>{
    if(todos?.some(item => item.id == work?.replace(/\s/g,''))){
      toast.warn('Công việc đã được thêm vào trước đó')
    }else{
      settodos(prev => [...prev, {id: work?.replace(/\s/g,''), job: work}])
      setwork('')
    }
  };
  console.log(todos)
  const handleDeleteJob = (id)=>{
    settodos(prev => prev.filter(item => item.id != id))
  }
  return (
    <>
      <div className="flex flex-col gap-8  h-screen items-center border border-red-500 justify-center">
         <div className="flex gap-8">
             <input 
              type="text" 
              className="outline-none border border-blue-600 px-4 py-2 w-[400px]"
              value={work}
              onChange={e => setwork(e.target.value)}
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
          {todos?.map((item)  =>{
            return(
              <li key ={item.id} className="flex gap-4 items-center ">
                <span className='my-2'>{item.job}</span>
                <span onClick={()=>handleDeleteJob(item.id)} className='my-2 hover:cursor-pointer p-2'>x</span>
              </li>
            )
          })}
         </ul>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}


export default App
