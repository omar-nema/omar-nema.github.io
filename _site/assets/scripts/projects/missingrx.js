
var width = 900; var height = 450;

var chart = d3.select(".chart")
//make SVG responsive
chart.attr("preserveAspectRatio", "xMinYMin meet")
   .attr("viewBox", "0 0 900 450");
d3.select('.axislabels')
    .attr("preserveAspectRatio", "xMinYMin meet")
   .attr("viewBox", "0 0 900 50");

var nestedData;

var yscale = d3.scaleOrdinal([height, 0]); //axes scale in generateLineData function
var xscale = d3.scaleLinear([0, width]);


//var yAxis = d3.axisLeft(yscale).ticks(3, 's').tickFormat(function(d) { return 100*d; }).tickPadding([8]).tickSize(0);


function generateLineData(input){  
    input.forEach(function(d, i){
        d.risk = +d.risk;    
        d.primaryAvg = +d.primaryAvg;
        d.secAvg = +d.secAvg;
        d.primProportion = +d.primProportion;
        d.secProportion = +d.secProportion;
    });    

    var xmax = d3.max(input, function(d){return d.risk});
    var ymax = d3.max(input, function(d){return d.primaryAvg}) + d3.max(input, function(d){return d.secAvg});
    
    xscale.domain([0, xmax]);
    yscale.domain([0, ymax]);

    
    nestedData =  d3.nest().key(function(d){return d.type}).entries(input);
    return nestedData;
};

function initialLoad(){
    d3.csv('/assets/csvdata/patprofile.csv',function(data){ 
        generateLineData(data);
        dataDependency();  //runs most functions after csv data loaded
    });
};

//marker for comparison

function generateRectangles(input){    
    var rectholder =  chart.selectAll('.rectholder').data(input);    
    rectholder.exit().remove();
    
    //1 sq  = two datapoints
    
    //rectUpdate
    rectholder.enter().append('g').attr('class', 'rectholder');   
        
    //squares or chunky rect?
    rectholder.selectAll('.rectholder').selectAll('.rect').data(function(d){console.log(d); return d.values}).enter().append('g');

};

//should rescale - also need to develop scale based on largest
function generateAxes(){
    
};

function dataDependency(){
    generateRectangles(nestedData);
};

$(document).ready(function(){
    initialLoad(); 
});