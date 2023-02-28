import { useEffect, useState } from "react"
import { marked } from "marked"

const createFaqObjects = (tokens) => {
  const removeLeadingSpaceTokens = () => {
    let index = 0
    while (tokens[index].type === "space") {
      tokens.shift()
    }
  }
  /*
  faqObjects contains an array of objects representing a single FAQ. Each FAQ object contains two properties: 
  1) questionToken: markdown of questions (all h2 elements)
  2) answerTokens: markdown of corresponding answer
  */
  const faqObjects = []

  // declare variable to track which FAQ object an answer token should be appended to
  let faqIndex;

  // remove space tokens between beginning of file and next header
  removeLeadingSpaceTokens();

  // check that start of markdown file begins with a heading
  if (tokens[0].type === "heading") {
    // set faqIndex to -1 since it will be immediately incremented
    faqIndex = -1;
  } else {
    console.log("Markdown file containing FAQs must begin with heading")
  }

  tokens.forEach((token, index) => {
    if (token.type === "heading" && token.depth === 2) {
      faqIndex += 1;
      faqObjects.push({
        id: faqIndex,
        questionText: token.text,
        answerMarkdown: ""
      })
    } else {
      faqObjects[faqIndex].answerMarkdown += token.raw;
    }
  })

  return faqObjects
}

const createFAQFromMarkdown = (markdownFilepath) => {
  const [faqObjects, setFaqObjects] = useState([])

  useEffect(() => {
    fetch(markdownFilepath)
      .then((response) => response.text())
      .then((text) => (marked.lexer(text)))
      .then((tokens => createFaqObjects(tokens)))
      .then((newFaqObjects) => setFaqObjects(newFaqObjects))
      .catch((err) => console.log(err))
  }, [markdownFilepath])

  return faqObjects
}

export default createFAQFromMarkdown

