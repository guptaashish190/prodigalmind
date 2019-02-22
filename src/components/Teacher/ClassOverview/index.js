import React from 'react';
import Card from './card';

class Overview extends React.Component {
  render() {
    return (
      <div className="overview-container">
        <h1>Select Your Class</h1>
        <div className="overview-row">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="overview-row">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default Overview;
