import React, { Component } from 'react';

import Game from './Game';

import '../styles/App.css';

export default class App extends Component {
  state = {
    score: 10,
    previousScores: [
      { score: 20, textSize: 5 },
      { score: 15, textSize: 10 }
    ]
  };

  render() {
    return (
      <div className="app-container">
        <Game state={ this.state } />
      </div>
    );
  }
}
