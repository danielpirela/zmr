import type { string } from "astro/zod"
import { supabase } from "../utils/supabase"
import { $categories } from "../store/useStore"

export const parseCategory = (category: string[]) => {
  category.map((category, index) => {
    return {
      id: index,
      category: category,
    }
  })
}

export async function getCategories() {
  if (window) {
    const { data: Category } = await supabase.from("Category").select("*")
    if (Category && Category.length > 0) {
      $categories.setKey("categories", Category[0].categories)
    }
  }
  const response = await fetch("/api/category/category.json")
  const { Category } = await response.json()

  if (Category && Category.length > 0) {
    $categories.setKey("categories", Category[0].categories)
  }
}

export async function updateCategories(category: string) {
  const { categories } = $categories.get()

  const filteredCategories = categories.includes(category)
  if (!filteredCategories) {
    categories.push(category)
  }

  const { data: Category, error } = await supabase
    .from("Category")
    .update({
      categories: categories,
    })
    .eq("id", 1)
    .select("*")

  console.log(categories)
}
