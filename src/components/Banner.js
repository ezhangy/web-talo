import { Link } from 'react-router-dom';
import { getCountDownVals } from '../pages/utils/countDownUtil';
import './Banner.css';
import { useVoteData } from './vote-count/useVoteData';

const Banner = () => {
  const { 
    daysUntilElection, 
    hoursUntilElection, 
    hasLiveCountStarted, 
    isElectionPast
  } = getCountDownVals(new Date());
  const { yes, no, contested, total, neededToWin, status } = useVoteData();

  let bannerText; 
  if (daysUntilElection > 0) {
    bannerText = (
      <p>
        There are only <strong>{daysUntilElection} days</strong> until the Union Election
        on Thu 3/2!!{' '}
        <Link to="/election-info">
          <b>Election Info</b>
        </Link>
      </p>
    )
  } else if (hoursUntilElection > 1) {
    bannerText = (<p>
      There are <strong>{Math.ceil(hoursUntilElection)} hours</strong> left until the Union Election!! Voting begins at <b>12PM</b> on SciLi 4th Floor.{' '}
      <Link to="/election-info">
        <b>Election Info</b>
      </Link>
    </p>)
  } else if (Math.ceil(hoursUntilElection) === 1) {
    bannerText = (<p>
       The union election is <strong>about to begin!!</strong> Voting begins at <b>12PM</b> on SciLi 4th Floor. {' '}
      <Link to="/election-info">
        <b>Election Info</b>
      </Link>
    </p>)
  } else if (hoursUntilElection < 0 && !hasLiveCountStarted) {
    bannerText = (<p>
       🚨🚨 Election voting is <strong>CURRENTLY</strong> taking place from <b>12PM-3PM</b> and <b>5PM-8PM</b> on the SciLi 4th floor 🚨🚨{' '} 
      {' '}
      <Link to="/election-info">
        <b>see more details</b>
      </Link>
    </p>)
  } else if (hasLiveCountStarted && !isElectionPast) {
    bannerText = (
    <p>
      Voting has concluded and ballots are being counted! 👉
      {' '}
      <Link to="/election-info">
        <b>live vote count</b>
      </Link>
    </p>)
  } else {
    bannerText = (
      <p>
        Our election to unionize took place on Thursday, March 2. 👉
        {' '}
        <Link to="/election-info">
          <b>see the results</b>
        </Link>
      </p>)
  }

  const resultReached = status === "win" || status === "loss"

  if (resultReached && !isElectionPast) {
    bannerText =
    (<p>
        The results of our union election are out now.
        {' '}
        <Link to="/election-info">
          <b>Vote count.</b>
        </Link>
      </p>)
  }

  return (
    <div className="Banner">
      {bannerText}
    </div>
  );
};

export default Banner;
