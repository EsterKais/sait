import React from 'react';

import '../styles/Score.css';

// Stateless functional component
const Score = (props) => {
  const { score } = props;

  return (
    <div className="score-container">
      <p>{ score }</p>
    </div>
  );
}

export default Score;
