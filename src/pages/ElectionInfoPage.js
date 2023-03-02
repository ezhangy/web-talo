import './ElectionInfoPage.css';

import { Helmet } from 'react-helmet';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import FAQ from '../components/FAQ';
import { useVoteData } from '../components/vote-count/useVoteData';
import VoteCountSection from '../components/VoteCountSection';
import electionFAQFile from '../markdown/electionFAQ.md';
import useCreateFAQFromMarkdown from './hooks/useCreateFAQFromMarkdown';
import { getCountDownVals } from './utils/countDownUtil';

const ElectionInfoPage = () => {
  const { yes, no, contested, total, neededToWin, status } = useVoteData();

  // markdown
  const faqObjects = useCreateFAQFromMarkdown(electionFAQFile);
  const electionInfoBody = `
  The election to determine whether Brown's undergraduate CS TAs will 
  form a union will take place:
  
  **Thursday, March 2nd, 2023 from 12PM-3PM and 5PM-8PM on the 4th Floor of the Sciences Library**. 
  
  For more information about voting logistics, please see the [TA Union Voting Info](https://docs.google.com/document/d/1z5ETEk940WT4aarkfgHW5w2vilO0B9TRVONGRYoY77c/edit) document that we’ve put together.
  `;

  // constants for live vote tracker
  const { 
    daysUntilElection, 
    hoursUntilElection, 
    hasLiveCountStarted, 
    isElectionPast
  } = getCountDownVals(new Date());
  
  const resultReached = status == "win" && status == "loss"

  const resultStatus = !hasLiveCountStarted
    ? 'coming soon'
    : status === 'loading'
    ? 'coming soon'
    : status === 'beforeResult'
    ? 'live!'
    : status;

  return (
    <>
      <Helmet>
        <title>Election Info - Brown CS TA Labor Organization</title>
        <meta
          name="description"
          content="The election to determine whether Brown's undergraduate CS TAs will form a union will take place on Thursday, March 2nd, 2023 from 12PM-3PM and 5PM-8PM on the 4th Floor of the Sciences Library."
        />
      </Helmet>
      <main
        name="maincontent"
        id="maincontent"
        className="ElectionInfoPage page-body"
      >
        <h1>TA Union Election</h1>
        <div className="section-wrapper">
          <h2>Time and Place</h2>
          <ReactMarkdown children={electionInfoBody} />
        </div>
        <div className="section-wrapper">
          <h2 id="vote-count-header">
            <span>Vote Count</span>
            <span id="result-status">{resultStatus}</span>
          </h2>
          {hoursUntilElection < 8 && !hasLiveCountStarted 
            ? (<p>
                <strong>The vote count will begin at 8PM on Thursday.</strong> You can watch
                in person at the SciLi, or virtually at <a href="https://www.zoomgov.com/j/1603612638?pwd=ZFh5aEU0aVdDTlVINWczekp6VGc2dz09">this NRLB livestream</a>. Results will also be updated live on this page.
              </p>
            )
            : hasLiveCountStarted && !resultReached ? (
              <p>
                <strong>Votes are being counted now.</strong> You can watch
                in person at the SciLi, or virtually at <a href="https://www.zoomgov.com/j/1603612638?pwd=ZFh5aEU0aVdDTlVINWczekp6VGc2dz09">this NRLB livestream</a>. Results are also being updated live on this page.
              </p>
            )
            : (<></>) 
        }
          {hoursUntilElection < 8 ? (
            <VoteCountSection
              yes={yes}
              no={no}
              contested={contested}
              total={total}
              neededToWin={neededToWin}
            />
          ) : (
            <p>
              Visit back on election day to keep up with live election results!!
            </p>
          )}
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
          <p className="note">
            If you have any other questions. DM us or email
            talabororg@gmail.com!
          </p>
        </div>
      </main>
    </>
  );
};

export default ElectionInfoPage;
