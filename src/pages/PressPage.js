import "./PressPage.css"

import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import linksMarkdownFile from "../markdown/links.md"
import useMarkdown from "./hooks/useMarkdown"

const PressPage = () => {
  const linksMarkdown = useMarkdown(linksMarkdownFile)

  // - [12/05/2022 - Brown Daily Herald Article on CS TA Unionization](https://www.browndailyherald.com/article/2022/12/cs-undergraduate-tas-announce-plans-to-form-union)

  return (
    <div className="PressPage page-body">
      <h1>Press</h1>
      <ReactMarkdown 
        children={linksMarkdown}
      />
    </div>
  )
}

export default PressPage;