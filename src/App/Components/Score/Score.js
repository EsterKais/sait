import React from 'react';

import './Score.css';

// Stateless functional component
const Score = (props) => {
  const { score, edit } = props;
  
  const scoreCurrent = score[score.length-1].life;
  const scoreHistory = score.map(
    (i) => <li key={ i.life }>{ i.life }  {i.note}</li>
  );

  return (
    <div className="score-container">
      <div className="score-current">
        <span>{ scoreCurrent }</span>
      </div>

      <div className="score-history">
        <ul>{ scoreHistory }</ul>
      </div>
    </div>
  );
}

export default Score;
