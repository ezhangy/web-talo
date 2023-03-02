import { useVoteData } from '@components/vote-count/useVoteData';
import VoteCountSection from '@components/vote-count/VoteCountSection';

const ElectionInfo = () => {
  const { yes, no, contested, total, neededToWin, status } = useVoteData();
  const electionDate = new Date('Thursday March 2, 2023 17:00:00');
  const distance = electionDate - new Date();
  const daysLeft = distance / (1000 * 60 * 60 * 24);
  const isElectionDay = daysLeft < 1;
  const resultStatus = !isElectionDay
    ? 'coming soon'
    : status === 'loading'
    ? 'coming soon'
    : status === 'beforeResult'
    ? 'live!'
    : status;

  return (
    <div className="section-wrapper">
      <h2 id="vote-count-header">
        <span>Vote Count</span>
        <span id="result-status">{resultStatus}</span>
      </h2>
      {isElectionDay ? (
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
  );
};

export default ElectionInfo;
