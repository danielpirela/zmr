import { atom, map } from "nanostores"
import { persistentMap } from "@nanostores/persistent"
// ? Types for slices

interface Product {
  category: string
  id: string
}

export interface IsLogged {
  value: true | false
}
export const $isLogged = persistentMap<IsLogged>("isLogged:", {
  value: false,
})

export const $product = map<Product>({
  category: "ZMR",
  id: "",
})
