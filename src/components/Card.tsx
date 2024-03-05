import { useState } from 'react'
import type { Product } from "../utils/types"
import { useStore } from '@nanostores/react'
import { $product} from '../store/useStore'

import {Cart} from "./ui/icons/Cart"
import { Modal } from './Modal'
import { ColorPicker } from './ui/ColorPicker'

interface Props {
  products: Product[]
}

export function Card({products} : Props) {

  const $protc  = useStore($product)
  const [isHidden, setIsHidden] = useState<boolean>(true)

  const handleId = (e:any, id : string) => {
    $product.setKey('id' , id)
    console.log($protc)

  }

  return (
    <>
    <Modal data={products} isHidden={isHidden}>
    <button
                className={`z-50 text-gray-400 bg-transparent  hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white absolute right-10 top-10 ${isHidden ? 'hidden' : 'flex'}`}
                onClick={
                  (e) => {
                    e.preventDefault()
                    setIsHidden(true)
                  }
                }
                >
                    <svg className="w-3 h-3 hover:scale-150 transition-all hover:animate-twice duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
    </button>
    </Modal>

    <article className='flex justify-center items-center flex-col min-w-full min-h-auto'>
    {
      products.map((product : Product) =>{
        const {id,image,name,price, avaliableModels} = product
        if (product.category === String($protc.category)){
          return (
            <div key={id} className='shadow-xl shadow-primary/15 rounded-lg my-4 py-4 px-4 translate-x-1 animate-fade-right delay-300 duration-500 transition-all ring-1 ring-primary/10'>
            <button
            onClick={(e)=>{
              handleId(e,id)
              setIsHidden(false)
            }}
            >
          <img
            src={image}
            alt="product image zmr shop"
            className='aspect-square max-w-72 max-h-72 rounded-lg'
            />
          </button>
          <h3 className='font-bold text-xl mt-2'>{name}</h3>
          <p className='font-semibold text-black/90'>{`${price}$`}</p>
          <ColorPicker avaliableModels={avaliableModels}/>
          <div className='flex justify-center items-center'>
          <a
            href='https://wa.me/584246077878'
            target='blank'
            className='flex shadow-lg py-2 px-4 my-4 justify-center items-center rounded-md  hover:scale-110 hover:bg-primary hover:shadow-primary/50 hover:text-white transition-all ring-1 ring-primary/5'>
            <Cart/>
            <p>Realizar pedido</p>
          </a>
          </div>
        </div>
        )
      }
    })
  }
</article>
</>
)}
