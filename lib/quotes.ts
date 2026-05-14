export type CuratedQuote = {
  text: string
  author: string
}

export const CURATED_QUOTES: CuratedQuote[] = [
  {
    text: "Price is what you pay. Value is what you get.",
    author: "Warren Buffett",
  },
  {
    text: "Risk comes from not knowing what you are doing.",
    author: "Warren Buffett",
  },
  {
    text: "If you are not willing to risk the usual, you will have to settle for the ordinary",
    author: "Jim Rohn",
  },
  {
    text: "The big money is not in the buying or selling, but in the waiting.",
    author: "Charlie Munger",
  },
  {
    text: "Knowing what you don't know is more useful than being brilliant.",
    author: "Charlie Munger",
  },
  {
    text: "Pain plus reflection equals progress.",
    author: "Ray Dalio",
  },
  {
    text: "An accurate understanding of reality is the essential foundation for good outcomes.",
    author: "Ray Dalio",
  },
  {
    text: "Stubborn on vision. Flexible on details.",
    author: "Jeff Bezos",
  },
  {
    text: "Focus on what makes things better, not what makes things easy.",
    author: "Jeff Bezos",
  },
  {
    text: "What gets measured gets managed.",
    author: "Peter Drucker",
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    text: "Make something people want.",
    author: "Paul Graham",
  },
  {
    text: "It's hard to do a really good job on anything you don't think about in the shower.",
    author: "Paul Graham",
  },
  {
    text: "Be fearful when others are greedy and greedy when others are fearful.",
    author: "Warren Buffett",
  },
]

export function pickQuoteForLocalDate(d: Date): CuratedQuote {
  const key = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
  let h = 2166136261
  for (let i = 0; i < key.length; i++) {
    h ^= key.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  const idx = Math.abs(h) % CURATED_QUOTES.length
  return CURATED_QUOTES[idx]!
}
