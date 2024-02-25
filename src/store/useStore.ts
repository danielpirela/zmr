import { atom, map } from "nanostores"

// ? Types for slices

interface Product {
  category: string
  id: string
}

export const $isLogged = atom<boolean>(false)

export const $product = map<Product>({
  category: "ZMR",
  id: "",
})
