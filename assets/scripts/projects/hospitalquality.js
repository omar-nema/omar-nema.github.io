
    
var width = 1000; var height = 500;
var yscale = d3.scale.linear().range([height, 0]).domain([0, 1]);
var lineholder = [];   
var chart = d3.select(".chart")
//make SVG responsive
chart.attr("preserveAspectRatio", "xMinYMin meet")
   .attr("viewBox", "0 0 1000 500")

var tooltip = d3.select('.chartwrapper').append("div")
    .attr("class", "tooltip")
//    .style("display", "none");



var yAxis = d3.svg.axis().scale(yscale).orient("left").tickSize(0).tickValues([]);
var origData;
var currData;

var discharge = 0;
var outcome = width*.4;
var patexp =  width*.56;
var cost = width;

var axes = {
    discharge: discharge,
    outcome: outcome,
    patexp: patexp,
    cost: cost
};
var rangeFilters = {
    cost: null,
    discharge: null,
    outcome: null,
    patexp: null,
};
var selectionFilters = {
    state: null
};




//HELPER FUNCTIONS  
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

///EVENT FUNCTIONS
function showSlider(){
    console.log('aygurl');
    $('.slider-holder').addClass('show');
    $('.slider-holder').one('click', removeSlider);
};
function removeSlider(){
    console.log('second');    
    $('.slider-holder').removeClass('show');
};

function lineMouseOver(line){
    line.attr('class', 'polyline highlight');
};
function lineMouseLeave(line){
    line.attr('class', 'polyline');
};

    
//GENERATE GRAPH FUNCTIONS
function generateLineData(input, axes){
    //scale data

    input.forEach(function(d, i){
        d.cost = yscale(+d.cost);
        d.discharge = yscale(+d.discharge);
        d.patexp = yscale(+d.patexp);
        d.outcome = yscale(+d.outcome);        
    });      
    
    var line = [], pt = {};
    lineholder = [];
    input.forEach(function(d,i){ //each row of array corresponds to one line ((x,y) array for each axis)
        Object.keys(axes).forEach(function(d2, i2){
           //pt = [axes[d2], +d[d2]];
            pt[d2] = [axes[d2], +d[d2]];
        });   

        lineholder.push({points: pt, provider: d.provider, state: d.state});            
        line = [];
        pt = {};
    });  
    
    return lineholder;
};

function generateLines(input){
    
    var linehold =  d3.select('.lineholder').selectAll('.polyline').data(input)
    var lineholdG =  linehold.enter().append('g').attr('class' ,'polyline-holder');
    
    lineholdG.append('div').attr('class', 'tooltip');
    
    console.log(input);

    lineholdG.append('polyline').attr('class', 'polyline')
        .style("stroke", 'blue') 
        .attr("points", function(d,i){ return getObjectValues(d.points) } )
        .style("stroke", function(d, i){
            if (d.points['cost'][1] > yscale(.5)){
             console.log('ay')
             return "#00CED1";
            }  
            else {
                return "#ff5050";
            }}) ;
    
    lineholdG.append('polyline').attr('class', 'polyline-hover')
        .style("stroke", 'blue') 
        .attr("points", function(d,i){ return getObjectValues(d.points) } )
        .style("stroke", function(d, i){
            if (d.points['cost'][1] > yscale(.5)){
             console.log('ay')
             return "#00CED1";
            }  
            else {
                return "#ff5050";
            }})
    .on('mousemove', function(d, i){
        tooltip.style("display", "block")
            .html(d.provider + '<br>' + d.state + '<br>' + d.income)
          .style("left", (d3.event.pageX - 34) + "px")
          .style("top", (d3.event.pageY - 12) + "px");
    }).on('mouseleave', function(){
        tooltip.style('display', 'none');
    });
    
    
    linehold.exit().remove();
};

function generateAxes(axes){
    
        var axislabel = d3.select('.chartwrapper').selectAll('axis-label').data(getObjectValues(axes) )
        
        axislabel.enter().append('div').attr('class', 'axis-label');
    
        axislabel.exit().remove();
    
        var axishold = d3.select('.axisholder').selectAll('.y-axis axis').data(getObjectValues(axes) )            
        axishold.enter().append('g').call(yAxis).attr('class', 'y-axis axis').attr('transform', function(d, i){
            return "translate(" + d + ",0)" 
        });
        axishold.exit().remove();
            //.append('text').attr('class', 'y-axis-label').text(function(d, i){return Object.keys(axes)[i]});
};

///////FILTER FUNCTIONS

function filterData(input){
    var filtered = input;
    var filtervalue;
    for (filter in rangeFilters){
    filtervalue = rangeFilters[filter];
        if (filtervalue){
            filtered = filtered.filter(function(d,i){return d[filter] < yscale(filtervalue[0]) &&  d[filter]  > yscale(filtervalue[1]) });
        }     
    };
    for (filter in selectionFilters){
    filtervalue = selectionFilters[filter];
        if (filtervalue){
            console.log(filtered[filter], filtervalue);
            filtered = filtered.filter(function(d,i){return d[filter] === filtervalue });
        }     
    };
    return filtered;
};
    

//POST-FILTER DATA UPDATE / RE-PLOT
function update(data, axes){
    generateLines(generateLineData(data, axes));
    generateAxes(axes);        
};

function initialLoad(){

    d3.csv('/assets/csvdata/allpercentile.csv',function(data){ 
        update(data, axes);
        dataDependency(data);  //runs most functions after csv data loaded
    });
};

function dataDependency(origdata){
    origData = origdata;
    console.log(filterData(origData));
    update(filterData(origData), axes);
    $('.slider-holder').one('click', showSlider);
};

initialLoad();

