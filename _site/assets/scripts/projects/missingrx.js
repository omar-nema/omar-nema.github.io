
var chart = d3.select(".chart")
//make SVG responsive
chart.attr("preserveAspectRatio", "xMinYMin meet")
   .attr("viewBox", "0 0 900 450");
d3.select('.axislabels')
    .attr("preserveAspectRatio", "xMinYMin meet")
   .attr("viewBox", "0 0 900 50");

var nestedData;

function generateLineData(input){  
    //var max = ;
    input.forEach(function(d, i){
        d.risk = +d.risk;    
        d.primaryAvg = +d.primaryAvg;
        d.secAvg = +d.secAvg;
        d.primProportion = +d.primProportion;
        d.secProportion = +d.secProportion;
    });       
    nestedData =  d3.nest().key(function(d){return d.type}).entries(input);
    return nestedData;
};

function initialLoad(){
    d3.csv('/assets/csvdata/patprofile.csv',function(data){ 
        generateLineData(data);
        dataDependency();  //runs most functions after csv data loaded
    });
};


function generateRectangles(input){    
    var rectholder =  chart.selectAll('.rectholder').data(input);    
    rectholder.exit().remove();
    
    //rectUpdate
    rectholder.enter().append('g').attr('class', 'rectholder');    
    
    //squares or chunky rect?
    rectholder.data(function(d){return d.values}).enter().append('g');

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