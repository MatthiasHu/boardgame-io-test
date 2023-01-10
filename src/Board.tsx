import type { BoardProps } from 'boardgame.io/react';
import type { PlayerID, GomokuState } from './Game';
import './Board.css';
import { assert } from './assert';

interface GomokuBoardProps extends BoardProps<GomokuState> {
    next_match: () => void;
}

export const GomokuBoard = ({ctx, G, moves, playerID, next_match} : GomokuBoardProps) => {
    const board_size = G.board_size;
    const active = '' + (ctx.currentPlayer === playerID && !ctx.gameover);

    const player_words = {'0': 'Black', '1': 'White'};
    // const player_words = ['Black', 'White'];

    const game_status_text = (_ => {
        if (ctx.gameover) {
            if (ctx.gameover.draw) {
                return 'This is a draw!';
            }
            else {
                return (player_words[ctx.gameover.winner as PlayerID] + ' wins!');
            }
        }
        else {
            return player_words[ctx.currentPlayer as PlayerID] + ' to play.';
        }
    })();

    const tbody = [];
    for (let y = board_size-1; y >= 0; y--) {
        const row = [];
        for (let x = 0; x < board_size; x++) {
            const c = G.board[x][y];
            const on_click = (_: any) : void => moves.placeStone([x, y]);

            const children: [string, JSX.Element][] = [];
            children.push(['empty', <div className='empty_point' />]);
            if (c !== null) {
                children.push(['stone', <div className={'stone stone_' + player_words[c]} />]);
            }
            if (G.last_play !== null && G.last_play[0] === x && G.last_play[1] === y) {
                assert(c !== null);
                children.push(['last', <div className={'last_play_of_' + player_words[c]} />]);
            }

            row.push(
                <td key={'' + [x, y]} onClick={on_click}>
                    <div className="board_point">
                        {children.map(kc => <div className='centering' key={kc[0]}>{kc[1]}</div>)}
                    </div>
                </td>
            )
        }
        tbody.push(<tr key={y}>{row}</tr>);
    }

    return (
        <div>
            <table className='board_table' data-player_is_active={active}>
                <tbody>{tbody}</tbody>
            </table>
            <p>{game_status_text}</p>
            {ctx.gameover ? <button onClick={next_match}>{'Next match =>'}</button> : false}
        </div>
    );
}
