
    
var width = 900; var height = 450;
var yscale = d3.scale.linear().range([height, 0]).domain([0, 1]);
var lineholder = [];   
var chart = d3.select(".chart")
//make SVG responsive
chart.attr("preserveAspectRatio", "xMinYMin meet")
   .attr("viewBox", "0 0 900 450")

var tooltip = d3.select('.chartwrapper').append("div").attr("class", "tooltip");


//    .attr("class", "tooltip")
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

//axisOrder = ['discharge', 'patexp', 'outcome']
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
        d.income = yscale(+d.outcome);
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
  //  console.log(lineholder);
    return lineholder;        
};

function provider(d){
    return d.provider;
}

function generateLines(input){   
    
    //re-generating axes
    //options = change data by removing a category 
    //initial data binding is an array ? !

        
    var linehold =  d3.select('.lineholder').selectAll('.polyline-holder').data(input, provider);
    
    var lineholdG =  linehold.enter().append('g').attr('class' ,'polyline-holder');
//    lineholdG.append('div').attr('class', 'tooltip');
    lineholdG
        .append('polyline').attr('class', 'polyline')   
        .attr("points", function(d){return generatePointArray(d)}).style("stroke", function(d, i){
            if (d['cost'][1] > yscale(.5)){
             return 'lightblue';
           //  return "#00CED1";
            }  
            else {
                return '#00CED1';
               // return "#ff5050";
            }});
    
    lineholdG.transition().styleTween('stroke-opacity', function(){return d3.interpolate(0, 1)});
    


    var polylinehover = lineholdG.append('polyline').attr('class', 'polyline-hover')
        .attr("points", function(d,i){ return generatePointArray(d) } )
        .style("stroke", function(d, i){
            if (d['cost'] > yscale(.5)){
                return 'lightblue';
             //return "#00CED1";
            }  
            else {
                return '00CED1';
                //return "#ff5050";
            }})
    .on('mousemove', function(d, i){
        
        tooltip.style("display", "block")
            .html(d.provider + '<br>' + d.zip + ' , ' + d.state)
          .style("left", (d3.event.pageX - 34) + "px")
          .style("top", (d3.event.pageY - 12) + "px");
        
    }).on('mouseleave', function(){
        tooltip.style('display', 'none');
        $('.tooltip').css('display', 'none');
              $('.tooltip2').css('display', 'none');
    });
    

    
    
            
//        for (i=0; i<axisOrder.length; i++){
//            
//            console.log(i);
//            
//            //takes original and not scaled values
//            
//            var type = axisOrder[i];
//            var log = d[type];
//        d3.select('.chart-height-holder').append("div").attr("class", "tooltip2")   
//            .style("display", "block")
//            .html(10)
//            .style("left", Math.min(99, Math.max(9, 4+100*this.points[i].x/900)) + "%")
//            .style("top", 100*this.points[i].y/450 + "%")
//
//            }
        
//     lineholdG.selectAll('.circle').data(function(d){return generatePointArray(d)[0]}).enter().append('circle').attr('class', 'circle').attr('r', 2).attr('cx', function(d){return d[0]})
//     .attr('cy', function(d){return d[1]}).style('fill', 'black')
//      .on('mousemove', function(d, i){
//         console.log('circle');
//        tooltip.style("display", "block")
//            .html(function(d){return 'cost: ' + generatePointArray(d)[0]})
//          .style("left", "0px")
//          .style("top", "0px");
//    }).on('mouseleave', function(){
//        tooltip.style('display', 'none');
//    });
// ;
    
//    
    linehold.exit().transition().duration(500).style('stroke-opacity','0').remove();
    
   // lineholdG.selectAll(.polyline('.circle').data([4, 4, 4]).enter().append('g').attr('class', 'circle');
    
    //    lineholdG.append('circle').attr('r', '.3').attr("points", function(d,i){ return generatePointArray(d) }).attr('cy', '').stroke('black');
     

};

function generateAxes(axes){   
    var axislabel = d3.select('.axislabels').selectAll('.axis-label').data(axisArrangement[axisOrder.length]);
    axislabel.enter().append('div').attr('class', 'axis-label')
        .html(function(d,i){
        return axisLabels[axisOrder[i]]  
                           })
        .style('left', function(d,i){
        return Math.min(Math.max(1.5, 100*d/width), 97.5) + '%';
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
        var lowerFilter, upperFilter;        
        lowerFilter = yscale(lowerFilterValue/100);
        upperFilter = yscale(upperFilterValue/100);        
        
        if (lowerFilterValue){
            filtered = filtered.filter(function(d,i){return d[currFilterType] < lowerFilter });
        } ;
        if (upperFilterValue){  
            filtered = filtered.filter(function(d,i){return d[currFilterType] > upperFilter });  };
        if (searchFilter.type){
            filtered = filtered.filter(function(d,i){return d[searchFilter.type] === searchFilter.value });        
        };
    };
    return filtered;
};

function resetFilters(){
    rangeFilters = {
        cost: [null, null],
        discharge: [null, null],
        outcome: [null, null],
        patexp: [null, null],
        income: [null, null]
    };    
    searchFilter.type = null;
    searchFilter.value = null;    
    filterLowerPct = null;
    filterUpperPct = null;
    update(origLineData);
    $('.thumb.thumb-lower').removeAttr('style');
    $('.thumb.thumb-upper').removeAttr('style');
    $('#tags').val('');

};


//POST-FILTER DATA UPDATE / RE-PLOT
function update(data){
    generateLines(data);
    generateAxes();        
};

function setThumbToolTip(thumb, slider){
    var pct;
    if (thumb.hasClass('vertical') ){
//        var upperY = slider.offset().top;
//        var pos = thumb.offset().top;   
        pct = Math.abs(100-100*(thumb.offset().top-slider.offset().top+thumb.height())/slider.height());             
    }
    else if (thumb.hasClass('horizontal')){
//        var left = slider.offset().left;
//        var pos = thumb.offset().left;        
        pct = Math.abs(100*(thumb.offset().left-slider.offset().left+thumb.width())/slider.width());
    };  
    thumb.find('.thumb-tooltip').html((pct/100).toFixed(1));     
    return pct;
};
function mouseOverSlider(){
    $(this).find('.thumb-tooltip').css('display', 'block');
    setThumbToolTip($(this).find('.thumb-upper'), $(this));
    setThumbToolTip($(this).find('.thumb-lower'), $(this));      
};


//GET GRANULAR HERE
function mouseDownThumb(thumb){
    var thumb  = $(this);
    var sliderParent = $(this).closest('.slider');
    var thumbToolTip = thumb.find('.thumb-tooltip').css('display', 'block');
//thumb.attr('class') === 'thumb thumb-lower thumb-active'
    if (thumb.hasClass('thumb-active')){
   
        if (thumb.hasClass('thumb-lower')){ 
            var pct = setThumbToolTip(sliderParent.find('.thumb-upper'), sliderParent);         
            sliderParent.mousemove(function(){sliderMouseMove(sliderParent, thumb, 0, pct, true, false, thumbToolTip)} );  
        }
        else if (thumb.hasClass('thumb-upper')){ 
            var pct = setThumbToolTip(sliderParent.find('.thumb-lower'), sliderParent);        
            sliderParent.mousemove(function(){sliderMouseMove(sliderParent, thumb, pct, 100, false, true, thumbToolTip)} );    
        };   
    };   
};
function sliderMouseMove(slider, thumb, lowerbound, upperbound, lower, upper, thumbToolTip){
    var cssproperty;
    if (thumb.hasClass('vertical')){
        var upperpos = null; var lowerpos = null;
        var upperY = slider.offset().top;
        var pct = 100-100*(event.pageY-upperY)/slider.height();
        cssproperty = 'bottom';
    } else if (thumb.hasClass('horizontal')){
        var upperpos = null; var lowerpos = null;
        var upperY = slider.offset().left;
        var pct = 100*(event.pageX-upperY)/slider.width();
        cssproperty = 'left';           
    };
    pct = Math.max(lowerbound, Math.min(upperbound, pct));        
    filterType = thumb.attr('filterType');
    thumb.css(cssproperty, pct + '%');
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

//mouseleave triggers a data update
function mouseUpSlider(){ 
    if (filterLowerPct){
        rangeFilters[filterType][0] = filterLowerPct;    
    }
    else if (filterUpperPct){
        rangeFilters[filterType][1] = filterUpperPct;           
    }; 
    filterLowerPct = null;
    filterUpperPct = null;
    $(this).find('.thumb-tooltip').css('display', 'none');
    update(filterData());
    $(this).unbind('mousemove') ;
};


function prepareAutoCompleteInput($input){
    var typingTimer;                //timer identifier
    var doneTypingInterval = 300;  //time in ms, 5 second for example
    $input.keypress(function(e) {
        if(e.which == 13) {
            doneTyping();
            $('#ui-id-1').css('display', 'none');            
            return false;
        }
    });
    
    function setFilterType(val){
        if  (!val){
            searchFilter.type = null;
            searchFilter.value = null;
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


function initialLoad(){
    d3.csv('/assets/csvdata/allpercentile.csv',function(data){ 
        origLineData = generateLineData(data);
        update(origLineData);
        dataDependency();  //runs most functions after csv data loaded
    });
};

var item;
function dataDependency(){
    $( function() {
        $( "#tags" ).autocomplete({  
            source: autoCompleteSource.values.sort().reverse(),
            focus: function (event, ui){
                if (item){
                   item.css('color', 'gray')
                };
                item =  $('#ui-id-1').find(".ui-menu-item-wrapper:contains(" + ui.item.value + ")")    
                item .css('color', 'blue');
            }
        });
    }) ;
    prepareAutoCompleteInput($('#tags'));
    

    $('.reset-button').click(resetFilters);
    
    function filterMouseOverClick(){
        $(this).removeClass('hide');
        $(document).unbind('click');
    };
    
    $('.thumb').mousedown(mouseDownThumb).mouseover(function(){$(this).addClass('thumb-active')}).mouseout(function(){$(this).removeClass('thumb-active')});
    $('.slider').mouseup(mouseUpSlider).mouseleave(mouseUpSlider).mouseover(mouseOverSlider);
    $('.filter').mouseover(filterMouseOverClick)
    .click(filterMouseOverClick)
    .mouseleave(function(){
        var filter = $(this);
        $(document).click(function(){
                filter.addClass('hide');                    
            });
        }) 
    
 
};


initialLoad();