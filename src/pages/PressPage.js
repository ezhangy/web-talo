import "./PressPage.css"

import { Helmet } from "react-helmet"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import linksMarkdownFile from "../markdown/links.md"
import useMarkdown from "./hooks/createMarkdown"

const PressPage = () => {
  const linksMarkdown = useMarkdown(linksMarkdownFile)

  // - [12/05/2022 - Brown Daily Herald Article on CS TA Unionization](https://www.browndailyherald.com/article/2022/12/cs-undergraduate-tas-announce-plans-to-form-union)

  return (!linksMarkdown) ? null :(
    <>
      <Helmet htmlAttributes>
        <title>Press - Brown CS TA Labor Organization</title>
        <meta 
          name="description" 
          content="Noninterference and Fair Election Principles for TA Unionization• 12/05/2022 - Our Press Release" 
        />
      </Helmet>
      <main name="maincontent" id="maincontent" className="PressPage page-body">
        <h1>Press</h1>
        <ReactMarkdown 
          children={linksMarkdown}
        />
      </main>
    </>
  )
}

export default PressPage;