import { formatPercentage } from './useVoteData';
import './VoteCountBar.css';

// from NYT Tech Guild's site https://github.com/newsguildny/nytimesguild.org/blob/4e9e5cbfabaf59e255997542acdfd92db74c4599/src/components/vote-count/VoteCountBar.tsx
const VoteCountBar = ({ yes, no, total, neededToWin }) => {
  const winLabelWidth = 100; //in pixel units

  return (
    <div className="VoteCountBar">
      <div className="bar-labels">
        <div className="yes-label">
          Yes:{' '}
          <span className="yes-count">
            {yes} ({formatPercentage(yes, total)})
          </span>
        </div>
        <div
          className="win-label"
          style={{
            left: `calc(max(${
              total ? (neededToWin / total) * 100 : 0
            }%, 50%) - ${winLabelWidth / 2}px)`,
            width: `${winLabelWidth}`,
          }}
        >
          {total ? `${neededToWin} to win` : '--'}
        </div>
        <div className="no-label">
          No:{' '}
          <span className="no-count">
            {no} ({formatPercentage(no, total)})
          </span>
        </div>
      </div>
      <div className="bar">
        <div
          className="bar-yes"
          style={{
            width: `calc(max(${total ? (yes / total) * 100 : 0}%, 2px))`,
          }}
        />
        <div
          className="bar-half"
          style={{
            left: `calc(max(${
              total ? (neededToWin / total) * 100 : 0
            }%, 50%) - 1px)`,
          }}
        />
        <div
          className="bar-no"
          style={{
            width: `calc(max(${total ? (no / total) * 100 : 0}%, 2px))`,
          }}
        />
      </div>
    </div>
  );
};

export default VoteCountBar;
