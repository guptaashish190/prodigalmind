import React from 'react';
import { Line } from 'react-chartjs-2';
import Card from './Card';
import { chart1Data, chart2Data, chart3Data } from './chartdata';
import AddPaper from './AddPaper';
import Studentcard from './Studentcard';
import Sidebar from '../../Student/Sidebar';

class Analysis extends React.Component {
    state = {
      addPaperPopup: false,
    }


    getTitles = () => this.title.map(elem => <li>{elem}</li>)

    studentdata = [{
      name: 'Marcus', num: '+91 94140 19120', att: '83', color: '#FF0D3F',
    },
    {
      name: 'Sheldon', num: '+91 94140 13420', att: '67', color: '#0D9EFF',
    },
    {
      name: 'Rachel', num: '+91 923140 12120', att: '95', color: '#FF0D3F',
    },
    {
      name: 'Marcus', num: '+91 94671 12999', att: '82', color: '#0D9EFF',
    }];

    title = ['Electrostatic Quiz', 'Electrostatic Potential', 'Gravitation'];

    closeAddQuestionPaper = () => {
      this.setState({ addPaperPopup: false });
    }

    render() {
      const options = {
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
      const optionssmall = {
        legend: {
          display: false,
        },
        line: {
          borderColor: 'red',
        },
        scales: {
          xAxes: [{

          }],
          yAxes: [{
            gridLines: {
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
        <div className="student-section-container">
          <Sidebar />
          <div className="analysis-container">
            {this.state.addPaperPopup ? <AddPaper close={this.closeAddQuestionPaper} /> : '' }
            <div className="cards">
              <Card theme="theme1" title="Class & Section" content="2A" />
              <Card theme="theme2" title="Average Marks" content="40.4" />
              <Card theme="theme3" title="Total Students" content="40" />
              <Card theme="theme4" title="Total Students" content="40" />
            </div>
            <div className="charts-container">
              <div className="chart main">
                <Line data={chart1Data} width={550} height={380} options={options} />
              </div>
              <div className="bottom">
                <div className="chart small">
                  <Line data={chart2Data} options={optionssmall} width={140} height={100} />
                </div>
                <div className="chart small">
                  <Line data={chart2Data} options={optionssmall} width={140} height={100} />
                </div>
                <div className="chart small">
                  <Line data={chart3Data} options={optionssmall} width={140} height={100} />
                </div>
              </div>

            </div>
            <div className="detail-card">
              <h1>Create Personalised Papers</h1>
              <div className="quiz-card">
                <span>Electrostatic Test</span>
                <button>Publish</button>
              </div>
              <div className="quiz-card">
                <span>Alexandra Quiz</span>
                <button>Publish</button>
              </div>
              <div className="quiz-card">
                <span>NLM Assessment</span>
                <button>Publish</button>
              </div>
              <h1>Earlier Paper Insights</h1>
              <div className="quiz-card">
                <span>Electrostatic Test</span>
                <button>Publish</button>
              </div>
              <div className="quiz-card">
                <span>Alexandra Quiz</span>
                <button>Publish</button>
              </div>
              <div className="quiz-card">
                <span>NLM Assessment</span>
                <button>Publish</button>
              </div>
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
                <button onClick={() => this.setState({ addPaperPopup: true })} className="btn-upload">Upload Student Marks</button>
              </div>
            </div>
            <div className="student-info">
              <Studentcard details={this.studentdata[0]} />
              <Studentcard details={this.studentdata[1]} />
              <Studentcard details={this.studentdata[2]} />
              <Studentcard details={this.studentdata[1]} />
              <Studentcard details={this.studentdata[2]} />
              <Studentcard details={this.studentdata[3]} />
            </div>
          </div>
        </div>
      );
    }
}

export default Analysis;
