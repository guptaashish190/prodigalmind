import React from 'react';
import { Line } from 'react-chartjs-2';
import Card from './Card';
import { chart1Data, chart2Data, chart3Data, x } from './chartdata';

class Analysis extends React.Component {
  render() {
    console.log(x);
    const options = {
      legend: {
        display: false,
      },
      scales: {
        yAxes: [{
          ticks: {
            max: 10,
            min: 0,
            stepSize: 2,
          },
        }],
      },
      line: {
        borderColor: 'red',
      },
    };
    const optionssmall = {
      legend: {
        display: false,
      },
      scales: {
        yAxes: [{
          display: false,
        }],
        xAxes: [{
          display: false,
        }],
      },
      line: {
        borderColor: 'red',
      },
    };
    return (
      <div>
        <div className="cards">
          <Card theme="theme1" title="Class & Section" content="2A" />
          <Card theme="theme2" title="Average Marks" content="40.4" />
          <Card theme="theme3" title="Total Students" content="40" />
        </div>
        <div className="charts-container">
          <div className="chart main">
            <span className="title">Student Perfomance Index<br /> Time: 14/2/19</span>
            <Line data={chart1Data} options={options} />
          </div>
          <div className="bottom">
            <div className="chart small">
              <span className="title">topic1</span>
              <Line data={chart2Data} options={optionssmall} />
            </div>
            <div className="chart small">
              <span className="title">topic2</span>
              <Line data={chart2Data} options={optionssmall} />
            </div>
            <div className="chart small">
              <span className="title">topic3</span>
              <Line data={chart3Data} options={optionssmall} />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Analysis;
