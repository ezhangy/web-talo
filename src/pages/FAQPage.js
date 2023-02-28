import "./FAQPage.css"

import FAQ from "../components/FAQ"

import faqMarkdownFile from "../markdown/FAQ.md"
import useCreateFAQFromMarkdown from "./hooks/useCreateFAQFromMarkdown"

const FAQPage = () => {
  const faqObjects = useCreateFAQFromMarkdown(faqMarkdownFile)
  return (
    <div className="FAQPage page-body">
        <h1>Frequently Asked Questions</h1>
        {faqObjects.map((faqObj) => (
          <FAQ
            key={faqObj.id} 
            isExpandable={true}
            questionText={faqObj.questionText}
            answerMarkdown={faqObj.answerMarkdown} 
          />
        ))}
        <em><b>This FAQ was inspired by the FAQ written by undergraduate organizers at Wesleyan University.</b></em>
    </div>
    )
}

export default FAQPage