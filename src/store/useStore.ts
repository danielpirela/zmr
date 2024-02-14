import { atom, map } from "nanostores"

// ? Types for slices

interface categorySlice {
  category: string
}

export const $isLogged = atom<boolean>(false)

export const $category = map<categorySlice>({
  category: "ZMR CLUB",
})
