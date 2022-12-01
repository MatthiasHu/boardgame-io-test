import { Client } from 'boardgame.io/react';
import { Gomoku } from './Game';

const App = Client({ game: Gomoku });

export default App;
