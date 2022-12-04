import { useState } from 'react';
import { GomokuClient } from './GomokuClient';

const App = _ => {
  const [playerID, setPlayerID] = useState(null);

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
      <GomokuClient playerID={playerID} />
    );
  }
};

export default App;
