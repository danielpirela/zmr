import { supabase } from "../../../utils/supabase"

export async function GET() {
  const { data: Category } = await supabase.from("Category").select("*")

  if (!Category) {
    return new Response(
      JSON.stringify({
        status: 404,
        message: "notFound",
      })
    )
  }

  return new Response(
    JSON.stringify({
      Category,
      status: 200,
    })
  )
}
