import { map } from "nanostores"
import { persistentMap } from "@nanostores/persistent"
import type { BooleanLiteral } from "typescript"
import { string } from "astro/zod"
// ? Types for slices

interface Product {
  category: string
  id: string
}

export interface IsLogged {
  value: "true" | "false"
}

export const $isLogged = persistentMap("isLogged:", {
  value: "false",
})

export const $product = map<Product>({
  category: "ZMR",
  id: "",
})
