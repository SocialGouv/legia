import { Configuration, OpenAIApi } from "openai-edge"
import { OpenAIStream, StreamingTextResponse } from "ai"

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.OPENAI_API_ORG_ID,
})

const openai = new OpenAIApi(config)

export const runtime = "edge"

export async function POST(req: Request) {
  const { messages } = await req.json()

  const response = await openai.createChatCompletion({
    messages,
    stream: true,
    model: "gpt-3.5-turbo-16k-0613",
  })

  const stream = OpenAIStream(response)

  return new StreamingTextResponse(stream)
}
