import { supabase } from "../../utils/supabase"

export async function GET() {
  const { data: Tees, error } = await supabase.from("Tees").select("*")
  return new Response(
    JSON.stringify({
      Tees,
      error,
    })
  )
}

export async function POST({ request }: any) {
  const { category, name, price, available, avaliableModels, image } =
    await request.json()

  console.log(category, name, price, available, avaliableModels, image)

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
