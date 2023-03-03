import { useVoteData } from '@components/vote-count/useVoteData';
import VoteCountSection from '@components/vote-count/VoteCountSection';
import '@styles/ElectionInfoPage.css';
import { getCountDownVals } from '@components/vote-count/countDownUtil';

const ElectionInfoPage = () => {
  const { yes, no, contested, total, neededToWin, status } = useVoteData();

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
    : status === 'win'
    ? 'win 🎉'
    : 'live!'

  return (
    <div>
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
      </div>
  );
};

export default ElectionInfoPage;