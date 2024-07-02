import { supabase } from "../../../utils/supabase"

export async function POST({ request }: any) {
  const { username, password } = await request.json()
  const { data: User, error } = await supabase.from("User").select()

  if (!username && !password && error && !User) {
    return new Response(JSON.stringify({ status: 404, message: "notFound" }))
  }
  if (username && password && User) {
    if (username === User[0].username && password === User[0].password) {
      return new Response(JSON.stringify({ status: 200, message: "Success" }))
    }
    return new Response(
      JSON.stringify({ status: 304, message: "Verification failed" })
    )
  }
}
