var data = {
    labels: ['8am', '9am', '10am', '11am', '12pm', '1pm'],
    series: [
        [2, 28, 32, 48, 45, 35],
        [2, 15, 2, 18, 2, 20],
        [3, 5, 35, 50, 50, 30]

    ]
};

var options = {
    seriesBarDistance: 15
};

new Chartist.Bar('.ct-chart', data, options);
