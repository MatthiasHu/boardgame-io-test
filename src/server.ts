const { Server, Origins } = require('boardgame.io/server')
const { Gomoku } = require('./Game.ts')

const server = Server({
    games: [Gomoku],
    origins: [Origins.LOCALHOST],
});

server.run(8000);
