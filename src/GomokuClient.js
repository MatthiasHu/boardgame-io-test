import { Client } from 'boardgame.io/react';
import { SocketIO } from 'boardgame.io/multiplayer';
import { Gomoku } from './Game';
import { GomokuBoard } from './Board';

const SocketIO_config = {
  server: 'https://schwubbl.de/',
  // For testing, connect to localhost instead.
  // server: 'localhost:8000',
};

export const GomokuClient = Client({
  game: Gomoku,
  board: GomokuBoard,
  multiplayer: SocketIO(SocketIO_config),
  debug: true,
});
