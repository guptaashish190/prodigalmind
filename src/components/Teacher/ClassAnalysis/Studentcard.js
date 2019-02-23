import React from 'react';
import { Line } from 'react-chartjs-2';

class Studentcard extends React.Component {
    chartdata = {
      labels: ['', '', '', ''],
      datasets: [
        {
          fill: false,
          data: [
            0, 6, 4, 10,
          ],
          borderColor: [
            this.props.details.color,
          ],
        },
      ],
    }

    render() {
      const optionssmall = {
        legend: {
          display: false,
        },
        line: {
          borderColor: 'red',
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: false,
              drawBorder: false,
            },
          }],
          yAxes: [{
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: true,
              display: false,
            },
          }],
        },
        elements: {
          point: {
            radius: 0,
          },
        },
        maintainAspectRatio: false,
      };
      return (
        <div className="student-card">
          <div className="name-data">
            <h2>1.</h2>
            <img src="/images/1.png" alt="profile-pic" />
            <h2>{this.props.details.name}</h2>
          </div>
          <div className="phone-details">
            <img src="/images/phone.svg" alt="phone" />
            <h2>{this.props.details.num}</h2>
          </div>
          <div className="student-graph">
            <Line
              data={this.chartdata}
              width={70}
              height={50}
              options={optionssmall}
            />
          </div>
          <div className="attendance-details">
            <h2>{this.props.details.att}</h2>
            <span>Attendance</span>
          </div>
          <button>View More</button>
        </div>
      );
    }
}

export default Studentcard;
