import React from 'react';

import '../styles/PreviousScore.css';

// Stateless functional component
const PreviousScore = (props) => {
  const { previousScore, textSize } = props;

  return (
    <div className="previous-score-container">
      <p style={ { fontSize: `${textSize}rem` } }>{ previousScore }</p>
    </div>
  );
}

export default PreviousScore;
