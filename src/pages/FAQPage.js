import "./FAQPage.css"

import { Helmet } from "react-helmet"
import FAQ from "../components/FAQ"
import faqMarkdownFile from "../markdown/FAQ.md"
import useCreateFAQFromMarkdown from "./hooks/createFAQFromMarkdown"

const FAQPage = () => {
  const faqObjects = useCreateFAQFromMarkdown(faqMarkdownFile)
  return (!faqObjects) ? null :(
    <>
      <Helmet>
        <title>Frequently Asked Questions - Brown CS TA Labor Organization</title>
        <meta 
          name="description" 
          content="What will the union do for me? How will my life change once we’re unionized?" 
        />
      </Helmet>
      <main name="maincontent" id="maincontent" className="FAQPage page-body">
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
      </main>
    </>
    )
}

export default FAQPage