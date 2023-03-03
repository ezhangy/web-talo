import '@styles/Banner.css';
import  { getCountDownVals } from '@components/vote-count/countDownUtil'
import { useVoteData } from '@components/vote-count/useVoteData';


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
        <a href="/election-info">
          <b>Election Info</b>
        </a>
      </p>
    )
  } else if (hoursUntilElection > 1) {
    bannerText = (<p>
      There are <strong>{Math.ceil(hoursUntilElection)} hours</strong> left until the Union Election!! Voting begins at <b>12PM</b> on SciLi 4th Floor.{' '}
      <a href="/election-info">
          <b>Election Info</b>
      </a>
    </p>)
  } else if (Math.ceil(hoursUntilElection) === 1) {
    bannerText = (<p>
       The union election is <strong>about to begin!!</strong> Voting begins at <b>12PM</b> on SciLi 4th Floor. {' '}
       <a href="/election-info">
          <b>Election Info</b>
        </a>
    </p>)
  } else if (hoursUntilElection < 0 && !hasLiveCountStarted) {
    bannerText = (<p>
       🚨🚨 Election voting is <strong>CURRENTLY</strong> taking place from <b>12PM-3PM</b> and <b>5PM-8PM</b> on the SciLi 4th floor 🚨🚨{' '} 
      {' '}
      <a href="/election-info">
        <b>see more details</b>
      </a>
    </p>)
  } else if (hasLiveCountStarted && !isElectionPast) {
    bannerText = (
    <p>
      Voting has concluded and ballots are being counted! 👉
      {' '}
      <a href="/election-info">
          <b>live vote count</b>
      </a>
    </p>)
  } else {
    bannerText = (
      <p>
        On Thursday, March 2 the NRLB officially certified our union  👉
        {' '}
        <a href="/election-info">
          <b>see the results</b>
        </a>
        {' '}
      </p>)
  }

  const resultReached = status === "win" || status === "loss"

  if (resultReached && !isElectionPast) {
    bannerText =
    (<p>
        🎉🎉 Brown CS TAs have voted YES to unionize in a 303-28 victory 🎉🎉
        {' '}
        <a href="/election-info">
          <b>see the results</b>
        </a>
      </p>)
  }

  return (
    <div className="Banner">
      {bannerText}
    </div>
  );
};

export default Banner;
