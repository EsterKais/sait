import React, { Component } from 'react';

import Score from '../Score/Score';

import './Game.css';

class Game extends Component {

  constructor(props) {
    super(props);
    this.state = {
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
  }

  renderScores(player) {
    return (
      <Score
        score={ this.state[player] }
      />
    );
  }

  addScore(player, life, note) {

  }

  render() {
    const score = this.state;

    return (
      <div className="game-container">
        
        { this.renderScores('opponent') }

        <hr className="game-separator" />

        { this.renderScores('own') }
      </div>
    );
  }
}

export default Game;
