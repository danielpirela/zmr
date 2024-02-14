import { useEffect, useState } from 'react'
import type { Product } from "../utils/types"
import {Cart} from "./ui/icons/Cart"

import { useStore } from '@nanostores/react'
import { $category } from '../store/useStore'

interface Props {
  products: Product[]
}

export function Card({products} : Props) {

  const category  = useStore($category)

  return (
  <article className='flex justify-center items-center flex-col min-w-full min-h-auto'>
    {
      products.map((product : Product) =>{
        const {available,id,image,name,price} = product
        if (product.category === String(category.category)){
          return (
            <div key={id} className='shadow-xl rounded-lg my-4 py-4 px-2'>
          <img
            src={image}
            alt="product image zmr shop"
            className='aspect-square max-w-72 max-h-72 rounded-lg'
            />
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
)}
