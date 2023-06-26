interface Prompt {
  system: string
}

const Prompts = {
  "indemnite-licenciement": {
    system: "Tu es un assistant juridique.",
  },
  "preavis-demission": {
    system: "Tu es un assistant juridique.",
  },
  "preavis-licenciement": {
    system: "Tu es un assistant juridique.",
  },
  "trouver-convention-collective": {
    system:
      "Tu es un assistant en charge de déterminer à quelle convention collective française ton interlocuteur est rattaché.",
  },
  "preavis-depart-ou-retraite": {
    system: "Tu es un assistant juridique.",
  },
} as const satisfies Record<string, Prompt>

export default Prompts
