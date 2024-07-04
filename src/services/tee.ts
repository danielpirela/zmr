import { $tees } from "../store/useStore"
import { supabase } from "../utils/supabase"

interface ITees {
  category: string
  name: string
  id: number
  price: number
  available: boolean
  avaliableModels: string
  image: string
}

export async function getTees() {
  if (window) {
    const { data: Tees } = await supabase.from("Tees").select("*")
    if (Tees && Tees.length > 0) {
      $tees.setKey("tees", Tees as ITees[])
    }
  } else {
    const response = await fetch("/api/tee/tee.json")
    const { Tees } = await response.json()

    if (Tees && Tees.length > 0) {
      $tees.setKey("tees", Tees as ITees[])
    }
  }
}
