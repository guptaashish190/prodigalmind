import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <div className="overview-card">
        <div className="class-ball">
          <h1 className="class">4B</h1>
        </div>
        <span className="class-desc">Class 4 & Sec - C</span>
        <span className="subject">Maths</span>
        <div className="stats">
            dcj
        </div>
        <div className="btn-container">
          <button>OPEN</button>
          <button>BROADCAST A MESSAGE</button>
        </div>
      </div>
    );
  }
}

export default Card;
