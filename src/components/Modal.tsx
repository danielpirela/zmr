import { useStore } from '@nanostores/react'
import type { Product } from '../utils/types'
import { $product } from '../store/useStore'

interface ITees {
  category: string
  name: string
  id: number
  price: number,
  available: boolean,
  avaliableModels: string,
  image: string
}
interface Props {
    data: ITees[]
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
        <div className="relative bg-transparent  dark:bg-gray-700">
        <section className="flex justify-center items-center min-w-full h-auto ">
          {
            data.map((product: ITees) => {
              if (product.id === Number($protc.id) && isHidden === false) {
                return (
                  <img  key={product.id} src={product.image} className={`aspect-square max-x-md md:max-w-lg max-h-auto bg-transparent transition-all animate-fade-up delay-300 duration-300 ${isHidden ? 'translate-x-[-50px]' : ''}`}/>
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
