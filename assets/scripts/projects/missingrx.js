
var width = 900; var height = 450;

//we have d3.slideR
//ADD DATA MAP TO MOUSEOVER DIFFERENT DATA PTS

var chart = d3.select(".chart")
chart
    .attr("preserveAspectRatio", "xMinYMin meet")
   .attr("viewBox", "0 0 900 450")
//    .attr('transform', 'translate(40, 0)')
;

var yscale = d3.scaleBand().rangeRound([height, 0]).padding(.4);
var xscale = d3.scaleLinear().range([0, width]);
var  z = d3.scaleOrdinal(d3.schemeCategory10);

var colorscale = d3.scaleOrdinal(['#FF9D28', '#4D94E8',  '#BD10E0', '#50E3C2', '#F1374D']);

var nestedData;
var types = [];
var typemap = {};
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

//var n = 12, // total number of nodes
//    m = 4, // number of distinct clusters
//    z = d3.scaleOrdinal(d3.schemeCategory20);

//keep runnning same sim?

//var centers = [
//    { x: width/8, y: height/2},
//    { x: 3*width/8, y: height/2},
//    { x: 5*width/8, y: height/2},
//    { x: 7*width/8, y: height/4}    
//];
//
var centers = [
    { x: 3.5*width/8, y: 2*height/4},
    { x: 3.5*width/8, y: height/4},
    { x: 4.5*width/8, y: 2*height/4},
    { x: 4.5*width/8, y: height/4},
    { x: 1*width/8, y: height/2}     
];


//
//var centers = [
//    { x: width/2, y: height/2},
//    { x: width/2, y: height/2},
//    { x: width/2, y: height/2},
//    { x: width/2, y: height/2}    
//];


//structureing the addition..


//map maxes in each category

function generateData(input){    
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
    
    colorscale.domain(types);   //colorscale = static, determined here
    nestedData =  d3.nest().key(function(d){return d.risk}).entries(input); 
    
    //will still update w new values
    
    for (i=0; i<nestedData.length; i++){
        var nodeholder = [];
        for (j=0; j<types.length; j++){
            var currPoint = nestedData[i].values[j];
            var firstPt = d3.range(currPoint.primaryAvg).map((datapt, indexnum) => {
                var f = types.indexOf(currPoint.type);
                radius = 9;
                indexString = f + ',' + indexnum;
                d = {cluster: f, r: radius, opacity: .4, indexnum: indexString};                
                if (i == 0 ){
                    if (!clusters[f] || (radius > clusters[f].r)) clusters[f] = d;                          
                }
//                else {
//                    if (!clusters[f] || (radius > clusters[f].r)) clusters[f] = d;                         
//                }
//          
                return d;
            });
            
            //a series of cluster points
            
//            nodeholder.push(firstPt);
            var secPt = d3.range(currPoint.secAvg).map(() => {
                var f = types.indexOf(currPoint.type);
                radius = 9;
                // x: centers[f].x + Math.random(), y: centers[f].y + Math.random()
                d = {cluster: f, r: radius, opacity: 1,};
                if (!clusters[f] || (radius > clusters[f].r)) clusters[f] = d;                
                return d;   //do we need to add these to clusters?!  
//                d = {cluster: types.indexOf(currPoint.type), r: 9, opacity: 1};
//                if (!clusters[f] || (radius > clusters[f].r)) clusters[f] = d;                   
//                return d;
            });            

            //setting array = array of objects
            nodeholder = nodeholder.concat(firstPt); 
            nodeholder = nodeholder.concat(secPt);             
        };
        nodes2.push(nodeholder)
    };    
    
//    for (i=0; i<nestedData.length; i++){
//        var nodeholder = [];
//        for (j=0; j<types.length; j++){
//            var currPoint = nestedData[i].values[j];
//            var firstPt = d3.range(currPoint.primaryAvg).map((datapt, indexnum) => {
//                var f = types.indexOf(currPoint.type);
//                radius = 9;
//                indexString = f + ',' + indexnum;
//                d = {cluster: f, r: radius, opacity: .4, indexnum: indexString};                
//                if (i == 0 ){
//                    if (!clusters[f] || (radius > clusters[f].r)) clusters[f] = d;                          
//                }
////                else {
////                    if (!clusters[f] || (radius > clusters[f].r)) clusters[f] = d;                         
////                }
////          
//                return d;
//            });
//            
//            //a series of cluster points
//            
////            nodeholder.push(firstPt);
//            var secPt = d3.range(currPoint.secAvg).map(() => {
//                var f = types.indexOf(currPoint.type);
//                radius = 9;
//                // x: centers[f].x + Math.random(), y: centers[f].y + Math.random()
//                d = {cluster: f, r: radius, opacity: 1,};
//                if (!clusters[f] || (radius > clusters[f].r)) clusters[f] = d;                
//                return d;   //do we need to add these to clusters?!  
////                d = {cluster: types.indexOf(currPoint.type), r: 9, opacity: 1};
////                if (!clusters[f] || (radius > clusters[f].r)) clusters[f] = d;                   
////                return d;
//            });            
//
//            //setting array = array of objects
//            nodeholder = nodeholder.concat(firstPt); 
//            nodeholder = nodeholder.concat(secPt);             
//        };
//        nodes2.push(nodeholder)
//    };
    return nodes2;
};

function initialLoad(){
    d3.csv('/assets/csvdata/patprofileforce.csv',function(data){ 
        generateData(data);
        currRiskVal = 0;
        dataDependency();  //runs most functions after csv data loaded
    });
};

function gravity(alpha) {
    console.log('err');
    nodes.forEach(function(d) {    
        d.y += (centers[d.cluster].y - d.y) * alpha * .2;
        d.x +=  (centers[d.cluster].x - d.x) * alpha * .2;
    })
};

function tick(event) {
    //circles
    chart.select('.circleholder').selectAll('.circle')    
        .attr('cx', (d) => d.x)
        .attr('cy', (d) => d.y);
} 

var manyBody = d3.forceManyBody().strength(-15);

//distanceMax(width);
var forceY = d3.forceY([height/2]).strength([.5]);
var collideForce = d3.forceCollide().radius(10);

//balls fly

function update(nodeinput){
    
//    nodes = nodes2[1]
//update(nodes)
//simulation.nodes(nodes)
//simulation.alpha(.1).restart()
//one array with max of each
    //nodes as slice of max
      
//    nodes = nodes.concat(nodes2[currRiskVal], nodes2[currRiskVal-1])
    
    circle = chart.select('.circleholder').selectAll('.circle').data(nodeinput, (d) => d.cluster);
    
    circle            .attr('fill', (d) => colorscale(d.cluster)) 
            .style('opacity', (d) => d.opacity)
            .attr('stroke', 'white')
            .attr('stroke-width', 1)
            .attr('class', 'circle');
        
    circles = circle
            .enter().append('circle')
            .attr('fill', (d) => colorscale(d.cluster)) 
            .style('opacity', (d) => d.opacity)
            .attr('stroke', 'white')
            .attr('stroke-width', 1)
            .attr('class', 'circle');
    
    circles.transition()
        .duration(900)
        .delay(function(d,i) { return i * 5; })
        .attr('r', d.r)
        .attrTween("r", function(d) {
        return d3.interpolate(0, d.r);
        });    
    
    circle.exit().remove(); 
};


function dataDependency(){ 
    
    chart.append('g').attr('class', 'circleholder');
    
//    nodes = nodes2[currRiskVal];  
//    update(nodes2[currRiskVal]);
//    
//   simulation = d3.forceSimulation(nodes)
//        .velocityDecay(0.4)
//        .force("collide", collideForce)    
//        .force('manyBody', manyBody)
//    .force("x", d3.forceX(width/2).strength(.4))
//    .force("y", d3.forceY(height/2).strength(.4))      
//        .force("gravity", gravity)      
//        .on("tick", tick);            
};
//
$(document).ready(function(){
    initialLoad(); 
});

//make nodes 2 only the diff
//change to diff node data structure?

//toggle a risk value

//
//nodes = nodes.concat(nodes, nodes2[2])
//update(nodes)
//simulation.nodes(nodes)
//simulation.alpha(.5).restart()





//    nodes = nodes2[currRiskVal];   
////    nodes = nodes.concat(nodes2[currRiskVal], nodes2[currRiskVal-1])
//
//    circles = chart.append('g')
//           // .datum(nodes)
//        
//            .selectAll('.circle')
////            .data(function(d){return d})
//            .data(nodes)
//            .enter().append('circle')
//            .attr('fill', (d) => colorscale(d.cluster)) 
//            .style('opacity', (d) => d.opacity)
//            .attr('stroke', 'white')
//            .attr('stroke-width', 1);
//    
//    
//chart.selectAll('.circle')
////            .data(function(d){return d})
//            .data(nodes)
//            .enter().append('circle')
//            .attr('fill', (d) => colorscale(d.cluster)) 
//            .style('opacity', (d) => d.opacity)
//            .attr('stroke', 'white')
//            .attr('stroke-width', 1);
    
    
 
    
//    .force("x", d3.forceX(width/2).strength(.05))
    
    //next nodes

    //create growing simulation first?
    


//function collide(alpha) {
//  var quadtree = d3.quadtree()
//      .x((d) => d.x)
//      .y((d) => d.y)
//      .addAll(nodes);
//  nodes.forEach(function(d) {
//    var r = d.r + maxRadius + Math.max(padding, clusterPadding),
//        nx1 = d.x - r,
//        nx2 = d.x + r,
//        ny1 = d.y - r,
//        ny2 = d.y + r;
//    quadtree.visit(function(quad, x1, y1, x2, y2) {
//      if (quad.data && (quad.data !== d)) {
//        var x = d.x - quad.data.x,
//            y = d.y - quad.data.y,
//            l = Math.sqrt(x * x + y * y),
//            r = d.r + quad.data.r + (d.cluster === quad.data.cluster ? padding : clusterPadding);
//        if (l < r) {
//          l = (l - r) / l * alpha;
//          d.x -= x *= l;
//          d.y -= y *= l;
//          quad.data.x += x;
//          quad.data.y += y;
//        }
//      }
//      return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
//    });
//  });
//}
//
//function clustering(alpha) {  
//    nodes.forEach(function(d) {      
//      var cluster = clusters[d.cluster];
//    if (cluster === d ) return; 
//      var x = d.x - cluster.x,
//          y = d.y - cluster.y,
//          l = Math.sqrt(x * x + y * y),
//          r = d.r + cluster.r;
//      if (l !== r && l !== 0) {  
//        l = (l - r) / l * alpha;
//        d.x -= x *= l;
//        d.y -= y *= l;
//        cluster.x += x;
//        cluster.y += y;
//      }  
//    });
//}




//understand forces GROUND UP
//        .force("cluster", clustering)
//    .force("x", d3.forceX(width/2).strength(.02))
//    .force("y", d3.forceY(height/2).strength(.02))   

//timer + update - bringing in entirely new risk, or do we have a pile of data just sitting there?

//we need a function to pull each node to cluster center


//function force(alpha) {
//  for (var i = 0, n = nodes.length, node, k = alpha * 0.1; i < n; ++i) {
//    node = nodes[i];
//    node.vx -= node.x * k;
//    node.vy -= node.y * k;
//  }
//}


//// Move nodes toward cluster focus.
//function gravity(alpha) {
//  return function(d) {
//    // d.y += (d.cy - d.y) * alpha;
//    // d.x += (d.cx - d.x) * alpha;
//    d.y += (foci[d.choice].y - d.y) * alpha;
//    d.x += (foci[d.choice].x - d.x) * alpha;
//  };
//}
//
//function force(alpha) {
//  for (var i = 0, n = nodes.length, node, k = alpha * 0.1; i < n; ++i) {
//    node = nodes[i];
//    node.vx -= node.x * k;
//    node.vy -= node.y * k;
//  }
//}




//WHY ISN'T FORCE RESTART WRKING

//ARE CLUSTERS EVEN REQUIRED ?

// var nodes = d3.range(200).map(() => {
//    let i = Math.floor(Math.random() * m),
//        radius = 9,
//        d = {cluster: i, r: radius};
//    if (!clusters[i] || (radius > clusters[i].r)) clusters[i] = d;
//    return d;
//});
    //clusters are only in [0]?
    
    //try to move from one center to the next
    //generate for next risk value 
    //change x / u
//            .force("x", d3.forceX().strength(.5))
//        .force("y", d3.forceY().strength(.5))
    
    //time function updates nodes 1 by 1
//    .force("center", d3.forceCenter([300,100]))        
//    .force("collide", d3.forceCollide([10]))


//            .attr('cx', width/2)
//            .attr('cy', height/2)
    //      .attr('r', function(d){return d.r})