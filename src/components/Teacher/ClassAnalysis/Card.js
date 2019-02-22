import React from 'react';
import classnames from 'classnames';

class Card extends React.Component {
  render() {
    return (
      <div className={classnames({ 'card-container': true, [this.props.theme]: true })}>
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
