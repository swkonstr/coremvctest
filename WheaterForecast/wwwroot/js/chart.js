
completed = function (xhr) {
    data = JSON.parse(xhr.responseText);
    data.forEach((val, index) => data[index].date = new Date(val.date));
    chart.data = data;
    chart.validateData();
    console.log(data);
    console.log($("#from-value").val());
    console.log($("#to-value").val());
    console.log($("#temp-value").val());
    console.log($("#pressure-value").val());
    console.log($("#humidity-value").val());
    console.log($("#wind-value").val());
};
failed = function (xhr) {
    alert(`Status: {xhr.status}, Status Text: {xhr.statusText}`);
};


//am4core.ready(function () {

// Themes 
am4core.useTheme(am4themes_animated);

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

// Increase contrast by taking evey second color
chart.colors.step = 2;

// Create axes
var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
dateAxis.renderer.minGridDistance = 50;



// Create series
function createAxisAndSeries(field, name, opposite, bullet) {
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = field;
    series.dataFields.dateX = "date";
    series.strokeWidth = 2;
    series.yAxis = valueAxis;
    series.name = name;
    series.tooltipText = "{name}: [bold]{valueY}[/]";
    series.tensionX = 0.8;

    var interfaceColors = new am4core.InterfaceColorSet();

    switch (bullet) {
        case "triangle":
            var bullet = series.bullets.push(new am4charts.Bullet());
            bullet.width = 12;
            bullet.height = 12;
            bullet.horizontalCenter = "middle";
            bullet.verticalCenter = "middle";

            var triangle = bullet.createChild(am4core.Triangle);
            triangle.stroke = interfaceColors.getFor("background");
            triangle.strokeWidth = 2;
            triangle.direction = "top";
            triangle.width = 12;
            triangle.height = 12;
            break;
        case "rectangle":
            var bullet = series.bullets.push(new am4charts.Bullet());
            bullet.width = 10;
            bullet.height = 10;
            bullet.horizontalCenter = "middle";
            bullet.verticalCenter = "middle";

            var rectangle = bullet.createChild(am4core.Rectangle);
            rectangle.stroke = interfaceColors.getFor("background");
            rectangle.strokeWidth = 2;
            rectangle.width = 10;
            rectangle.height = 10;
            break;
        default:
            var bullet = series.bullets.push(new am4charts.CircleBullet());
            bullet.circle.stroke = interfaceColors.getFor("background");
            bullet.circle.strokeWidth = 2;
            break;
    }

    valueAxis.renderer.line.strokeOpacity = 1;
    valueAxis.renderer.line.strokeWidth = 2;
    valueAxis.renderer.line.stroke = series.stroke;
    valueAxis.renderer.labels.template.fill = series.stroke;
    valueAxis.renderer.opposite = opposite;
    valueAxis.renderer.grid.template.disabled = true;

    // Make a panning cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "panXY";
    chart.cursor.xAxis = dateAxis;
    chart.cursor.snapToSeries = series;


    // Create vertical scrollbar and place it before the value axis
    chart.scrollbarY = new am4core.Scrollbar();
    chart.scrollbarY.parent = chart.leftAxesContainer;
    chart.scrollbarY.toBack();

    // Create a horizontal scrollbar with previe and place it underneath the date axis
    chart.scrollbarX = new am4charts.XYChartScrollbar();
    chart.scrollbarX.series.push(series);
    chart.scrollbarX.parent = chart.bottomAxesContainer;

    dateAxis.start = 0.79;
    dateAxis.keepSelection = true;

}




if ($("#temp-value").val() == 1) {
    createAxisAndSeries("temp", "Температура", false, "circle")
}
if ($("#pressure-value").val() == 1) {
    createAxisAndSeries("pressure", "Давление", true, "triangle");
}
if ($("#humidity-value").val() == 1) {
    createAxisAndSeries("humidity", "Влажность", true, "rectangle");
}
if ($("#wind-value").val() == 1) {
    createAxisAndSeries("speed", "Ветер", true, "circle");
}





// Add legend
chart.legend = new am4charts.Legend();

// Add cursor
chart.cursor = new am4charts.XYCursor();


    //}); // end am4core.ready()
