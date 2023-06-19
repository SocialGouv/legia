import { Configuration, OpenAIApi } from "openai"

import type { ChatCompletionRequestMessage } from "openai"

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.OPENAI_API_ORG_ID,
})

const openai = new OpenAIApi(configuration)

export default async function useOpenAI(
  messages: ChatCompletionRequestMessage[]
) {
  const completion = await openai.createChatCompletion({
    messages,
    model: "gpt-3.5-turbo",
  })

  return completion.data.choices[0].message
}
