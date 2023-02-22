import "./FAQ.css"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import { useState } from "react"

const FAQ = ( { questionText, answerMarkdown }) => {
  const [isOpen, setIsOpen] = useState(false)


  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
  <div className="faq">
    <button 
      className={`faq-question ${isOpen ? "active" : ""}`}
      onClick={handleClick}
    >
        {questionText}
    </button>
    {
    isOpen 
      ? (<ReactMarkdown 
          children={answerMarkdown}
          className="faq-answer"
        />)
      : (<></>)
    }

  </div>
)}

export default FAQ; 