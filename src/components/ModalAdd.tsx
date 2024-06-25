import { useEffect, useState } from 'react'
import Alert from './ui/Alert'
import { $isLogged } from '../store/useStore'
import { useStore } from '@nanostores/react'

export function ModalAdd (){
  const isLogged = useStore($isLogged)
  const [isView, setIsView] = useState<boolean>(false)
  const [isError, setIsError] = useState<string>("")
  const avaliableModels : string[] = ['Blanco', 'Negro']
    const handleSubmit = async (e:any) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const avaliable = formData.get('avaliable') === 'true' ? true : false

        const data = {
            category: formData.get('category'),
            name: formData.get('name'),
            price: formData.get('price'),
            available: avaliable,
            avaliableModels: formData.get('model'),
            image: formData.get('image'),
        }

        const res = await fetch("https://localhost/api/tee.json", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })

        const json = await res.json()

        if (json.status !== 200){
            return setIsError('The tee cannot be created')
        }
        return setIsError('Success')
      }

      useEffect(() => {
          if (isLogged.value === 'false') return window.location.replace("https://www.zmrclub.store")
      },[isLogged.value])

   return (
<>
{
    !isView && (
            <button onClick={(e:any)=>{
                e.preventDefault()
                setIsView(true)
            }} className="block text-white bg-primary/95 hover:bg-primary/100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 animate-wiggle animate-infinite transition-all hover:px-6 hover:py-3">
                Add Tee
            </button>
        )

}
{
    isView && (
        <div className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-3 h-[calc(100%-1rem)] max-h-full animate-jump-in">
    <div className="relative p-4 w-full max-w-md max-h-full">

        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Add New Tee
                </h3>
                <button type="button" onClick={(e)=> {
                    e.preventDefault()
                    setIsView(false)
                }} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                    <svg className="w-3 h-3"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>

            <form className="p-4 md:p-5" onSubmit={handleSubmit}>
                <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                        <input type="text" name="category" id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name"/>
                    </div>
                    <div className="col-span-2">
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name </label>
                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name"/>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                        <input type="text" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" />
                    </div>
                    <div className="col-span-1 sm:col-span-1">
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image</label>
                        <input type="url" name="image" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="https://i.imgur.com/FWcNSIY.png" />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label className="block mb-2 text-sm font-medium text-gray-900  dark:text-white">Models</label>
                            <div  className='flex justify-start items-center gap-2'>
                        {
                            avaliableModels.map((model, index) => (
                                <input key={index} type='checkbox' value={model} name='model' id={String(index)} className={`rounded-full ring-1 ring-gray-900/35 block min-w-5 min-h-5 hover:scale-110 hover:ring-blue-500/50 hover:ring-2 transition-all duration-300 delay-200 ${model === 'Blanco' ? 'bg-white' : 'bg-black'}`}/>
                            ))
                        }
                            </div>
                    </div>
                    <div className="col-span-2 sm:col-span-1 flex justify-start items-end">
                    <label className="inline-flex items-center  cursor-pointer">
                        <input type="checkbox" value="true" name='avaliable' id='avalible' className="sr-only peer"/>
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Avaliable</span>
                    </label>
                    </div>

                </div>
                <button type='submit' className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"></path></svg>
                    Add new Tee
                </button>
            </form>
        </div>
    </div>
    <Alert message={isError}/>
</div>
)
}
</>
)
}
