import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useVoteData } from "../components/vote-count/useVoteData";

const ElectionInfoPage = () => {
  const { yes, no, contested, total, neededToWin, status } = useVoteData();
  const electionInfoBody = `
  The election to determine whether Brown's undergraduate CS TAs will 
  form a union will take place on **Thursday, March 2nd, 2023** from **12PM-3PM** 
  and **5PM-8PM** on the **4th Floor of the Sciences Library**. For more information about voting logistics, please see the [TA Union Voting Info](https://docs.google.com/document/d/1z5ETEk940WT4aarkfgHW5w2vilO0B9TRVONGRYoY77c/edit) document that we’ve put together.
  `

  const electionDate = new Date('Thursday March 2, 2023 17:00:00');
  const distance = electionDate - new Date();
  const daysLeft = distance / (1000 * 60 * 60 * 24)
  const isElectionDay = daysLeft < 1;

  let resultStatus;
  if (status == "loading") {
    resultStatus = "coming soon!"
  }
  

  return (
    <div className="page-body">
      <h1>TA Union Election</h1>
      <div className="section-wrapper">
        <h2>Time and Place</h2>
        <ReactMarkdown children={electionInfoBody} />
      </div>
      <div className="section-wrapper">
        <h2>Vote Count</h2>
        {isElectionDay 
          ? <p>placeholder for count</p>
          : <p>
              Visit back here on the day of the election for a <strong>Live Vote Counter</strong> to keep up with the election results!!
            </p>
        }
      </div>
    </div>
  )
}

export default ElectionInfoPage;