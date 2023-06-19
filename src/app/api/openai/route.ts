import { NextResponse } from "next/server"

import OpenAI from "@/lib/openai"

export async function POST(request: Request) {
  const body = await request.json()
  const result = await OpenAI(body)
  return NextResponse.json({ result })
}
