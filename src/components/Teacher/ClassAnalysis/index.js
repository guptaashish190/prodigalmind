import React from 'react';
import { Line } from 'react-chartjs-2';
import Card from './Card';

class Analysis extends React.Component {
  render() {
    const chart1Data = (canvas) => {
      const ctx = canvas.getContext('2d');
      const gradient = ctx.createLinearGradient(26, 156, 100, 0);
      gradient.addColorStop(0, 'pink');
      gradient.addColorStop(1, 'orange');

      return {
        datasets: [
          {
            data: [
              782, 540, 820, 1820,
            ],
            backgroundColor: gradient,
          },
        ],
      };
    };
    const options = {
      legend: {
        display: false,
      },
    };
    return (
      <div>
        <Card title="Class" content="2A" />
        <div className="chart">
          <Line data={chart1Data} options={options} />
        </div>
      </div>
    );
  }
}

export default Analysis;
