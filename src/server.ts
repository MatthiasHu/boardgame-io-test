import { Server, Origins } from 'boardgame.io/server';
import { Gomoku } from './Game';

const server = Server({
    games: [Gomoku],
    origins: [Origins.LOCALHOST],
});

server.run(8000);
