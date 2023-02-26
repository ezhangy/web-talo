import "./Banner.css"

const Banner = () => {
  const electionDate = new Date('Thursday March 2, 2023 17:00:00');
  const distance = electionDate - new Date();
  const daysLeft = Math.ceil(distance / (1000 * 60 * 60 * 24))
  const hoursLeft = Math.ceil(
    distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)
  )
  const timeLeft = daysLeft > 0 
    ? (<>{daysLeft} days left</>)
    : (<>{hoursLeft} hours left</>)

  return (
    <div className="Banner">
        <p>There are only <strong>{timeLeft}</strong> until the the TA Union Election!! on Thursday 3/2 from 12PM-3PM and 5PM-8PM</p>
    </div>
  )
}

export default Banner