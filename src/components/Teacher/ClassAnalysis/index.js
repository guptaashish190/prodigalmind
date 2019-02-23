import React from 'react';
import { Line } from 'react-chartjs-2';
import Card from './Card';
import { chart1Data, chart2Data, chart3Data } from './chartdata';
import AddPaper from './AddPaper';
import Studentcard from './Studentcard';

class Analysis extends React.Component {
    state = {
      addPaperPopup: false,
    }

    getTitles = () => this.title.map(elem => <li>{elem}</li>)

    title = ['Electrostatic Quiz', 'Electrostatic Potential', 'Gravitation'];

    closeAddQuestionPaper = () => {
      this.setState({ addPaperPopup: false });
    }

    render() {
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
        <div className="analysis-container">
          {this.state.addPaperPopup ? <AddPaper close={this.closeAddQuestionPaper} /> : '' }
          <div className="cards">
            <Card theme="theme1" title="Class & Section" content="2A" />
            <Card theme="theme2" title="Average Marks" content="40.4" />
            <Card theme="theme3" title="Total Students" content="40" />
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
          <div className="detail-card">
        Cards
          </div>
          <div className="cards-2">
            <div className="detail-card">
              <span className="title">
                Timeline
              </span>
              <ul className="topics">
                {this.getTitles()}
              </ul>
            </div>
            <div className="detail-card">
              <button onClick={() => this.setState({ addPaperPopup: true })} >Upload Student Marks</button>
            </div>
          </div>
          <div className="student-info">
            <Studentcard />
            <Studentcard />
            <Studentcard />
          </div>
        </div>
      );
    }
}

export default Analysis;
