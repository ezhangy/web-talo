const ELECTION_START_TIME = new Date('Thursday March 2, 2023 12:00:00');
const ELECTIION_LIVECOUNT_START = new Date('Thursday March 2, 2023 20:00:00');
const ELECTION_PAST = new Date('Friday March 3, 2023 0:00:00');


const timeUntil= (startTime: Date, eventTime: Date) => {
  return eventTime.getTime() - startTime.getTime()
}

export const getCountDownVals = (currTime: Date) => {
  const distance = timeUntil(currTime, ELECTION_START_TIME)
  const daysUntilElection = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hoursUntilElection = (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  const hasLiveCountStarted = timeUntil(currTime, ELECTIION_LIVECOUNT_START) < 0;
  const isElectionPast = timeUntil(currTime,ELECTION_PAST) < 0;

  return {daysUntilElection, hoursUntilElection, hasLiveCountStarted, isElectionPast}
}