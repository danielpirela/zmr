import { useStore } from '@nanostores/react'
import { $product} from '../store/useStore'

import { Card } from './Card'
import { MenuIcon } from './ui/icons/Menu'
import { SearchIcon } from './ui/icons/Search'
import { useEffect, useState } from 'react'
import { SkeletonCard } from './ui/SkeletonCard'
import { getTees } from '../services/tee'
interface ITees {
  category: string
  name: string
  id: number
  price: number,
  available: boolean,
  avaliableModels: string,
  image: string
}

export function Shop () {
  const $protc = useStore($product)
  let categories = ['ZMR','TAYLOR S','FUNNY','⭐️','SANRIO','FABS']
  const [isView, setIsView] = useState<boolean>(false)
  const handleCategory = ({e,category}: {e:any, category:string}) => {
    e.preventDefault()
    $product.setKey('category', category)
  }

  useEffect(() => {
        getTees()
  },[])

  return (
    <>
    <nav
      className="flex justify-center items-center flex-col gap-2 min-h-20  mb-10 p-2"
    >

    <div className={`justify-center ${isView ? 'items-start ' : 'items-center'} gap-4 flex `}>
        <button><SearchIcon /></button>
        <button className="flex justify-start items-start" onClick={
          (e) => {
            e.preventDefault()
            setIsView(!isView)
          }
        }>
          <MenuIcon />
          {
            <ul className={` grid grid-cols-2 justify-center items-center gap-2 ml-2 ${isView ? '' : 'hidden'} transition-all delay-300 duration-300 animate-fade-right flex-1 `}>
              {
                categories.map((category: string) => {
                  return (
                    <button
                    key={category}
                    onClick={(e) => handleCategory({e,category})}
                    className={` w-full `}
                    >
                      <p className={`hover:text-lg transition-all delay-300 duration-300 ring-primary ring-2 rounded-full px-2 ${category === $protc.category ? 'bg-primary text-white' : 'bg-transparent text-gray-700'}`}>{category}</p>
                    </button>
                  )
                })
              }
            </ul>
          }
          </button>
        <ul className="flex gap-1 justify-center items-center animate-fade-left transition-all delay-300 duration-300 p-1">
        {
          categories && (

            categories.map((category: string , index) => {
              return (
                <button
                key={category}
                onClick={(e)=> {
                      handleCategory({e,category})
                    }}
                    className={`${index > 3 ? 'hidden' : ''} ${category === $protc.category ?  'ring-primary ring-2' : " "} ${isView ?  'hidden' : ""}  rounded-full px-2 hover:bg-primary hover:scale-105 animate-fade hover:mx-2 hover:duration-500 hover:text-white font-semibold text-nowrap`}
                    >
                {category}
                </button>
              )
            })
            )
          }
        </ul>
    </div>
    </nav>
    <section className="flex justify-start items-center min-w-full h-auto">
      <Card/>
    </section>
    </>
  )
}
