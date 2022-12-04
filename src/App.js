import { Client } from 'boardgame.io/react';
import { SocketIO } from 'boardgame.io/multiplayer';
import { Gomoku } from './Game';
import { GomokuBoard } from './Board';

const SocketIO_config = {
  server: 'https://schwubbl.de/',
  // For testing, connect to localhost instead.
  // server: 'localhost:8000',
};

const RawApp = Client({
  game: Gomoku,
  board: GomokuBoard,
  multiplayer: SocketIO(SocketIO_config),
  debug: true,
});

const App = _ => (
  <div>
    <RawApp playerID="0" />
  </div>
);

export default App;
