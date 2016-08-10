
var width = 900; var height = 450;
var chart = d3.select(".chart")
chart
    .attr("preserveAspectRatio", "xMinYMin meet")
   .attr("viewBox", "0 0 900 450")
//    .attr('transform', 'translate(40, 0)')
;

var yscale = d3.scaleBand().rangeRound([height, 0]).padding(.4);
var xscale = d3.scaleLinear().range([0, width]);
var  z = d3.scaleOrdinal(d3.schemeCategory10);
var sliderscale;

var prescriptionMapping = [
    
    
    
];
//
//var colorscale = d3.scaleOrdinal(['blue', 'red',  'green', 'red',  'green']);
//var colorscale = d3.scaleOrdinal(['lightgreen', '#4D94E8',  '#BD10E0', '#50E3C2', '#F1374D']);
var colorscale = d3.scaleOrdinal(['lightblue', 'red',  'green', 'teal']);

var tooltip = d3.select('.chartwrapper').append("div").attr("class", "tooltip");

var nestedData;
var types = [];
var selectedTypes = [];
var typeMax = {};
//var typeMaxSec = {};
var updateTransition = d3.transition().duration(700);    
var nodes = [];
var nodes2 = [];
var padding = 12, // separation between same-color circles
    clusterPadding = 15, // separation between different-color circles
    maxRadius = 12;
var circles;
var circle;
var currRiskVal;
var clusters = new Array(4);
var simulation;
var allpoints = []; 
var riskslice ;

var centers = [
    { x: 3.8*width/8, y: 2.5*height/4, xorig: -width, yorig: height},
    { x: 3.8*width/8, y: 1.5*height/4, xorig: -width, yorig: 0},
    { x: 4.2*width/8, y: 2.5*height/4, xorig: width, yorig: height},
    { x: 4.2*width/8, y: 1.5*height/4, xorig: width, yorig: 0},
    { x: 1*width/8, y: height/2}     
];
function generateData(input){     
    input.forEach(function(d, i){
         if (types.indexOf(d.type) === -1){
            types.push(d.type);
            typeMax[d.type] = {primaryAvg: 0, secAvg: 0};   
            typeMax[d.type] = {primaryAvg: 0, secAvg: 0};                  
        };            
        d.risk = +d.risk;
        d.primaryAvg = +d.primaryAvg;
        d.secAvg = +d.secAvg;
        d.primProportion = +d.primProportion;
        d.secProportion = +d.secProportion;
        typeMax[d.type].primaryAvg = Math.max(typeMax[d.type].primaryAvg, d.primaryAvg);    
        typeMax[d.type].secAvg = Math.max(typeMax[d.type].secAvg, d.secAvg);                    
    });    
    colorscale.domain(types);   //colorscale = static, determined here
    nestedData =  d3.nest().key(function(d){return d.risk}).entries(input); 
    riskslice = new Array(nestedData.length);
    for (j=0; j<riskslice.length; j++){
        riskslice[j] = [];  
    };
   for (i=0; i<nestedData.length; i++){
        var currPrim = nestedData[i].values.primaryAvg;    
        var currSec = nestedData[i].values.secAvg;    
        
    };    
    for (i=0; i<types.length; i++){
            var xo = centers[i].xorig;
            var yo = centers[i].yorig; 
            var firstpts = d3.range(typeMax[types[i]].primaryAvg).map(function(datapt,indexnum){
                radius = 14;    
                d = {cluster: i, r: radius, opacity: 1, indexnum: i + ',' + indexnum + 'vis', x: xo, y: yo}; 
                for (k=0; k<nestedData.length; k++){
                    if (indexnum < nestedData[k].values[i].primaryAvg){
                        riskslice[k].push(d);  
                    };
                };
               if (!clusters[i] || (radius > clusters[i].r)) selectedTypes.push(i) ; clusters[i] = d;                          
                return d;
            });  
         var secpts = d3.range(typeMax[types[i]].secAvg).map(function(datapt,indexnum) {
                radius = 14;         
                d = {cluster: i, r: 14, opacity: .3, indexnum: i + ',' + indexnum + 'miss', x: xo, y: yo}; 
                for (k=0; k<nestedData.length; k++){
                    if (indexnum < nestedData[k].values[i].secAvg){
                        riskslice[k].push(d);  
                    };
                }; 
                if (!clusters[i] || (radius > clusters[i].r)) clusters[i] = d;                          
                return d;
            }); 

        allpoints = allpoints.concat(firstpts, secpts);    
    };
    return allpoints;
  
};

function initialLoad(){
    d3.csv('/assets/csvdata/patprofileforce.csv',function(data){ 
        generateData(data);
        currRiskVal = 0;
        
        $('.tick').eq(0).addClass('tick-active');
        dataDependency();  //runs most functions after csv data loaded
    });
};

function gravity(alpha) {
    nodes.forEach(function(d) {
        d.y += (centers[d.cluster].y - d.y) * (alpha/10) ;
        d.x +=  (centers[d.cluster].x - d.x) * (alpha/10);              
    })
};

var circleExit;
function tick(event) {
    console.log('tick');
//    chart.select('.circleholder').selectAll('.circle')  
//        .attr('cx', (d) => d.x)
//        .attr('cy', (d) => d.y);
    chart.select('.circleholder').selectAll('.circle')  
        .attr('cx', function(d){return d.x})
        .attr('cy', function(d){return d.y}) 
} 

//fix originating position and issue with restarting risk val
var manyBody = d3.forceManyBody().strength(-90);
//var forceY = d3.forceY([height/2]).strength([-35]);
var collideForce = d3.forceCollide().radius(14);

chart.append('text').attr('class', 'stats-1');
chart.append('text').attr('class', 'stats-2');

function update(nodeinput){
    
    //prob not in update
    var legendEnter = chart.selectAll('.legend-circle').data(types).enter().append('g').attr('class', 'legend-category')
    .attr('cluster', function(d){return types.indexOf(d)})
   // .attr('cluster', (d) => types.indexOf(d));
    
    var countSec = 0;
    for (i=0; i<nodeinput.length; i++){
        if (nodeinput[i].opacity < 1){
            countSec += 1
        };
    };
        
    legendEnter.append('circle')
        .attr('class', 'legend-circle')
        .style('opacity', '1')
       .attr('fill', function(d,i) {return colorscale(i)})    
       .attr('stroke', function(d,i) {return colorscale(i)})        
//        .attr('fill', (d,i) => colorscale(i))    
//        .attr('stroke', (d,i) => colorscale(i))
        .attr('stroke-width', '4px')
        .attr('stroke-opacity', '0')
        .attr('cx', '90%')
        .attr('r', 7)
        .attr('cy', function(d, i) {return (i*6 + 40)+ '%'})  
    ;
    legendEnter.append('text')
    
            .text(function(d) {return d})
            .attr('x', function(d) {return '93%'})    
            .attr('y', function(d, i) {return (i*6 + 40.7)+ '%'});
        
//            .text((d) => d)
//            .attr('x', (d) => '93%')    
//            .attr('y', (d, i) => (i*6 + 40.7)+ '%');
     
    
    circle = chart.select('.circleholder').selectAll('.circle').data(nodeinput, function(d){return d.indexnum});
    circle
            .attr('fill', function(d) {return colorscale(d.cluster)}) 
            .style('opacity', function(d) {return d.opacity})    
//            .attr('fill', (d) => colorscale(d.cluster)) 
//            .style('opacity', (d) => d.opacity)
            .attr('stroke', 'white')
            .attr('stroke-width', 1)
            .attr('class', 'circle');
        
    chart.select('.stats-1')
            .html('<tspan class="sec-hover">' + countSec + '</tspan>&nbsp/  <tspan class="primary-hover">' + nodeinput.length + '</tspan>')
            .attr('x', '90%')
            .attr("y", '10%');
    
    chart.select('.stats-2')
            .html('<tspan class="sec-hover">missing</tspan> &nbsp <tspan class="primary-hover">total</tspan>')
            .attr('x', '90%')
            .attr("y", '15%');    
    
    circles = circle
            .enter().append('circle')
            .attr('fill', function(d){return colorscale(d.cluster)}) 
            .style('opacity', function(d) {return d.opacity})
            .attr('stroke', 'white')
            .attr('stroke-width', 1)
//            .attr('class', 'circle ')
            .attr('class', function(d){
            if (d.opacity ==1){
                    return 'circle primary';
                } else {
                    return 'circle missing' ;
                };
            })    
            .attr('r', function(d){return d.r})
            .on('mouseover', function(d, i){ 
                tooltip
                    .style("display", "block")
                    .html('<span class="lowlight">type:</span> ' + types[d.cluster] + '<br><span class="lowlight">value:</span> ')
                    .style("left", (d3.event.pageX)-$('.chartwrapper').offset().left + "px")
                    .style("top", -10+(d3.event.pageY)-$('.chartwrapper').offset().top + "px");        
            }).on('mouseleave', function(){
                tooltip.style('display', 'none');
                $('.tooltip').css('display', 'none');
                      $('.tooltip2').css('display', 'none');
            })
    ;
    
    //or apply gravity w/ everyhting else to new gorup
    //old group gets diff force set or access exit data
    
    circleExit = circle.exit();
    circleExit.transition().duration(2000).attr('r', 0);    
    
    circleExit.transition().attr('r', 0)
    circleExit.each(function(d,i){
        d.x = centers[d.cluster].xorig;
        d.y = centers[d.cluster].yorig; 
//        d.changed = false;
    });         
    circleExit.remove();   
    
    //add in count missing data points
    //count total data pts
//
//    circles.transition()
//        .duration(900)
//        .delay(function(d,i) { return i * 5; })
//        .attr('r', d.r)
//        .attrTween("r", function(d) {
//        return d3.interpolate(0, d.r);
//        });    
    
    //ISSUE WITH updating at the very end
    ///
    
    //display stats
    
    
};

function changeRisk(num){
    simulation.stop();
    $('.tick').removeClass('tick-active');
    $('.tick').eq(num).addClass('tick-active');  
    nodes = riskslice[num];
    var newNodes = [];
    nodes.forEach(function(d, i){
       if (selectedTypes.indexOf(d.cluster) > -1){
           newNodes.push(d);
       };
    });       
    currRiskVal = parseInt(num);
    update(newNodes);
    simulation.nodes(newNodes);
    simulation.alpha(1).restart(); 
};

function animate(){

    for (i=0; i<nestedData.length; i++){   
        (function(i){
            window.setTimeout(function(){
                changeRisk(i);
            }, 1400*i);
        }(i));
        
        
    };    
    
};


function reviseCategory(){
    var newNodes = [];
    nodes.forEach(function(d, i){
       if (selectedTypes.indexOf(d.cluster) > -1){
           newNodes.push(d);
       };
    });    
    update(newNodes);
    simulation.nodes(newNodes);
    simulation.alpha(1).restart();     
};

function removeCategory(){
    var clusterNum = parseInt($(this).attr('cluster'));
    selectedTypes.splice(selectedTypes.indexOf(clusterNum), 1)
    reviseCategory();
    $(this).css('opacity', '.3');
    $(this).one('click', addCategory);    
};

function addCategory(){
    selectedTypes.push(parseInt($(this).attr('cluster')));
    reviseCategory();
    $(this).css('opacity', '1');   
    $(this).one('click', removeCategory);    
};


function dataDependency(){ 
    ///WHAT'S UP SIM
    //we need to update all all all nodes in tick function
    //original nodes have no gravity force
    chart.append('g').attr('class', 'circleholder');
    nodes = riskslice[currRiskVal];
    update(nodes);    
    simulation = d3.forceSimulation(nodes)
        .velocityDecay(.8)   
//        .alphaDecay(.01)
        .force("collide", collideForce)    
        .force("gravity", gravity)       
        .force('manyBody', manyBody)   
        .force("x", d3.forceX(width/2).strength(.3))
        .force("y", d3.forceY(height/2).strength(.3)) 
        .on("tick", tick);  

    sliderscale = d3.scaleLinear().range([0, nestedData.length-1]).domain([0, 100]); 

    $('.legend-category').one('click', removeCategory);

    
    function showInfoPopup(){
        $('.info-container').addClass('info-container-active')
        $('.info-popup').css({'display': 'block', 'opacity':'1', 'z-index': '20'});
//        $('.risk-slider').css('opacity', '.3');
        $(this).html('+').addClass('close-button');
        $(this).one('click', hideInfoPopup);
    };
    function hideInfoPopup(){
        $('.info-popup').css({'display':'none', 'opacity':'0', 'z-index': '-1'});
        $('.info-container').removeClass('info-container-active')        
        $(this).html('?').removeClass('close-button');
        $(this).one('click', showInfoPopup);
    };

    $('.more-info').one('click', showInfoPopup);
    
    $('.sec-hover').mouseover(function(event){
        $('.circle.missing').addClass('circle-active');
                tooltip
                    .style("display", "block")
                    .html('Number of data points that a primary care provider cannot see (without integrating data from primary and secondary data sources) for an average patient at selected risk value.')
                    .style("left", -50+(event.pageX)-$('.chartwrapper').offset().left + "px")
                    .style("top", -30+(event.pageY)-$('.chartwrapper').offset().top + "px");        
    }).mouseleave(function(){
        $('.circle.missing').removeClass('circle-active'); 
        tooltip.style('display', 'none');        
    })
;
      
    $('.primary-hover').mouseover(function(event){
                tooltip
                    .style("display", "block")
                    .html('Total quantity of data points for an average patient at selected risk value.')
                    .style("left", -50+(event.pageX)-$('.chartwrapper').offset().left + "px")
                    .style("top", -30+(event.pageY)-$('.chartwrapper').offset().top + "px");        
    }).mouseleave(function(){
        $('.circle.missing').removeClass('circle-active'); 
        tooltip.style('display', 'none');        
    })
;
    
    $('.tick').mouseover(function(event){
        //$('.chartwrapper').
    });  
    $('.under').click(function(event){animate()});
    $('.tick').click(function(event){
        var num = $(this).text();
        changeRisk(num);
    })

    
};

$(document).ready(function(){
    var sliderscale = d3.scaleLinear().range([0, $('.slider').width()]).domain([0, 10]);
    var slideraxis = d3.axisBottom(sliderscale).tickSize(0);
    d3.select('.slider').append('svg').attr('class', 'slideraxis').call(slideraxis);
    
    
    var bbox = d3.selectAll('.tick').node().getBBox();
    var rect = d3.select('.slideraxis').selectAll('.tick').insert("rect")
        .attr('class', 'axis-highlight')
        .attr("x", bbox.x-5)
        .attr("y", bbox.y-2)
        .attr("width", bbox.width*2.8)
        .attr("height", bbox.height*1.5)
    .style('stroke', 'black').style('stroke-width: 1px');
//        .style("fill", "green");
    
    initialLoad(); 
});
