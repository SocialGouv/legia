import { encode } from "gpt-3-encoder"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const body = await request.text()
  console.log("body", body)
  // const encoded = encode(body) // WTF ?
  const encoded = [1, 2, 3, 4]
  console.log("encoded", encoded.length)
  return NextResponse.json(encoded)
}
