import '@styles/Banner.css';

const Banner = () => {
  const electionDate = new Date('Thursday March 2, 2023 12:00:00');
  const distance = electionDate.getTime() - new Date().getTime();
  const daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.ceil(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const timeLeft =
    daysLeft > 0 ? <>{daysLeft} days left</> : <>{hoursLeft} hours left</>;

  return (
    <div className="Banner">
      <p>
        There are only <strong>{timeLeft}</strong> until the the Union Election
        on Thu 3/2!!{' '}
        <a href="/election-info">
          <b>Election Info</b>
        </a>
      </p>
    </div>
  );
};

export default Banner;
