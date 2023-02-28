import "./FAQ.css"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import { useState } from "react"

const ExpandableFAQ = ({ questionText, answerMarkdown }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button 
        className={`faq-question ${isOpen ? "active" : ""}`}
        onClick={handleClick}
      >
      {questionText}
      </button>
        
      {isOpen 
      ? (<ReactMarkdown 
          children={answerMarkdown}
          className="faq-answer"
        />)
      : (<></>)
      }
    </>
)}


const FAQ = ( { isExpandable, questionText, answerMarkdown }) => {
  return (
  <div className="faq">
    {isExpandable 
      ? <ExpandableFAQ 
          questionText={questionText}
          answerMarkdown={answerMarkdown}
        />
      : (<>
          <p className="faq-question">{questionText}</p>
          <p className="faq-answer"> 
            <ReactMarkdown 
              children={answerMarkdown}
              className="faq-answer"
            />
          </p>
        </>)
    }
  </div>
)}

export default FAQ; 