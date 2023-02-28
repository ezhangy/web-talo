import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import useMarkdown from "../pages/hooks/createMarkdown"
import "./PressRelease.css"

const PressRelease = ({ markdownFilePath, date }) => {
  const releaseMarkdown = useMarkdown(markdownFilePath)
  
  return (
    <div className="PressRelease page-body">
      <div className="header">
        <h1>Press Release</h1>
        <p className="date">
          {date}
        </p>
      </div>
      <div className="release-body">
        <ReactMarkdown children={releaseMarkdown} />
      </div>
    </div>
  )
}

export default PressRelease