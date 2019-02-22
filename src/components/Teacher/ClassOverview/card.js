import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <div className="overview-card">
        <div className="class-ball">
          <h1 className="class">{this.props.details.class}</h1>
        </div>
        {this.props.details.class.length === 2 ?
          <span className="class-desc">{`Class ${this.props.details.class.slice(0, 1)} & Sec - ${this.props.details.class.slice(-1)}`}</span> :
          <span className="class-desc">{`Class ${this.props.details.class.slice(0, 2)} & Sec - ${this.props.details.class.slice(-1)}`}</span>
        }
        <span className="subject">{this.props.details.subject}</span>
        <div className="stats">
          <div className="graph-overview">
                Class Performance
          </div>
          <div className="population">
            <h2>{this.props.details.pop}</h2>
            <span>Number of Students</span>
          </div>
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
