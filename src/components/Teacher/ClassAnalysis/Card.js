import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <div className="card-container">
        <div className="title">
          {this.props.title}
        </div>
        <div className="content">
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default Card;
