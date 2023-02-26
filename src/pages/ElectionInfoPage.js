import { useVoteData } from "../components/vote-count/useVoteData";

const ElectionInfoPage = () => {
  const { yes, no, contested, total, neededToWin, status } = useVoteData();
  console.log(`yes: ${yes}`)
  console.log(`no: ${no}`)
  console.log(`contested: ${contested}`)
  console.log(`total: ${total}`)
  console.log(`neededToWin: ${neededToWin}`)
  console.log(`status: ${status}`)
  return (
    <div>
      <p>election page</p>
      <p>status: {status}</p>
      <p>yes: {yes}</p>
      <p>no: {no}</p>
      <p>contested: {contested}</p>
      <p>neededToWin: {neededToWin}</p>
    </div>
  )
}

export default ElectionInfoPage;