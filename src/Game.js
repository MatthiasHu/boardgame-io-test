import { INVALID_MOVE } from 'boardgame.io/core';

export const Gomoku = {
    setup: () => ({
        board: Array.from(Array(board_size), _ => Array(board_size).fill(null)),
    }),

    turn: {
        minMoves: 1,
        maxMoves: 1,
    },

    moves: {
        placeStone: ({G, playerId}, point) => {
            if (G.board[point[0]][point[1]] === null) {
                G.board[point[0]][point[1]] = playerId;
            }
            else {
                return INVALID_MOVE;
            }
        }
    },

    endIf: ({ G, ctx }) => {
        for (let i = 0; i < 2; i++) {
            if (find_win(G.board, i) !== null) {
                return { winner: i };
            }
        }
        if (is_full_board(G.board)) {
            return { draw: true };
        }
    },
};

const board_size = 5;

const is_inside_board = (p) => {
    return (p[0] >= 0) && (p[0] < board_size) && (p[0] >= 0) && (p[1] < board_size);
};

const is_full_board = (board) => {
    return board.every(column => column.every(entry => entry !== null));
};

const find_win = (board, playerId) => {
    const deltas = [[0, 1], [1, 0], [1, 1], [-1, 1]];
    const winning_sets = [];
    for (let x0 = 0; x0 < board_size; x0++) {
        for (let y0 = 0; y0 < board_size; y0++) {
            deltas.forEach(delta => {
                const set = [];
                for (let t = 0; t < 5; t++) {
                    set.push([x0 + t * delta[0], y0 + t * delta[1]]);
                }
                winning_sets.push(set);
            });
        }
    }

    const wins = winning_sets.filter(set => {
        return set.every(p => is_inside_board(p) && board[p[0]][p[1]] === playerId);
    });

    if (wins.length > 0) {
        return wins[0];
    }
    else {
        return null;
    }
};
