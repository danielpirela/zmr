import { useEffect, useState } from 'react'

export default function Alert({message}:any){
    const [isView, setIsView] = useState(false)

    useEffect(() =>{
        if(message) setIsView(true)
    },[message])
  return (
    <>
    {
        (!message
            ? <div className='hidden'></div>
            : <div id="alert-1" className={`flex absolute top-0 items-center p-4 mb-4 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert  transition-all animate-fade-down ${message === 'Success'? 'text-green-800 bg-green-50': 'text-red-800 bg-red-50'} ${isView ? '' : 'hidden'}`}>
            <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <span className="sr-only">Info</span>
            <div className="ms-3 text-sm font-medium mx-2">
              {message}
            </div>
              <button onClick={()=>{
                setIsView(false)
              }} type="button" className={`ms-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 ${message === 'Success' ? 'focus:ring-green-400 hover:bg-green-200' : 'focus:ring-red-400 hover:bg-red-200'} p-1.5  inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700 ${message === 'Success' ? 'bg-green-50 text-green-500': 'bg-red-50 text-red-500'}`} data-dismiss-target="#alert-1" aria-label="Close">
                <span className="sr-only">Close</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
            </button>
          </div>
        )
    }
    </>
  )
}
