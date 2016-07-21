var width = 900; var height = 450;
var yscale = d3.scaleLinear().range([height, 0]).domain([0, 1]);
var lineholder = [];   
var chart = d3.select(".chart")
//make SVG responsive
chart.attr("preserveAspectRatio", "xMinYMin meet")
   .attr("viewBox", "0 0 900 450")
d3.select('.axislabels')
    .attr("preserveAspectRatio", "xMinYMin meet")
   .attr("viewBox", "0 0 900 50")
//var yAxis =  d3.axisLeft(yscale).ticks([]).tickSize(0);
var yAxis = d3.axisLeft(yscale).ticks(3, 's').tickFormat(function(d) { return 100*d; }).tickPadding([8]).tickSize(0);

//.tickValues([0,50,100]);
var origLineData;
var currData;
//
var tooltip = d3.select('.chartwrapper').append("div").attr("class", "tooltip");
var chartLeftOffset = $('.chartwrapper').offset().left; //user for tooltips
var chartTopOffset = $('.chartwrapper').offset().top;
//
var axisArrangement = {
    2: [width*.2, width*.8],
    3: [0, width*.5, width],
    4: [0, width*.4, width*.56, width],
};
var axisDataObject; //object that is generated using above axisArr. and user-generated axisOrder based on filters
var axisOrder = ['discharge', 'patexp', 'outcome', 'cost'];
var axisLabels = {
    discharge: 'size',
    patexp: 'experience',    
    outcome: 'outcome',        
    cost: 'cost'    
};
var axisLabelContent = {
    discharge: 'Number of medical discharges (from CMS) was used as a proxy for hospital size. <br>Data source name: CMS Cost Report',
    patexp: 'The patient experience rating is based on a survey encompassing medical staff communication, pain management, and hospital environment. Source: CMS Quality Survey',
    outcome: 'Outcome takes into account mortality, infection rate, and functional ability following discharge. Source: CMS Quality Survey',
    cost: 'Displayed cost index that I developed to aggregate billed amounts for procedures, weighed by frequency and price in comparison to other hospitals. (A hospital, for example, that focuses on costly procedures, but offers these procedures at a price lower than competition, will have a low cost index)'
};
//
var rangeFilters = {
    cost: [null, null],
    discharge: [null, null],
    outcome: [null, null],
    patexp: [null, null],
    income: [null, null]
};
var searchFilter = {
    type: null,
    value: null
};
//
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

function generateLineData(input){
    input.forEach(function(d, i){
        d.cost = yscale(+d.cost);
        d.discharge = yscale(+d.discharge);
        d.patexp = yscale(+d.patexp);
        d.outcome = yscale(+d.outcome);
        d.income = yscale(+d.income);
        d.numAxes = axisOrder.length;
    });      
    return input;
};

function updateAxisData(input){
    input.forEach(function(d, i){
        d.numAxes = axisOrder.length;
    });  
    var currAxisData = axisArrangement[axisOrder.length];
    axisDataObject = [];
    for (i=0;i<axisOrder.length; i++){
        var newdata = {};
        newdata['name'] = axisOrder[i]
        newdata['value'] = currAxisData[i];
        axisDataObject.push(newdata);
    };          
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
    //note - axisArrangement is used here, not axisDataObject
    for (j=0;j<axisOrderLength;j++){
        pt[j] = [axisArrangement[axisOrderLength][j], input[axisOrder[j]] ];
    };
    lineholder.push(pt);            
    line = [];
    pt = [];   
    return lineholder;        
};



function generateLines(input, updateTransition){ 
    //fully understand key function
    var linehold =  d3.select('.lineholder').selectAll('.polyline-holder').data(input, function(d){return d.provider});
    var lineholdG =  linehold.enter().append('g').attr('class' ,'polyline-holder');
    var textbox = d3.selectAll('.polyline-holder').selectAll('.textbox').data(function(d) {return generatePointArray(d)[0]  });
    
    d3.transition(updateTransition).select('.lineholder').selectAll('.polyline')
        .attr("points", function(d){return generatePointArray(d)})
        //update
     d3.selectAll('.textbox').attr('x', function(d) {return Math.min(860, d[0]) }).attr('y', function(d) {return Math.min(440
        , (d[1]+12) ) }).text(function(d){return (100*yscale.invert(d[1]) ).toFixed(1)  });
    linehold
        .selectAll('.polyline-hover')
            .attr("points", function(d,i){ return generatePointArray(d) } )
    //exit - takes care of all elements
    linehold.exit().transition().duration(500).style('stroke-opacity','0').remove();       
    //enter
    lineholdG
        .append('polyline').attr('class', 'polyline')   
        .attr("points", function(d){return generatePointArray(d)}).style("stroke", function(d, i){
            if (d.cost < yscale(.8)){
                return "#00CED1";
//                return "#ff5050";                
            }  
            else if (d.cost > yscale(.2)){ 
                  //              return "#00CED1";
                return "#ff5050";               
            }
            else {  
//                return 'white';
                return '#939393';                
            }
    
    });  
    lineholdG.transition().styleTween('stroke-opacity', function(){return d3.interpolate(0, 1)});
    lineholdG
        .append('polyline').attr('class', 'polyline-hover')
        .attr("points", function(d){ return generatePointArray(d) } )
        .style("stroke", function(d, i){ 
                if (d.cost > yscale(.5)){return "#00CED1"} 
                else {return "#ff5050"}
            })
    .on('mousemove', function(d, i){
        tooltip.style("display", "block")
            .html(d.provider + '<br>' + d.city + ' , ' + d.state)
          .style("left", (d3.event.pageX)-chartLeftOffset + "px")
          .style("top", 15+(d3.event.pageY)-chartTopOffset + "px");        
    }).on('mouseleave', function(){
        tooltip.style('display', 'none');
        $('.tooltip').css('display', 'none');
              $('.tooltip2').css('display', 'none');
    });
    
    textbox.enter().append('text').attr('class', 'textbox').attr('x', function(d) {return Math.min(860, d[0]) }).attr('y', function(d) {return Math.min(440
    , (d[1]+12) ) }).text(function(d){return (100*yscale.invert(d[1]) ).toFixed(1)  });   
};

function generateAxes(updateTransition){  
    
//LABELS
    var axislabel = d3.select('.axislabels').selectAll('.axis-label').data(axisDataObject, function(d){return d.name});    
    //UPDATE (transition in CSS, as this is a div)
    
    //options, upon resize, run an update function (heavy)
    //also requires running a mousemove update
    
    //OR//wrap tooltip in svg
    
    //or just add to chart
    
    //ENTER
    var enterlabel = 
        axislabel.enter().append('text').attr('class', 'axis-label')
       .attr('x', function(d,i){return d.value;}).attr("dy", "20px").style('opacity', '0')
        .text(function(d,i){ return axisLabels[axisOrder[i]]})    
        .on('mousemove', function(d, i){
            
//         tooltip.style("display", "block")
//             .html(function(){return axisLabelContent[d.name] })
//             .style("left", 100*((d3.event.pageX)-chartLeftOffset)/$('.chartwrapper').width() + "%")
//             .style("top", "10%").style('width', '170px')
//             .style('background-color', 'rgba(255,255,255,.8)')
//            .style('box-shadow', '0 0 2px rgba(0,0,0,.3)').style('padding', '5px');})
//    
         tooltip.style("display", "block")
             .html(function(){return axisLabelContent[d.name] })
             .style("left", (d3.event.pageX)-chartLeftOffset + "px")
             .style("top", "10%").style('width', '170px')
             .style('background-color', 'rgba(255,255,255,.8)')
            .style('box-shadow', '0 0 2px rgba(0,0,0,.3)').style('padding', '5px');})
        .on('mouseleave', function(){
            tooltip.style('background', 'none').style('box-shadow', 'none').style('display', 'none').html('');
        });     
    //UPDATE/ANIMATE
    d3.selectAll('.axis-label').transition(updateTransition).style('opacity', '1').attr('x', function(d,i){return d.value;}).attr("dy", "20px");      
    //EXIT
    axislabel.exit().remove();
    
        
//AXES    
    var axishold = d3.select('.axisholder').selectAll('.y-axis.axis').data(axisDataObject, function(d){return d.name});
    //ENTER
    var enteraxis = axishold.enter().append('g').call(yAxis).attr('class', function(d){return 'y-axis axis num-' + d.value}).attr('transform', function(d, i){return "translate(" + d.value + ",0)" }).style('opacity', '0');    
//    var enteraxis = axishold.enter().append('g').call(yAxis).attr('class', 'y-axis axis').attr('transform', function(d, i){return "translate(" + d.value + ",0)" }).style('opacity', '0');
    //UPDATE ANIMATION
    d3.transition(updateTransition).select('.axisholder').selectAll('.y-axis.axis').attr('transform', function(d, i){return "translate(" + d.value + ",0)" }).style('opacity', '.4').attr('class', function(d){return 'y-axis axis num-' + d.value});         
    //EXIT
    axishold.exit().remove().transition().styleTween('stroke-opacity', function(){return d3.interpolate(0, 1)});   
     
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
    updateAxisData(data);
    //    var updateTransition = d3.select('.chart').transition().duration(800) ;    
    var updateTransition = d3.transition().duration(550);    
    generateLines(data, updateTransition);
    generateAxes(updateTransition);  
};

function setThumbToolTip(thumb, slider){
    var pct;
    if (thumb.hasClass('vertical') ){
        pct = Math.abs(100-100*(thumb.offset().top-slider.offset().top+thumb.height())/slider.height());             
    }
    else if (thumb.hasClass('horizontal')){    
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
    sliderParent.mouseup(mouseUpSlider);
};
function sliderMouseMove(event, slider, thumb, lowerbound, upperbound, lower, upper, thumbToolTip){
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
    $(this).unbind('mouseup');
    $(this).unbind('mousemove');
    $(this).closest('.slider').unbind('mousemove');   
};

function mouseLeaveSlider(){
    $(this).find('.thumb-tooltip').css('display', 'none');    
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

function firstCollapseBtnClick(event){    
    if (axisOrder.length > 2){
        $(this).addClass('plus').removeClass('minus') ;    
        $(this).html('+');  
        $(this).closest('.slider-block').css('opacity', '.4'); 
        $(this).css('opacity', '1');
        $(this).one('click', secondCollapseBtnClick); 
        var axisType = $(this).attr('filterType');
        axisOrder.splice(axisOrder.indexOf(axisType), 1);    
        updateAxisData(origLineData);
        update( filterData() );             
    }
    else {   //edge case handling, <2 axis user req display   
        $(this).one('click', firstCollapseBtnClick);
       tooltip.style("display", "block")
            .html('Cannot display less than 2 axes!!')
            .style("left", -chartLeftOffset+(event.pageX) + "px")
            .style('width', '130px').style('padding', '5px')
             .style('background-color', 'rgba(255,255,255,.8)')
            .style('box-shadow', '0 0 2px rgba(0,0,0,.3)')
           .style("top", 15+(event.pageY)-chartTopOffset + "px"); 
        $('.filter').mousemove(function(){tooltip.style('display', 'none');});         
    }      
};

function secondCollapseBtnClick(){
    $(this).addClass('minus').removeClass('plus') ;           
    $(this).html('-');    
    $(this).closest('.slider-block').css('opacity', '1');      
    $(this).one('click', firstCollapseBtnClick);    
    axisOrder = [];
    $('.collapse-button.minus').each(function(){axisOrder.push($(this).attr('filterType'))});
    updateAxisData(origLineData);
    update( filterData() );    
};


function polylineSectionAdd(){
    $(this).addClass('polyline-selected');
    $(this).one('click', polylineSectionRemove);
};
function polylineSectionRemove(){
    $(this).removeClass('polyline-selected');        
    $(this).one('click', polylineSectionAdd);        
};

function initialLoad(){
    d3.csv('/assets/csvdata/costQuality.csv',function(data){ 
        origLineData = generateLineData(data);
        update(origLineData);
        dataDependency();  //runs most functions after csv data loaded
    });
};

var item;

function dataDependency(){
    //SEARCH AUTOCOMPLETE
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
    //EVEN LISTENERS
    function filterMouseOverClick(){
        $(this).removeClass('hide');
        $(document).unbind('click');
    };
    function showProjectInfo(){
        $('.chart-info').mouseleave(function(){
            $(this).css('opacity','0');
            $('.question-mark').show();
            $(this).unbind('mouseleave');
        });
        $('.chart-info').css('opacity', '1');
        $(this).hide();
    };   
    
    $('.polyline-hover').one('click', polylineSectionAdd);    
    
    $('.reset-button').click(resetFilters);
    $('.collapse-button').one('click', firstCollapseBtnClick);
    $('.chart-label-holder').mousemove(function(){
        tooltip.style("display", "block")
            .html('Variables displayed on percentile-rank basis. High cost percentile indicates an expensive hospital, and higher experience/outcome indicate higher quality value')
          .style("left", (event.pageX) + "px")
        .style('width', '130px').style('padding', '5px')
                  .style('background-color', 'rgba(255,255,255,.8)')
         .style('box-shadow', '0 0 2px rgba(0,0,0,.3)')
          .style("top", 15+(event.pageY)-chartTopOffset + "px");        
        
    }).mouseleave(function(){ tooltip.style('display', 'none').style('background', 'none').style('box-shadow', 'none')  });
    $('.question-mark').click(showProjectInfo);
    $('.thumb').mousedown(mouseDownThumb).mouseover(function(){$(this).addClass('thumb-active')}).mouseout(function(){$(this).removeClass('thumb-active')});
    $('.slider').mouseover(mouseOverSlider).mouseleave(mouseLeaveSlider);
    //mouseup(mouseUpSlider).mouseleave(mouseUpSlider).
    $('.filter').mouseover(filterMouseOverClick)
    .click(filterMouseOverClick)
    .mouseleave(function(){
        var filter = $(this);
        $(document).click(function(){
                filter.addClass('hide');                    
            });
        }); 
};

$(document).ready(function(){
    initialLoad(); 
});