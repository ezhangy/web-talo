import FAQ from "../components/FAQ"

const FAQPage = () => {
  const faqList = require("./faqs.json")
  const testFaqList = [{
    id: "testID", 
    question: "testQuestion", 
    answer: "testAnswer"
  }]

  return (
  <div className="page-wrapper">
      <h1>Frequently Asked Questions</h1>
      {faqList.map((faq) => (
        <FAQ
          key={faq.id} 
          question={faq.question}
          answer={faq.answer} 
        />
      ))}
  </div>
  )
}

export default FAQPage