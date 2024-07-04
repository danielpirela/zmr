import { map } from "nanostores"
import { persistentMap } from "@nanostores/persistent"
import { getTees } from "../services/tee"
// ? Types for slices

interface Product {
  category: string
  id: string
}

interface Tee {
  category: string
  name: string
  id: number
  price: number
  available: boolean
  avaliableModels: string
  image: string
}

interface Tees {
  tees: Tee[]
}

interface Categories {
  categories: string[]
}

export const $isLogged = persistentMap("isLogged:", {
  value: "false",
})

export const $product = map<Product>({
  category: "ZMR",
  id: "",
})

export const $tees = map<Tees>({ tees: [] })

export const $categories = map<Categories>({ categories: [] })
