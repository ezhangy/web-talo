import { useEffect, useState } from 'react';

const useMarkdown = (filepath) => {
  const [markdownText, setMarkdownText] = useState('');
  useEffect(() => {
    fetch(filepath)
      .then((response) => response.text())
      .then((text) => setMarkdownText(text))
      .catch((err) => console.log(err));
  }, [filepath]);

  return markdownText;
};

export default useMarkdown;
