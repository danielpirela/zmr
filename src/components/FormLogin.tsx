import { useEffect, useState } from 'react'
import Alert from './ui/Alert'
import { $isLogged } from '../store/useStore'

export function FormLogin() {
const [isError, setIsError] = useState("")


const handleSubmit = async (e:any) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    const data = {
        username: formData.get('username'),
        password: formData.get('password'),
    }


    const res = await fetch("https://www.zmrclub.com/api/login.json", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    })
    const json = await res.json()

    if (json.status !== 200){
        setIsError('Verification failed')
        return  $isLogged.setKey('value','false')
    }

    setIsError('Success')
    $isLogged.setKey('value','true')
}
    useEffect(() =>{
        if (isError === 'Success'){
            return window.location.replace("https://www.zmrclub.com/admin")
        }
    },[isError])



    return (
        <div className="flex justify-center items-center min-h-screen min-w-full relative">
            <form className="p-2 flex" onSubmit={handleSubmit}>
                <div>
                    <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Username
                    </label>
                    <div className="flex">
                        <span
                            className="inline-flex items-center px-3 text-sm text-gray-900 border rounded-s-lg border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
                        >
                            <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 16"
                            >
                                <path
                                    d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
                                ></path>
                                <path
                                    d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"
                                ></path>
                            </svg>
                        </span>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="zmr_enercusi" />
                    </div>
                    <label
                        className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white"
                    >password</label>
                    <div className="flex">
                        <span
                            className="inline-flex items-center px-3 text-sm text-gray-900 border border-gray-300 rounded-s-lg dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
                            >
                            <svg
                                className="w-6 h-6 text-gray-800 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                >
                                <path
                                    fill-rule="evenodd"
                                    d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </span>
                        <input
                            type="text"
                            id="password"
                            name="password"
                            className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="************" />

                    </div>
                    <div>
                        <button
                            className="py-1 min-w-full rounded-lg bg-blue-500 text-xl font-semibold text-white block w-3/4 text-center mt-4 hover:scale-105 transition-all delay-300 duration-300 shadow-lg"
                            >Submit</button>
                    </div>
                </div>
            </form>
            <Alert message={isError}/>
        </div>
    )
}
