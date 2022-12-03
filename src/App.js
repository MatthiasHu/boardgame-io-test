import { Client } from 'boardgame.io/react';
import { SocketIO } from 'boardgame.io/multiplayer';
import { Gomoku } from './Game';
import { GomokuBoard } from './Board';

const RawApp = Client({
  game: Gomoku,
  board: GomokuBoard,
  multiplayer: SocketIO({ server: 'localhost:8000' }),
  debug: true,
});

const App = _ => (
  <div>
    <RawApp playerID="0" />
  </div>
);

export default App;
