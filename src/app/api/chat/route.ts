import OpenAI from "openai"
import { OpenAIStream, StreamingTextResponse } from "ai"

interface Message {
  content: string
  role: "system" | "assistant" | "user"
}

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export const runtime = "edge"

export async function POST(req: Request) {
  const { messages }: { messages: Message[] } = await req.json()

  const response = await openai.chat.completions.create({
    messages,
    stream: true,
    temperature: 0.1,
    model: "gpt-3.5-turbo-16k-0613",
  })

  const stream = OpenAIStream(response)

  return new StreamingTextResponse(stream)
}
