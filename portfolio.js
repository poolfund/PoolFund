var trace1 = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: 'scatter',
};

var data = [trace1];
var layout = {
    width: 1000,
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    title: '1 Year Performance',
    xaxis: {
        title: 'Quarter'
    },
    yaxis: {
        title: 'Value'
    }
}

Plotly.newPlot('chart', data, layout, {}, {showSendToCloud: true});