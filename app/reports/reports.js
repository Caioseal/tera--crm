var xArray = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
var yArray = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

var data = [{
    x: xArray,
    y: yArray,
    mode: "markers"
}];

// Define Layout
var layout = {
    xaxis: { range: [40, 160], title: "Ano" },
    yaxis: { range: [5, 16], title: "Quantidade" },
    title: "Novos Negócios nos últimos 30 dias"
};

// Display using Plotly
Plotly.newPlot("myPlot", data, layout);

//Second graph
var xArray1 = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
var yArray1 = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

// Define Data
var data1 = [{
    x: xArray1,
    y: yArray1,
    mode: "lines"
}];

// Define Layout
var layout1 = {
    xaxis: { range: [40, 160], title: "Ano" },
    yaxis: { range: [5, 16], title: "Quantidade" },
    title: "Negócios Fechados nos Últimos 30 dias"
};

// Display using Plotly
Plotly.newPlot("myPlot1", data1, layout1);