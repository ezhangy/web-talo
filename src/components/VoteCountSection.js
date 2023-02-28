import VoteCountBar from "./vote-count/VoteCountBar"
import { formatPercentage } from "./vote-count/useVoteData"

const VoteCountSection = ({
  yes, 
  no, 
  contested, 
  total, 
  neededToWin, 
}) => {
  const valid = total - contested;

  return (
    <>
    {/* Vote count from https://github.com/newsguildny/nytimesguild.org/blob/4e9e5cbfabaf59e255997542acdfd92db74c4599/src/pages/tech-vote-count.tsx */}
 
    <div className="vote-count-data">
      <VoteCountBar
        yes={yes}
        no={no}
        total={total}
        neededToWin={neededToWin}
      />

      {/* Yes / No votes table */}
      <table>
        <thead>
          <tr>
            <th aria-label="Vote category" className="category-column" />
            <th className="number-column">Votes</th>
            <th className="number-column">% of total</th>
            <th className="number-column">% of valid votes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="category-column yes-cell">
              Yes <span className="drop-on-mobile">votes</span>
            </td>
            <td className="number-column">{yes}</td>
            <td className="number-column">{formatPercentage(yes, total)}</td>
            <td className="number-column">{formatPercentage(yes, valid)}</td>
          </tr>
          <tr>
            <td className="category-column no-cell">
              No <span className="drop-on-mobile">votes</span>
            </td>
            <td className="number-column">{no}</td>
            <td className="number-column">{formatPercentage(no, total)}</td>
            <td className="number-column">{formatPercentage(no, valid)}</td>
          </tr>
        </tbody>
      </table>
    </div>
    

    {/* Total / contested ballots table */}
    <div className="ballot-data section-wrapper">
      <h3>Ballot data</h3>
      <table>
        <tbody>
          <tr>
            <td className="category-column">
              Total <span className="drop-on-mobile">ballots</span>
            </td>
            <td className="number-column">{total}</td>
          </tr>
          <tr>
            <td className="category-column">
              Contested <span className="drop-on-mobile">ballots</span>
            </td>
            <td className="number-column">{contested}</td>
          </tr>
          <tr>
            <td className="category-column">Valid votes</td>
            <td className="number-column">{valid}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="note">
      The code and design from this graphic was adapted from the <a href="https://nytimesguild.org/">The Times Tech Guild's</a> vote tracker.
    </p>
  </>
  )
}

export default VoteCountSection