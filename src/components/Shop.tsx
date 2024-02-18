import { useStore } from '@nanostores/react'
import { $product } from '../store/useStore'

import { Card } from './Card'
import { MenuIcon } from './ui/icons/Menu'
import { SearchIcon } from './ui/icons/Search'

import type { Product } from '../utils/types'

interface Props {
    data: Product[]
}

export function Shop ({data}: Props) {

  const $protc = useStore($product)
  let categories = ['ZMR CLUB', 'LANA DEL REY']

  const handleCategory = ({e,category}: {e:any, category:string}) => {
    e.preventDefault()
    $product.setKey('category', category)
  }

  return (
    <>
    <nav
      className="flex justify-center items-center flex-col gap-2 min-w-full mb-10"
    >

    <div className="justify-center items-center gap-4 flex min-w-full">
        <button><SearchIcon /></button>
        <button><MenuIcon /></button>
        <ul className="flex gap-2 justify-center items-center">
        {
            categories.map((category: string) => {
                  return (
                    <button
                    onClick={(e)=> {
                      handleCategory({e,category})
                    }}
                    className={`${category === $protc.category ?  'ring-primary ring-2' : " "} rounded-full px-3 hover:bg-primary hover:scale-110 duration-500 transition-all hover:mx-2 hover:text-white font-semibold`}
                    >
                {category}
                </button>
              )
            })
          }
        </ul>
    </div>
    </nav>
    <section className="flex justify-center items-center min-w-full h-auto">
        <Card products={data} />
    </section>
    </>
  )
}
