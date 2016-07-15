
    
var width = 900; var height = 450;
var yscale = d3.scale.linear().range([height, 0]).domain([0, 1]);
var lineholder = [];   
var chart = d3.select(".chart")
//make SVG responsive
chart.attr("preserveAspectRatio", "xMinYMin meet")
   .attr("viewBox", "0 0 900 450")

var tooltip = d3.select('.chartwrapper').append("div")
    .attr("class", "tooltip")
//    .style("display", "none");

var yAxis = d3.svg.axis().scale(yscale).orient("left").tickSize(0).tickValues([]);
var origLineData;
var currData;

var discharge = 0;
var outcome = width*.4;
var patexp =  width*.56;
var cost = width;


var filterType = null;
var filterLowerBound = 0;
var filterUpperBound = 100;
var filterLowerPct = null;
var filterUpperPct = null;

var axes = {
    discharge: discharge,
    outcome: outcome,
    patexp: patexp,
    cost: cost
};
var rangeFilters = {
    cost: [null, null],
    discharge: [null, null],
    outcome: [null, null],
    patexp: [null, null],
    income: [null, null]
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

    
function generateLineData(input, axes){
    input.forEach(function(d, i){
        d.cost = yscale(+d.cost);
        d.discharge = yscale(+d.discharge);
        d.patexp = yscale(+d.patexp);
        d.outcome = yscale(+d.outcome);        
    });      
    generatePointArray(input);    
    return input;
};

function generatePointArray(input){
    var line = [], pt = [];
    lineholder = [];
    
    Object.keys(axes).forEach(function(d2, i2){
        pt[i2] = [axes[d2], input[d2]];
    });   
    lineholder.push(pt);            
    line = [];
    pt = [];             
    return lineholder;        
};

function provider(d){
    return d.provider;
}

function generateLines(input){    
    //change axis order
    //understand d3 key function
        
    var linehold =  d3.select('.lineholder').selectAll('.polyline-holder').data(input, provider);
    var lineholdG =  linehold.enter().append('g').attr('class' ,'polyline-holder');
    lineholdG.append('div').attr('class', 'tooltip');
    lineholdG.append('polyline').attr('class', 'polyline')
        .style("stroke", 'blue') 
        .attr("points", function(d){return generatePointArray(d)})
        .style("stroke", function(d, i){
            if (d['cost'][1] > yscale(.5)){
             console.log('ay')
             return "#00CED1";
            }  
            else {
                return "#ff5050";
            }}) ;
    lineholdG.append('polyline').attr('class', 'polyline-hover')
        .style("stroke", 'blue') 
        .attr("points", function(d,i){ return generatePointArray(d) } )
        .style("stroke", function(d, i){
            if (d['cost'] > yscale(.5)){
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
    var axislabel = d3.select('.chartwrapper').selectAll('.axis-label').data(getObjectValues(axes) );
    axislabel.enter().append('div').attr('class', 'axis-label').html(function(d,i){return Object.keys(axes)[i]} ).style('left', function(d,i){
        return Math.min(Math.max(5, 100*d/width), 97) + '%';
    });
    axislabel.exit().remove();

    var axishold = d3.select('.axisholder').selectAll('.y-axis.axis').data(getObjectValues(axes));     
    axishold.enter().append('g').call(yAxis).attr('class', 'y-axis axis').attr('transform', function(d, i){
        return "translate(" + d + ",0)" 
    });
    axishold.exit().remove();
};

///////FILTER FUNCTIONS
function filterData(){
    var filtered = origLineData;
    var filtervalue;  
    for (currFilterType in rangeFilters){
    var lowerFilterValue = rangeFilters[currFilterType][0];
    var upperFilterValue = rangeFilters[currFilterType][1]; 
        if (lowerFilterValue){
            filtered = filtered.filter(function(d,i){return d[currFilterType] < yscale(lowerFilterValue/100) });
        } 
        if (upperFilterValue){  
            filtered = filtered.filter(function(d,i){return d[currFilterType] > yscale(upperFilterValue/100) });            
        }
    };
    return filtered;
};


//POST-FILTER DATA UPDATE / RE-PLOT
function update(data, axes){
    generateLines(data, axes);
    generateAxes(axes);        
};

//GET GRANULAR HERE
function mouseDownThumb(thumb){
    var thumb  = $(this);
    var sliderParent = $(this).closest('.slider');
    var upperY = sliderParent.offset().top;    
    //calculate movement bounds, buttom is 100 % 
    
    if (thumb.attr('class') === 'thumb thumb-lower'){
        upperpos = sliderParent.find('.thumb-upper').offset().top;
        var upperpct = 100-100*(upperpos-upperY)/sliderParent.height();  
        sliderParent.mousemove(function(){sliderMouseMove(sliderParent, thumb, 0, upperpct, true, false)} );  
    }
    else if (thumb.attr('class') === 'thumb thumb-upper'){
        lowerpos = sliderParent.find('.thumb-lower').offset().top;       
        var lowerpct = 100-100*(lowerpos-upperY)/sliderParent.height();
        sliderParent.mousemove(function(){sliderMouseMove(sliderParent, thumb, lowerpct, 100, false, true)} );         
    };    
};
///SHOULD TAKE WIDE OR HEIGHT BASED SLIDER
function sliderMouseMove(slider, thumb, lowerbound, upperbound, lower, upper){
    var upperpos = null; var lowerpos = null;
    var upperY = slider.offset().top;
    var pct = 100-100*(event.pageY-upperY)/slider.height();
    pct = Math.max(lowerbound, Math.min(upperbound, pct));
    filterType = thumb.attr('filterType');
    thumb.css('bottom', pct + '%');
    if (upper){
        filterUpperPct = pct;
        filterLowerPct = null;            
    }
    else if (lower){
        filterUpperPct = null;        
        filterLowerPct = pct;    
    };
};

function mouseUpSlider(){ 
    if (filterLowerPct){
        rangeFilters[filterType][0] = filterLowerPct;    
    }
    else if (filterUpperPct){
        rangeFilters[filterType][1] = filterUpperPct;           
    }; 
    
    update(filterData(), axes);
    $(this).unbind('mousemove') ;
};


function initialLoad(){
    d3.csv('/assets/csvdata/allpercentile.csv',function(data){ 
        origLineData = generateLineData(data, axes);
        update(origLineData, axes);
        dataDependency();  //runs most functions after csv data loaded
    });
};
function dataDependency(){
    $('.thumb').mousedown(mouseDownThumb);
    $('.slider').mouseup(mouseUpSlider).mouseleave(mouseUpSlider);
    $('.filter').mouseover(function(){
        $(this).removeClass('hide');
    }).mouseleave(function(){
        $(this).addClass('hide');        
    });
};


initialLoad();




//    for (filter in selectionFilters){
//    filtervalue = selectionFilters[filter];
//        if (filtervalue){
//            console.log(filtered[filter], filtervalue);
//            filtered = filtered.filter(function(d,i){return d[filter] === filtervalue });
//        }     
//    };


    
    
    
    

//    var line = [], pt = {};
//    lineholder = [];
//    input.forEach(function(d,i){ //each row of array corresponds to one line ((x,y) array for each axis)
//        Object.keys(axes).forEach(function(d2, i2){
//            pt[d2] = [axes[d2], +d[d2]];
//        });   
//        
//        lineholder.push({points: pt, provider: d.provider, state: d.state});            
//        line = [];
//        pt = {};
//    });  
//    return lineholder;
    //only filters cost
//OR only generates cost lines


//if we change axes - must regenerate everyhting
//so like just regen?
//    var linehold =  d3.select('.lineholder').selectAll('.polyline-holder').data(input);
//    var lineholdG =  linehold.enter().append('g').attr('class' ,'polyline-holder');
//    
//    //bind the data to points = solved problem
//    //displaying tooltip -- everything in one array for easy peasy access
//    
//
//    lineholdG.append('div').attr('class', 'tooltip');
//    lineholdG.append('polyline').attr('class', 'polyline')
//        .style("stroke", 'blue') 
//        .attr("points", function(d,i){ return getObjectValues(d.points) } )
//        .style("stroke", function(d, i){
//            if (d.points['cost'][1] > yscale(.5)){
//             console.log('ay')
//             return "#00CED1";
//            }  
//            else {
//                return "#ff5050";
//            }}) ;
//    
//    lineholdG.append('polyline').attr('class', 'polyline-hover')
//        .style("stroke", 'blue') 
//        .attr("points", function(d,i){ return getObjectValues(d.points) } )
//        .style("stroke", function(d, i){
//            if (d.points['cost'][1] > yscale(.5)){
//             console.log('ay')
//             return "#00CED1";
//            }  
//            else {
//                return "#ff5050";
//            }})
//    .on('mousemove', function(d, i){
//        tooltip.style("display", "block")
//            .html(d.provider + '<br>' + d.state + '<br>' + d.income)
//          .style("left", (d3.event.pageX - 34) + "px")
//          .style("top", (d3.event.pageY - 12) + "px");
//    }).on('mouseleave', function(){
//        tooltip.style('display', 'none');
//    });
//    
//    linehold.exit().remove();