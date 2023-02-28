import "./ElectionInfoPage.css"

import { Helmet } from "react-helmet"
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useVoteData } from "../components/vote-count/useVoteData";
import VoteCountSection from "../components/VoteCountSection";
import electionFAQFile from "../markdown/electionFAQ.md"
import useCreateFAQFromMarkdown from "./hooks/useCreateFAQFromMarkdown";
import FAQ from "../components/FAQ";

const ElectionInfoPage = () => {
  const { yes, no, contested, total, neededToWin, status } = useVoteData();

  // markdown 
  const faqObjects = useCreateFAQFromMarkdown(electionFAQFile)
  const electionInfoBody = `
  The election to determine whether Brown's undergraduate CS TAs will 
  form a union will take place:
  
  **Thursday, March 2nd, 2023 from 12PM-3PM and 5PM-8PM on the 4th Floor of the Sciences Library**. 
  
  For more information about voting logistics, please see the [TA Union Voting Info](https://docs.google.com/document/d/1z5ETEk940WT4aarkfgHW5w2vilO0B9TRVONGRYoY77c/edit) document that we’ve put together.
  `

  // constants for live vote tracker
  const electionDate = new Date('Thursday March 2, 2023 17:00:00');
  const distance = electionDate - new Date();
  const daysLeft = distance / (1000 * 60 * 60 * 24)
  const isElectionDay = daysLeft < 1;
  const resultStatus = !isElectionDay ? "coming soon"
    : status === "loading" ? "coming soon"
    : status === "beforeResult" ? "live!"
    : status

  return (
    <>
      <Helmet>
        <title>Election Info - Brown CS TA Labor Organization</title>
        <meta 
          name="description" 
          content="The election to determine whether Brown's undergraduate CS TAs will form a union will take place on Thursday, March 2nd, 2023 from 12PM-3PM and 5PM-8PM on the 4th Floor of the Sciences Library." 
        />
      </Helmet>
      <main name="maincontent" id="maincontent" className="ElectionInfoPage page-body">
        <h1>TA Union Election</h1>
        <div className="section-wrapper">
          <h2>Time and Place</h2>
          <ReactMarkdown children={electionInfoBody} />
        </div>
        <div className="section-wrapper">
            <h2 id="vote-count-header"><span>Vote Count</span><span id="result-status">{resultStatus}</span></h2>
            {isElectionDay 
              ? <VoteCountSection
                  yes={yes} 
                  no={no}
                  contested={contested} 
                  total={total}
                  neededToWin={neededToWin}
                />
              : <p>
                  Visit back on election day to keep up with live election results!!
                </p>
            }
          </div>
          <div className="section-wrapper">
            <h2>Election FAQs</h2>
            <div className="electionFAQ">
              {faqObjects.map((faqObj) => (
                <FAQ
                  key={faqObj.id} 
                  questionText={faqObj.questionText}
                  answerMarkdown={faqObj.answerMarkdown} 
                />
              ))}
          </div>
          <p className="note">If you have any other questions. DM us or email talabororg@gmail.com!</p>
        </div>
    </main>
    </>
  )
}

export default ElectionInfoPage;