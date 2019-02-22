module.exports = {
  chart1Data: (canvas) => {
    const ctx = canvas.getContext('2d');

    let grd = ctx.createLinearGradient(150.000, 0.000, 150.000, 300.000);

    grd.addColorStop(0.000, 'rgba(4, 169, 245, 1.000)');
    grd.addColorStop(0.991, 'rgba(255, 255, 255, 0.000)');

    return {
      labels: ['', '', '', ''],
      datasets: [
        {
          data: [
            10, 7, 3, 9,
          ],
          backgroundColor: grd,
          borderColor: [
            'rgba(75,192,192, 1)',
            'rgba(1, 223, 111, 1)',
            'rgba(75,192,192, 1)',
            'rgba(1, 223, 111, 1)',
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
          data: [
            10, 7, 3, 9,
          ],
          backgroundColor: grd,
          borderColor: [
            'rgba(75,192,192, 1)',
            'rgba(1, 223, 111, 1)',
            'rgba(75,192,192, 1)',
            'rgba(1, 223, 111, 1)',
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
          data: [
            10, 7, 3, 9,
          ],
          backgroundColor: grd,
          borderColor: [
            'rgba(75,192,192, 1)',
            'rgba(1, 223, 111, 1)',
            'rgba(75,192,192, 1)',
            'rgba(1, 223, 111, 1)',
          ],
        },
      ],
    };
  },
  x: 'sdfka',
};
