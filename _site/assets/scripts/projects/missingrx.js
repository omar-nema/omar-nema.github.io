
var width = 500; var height = 200;

var chart = d3.select(".chart")
//make SVG responsive
chart
    .attr("preserveAspectRatio", "xMinYMin meet")
   .attr("viewBox", "0 0 500 200")
//    .attr('transform', 'translate(40, 0)')
;
//d3.select('.risk-slider')
//    .attr("preserveAspectRatio", "xMinYMin meet")
//   .attr("viewBox", "0 0 600 100");


//var yscale = d3.scaleLinear(); //axes scale in generateLineData function
////var yaxisscale = d3.scaleLinear();


//WHAT IF WE RUN A GOD DAMN SIMULATION INSTEAD


var yscale = d3.scaleBand().rangeRound([height, 0]).padding(.4);

var xscale = d3.scaleLinear().range([0, width]);
//var yscaleAxes = d3.scaleLinear();
var nestedData;
var types = [];

var typemap = {};
var updateTransition = d3.transition().duration(700);    

var colorscale = d3.scaleOrdinal(['#FF9D28', '#4D94E8',  '#BD10E0', '#50E3C2', '#F1374D']);



function getObjectValues(input){
    output = [];
    for(key in input) {
        if(input.hasOwnProperty(key)) {
            var value = input[key];
            output.push(value);
        }
    }
    return output;   
};
//can 
// do we need to doublescale ?!

function generateLineData(input){ 
    
    input.forEach(function(d, i){
        d.risk = +d.risk;
        d.primaryAvg = +d.primaryAvg;
        d.secAvg = +d.secAvg;
        d.primProportion = +d.primProportion;
        d.secProportion = +d.secProportion;
        if (types.indexOf(d.type) === -1){
            types.push(d.type);    
        };
    });    
    var xmax = d3.max(input, function(d){return d.primaryAvg}) + d3.max(input, function(d){return d.secAvg});
    xscale.domain([0, xmax]); 
    
    yscale.domain(types);

    var yAxis = d3.axisLeft(yscale).tickSize(0).tickPadding([10]);
    chart.append('g').attr('class', 'y-axis').call(yAxis);
    var xAxis = d3.axisTop(xscale).tickValues([0, 10, 20, 30, 40, 50, 60]).tickSize(0);
    chart.append('g').attr('class', 'x-axis').call(xAxis);    
    
    colorscale.domain(types);   //colorscale = static, determined here
    nestedData =  d3.nest().key(function(d){return d.risk}).entries(input);    
    return nestedData;
};

//function generateYScale(){
//    for (i=0; i<types.length; i++){
//        typemap[types[i]] = i;
//    };  
//    var typevals = getObjectValues(typemap);
//   // var yscalemax = ((types.length-1)*height)/types.length;
//    
////    yscale.range([0, yscalemax]);
//    yscale.range([height, 0]);
//    
//    yscale.domain([d3.min(typevals), d3.max(typevals)]);
//    
//
//};


//STACKED TO GROUPED FUNCTION?!
//VERDICT = child data needs to be updated too!
function generateRectangles(input, riskval){  

//BARS 
   
    //RE-BIND DATA - children done separately
    var rectholder =  chart.select('.rectholder').selectAll('.series').data(input[riskval].values, function(d){return d.type}); 
    rectholder.selectAll('.bar-first').data(input[riskval].values, function(d){return d.type});
    rectholder.selectAll('.bar-second').data(input[riskval].values, function(d){return d.type});  
    
    //stack a bunch of squares?
    //and colors as two colors?
    
    //EXIT
    d3.selectAll('.series').exit().transition().style('opacity', '0').remove();  
       
//    //UPDATE (no data binding) 
    d3.transition(updateTransition).selectAll('.bar-first')
        .attr('y', function(d){return yscale(d.type)})      
        .attr('height', yscale.bandwidth() + 'px')    
        .attr('width', function(d){return xscale(d.secAvg)})
    
    d3.transition(updateTransition).selectAll('.bar-second')
        .attr('x', function(d){return xscale(d.secAvg)})     
        .attr('y', function(d){return yscale(d.type)})     
        .attr('height', yscale.bandwidth() + 'px')
        .attr('width', function(d){return xscale(d.primaryAvg)}); 

    //ENTER
    var series = rectholder.enter().append('g').attr('class', 'series');   
    
    series.append('rect').attr('class', 'bar-first')
        .transition().styleTween('opacity', function(){return d3.interpolate(0, 1)})      
        .attr('fill', function(d){return colorscale(d.type)})
        .attr('x', '0px')
        .attr('y', function(d){return yscale(d.type)})    
        .attr('height', yscale.bandwidth() + 'px')
        .attr('width', function(d){return xscale(d.secAvg)});
    
    series.append('rect').attr('class', 'bar-second')
        .transition().styleTween('opacity', function(){return d3.interpolate(0, 1)})      
        .attr('fill', function(d){return colorscale(d.type)})
        .style('opacity', '.4')
        .attr('x', function(d){return xscale(d.secAvg)})
        .attr('y', function(d){return yscale(d.type)})    
        .attr('height', yscale.bandwidth() + 'px')
        .attr('width', function(d){return xscale(d.primaryAvg)});    
    
//    series.append('rect').attr('class', 'bar-second')
//        .transition().styleTween('opacity', function(){return d3.interpolate(0, 1)})        
//        .attr('fill', function(d){return colorscale(d.type)})
//        .style('opacity', '.4')
//        .attr('x', function(d){return xscale(d.primaryAvg)})
//        .attr('y', function(d){return yscale(typemap[d.type])})    
//        .attr('height', barheight + 'px')
//        .attr('width', function(d){return xscale(d.primaryAvg)}) 
//       // .transition().styleTween('stroke-opacity', function(){return d3.interpolate(0, 1)});     
//    ;   
    
    
};


function initialLoad(){
    d3.csv('/assets/csvdata/patprofile.csv',function(data){ 
        generateLineData(data);
        dataDependency();  //runs most functions after csv data loaded
    });
};


function dataDependency(){ 
    generateRectangles(nestedData, 0);
};

$(document).ready(function(){
    initialLoad(); 
});