import { useStore } from '@nanostores/react'
import { $isLogged } from '../../store/useStore.ts'
import {Logo} from './Logo.tsx'
import { useState } from 'react'
export function Header() {
    const [isHidden, setIsHidden] = useState(true)
    const HiddenHandler = () => setIsHidden(!isHidden)

    const isLogged = useStore($isLogged).value
    return (
        <nav className='bg-whiteborder-gray-200 dark:bg-gray-900 min-w-full justify-between shadow-lg z-50 cilca'>
            <div className='flex flex-wrap items-center justify-between mx-0 p-4 flex-2 w-full'>
                <a href={'/'} className='flex-1 w-auto'>
                    <Logo />
                </a>
                <button
                    data-collapse-toggle='navbar-default'
                    type='button'
                    className=' inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100/20 focus:outline-none'
                    aria-controls='navbar-default'
                    aria-expanded='false'
                    onClick={HiddenHandler}
                >
                    <span className='sr-only'>Open main menu</span>
                    <svg
                        className='w-5 h-5'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 17 14'
                    >
                        <path
                            stroke='#000'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M1 1h15M1 7h15M1 13h15'
                        />
                    </svg>
                </button>
                <div
                    className={`w-full md:flex md:w-auto ${isHidden ? 'hidden' : ''}  transition-all delay-300 duration-300 animate-fade-down`}
                    id='navbar-default'
                >
                    <ul className='font-medium flex flex-col justify-center items-center p-4 py-8 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 '>
                        <li>
                            <a
                                href='/'
                                className='block py-2 px-3 rounded md:bg-transparent text-black md:p-0 hover:text-primary dark:text-white md:dark:text-blue-500 hover:scale-110 transition-all duration-200'
                                aria-current='page'
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href='/about'
                                className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent  hover:text-primary hover:scale-110 transition-all duration-200'
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href='/contact'
                                className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:scale-110 transition-all duration-200 '
                            >
                                Contact
                            </a>
                        </li>
                        {
                            isLogged === false ? (
                                <li className='hidden'>enercusi</li>
                        ): (
                            <li className='flex px-4 hover:text-primary' >
                            <button
                                onClick={(e) => {
                                    e.preventDefault()
                                $isLogged.setKey("value", false)
                            }}
                        className='py-2 text-gray-800 rounded flex justify-center items-center hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:scale-110 transition-all duration-200'
                    >
                                Log out
                                <svg className="w-[24px] h-[24px] pl-1  text-gray-800 dark:text-white hover:text-primary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"/>
                            </svg>
                            </button>
                        </li>
                            )
                        }
                    <li className='hidden px-3 py-2  items-center justify-center rounded-md hover:scale-110 transition-all duration-200 md:bg-[#603721] md:text-white bg-transparent dark:text-white text-gray-900'>
                            <a
                                href='/register'
                            className='block rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                        >
                                Sign up
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
