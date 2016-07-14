
var margin = {top: 20, right: 40, bottom: 30, left: 40},
    width = 800 - margin.left - margin.right,
    height = 400 - margin.top- - margin.bottom;

var yscale = d3.scale.linear().range([height, 0]).domain([0, 1]);
var lineholder = [];   
var chart = d3.select(".chart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g");
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
   linehold.enter().append('polyline').attr('class', 'polyline')
                    .style("stroke", 'blue') 
          .attr("points", function(d,i){ return getObjectValues(d.points) } );  

    linehold.exit().remove();


};

function generateAxes(axes){
        var axishold = d3.select('.axisholder').selectAll('.y-axis axis').data(getObjectValues(axes) )            
        axishold.enter().append('g').call(yAxis).attr('class', 'y-axis axis').attr('transform', function(d, i){
            return "translate(" + d + ",0)" 
        });
        axishold.exit().remove();
            //.append('text').attr('class', 'y-axis-label').text(function(d, i){return Object.keys(axes)[i]});
};

///////FILTER FUNCTIONS

function sliderFilterClick(){
    console.log('ay she click do');
    
};


function update(data, axes){
    generateLines(generateLineData(data, axes));
    generateAxes(axes);        
};


function initialLoad(){
    d3.csv('/assets/csvdata/allpercentile.csv',function(data){ 
//        var provMap = {};
//        data.forEach(function(d,i){
//            provMap[i] = d.provider;
//        });     
        update(data, axes);
        dataDependency(data);  //runs most functions after csv data loaded

    });
};

function dataDependency(origdata){
    origData = origdata;
    console.log(filterData(origData));
    update(filterData(origData), axes);
    
    
    $('.slider').mouseclick(sliderFilterClick);
};

initialLoad();


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
    




//var attributeFilters = {
//    state: [ALL]
//}

//for each filter in filters

//functionGetInitialFilters() = {
//    max and min of each value
//}
//
//slider is moved .. 
//
//
//(x, 20, 30, null, cost)

//    if (equals){
//        return currData = input.filter(function(d,i){return d[type] === equals});       
//    }
//    else if (lowerbound && upperbound ){
//        return currData = input.filter(function(d,i){return d[type] < lowerbound && d[type] > upperbound});          
//    };



//issue of applying two filters? dataset < .7, then we say cost > /8
//anytime filter is changed must register both upper and lower

   
//    update(data.filter(function(d,i){return d.cost > .7}), axes);
    
//sliders
//    output - 0 to 100 scale
//attributes - types (state, income > )
//    always filter original data ? ? ?
    //or just current data




            // data = data.sort(function(a,b){return d3.descending(+a.discharge, +a.quality)});
         // var data = data.filter(function(d,i){return d.cost>.9 && d.discharge > 0});
         
//    var data = data.filter(function(d,i){return d.state === 'ri'});
//    
//    function generateFilter(type, lowerbound, upperbound){
//        var data = data.filter(function(d,i){return d.cost>.9});
//    };
//    


















//                        .attr("points", function(d, i){
//                            return Object.keys(d.points).map(function(key){return d.points[key]} )
//                        });     

//       var alldata2 =  [discharge, outcome, patexp, cost] ;
      // data.map(function(d){    
//          cost.push(ycost(+d.cost));
//          quality.push(yquality(+d.quality));
//          efficiency.push(ycost(+d.efficiency));
//          patexp.push(ycost(+d.patexp));
//          outcome.push(ycost(+d.outcome));
//          strokewidth.push(d.strokewidth);
//          bubblesize.push(+d.bubblesize);
//          return discharge.push(ydischarge(+d.discharge));
//        }); 

   // var cost, quality, discharge, efficiency, patexp, outcome, bubblesize;
//    var color, strokewidth; cost = [];  quality = []; discharge = []; efficiency = [];
//    patexp = [];  outcome = []; color = []; strokewidth = []; bubblesize = [];
    
    
        //                chart.select('.lineholder').append("polyline")
//                    .style("stroke", colorscale(i)) 
//                    .style("fill", "none")  
//                    .style("fill", "none")  
//                    //.style ('stroke-width', '.25px') 
//                    .style ('stroke-width', currwidth) 
//                    .attr("points", currTrans)
//                    .on("mouseover", function(){
//                        console.log([d, provMap[i]]);
//                    });  
    
    
    
//                    .on("mouseover", function(){
//                        console.log([d, provMap[i]]);
//                    });  
    
//    console.log(axes[0]);
    
//    console.log(Object.keys(axes) );
//    chart.selectAll('y-axis').data( Object.keys(axes) ).enter().append('g').attr('class', 'y-axis').call(axes[data]);
        
//        .attr("transform", "translate(" +axes[data] + ",0)");
    
//    .call(yaxes[i]).attr("transform", "translate(" + xvalues[i] + ",0)");
    
    

    //polyline two separate bindings
        //filter hospital name, etc easily
    
//    d3.select()
    
    //line per axis or polyline

    
//    var axes = [{'discharge': discharge},{'outcome': outcome},{'patexp': patexp},{'cost': cost}] ;
    
//    console.log(axes.keys());
    
    
//    console.log(  Object.keys(axes)[0] );
//   console.log(  Object.keys(axes) );    
////    

    
      
      //alldata2 formatted by columns

       //four axes
    
     //var xvalues = [0, width*.4, width*.56, x3]

      //array created for scales, axes so that correct object is applied in for loop

      //var scales = [ycost, yincome, yquality, ydischarge];
     // var yaxes = [yaxiscost, yaxiseff, yaxispatexp, yaxisoutcome, yaxisdischarge];


      //for LINE  
      //below getting y values (rows) of data to create lines
//      function transpose(a) {
//          return Object.keys(a[0]).map(
//              function (c) { return a.map(function (r) { return r[c]; }); }
//              );
//          }
//        var yvalrows = transpose(alldata2);
//        var numRows =  yvalrows.length;
//        var numColumns = alldata2.length;
//
//      var colorscale = d3.scale.linear()
//          .domain([0, numRows])
//            .range(["#00CED1", "#ff5050"]); 
//
//        //create 2d array for line x values
//        var xvalrows = [];
//            for (j = 0; j < numRows; j++) { 
//                xvalrows.push(xvalues);
//            }        
//        //ay u want lines?
//
//    chart.append('g').attr('class', 'lineholder');
//      
    
    
    
     //chart.selectAll('.lineholder').data()
      
//      d3.select('.lineholder').selectAll('g').data(yvalrows).enter().append('g').attr('class', 'line');
//      
//      d3.selectAll('.line').data
//      
//      .attr(points)

//        yvalrows.forEach(function(d, i){ //for each row, create a line
//
//                  var currcolor = colorscale(i);
//                  var currxvalrows = xvalrows[i];
//                  var curryvalrows = yvalrows[i];
//                  var currdata = [currxvalrows, curryvalrows];
//                  var currTrans = transpose(currdata);
//                  var currwidth = strokewidth[i];
//
//                  var line = d3.svg.line()
//                        .x(function(d, i) {
//                            return d[0]; //formatted as 4 col, x row array
//                        })
//                        .y(function(d, i) {
//                            return d[1];
//                        })
//                        .interpolate("linear")
//// .               style("stroke", function() {
////                 return d.color = color(d.key); })
//                        ;
//
//                console.log(currTrans);
//
//                chart.select('.lineholder').append("polyline")
//                    .style("stroke", colorscale(i)) 
//                    .style("fill", "none")  
//                    .style("fill", "none")  
//                    //.style ('stroke-width', '.25px') 
//                    .style ('stroke-width', currwidth) 
//                    .attr("points", currTrans)
//                    .on("mouseover", function(){
//                        console.log([d, provMap[i]]);
//                    });  
//        })

      
     // chart.select('.axisholder').selectAll('g').data(alldata2).enter().append('g').attr('class', 'y axis');
    
    
//        chart.append('g').attr('class', 'axisholder');
//      alldata2.forEach(function(d, i) {
//          var currVal = alldata2[i];
//          chart.select('.axisholder').append('g').attr('class', 'y axis').call(yaxes[i]).attr("transform", "translate(" + xvalues[i] + ",0)");
//    }); 


//         chart.append('g').attr('class', 'circleholder').selectAll('circle').data(alldata2[i]).enter().append(".circleholder:circle")   
//            .attr("cx", xvalues[i])
//            .attr("cy", function(d, i) { return currVal[i]; }) //can take str8 arrays! d, i based off array 
//            //.attr("r", '100');
//            .attr("r", function(d, i) { return bubblesize[i]; })
//            .attr('fill', 'darkgrey')
//            ;


//        var x1 = 0;
//        var x2 = 1.5*width/3 ;
//        var x3 = width ;
//        var x4 = width ;
    
