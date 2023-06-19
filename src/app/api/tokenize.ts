import { encode } from "gpt-3-encoder"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body } = req
  const encoded = encode(body)

  res.send(encoded)
}
