import { Client } from 'boardgame.io/react';
import { Gomoku } from './Game';
import { GomokuBoard } from './Board';

const App = Client({
  game: Gomoku,
  board: GomokuBoard,
});

export default App;
