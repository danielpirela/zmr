import { map } from "nanostores"
import { persistentMap } from "@nanostores/persistent"
// ? Types for slices

interface Product {
  category: string
  id: string
}

export const $isLogged = persistentMap("isLogged:", {
  value: "false",
})

export const $product = map<Product>({
  category: "ZMR",
  id: "",
})
