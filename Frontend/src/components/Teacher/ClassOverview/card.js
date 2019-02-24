import React from 'react';
import { withRouter } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import $ from 'jquery';


class Card extends React.Component {
    chartdata = {
      labels: ['', '', '', ''],
      datasets: [
        {
          fill: false,
          data: [
            this.props.details.data[0], this.props.details.data[1], this.props.details.data[2], this.props.details.data[3],
          ],
          borderColor: [
            '#04A9F5',
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
            radius: 3,
            backgroundColor: '#04A9F5',
            hoverRadius: 5,
            hoverBorderWidth: 0,
          },
        },
        layout: {
          padding: {
            top: 5,
            right: 5,
          },
        },
        maintainAspectRatio: false,
      };
      return (
        <div className="overview-card" onClick={() => this.props.history.push(`/teacher/class/${this.props.details.class}`)}>
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
              <Line
                data={this.chartdata}
                width={120}
                height={80}
                options={optionssmall}
              />
              <span>Class Performance</span>
            </div>
            <div className="population">
              <h2>{this.props.details.pop}</h2>
              <span>No. of Students</span>
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

export default withRouter(Card);
