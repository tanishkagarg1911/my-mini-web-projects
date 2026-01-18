const quotes = [ "Believe you can and you’re halfway there.",
  "Success is the sum of small efforts repeated daily.",
  "Dream big, start small, act now.",
  "Discipline beats motivation every time.",
  "Your future is created by what you do today.",
  "Stay consistent, results will follow.",
  "Don’t stop until you’re proud.",
  "Progress over perfection.",
  "Work hard in silence, let success make the noise.",
  "You are capable of amazing things."
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")


function generateQuote(){

         if(usedIndexes.size>=quotes.length){
            usedIndexes.clear()
}


while(true){
       const randomIdx = Math.floor(Math.random() * quotes.length)

        if(usedIndexes.has(randomIdx)) continue

        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break
}
}