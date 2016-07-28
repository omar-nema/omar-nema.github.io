
var width = 900; var height = 450;

//we have d3.slider

var chart = d3.select(".chart")
chart
    .attr("preserveAspectRatio", "xMinYMin meet")
   .attr("viewBox", "0 0 900 450")
//    .attr('transform', 'translate(40, 0)')
;

//animation has circles coming in from different category area
//or, concentric where each risk score is one more outer layer - option for FISHEYE


var init_radius = 5.5,
	max_radius = 5.5,
	padding = 30,
	cluster_padding = 30;

var yscale = d3.scaleBand().rangeRound([height, 0]).padding(.4);
var xscale = d3.scaleLinear().range([0, width]);
var  z = d3.scaleOrdinal(d3.schemeCategory20);

var n = 100, // total number of nodes
    m = 4; // number of distinct clusters

var colorscale = d3.scaleOrdinal(['#FF9D28', '#4D94E8',  '#BD10E0', '#50E3C2', '#F1374D']);

var nestedData;
var types = [];
var typemap = {};

var updateTransition = d3.transition().duration(700);    


var clusters = new Array(m);
var num_nodes = 100;

//we need number in each category
//and then number changes according to riskval
//BUT THE MOUSEOVER !! w datapoint attributes
//could just create nodes manually

//chart.selectAll('circle').data(nodes).enter().append('circle')
//    .attr('id', function(d){return d.id})
//    .attr('class', 'node')
//    .style('fill', function(d){return foci[d.choice].color})
//    .attr('r', function(d){return d.radius})
//    .attr('cx', function(d){return d.x})
//    .attr('cy', function(d){return d.y})
//;

var padding = 12, // separation between same-color circles
    clusterPadding = 15, // separation between different-color circles
    maxRadius = 12;

//overlap within circle groups?

var n = 200, // total number of nodes
    m = 10, // number of distinct clusters
    z = d3.scaleOrdinal(d3.schemeCategory20),
    clusters = new Array(m);

 var nodes = d3.range(200).map(() => {
    let i = Math.floor(Math.random() * m),
        radius = 9,
        d = {cluster: i, r: radius};
    if (!clusters[i] || (radius > clusters[i].r)) clusters[i] = d;
    return d;
});


var circles = chart.append('g')
      .datum(nodes)
        .selectAll('.circle')
      .data(function(d){return d})
        .enter().append('circle')
      .attr('r', function(d){return d.r})
     // .attr('fill', function(d){return 'blue'})
    .attr('fill', (d) => z(d.cluster))
      .attr('stroke', 'white')
      .attr('stroke-width', 1);


var collideForce = d3.forceCollide([10]).strength([1]);
var xforce = d3.forceX([800]).strength(.0005);
var yforce = d3.forceY([200]).strength(.0005)

var simulation = d3.forceSimulation(nodes)
    .velocityDecay(0.2)
    .force("x", xforce)
    .force("y", yforce)
    .force("collide", collide)
    .force("cluster", clustering)
//    .force('collide', collideForce)
    .on("tick", ticked);

//(WHY IN THE TICKED FUNCTION 
function ticked() {
    circles   
        .attr('cx', function(d){return width/2 + d.x})
        .attr('cy', function(d){return height/2 + d.y});
}   

// These are implementations of the custom forces.
function clustering(alpha) {
    nodes.forEach(function(d) {
      var cluster = clusters[d.cluster];
      if (cluster === d) return;
      var x = d.x - cluster.x,
          y = d.y - cluster.y,
          l = Math.sqrt(x * x + y * y),
          r = d.r + cluster.r;
      if (l !== r) {
        l = (l - r) / l * alpha;
        d.x -= x *= l;
        d.y -= y *= l;
        cluster.x += x;
        cluster.y += y;
      }  
    });
}

function collide(alpha) {
  var quadtree = d3.quadtree()
      .x((d) => d.x)
      .y((d) => d.y)
      .addAll(nodes);

  nodes.forEach(function(d) {
    var r = d.r + maxRadius + Math.max(padding, clusterPadding),
        nx1 = d.x - r,
        nx2 = d.x + r,
        ny1 = d.y - r,
        ny2 = d.y + r;
    quadtree.visit(function(quad, x1, y1, x2, y2) {

      if (quad.data && (quad.data !== d)) {
        var x = d.x - quad.data.x,
            y = d.y - quad.data.y,
            l = Math.sqrt(x * x + y * y),
            r = d.r + quad.data.r + (d.cluster === quad.data.cluster ? padding : clusterPadding);
        if (l < r) {
          l = (l - r) / l * alpha;
          d.x -= x *= l;
          d.y -= y *= l;
          quad.data.x += x;
          quad.data.y += y;
        }
      }
      return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
    });
  });
}






//////////////
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


function generateBubbles() {
    
};


function initialLoad(){
    d3.csv('/assets/csvdata/patprofile.csv',function(data){ 
        generateLineData(data);
        dataDependency();  //runs most functions after csv data loaded
    });
};


function dataDependency(){ 

};

$(document).ready(function(){
//    initialLoad(); 
});









//when is x and y added - create a cluster !1

//now create a cluster mofo

//var nodes = d3.range(0, num_nodes).map(function(o, i) {
//	return {
//		id: "node" + i,
//		x: foci.center.x + Math.random(),
//		y: foci.center.y + Math.random(),
//		radius: init_radius,
//		choice: "center",
//	}
//});


//var sorted = d3.nest()
//      .key(function(d) { return d.cluster; })
//      .entries(nodes);
//
//var root = d3.stratify()
//    .id(function(d) { return d.child; })
//    .parentId(function(d) { return d.parent; })
//    (nodes);
//
//
//var clusterholder = d3.cluster(root).size([width, height]);
//
////cluster sets the x and y of each node element ?!
//
//
//var node = chart.selectAll("circle")
//    .data(nodes)
//    .enter().append("circle")
//    .style("fill", function(d) { return 'blue';})
//    .attr('radius', '5')
//.call(clusterholder)
//;
//    
    //.nodeSize()






//function generateRectangles(input, riskval){  
//    //RE-BIND DATA - children done separately
//    var rectholder =  chart.select('.rectholder').selectAll('.series').data(input[riskval].values, function(d){return d.type}); 
//    rectholder.selectAll('.bar-first').data(input[riskval].values, function(d){return d.type});
//    rectholder.selectAll('.bar-second').data(input[riskval].values, function(d){return d.type});  
//    
//    //stack a bunch of squares?
//    //and colors as two colors?
//    
//    //EXIT
//    d3.selectAll('.series').exit().transition().style('opacity', '0').remove();  
//       
////    //UPDATE (no data binding) 
//    d3.transition(updateTransition).selectAll('.bar-first')
//        .attr('y', function(d){return yscale(d.type)})      
//        .attr('height', yscale.bandwidth() + 'px')    
//        .attr('width', function(d){return xscale(d.secAvg)})
//    
//    d3.transition(updateTransition).selectAll('.bar-second')
//        .attr('x', function(d){return xscale(d.secAvg)})     
//        .attr('y', function(d){return yscale(d.type)})     
//        .attr('height', yscale.bandwidth() + 'px')
//        .attr('width', function(d){return xscale(d.primaryAvg)}); 
//
//    //ENTER
//    var series = rectholder.enter().append('g').attr('class', 'series');   
//    
//    series.append('rect').attr('class', 'bar-first')
//        .transition().styleTween('opacity', function(){return d3.interpolate(0, 1)})      
//        .attr('fill', function(d){return colorscale(d.type)})
//        .attr('x', '0px')
//        .attr('y', function(d){return yscale(d.type)})    
//        .attr('height', yscale.bandwidth() + 'px')
//        .attr('width', function(d){return xscale(d.secAvg)});
//    
//    series.append('rect').attr('class', 'bar-second')
//        .transition().styleTween('opacity', function(){return d3.interpolate(0, 1)})      
//        .attr('fill', function(d){return colorscale(d.type)})
//        .style('opacity', '.4')
//        .attr('x', function(d){return xscale(d.secAvg)})
//        .attr('y', function(d){return yscale(d.type)})    
//        .attr('height', yscale.bandwidth() + 'px')
//        .attr('width', function(d){return xscale(d.primaryAvg)});    
//        
//};
