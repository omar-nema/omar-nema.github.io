
    
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

var filterType = null;
var filterLowerBound = 0;
var filterUpperBound = 100;
var filterLowerPct = null;
var filterUpperPct = null;
var autoCompleteSource = {
   state: [],
   provider: [],
   zip: [] ,
    values: []
};
var searchFilter = {
    type: null,
    value: null
};

//used to change ordering of axes
var axisArrangement = {
    2: [0, width],
    3: [0, width*.5, width],
    4: [0, width*.4, width*.56, width],
};
var axisOrder = ['discharge', 'patexp', 'outcome', 'cost'];
var axisLabels = {
    discharge: 'size',
    patexp: 'experience',    
    outcome: 'outcome',        
    cost: 'cost'    
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


function generateLineData(input){
    input.forEach(function(d, i){
        d.cost = yscale(+d.cost);
        d.discharge = yscale(+d.discharge);
        d.patexp = yscale(+d.patexp);
        d.outcome = yscale(+d.outcome);        
    });      
    generatePointArray(input);    
    return input;
};

//two axis, three axis, four axis arrangement

function generatePointArray(input){
    
    if (input.provider && autoCompleteSource['provider'].indexOf(input.provider) == -1){    
        autoCompleteSource['provider'].push(input.provider);
        autoCompleteSource['values'].push(input.provider);
    }  ;
    if (input.zip && autoCompleteSource['zip'].indexOf(input.zip) == -1){    
        autoCompleteSource['zip'].push(input.zip); 
        autoCompleteSource['values'].push(input.zip);        
    }  ;
    if (input.state && autoCompleteSource['state'].indexOf(input.state) == -1){    
        autoCompleteSource['state'].push(input.state); 
        autoCompleteSource['values'].push(input.state);        
    }  ;    

    
    var line = [], pt = [];
    lineholder = [];
    var axisOrderLength = axisOrder.length;
    for (j=0;j<axisOrderLength;j++){
        pt[j] = [axisArrangement[axisOrderLength][j], input[axisOrder[j]] ];
    };
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
    
//    autoCompleteSource = [];
        
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
    var axislabel = d3.select('.chartwrapper').selectAll('.axis-label').data(axisArrangement[axisOrder.length]);
    
    axislabel.enter().append('div').attr('class', 'axis-label')
        .html(function(d,i){
        return axisLabels[axisOrder[i]]  
                           })
        .style('left', function(d,i){
        return Math.min(Math.max(3, 100*d/width), 97) + '%';
    });    
    axislabel.exit().remove();

    var axishold = d3.select('.axisholder').selectAll('.y-axis.axis').data(axisArrangement[axisOrder.length]); 
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
        } ;
        if (upperFilterValue){  
            filtered = filtered.filter(function(d,i){return d[currFilterType] > yscale(upperFilterValue/100) });  };
        //why running multipleTimes?
        if (searchFilter.type){
            filtered = filtered.filter(function(d,i){return d[searchFilter.type] === searchFilter.value });        
        };
    };
    return filtered;
};

function resetFilters(){
    update(origLineData);
    $('.thumb.thumb-lower').removeAttr('style');
    $('.thumb.thumb-upper').removeAttr('style');

};


//POST-FILTER DATA UPDATE / RE-PLOT
function update(data){
    generateLines(data);
    generateAxes();        
};

function setThumbToolTip(thumb, slider){    
    var upperY = slider.offset().top;
    var pos = thumb.offset().top;
    var pct = Math.abs(100-100*(pos-upperY+thumb.height())/slider.height()); 
    thumb.find('.thumb-tooltip').html((pct/100).toFixed(1));     
    return pct;
};


function mouseOverSlider(){
    $(this).find('.thumb-tooltip').css('display', 'block');
    setThumbToolTip($(this).find('.thumb-upper'), $(this));
    setThumbToolTip($(this).find('.thumb-lower'), $(this));    
    
//    var upperY = $(this).offset().top;
//    upperThumb = $(this).find('.thumb-upper');
//    upperpos = upperThumb.offset().top;
//    var upperpct = Math.abs(100-100*(upperpos-upperY+upperThumb.height())/$(this).height()); 
//    upperThumb.find('.thumb-tooltip').html((upperpct/100).toFixed(1)); 
    //    lowerThumb = $(this).find('.thumb-lower');    
//    lowerpos = lowerThumb.offset().top;       
//    var lowerpct = Math.abs(100-100*(lowerpos-upperY+lowerThumb.height())/$(this).height());
//    lowerThumb.find('.thumb-tooltip').html((lowerpct/100).toFixed(1));      
};



//GET GRANULAR HERE
function mouseDownThumb(thumb){
    var thumb  = $(this);
    var sliderParent = $(this).closest('.slider');
    var thumbToolTip = thumb.find('.thumb-tooltip').css('display', 'block');

    if (thumb.attr('class') === 'thumb thumb-lower thumb-active'){ 
        var pct = setThumbToolTip(sliderParent.find('.thumb-upper'), sliderParent);         
        sliderParent.mousemove(function(){sliderMouseMove(sliderParent, thumb, 0, pct, true, false, thumbToolTip)} );  
    }
    else if (thumb.attr('class') === 'thumb thumb-upper thumb-active'){
        var pct = setThumbToolTip(sliderParent.find('.thumb-lower'), sliderParent);        
        sliderParent.mousemove(function(){sliderMouseMove(sliderParent, thumb, pct, 100, false, true, thumbToolTip)} );             
    }; 
  
};
///SHOULD TAKE WIDE OR HEIGHT BASED SLIDER
function sliderMouseMove(slider, thumb, lowerbound, upperbound, lower, upper, thumbToolTip){
    console.log('ay');
    var upperpos = null; var lowerpos = null;
    var upperY = slider.offset().top;
    var pct = 100-100*(event.pageY-upperY)/slider.height();
    pct = Math.max(lowerbound, Math.min(upperbound, pct));
    filterType = thumb.attr('filterType');
    thumb.css('bottom', pct + '%');
    thumbToolTip.html((pct/100).toFixed(1));    
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
    $(this).find('.thumb-tooltip').css('display', 'none');
    update(filterData());
    $(this).unbind('mousemove') ;
};


function initialLoad(){
    d3.csv('/assets/csvdata/allpercentile.csv',function(data){ 
        origLineData = generateLineData(data);
        update(origLineData);
        dataDependency();  //runs most functions after csv data loaded
    });
};


function prepareAutoCompleteInput($input){
    var typingTimer;                //timer identifier
    var doneTypingInterval = 300;  //time in ms, 5 second for example
    $input.keypress(function(e) {
        if(e.which == 13) {
            doneTyping();
            return false;
        }
    });
    
    function setFilterType(val){
        if  (!val){
            return update(origLineData);
        }
        searchFilter.type = 'notype';
        if (autoCompleteSource.provider.indexOf(val) > -1){
            searchFilter.type = 'provider';          
        }
        else if (autoCompleteSource.state.indexOf(val) > -1){
            searchFilter.type = 'state';
        }
        else if (autoCompleteSource.zip.indexOf(val) > -1){
            searchFilter.type = 'zip';
        }  ;
        searchFilter.value = val;          
        update(filterData());  
    };
    //on keyup, start the countdown
    $input.on('keyup', function () {
      clearTimeout(typingTimer);
      typingTimer = setTimeout(doneTyping, doneTypingInterval);
    });
    $input.on('keydown', function () {
      clearTimeout(typingTimer);
    });
    function doneTyping () {
      setFilterType($('#tags').val());
    };    
};

function dataDependency(){
    
    $( function() {
        $( "#tags" ).autocomplete({    
          source: autoCompleteSource.values ,
            autoFocus: true
        });
    });
    prepareAutoCompleteInput($('#tags'));
    

    $('.reset-button').click(resetFilters);
    
    $('.thumb').mousedown(mouseDownThumb).mouseover(function(){$(this).addClass('thumb-active')}).mouseout(function(){$(this).removeClass('thumb-active')});
    $('.slider').mouseup(mouseUpSlider).mouseleave(mouseUpSlider).mouseover(mouseOverSlider);
    $('.filter').mouseover(function(){
        $(this).removeClass('hide');
    }).mouseleave(function(){
        $(this).addClass('hide');        
    });
};


initialLoad();