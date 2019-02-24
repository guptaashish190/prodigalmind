module.exports = {
  chart1Data: (canvas, data) => {
    const ctx = canvas.getContext('2d');

    let grd = ctx.createLinearGradient(150.000, 0.000, 150.000, 300.000);

    grd.addColorStop(0.000, 'rgba(4, 169, 245, 1.000)');
    grd.addColorStop(0.991, 'rgba(255, 255, 255, 0.000)');
    const points = [];
    Object.keys(data[0]).forEach((topic) => {
      points.push(data[0][topic]);
    });
    return {
      labels: Object.keys(data[0]),
      datasets: [
        {
          data: points,
          backgroundColor: grd,
          borderColor: [
            '#04A9F5',
          ],
        },
      ],
    };
  },
  chart2Data: (canvas) => {
    const ctx = canvas.getContext('2d');

    let grd = ctx.createLinearGradient(150.000, 0.000, 150.000, 300.000);

    // Add colors
    grd.addColorStop(0.000, 'rgba(4, 169, 245, 1.000)');
    grd.addColorStop(0.991, 'rgba(255, 255, 255, 0.000)');

    return {
      labels: ['', '', '', ''],
      datasets: [
        {
          fill: false,
          data: [
            10, 7, 3, 9,
          ],
          backgroundColor: grd,
          borderColor: [
            '#04A9F5',
          ],
        },
      ],
    };
  },
  chart3Data: (canvas) => {
    const ctx = canvas.getContext('2d');

    let grd = ctx.createLinearGradient(150.000, 0.000, 150.000, 300.000);

    // Add colors
    grd.addColorStop(0.000, 'rgba(4, 169, 245, 1.000)');
    grd.addColorStop(0.991, 'rgba(255, 255, 255, 0.000)');

    return {
      labels: ['', '', '', ''],
      datasets: [
        {
          fill: false,
          data: [
            10, 7, 3, 9,
          ],
          backgroundColor: grd,
          borderColor: [
            '#04A9F5',
          ],
        },
      ],
    };
  },
  x: 'sdfka',
};
