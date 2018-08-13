import React from 'react';

import '../../styles/Score.css';

// Stateless functional component
const Score = (props) => {
  const { score } = props;
  
  const scoreCurrent = score[score.length-1].life;

  const scoreHistory = score.map(
    (i) => <li key={ i.life }>{ i.life }  {i.note}</li>
  );
  
  return (
    <div className="score-container">
      
      <div className="score-current">
        { scoreCurrent }
      </div>

      <div className="score-history">
        { scoreHistory }
      </div>

    </div>
  );
}

export default Score;
