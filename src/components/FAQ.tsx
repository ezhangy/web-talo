import { useState } from 'react';

type Props = {
  question: string;
  children: React.ReactNode;
};

const FAQ = ({ question, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className={`faq-question ${isOpen ? 'active' : ''}`}
        onClick={handleClick}
      >
        {question}
      </button>
      {isOpen && children ? children : <></>}
    </>
  );
};

export default FAQ;
