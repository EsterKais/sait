import React, { Component } from 'react';

import Score from './Score';
import PreviousScore from './PreviousScore';

import '../styles/Game.css';

export default class Game extends Component {
  render() {
    const { score, previousScores } = this.props.state;

    const previousScoreElements = previousScores.map((prevScore, index) =>
      <PreviousScore
        key={ index }
        textSize={ prevScore.textSize }
        previousScore={ prevScore.score } />
    );

    return (
      <div className="game-container">
        { previousScoreElements }
        <Score score={ score } />
      </div>
    );
  }
}
