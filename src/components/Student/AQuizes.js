import React from 'react';
import { Line } from 'react-chartjs-2';
import { options, chartdata } from './ChartOptions';

class AQuizes extends React.Component {
  // Assumptions
    quizes = [
      {
        img: '/images/rec1.png',
        title: 'Electrostatic Potential',
        graphdata: [],
        totalMarks: 50,
        avgScore: 45,
        attemptLink: '',

      },
      {
        img: '/images/rec2.png',
        title: 'Rotation Mechanics',
        graphdata: [],
        totalMarks: 50,
        avgScore: 45,
        attemptLink: '',
      },
      {
        img: '/images/rec3.png',
        title: 'Gravitational Energy',
        graphdata: [],
        totalMarks: 50,
        avgScore: 45,
        attemptLink: '',
      },
      {
        img: '/images/rec1.png',
        title: 'Electrostatic Potential',
        graphdata: [],
        totalMarks: 50,
        avgScore: 45,
        attemptLink: '',

      },
      {
        img: '/images/rec2.png',
        title: 'Rotation Mechanics',
        graphdata: [],
        totalMarks: 50,
        avgScore: 45,
        attemptLink: '',
      },
      {
        img: '/images/rec3.png',
        title: 'Gravitational Energy',
        graphdata: [],
        totalMarks: 50,
        avgScore: 45,
        attemptLink: '',
      },
    ]

    mapRecomCards = () => this.quizes.map((quiz, i) => (
      (
        <li>
          <span className="image"><img src={quiz.img} alt="recommendation" /></span>
          <span className="name">{quiz.title}</span>
          <span className="graph">
            <Line
              data={chartdata[i]}
              width={80}
              height={40}
              options={options}
            />
          </span>
          <div className="marks vertical">
            <span>{quiz.totalMarks}</span>
            <span>Total Marks</span>
          </div>
          <div className="avg vertical">
            <span>{quiz.avgScore}</span>
            <span>Avg Score</span>
          </div>
          <button>
              Attempt
          </button>

        </li>
      )
    ))

    render() {
      return (
        <div className="adaptive-quiz-container">
          <div className="title">
                Adaptive Quizes
          </div>
          <ul className="video-list">
            {this.mapRecomCards()}
          </ul>
        </div>
      );
    }
}

export default AQuizes;
