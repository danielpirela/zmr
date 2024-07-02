import { getTees } from "../../../services/tee"
import { supabase } from "../../../utils/supabase"

export async function GET() {
  const { data: Tees, error } = await supabase.from("Tees").select("*")
  if (!Tees || Tees.length < 0) {
    return new Response(
      JSON.stringify({
        error,
        status: 200,
      })
    )
  }

  return new Response(
    JSON.stringify({
      Tees,
      status: 200,
    })
  )
}

export async function POST({ request }: any) {
  const { category, name, price, available, avaliableModels, image } =
    await request.json()

  if (
    !category &&
    !name &&
    !price &&
    !available &&
    !avaliableModels &&
    !image
  ) {
    return new Response(
      JSON.stringify({ status: 404, message: "missing data" })
    )
  }

  const { data, error } = await supabase
    .from("Tees")
    .insert([
      {
        category: category,
        name: name,
        price: price,
        available: available,
        avaliableModels: avaliableModels,
        image: image,
      },
    ])
    .select()

  if (error || !data) {
    return new Response(
      JSON.stringify({ status: 404, message: "The tee cannot be created" })
    )
  }

  return new Response(JSON.stringify({ status: 200, message: "Succes" }))
}
