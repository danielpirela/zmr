import type { Product } from "../utils/types"
import {Cart} from "./ui/icons/Cart"

import { useStore } from '@nanostores/react'
import { $product} from '../store/useStore'
import { Modal } from './Modal'
import { useState } from 'react'

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
                type="button"
                className={`z-50 text-gray-400 bg-transparent  hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white absolute right-10 top-10 ${isHidden ? 'hidden' : 'flex'}`}
                data-modal-hide="default-modal"
                onClick={
                  (e) => {
                    e.preventDefault()
                    setIsHidden(true)
                  }
                }
                >
                    <svg className="w-3 h-3 hover:scale-150 transition-all hover:animate-twice duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
    </button>
    </Modal>

    <article className='flex justify-center items-center flex-col min-w-full min-h-auto'>
    {
      products.map((product : Product) =>{
        const {available,id,image,name,price} = product
        if (product.category === String($protc.category)){
          return (
            <div key={id} className='shadow-xl rounded-lg my-4 py-4 px-2 translate-x-1 animate-fade-right delay-300 duration-500 transition-all'>
            <button data-modal-target="default-modal" data-modal-toggle="default-modal" type="button"
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
          <h3>{name}</h3>
          <p>{price}</p>
          <p>disponible: {available}</p>
          <div className='flex justify-center items-center'>
          <a
            href='https://wa.me/584246077878'
            target='blank'
            className='flex shadow-lg py-2 px-4 mt-2 justify-center items-center rounded-md  hover:scale-110 hover:bg-primary hover:text-white transition-all'>
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
