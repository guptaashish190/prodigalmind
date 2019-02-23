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
};
