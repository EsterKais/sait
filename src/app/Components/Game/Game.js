import React, { Component } from 'react';

import Score from '../Score/Score';

import './Game.css';

class Game extends Component {
  state = {
    opponent: [
      { life: 20, note: '' },
      { life: 17, note: 'FS' },
      { life: 15, note: 'GG' },
      { life: 12, note: 'LS' },
      { life: 10, note: 'GG' }
    ],
    own: [
      { life: 20, note: '' },
      { life: 18, note: 'Sh' },
      { life: 15, note: 'SB' }
    ]
  };

  render() {
    const score = this.state;

    return (
      <div className="game-container">
        <Score score={ score.opponent } />
        <div><span>OPPONENT</span></div>

        <hr className="game-separator" />

        <div><span>PLAYER</span></div>
        <Score score={ score.own } />
      </div>
    );
  }
}

export default Game;
