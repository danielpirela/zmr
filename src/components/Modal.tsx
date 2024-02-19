import { useStore } from '@nanostores/react'
import type { Product } from '../utils/types'
import { $product } from '../store/useStore'

interface Props {
    data: Product[]
    isHidden: boolean
    children: React.ReactNode
}

export function Modal({data , isHidden , children}: Props){
  const $protc = useStore($product)

  return (
    <>
<div id="default-modal" tabIndex={-1} aria-hidden="true" className={`${isHidden ? 'hidden' : 'fixed'} overflow-y-auto overflow-x-hidden top-0 right-0 left-0 z-50 flex justify-center items-center min-w-full md:inset-0 h-[calc(100%-1rem)] min-h-screen bg-black/40 `}>
    {children}
    <div className="relative p-4 w-full min-w-full min-h-screen bg-transparent flex justify-center items-center">
        <div className="relative bg-transparent rounded-lg shadow dark:bg-gray-700 min">
        <section className="flex justify-center items-center min-w-full h-auto">
          {
            data.map((product: Product) => {
              if (product.id === $protc.id && isHidden === false) {
                return (
                  <img src={product.image} className={`aspect-square max-w-lg max-h-auto rounded-lg transition-all animate-fade-up delay-300 duration-300 ${isHidden ? 'translate-x-[-50px]' : ''}`}/>
                  )
              }
            })
          }
        </section>
        </div>
    </div>
</div>

    </>
  )
}
