import React from 'react';
import './Board.css';

export const GomokuBoard = ({ctx, G, moves, playerID}) => {
    const board_size = G.board_size;
    const active = '' + (ctx.currentPlayer === playerID);

    const player_words = ['Black', 'White'];

    const gameover_text = (_ => {
        if (ctx.gameover) {
            if (ctx.gameover.draw) {
                return 'This is a draw!';
            }
            else {
                return (player_words[ctx.gameover.winner] + ' wins!');
            }
        }
        else {
            return player_words[ctx.currentPlayer] + ' to play.';
        }
    })();

    const tbody = [];
    for (let y = board_size-1; y >= 0; y--) {
        const row = [];
        for (let x = 0; x < board_size; x++) {
            const c = G.board[x][y];
            const contents_className = c !== null ? ('stone stone_' + player_words[c]) : 'empty_point';
            const on_click = _ => moves.placeStone([x, y]);
            row.push(
                <td key={[x, y]}>
                    <div className="board_point" onClick={on_click}>
                        <div className="centering">
                            <div className={contents_className}></div>
                        </div>
                    </div>
                </td>
            )
        }
        tbody.push(<tr key={y}>{row}</tr>);
    }

    return (
        <div>
            <table className='board_table' player_is_active={active}>
                <tbody>{tbody}</tbody>
            </table>
            <p>{gameover_text}</p>
        </div>
    );
}
