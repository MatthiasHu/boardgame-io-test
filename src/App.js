import { useState } from 'react';
import { GomokuClient } from './GomokuClient';

const next_matchID = matchID => {
  const regexp = /-[0-9]*$/;
  const increment_suffix = suffix => {
    const n = + suffix.slice(1);
    return '-' + (n + 1);
  };
  if (matchID.search(regexp) >= 0) {
    return matchID.replace(regexp, increment_suffix);
  }
  else {
    return matchID + '-1';
  }
}

const App = _ => {
  const [playerID, setPlayerID] = useState(null);
  const [matchID, setMatchID] = useState('default');

  const next_match = _ => setMatchID(next_matchID(matchID));

  if (playerID === null) {
    return (
      <div>
        Play as
        <button onClick={_ => setPlayerID('0')}>Black</button>
        <button onClick={_ => setPlayerID('1')}>White</button>
      </div>
    );
  }
  else {
    return (
      <GomokuClient
        playerID={playerID}
        matchID={matchID}
        next_match={next_match}
      />
    );
  }
};

export default App;
