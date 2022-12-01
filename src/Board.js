import React from 'react';
import './Board.css';

export const GomokuBoard = ({ctx, G, moves}) => {
    const on_click = (point) => moves.placeStone(point);

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
            return 'Keep playing.';
        }
    })();

    const board_size = 5;
    // TODO: get board_size from ctx

    const tbody = [];
    for (let y = board_size-1; y >= 0; y--) {
        const row = [];
        for (let x = 0; x < board_size; x++) {
            const c = G.board[x][y];
            const contents_className = c !== null ? ('stone_' + player_words[c]) : 'empty_point';
            row.push(
                <td key={[x, y]} className="board_point" onClick={_ => on_click([x, y])}>
                    <div className={contents_className}></div>
                </td>
            )
        }
        tbody.push(<tr key={y}>{row}</tr>);
    }

    return (
        <div>
            <table className='board_table'>
                <tbody>{tbody}</tbody>
            </table>
            <div>{gameover_text}</div>
        </div>
    );
}
