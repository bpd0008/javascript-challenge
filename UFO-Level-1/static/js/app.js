// from data.js
var tableData = data;


// YOUR CODE HERE!
var tb = d3.select("tbody");

tableData.forEach((sighting) => {
    console.log(sighting);
    var row = tb.append('tr');

    Object.entries(sighting).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

var submit = d3.select("#filter-btn");

submit.on("click", function() {

    d3.select("tbody").html("");
    d3.event.preventDefault();

    var dt = d3.select("#datetime").property("value");
    console.log(dt);


    var filteredData = tableData.filter(record => record.datetime === dateTime);
    console.log(filteredData);


    filteredData.forEach((sighting) => {
        var row = tb.append('tr');

    Object.entries(sighting).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

});

