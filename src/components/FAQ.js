import "./FAQ.css"

const FAQ = ( { question, answer }) => (
  <div className="faq">
    <p className="faq-question">
      {question}
    </p>
    <hr />
    <div className="faq-answer">
      {answer.map((paragraph) => (
        <p>
          {paragraph}
        </p>
      ))}
    </div>
  </div>
)

export default FAQ; 