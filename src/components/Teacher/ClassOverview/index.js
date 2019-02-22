import React from 'react';
import Card from './card';

class Overview extends React.Component {
    arr = [{ class: '9C', subject: 'Maths' }, { class: '11C', subject: 'Physics' },
      { class: '7C', subject: 'Maths' }, { class: '12B', subject: 'Physics' },
      { class: '8C', subject: 'Maths' }, { class: '10A', subject: 'Physics' },
      { class: '10C', subject: 'Maths' }];

    render() {
      return (
        <div className="overview-container">
          <h1>Select Your Class</h1>
          <div className="overview-row">
            <Card details={this.arr[0]} />
            <Card details={this.arr[1]} />
            <Card details={this.arr[2]} />
            <Card details={this.arr[3]} />
          </div>
          <div className="overview-row">
            <Card details={this.arr[4]} />
            <Card details={this.arr[5]} />
            <Card details={this.arr[6]} />
          </div>
        </div>
      );
    }
}

export default Overview;
