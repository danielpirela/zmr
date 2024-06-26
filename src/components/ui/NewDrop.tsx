import { Star } from './icons/Star'

export function NewDrop(){
  return (
    <a href='#shop' className='min-w-full max-w-full bg-primary flex justify-center items-center'>
    <ul className='list flex p-1 justify-around items-center overflow-x-hidden max-w-[95vw] shadow-md flex-nowrap whitespace-nowrap'>
        <li className='item-i px-1 text-white font-extrabold overflow-x-hidden bg-primary z-10'><Star/></li>
        <li className='item px-1 text-white min-w-20  overflow-x-hidden font-medium '><span className='px-1'>|</span> New Tees <span className='px-1'>|</span></li>
        <li className='item px-1 text-white min-w-20  overflow-x-hidden font-medium hidden xs:block'>New Tees <span className='px-1 '>|</span></li>
        <li className='item px-1 text-white min-w-20  overflow-x-hidden font-medium hidden xs:block'>New Tees <span className='px-1 '>|</span></li>
        <li className='item px-1 text-white min-w-20  overflow-x-hidden font-medium hidden xs:block'>New Tees <span className='px-1 '>|</span></li>
        <li className='item px-1 text-white min-w-20  overflow-x-hidden font-medium hidden xs:block'>New Tees <span className='px-1 '>|</span></li>
        <li className='item px-1 text-white min-w-20  overflow-x-hidden font-medium hidden xs:block'>New Tees <span className='px-1 '>|</span></li>
        <li className='item px-1 text-white min-w-20  overflow-x-hidden font-medium '>New Tees <span className='px-1 '>|</span></li>
        <li className='item px-1 text-white min-w-20  overflow-x-hidden font-medium '>New Tees <span className='px-1 '>|</span></li>
        <li className='item px-1 text-white min-w-20  overflow-x-hidden font-medium '>New Tees <span className='px-1 '>|</span></li>
        <li className='item px-1 text-white min-w-20  overflow-x-hidden font-medium '>New Tees <span className='px-1 '>|</span></li>
        <li className='item-i px-1 text-white font-extrabold overflow-x-hidden bg-primary z-10'><Star/></li>
    </ul>
    </a>
  )
}
