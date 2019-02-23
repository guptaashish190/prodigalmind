import React from 'react';
import Card from './card';


class Overview extends React.Component {
    arr = [{
      class: '9C', subject: 'Maths', pop: 60, data: [0, 8, 2, 3, 9],
    }, {
      class: '11C', subject: 'Physics', pop: 50, data: [0, 1, 2, 6, 11],
    },
    {
      class: '7C', subject: 'Maths', pop: 55, data: [0, 5, 8, 3, 11],
    }, {
      class: '12B', subject: 'Physics', pop: 65, data: [0, 6, 2, 3, 4],
    },
    {
      class: '8C', subject: 'Maths', pop: 50, data: [0, 1, 1, 8, 13],
    }, {
      class: '10A', subject: 'Physics', pop: 50, data: [0, 4, 2, 7, 8],
    },
    {
      class: '10C', subject: 'Maths', pop: 65, data: [0, 6, 5, 8, 8],
    }];

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
