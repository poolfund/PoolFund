var trace1 = {
  x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  y: [20, 18, 13, 17, 18, 18.5, 19, 21, 21, 20, 23, 21],
  line: {
    color: 'rgb(82, 190, 128)',
    width: 2
    },
  type: 'scatter',
};

var data = [trace1];
var layout = {
    width: 1000,
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    title: '1 Year Performance', 
    xaxis: {
        title: 'Month'
    },
    yaxis: {
        title: 'Value'
    }
}

Plotly.newPlot('chart', data, layout, {}, {showSendToCloud: true});