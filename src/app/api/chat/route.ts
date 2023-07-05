import { StreamingTextResponse, LangChainStream } from "ai"
import { CheerioWebBaseLoader } from "langchain/document_loaders/web/cheerio"
import { ConversationalRetrievalQAChain } from "langchain/chains"
import { MemoryVectorStore } from "langchain/vectorstores/memory"
import { OpenAIEmbeddings } from "langchain/embeddings/openai"
import { ChatOpenAI } from "langchain/chat_models/openai"

interface Message {
  content: string
  role: "system" | "assistant" | "user"
}

export const runtime = "edge"

const QA_PROMPT = `Vous êtes un assistant juridique. Utilisez uniquement les éléments de contexte pour répondre à la question.
Votre réponse doit uniquement être en français.
Si vous ne connaissez pas la réponse, dites simplement que vous ne savez pas. N'essayez PAS d'inventer une réponse.
Si la question n'est pas liée au contexte, répondez poliment que vous êtes réglé pour répondre uniquement aux questions liées au contexte.

{context}

Question: {question}
`

export async function POST(req: Request) {
  const { messages }: { messages: Message[] } = await req.json()

  const history = messages.map((message) => message.content)
  const historyMessage = history.reduce((a, b) => a + b, "")
  let sanitizedQuestion = ""
  if (history.length > 0) {
    sanitizedQuestion = history[history.length - 1].trim().replaceAll("\n", " ")
  }

  if (sanitizedQuestion.length < 3) {
    return new StreamingTextResponse(new ReadableStream())
  }

  const { stream, handlers } = LangChainStream()

  const loader = new CheerioWebBaseLoader(
    "https://code.travail.gouv.fr/contribution/les-conges-pour-evenements-familiaux"
  )

  const docs = await loader.loadAndSplit()

  const vectorStore = await MemoryVectorStore.fromDocuments(
    docs,
    new OpenAIEmbeddings({ openAIApiKey: process.env.OPENAI_API_KEY })
  )

  const model = new ChatOpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
    streaming: true,
    modelName: "gpt-3.5-turbo-16k-0613",
    temperature: 0,
  })

  const chain = ConversationalRetrievalQAChain.fromLLM(
    model,
    vectorStore.asRetriever(),
    {
      returnSourceDocuments: true,
      qaTemplate: QA_PROMPT,
    }
  )

  const res = await chain.call(
    {
      question: sanitizedQuestion,
      chat_history: historyMessage,
    },
    [
      {
        handleLLMNewToken: (token) => {
          console.log(token)
        },
      },
    ]
  )

  handlers.handleLLMNewToken(res.text)
  handlers.handleLLMNewToken(
    "\n\n\n Les documents qui ont permis de répondre à la question sont : \n"
  )
  handlers.handleLLMNewToken(JSON.stringify(res, null, 2))

  return new StreamingTextResponse(stream)
}
