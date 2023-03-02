import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

// adapted from https://github.com/newsguildny/nytimesguild.org/commit/4e9e5cbfabaf59e255997542acdfd92db74c4599
export function formatPercentage(numerator: number, denominator: number) {
  return denominator
    ? `${Math.round((numerator / denominator) * 100)}%`
    : '--%';
}

export const firebaseConfig = {
  apiKey: 'AIzaSyCOWkvRbk3CsOkiEP1M4uU3mRimN916BdU',
  authDomain: 'talo-vote-count.firebaseapp.com',
  projectId: 'talo-vote-count',
  storageBucket: 'talo-vote-count.appspot.com',
  messagingSenderId: '816540672640',
  appId: '1:816540672640:web:9c9143b79230ca178bbc65',
};

function getVoteStatus({
  yes,
  no,
  total,
  contested,
  neededToWin,
}: {
  yes: number;
  no: number;
  total: number;
  contested: number;
  neededToWin: number;
}) {
  if (total === 0) return 'loading';
  if (yes + no + contested === total && contested > 0) return 'contested';
  if (yes >= neededToWin) return 'win';
  if (no >= neededToWin) return 'loss';
  return 'beforeResult';
}

function updater(db: any, path: any, onUpdate: any) {
  onValue(ref(db, path), (snapshot) => {
    const data = snapshot.val();
    if (typeof data === 'number') {
      onUpdate(data);
    }
  });
}

export const useVoteData = () => {
  const [yes, setYes] = useState(0);
  const [no, setNo] = useState(0);
  const [contested, setContested] = useState(0);
  const [total, setTotal] = useState(0);
  const neededToWin = Math.floor(total / 2) + 1;

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);
    updater(db, 'yes', setYes);
    updater(db, 'no', setNo);
    updater(db, 'total', setTotal);
    updater(db, 'contested', setContested);
  }, []);

  return {
    yes,
    no,
    contested,
    total,
    neededToWin,
    status: getVoteStatus({ yes, no, total, contested, neededToWin }),
  };
};
