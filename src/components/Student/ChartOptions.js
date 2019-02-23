module.exports = {
  options: {
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
    layout: {
      padding: {
        top: 5,
        right: 5,
      },
    },
    maintainAspectRatio: false,
  },
  chartdata: [
    {
      labels: ['', '', '', ''],
      datasets: [
        {
          fill: false,
          data: [
            5, 2, 8, 6,
          ],
          borderColor: [
            '#FF0044',
          ],
        },
      ],
    }, {
      labels: ['', '', '', ''],
      datasets: [
        {
          fill: false,
          data: [
            5, 3, 8, 8,
          ],
          borderColor: [
            '#04A9F5',
          ],
        },
      ],
    }, {
      labels: ['', '', '', ''],
      datasets: [
        {
          fill: false,
          data: [
            1, 4, 4, 6,
          ],
          borderColor: [
            '#04A9F5',
          ],
        },
      ],
    }, {
      labels: ['', '', '', ''],
      datasets: [
        {
          fill: false,
          data: [
            5, 9, 4, 6,
          ],
          borderColor: [
            '#04A9F5',
          ],
        },
      ],
    }, {
      labels: ['', '', '', ''],
      datasets: [
        {
          fill: false,
          data: [
            5, 2, 3, 1,
          ],
          borderColor: [
            '#04A9F5',
          ],
        },
      ],
    }, {
      labels: ['', '', '', ''],
      datasets: [
        {
          fill: false,
          data: [
            5, 9, 4, 3,
          ],
          borderColor: [
            '#04A9F5',
          ],
        },
      ],
    },
  ],
};
