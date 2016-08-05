<!DOCTYPE html>
<head>
<title>Probability Simulation</title>
<link rel="stylesheet" href="style/style.css" type="text/css" media="screen"/>
<link rel="stylesheet" type="text/css" href="//cloud.typography.com/7626174/696048/css/fonts.css"/>
<link href='https://fonts.googleapis.com/css?family=Inconsolata' rel='stylesheet' type='text/css'>
<meta charset="utf-8">
</head>
<body>
<div id="main-wrapper">
<div id="controls">
<div class="sentence">Give Clinton a</div>
<div id="probclinton">
<div id="probclintonvalue"></div>
<div id="probslider" class="sliderholder"></div>
</div>
<div class="sentence">chance of winning and Trump &nbsp;</div>
<div id="probtrump">
<div id="probtrumpvalue"></div>
</div>
<div class="clr"></div>
<div id="speedcontrol">
<div class="button" data-speed="1000">Slow</div>
<div class="button current" data-speed="400">Medium</div>
<div class="button" data-speed="20">Fast</div>
</div>
<div class="clr"></div>
</div>
<div id="chart"></div>
</div> 
<script src="js/d3-3-5-5.min.js"></script>
<script src="js/d3.slider.js"></script>
<script>
var USER_PROB = 68;	// Percentage.
var USER_SPEED = 500;

var num_nodes = 500;

var margin = {top: 16, right: 0, bottom: 0, left: 0},
    width = 950 - margin.left - margin.right,
	height = 800 - margin.top - margin.bottom,
	init_radius = 5.5,
	max_radius = 5.5,
	padding = 1,
	cluster_padding = 7;

var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var foci = {
	"center": { x: 475, y: 200, color: "#cccccc" },
	"clinton": { x: 175, y: 200, color: "#5875fd" }, 
	"trump": { x: 775, y: 200, color: "#eb494f" }, 
};


var nodes = d3.range(0, num_nodes).map(function(o, i) {
	return {
		id: "node" + i,
		x: foci.center.x + Math.random(),
		y: foci.center.y + Math.random(),
		radius: init_radius,
		choice: "center",
	}
});


var force = d3.layout.force()
	.nodes(nodes)
	.size([width, height])
	.gravity(0)
	.charge(0)
	.friction(.91)
	.on("tick", tick)
	.start();

var circle = svg.selectAll("circle")
	.data(nodes)
  .enter().append("circle")
	.attr("id", function(d) { return d.id; })
	.attr("class", "node")
	// .attr("r", function(d) {
	// 	if (d.choice == "center") { return init_radius; }
	// 	else { return max_radius; }
	// })
	.style("fill", function(d) { return foci[d.choice].color; });
circle.transition()
	.duration(900)
	.delay(function(d,i) { return i * 5; })
	.attrTween("r", function(d) {
		var i = d3.interpolate(0, d.radius);
		return function(t) { return d.radius = i(t); };
	});

// Headers
svg.append("text").attr("class", "subheader")
	.attr("x", foci.clinton.x).attr("y", 0).attr("text-anchor", "middle")
	.text("Sim. Win Percentage");
svg.append("text")
	.attr("class", "header")
	.attr("x", foci.clinton.x)
	.attr("y", 30)
	.attr("text-anchor", "middle")
	.text("Hillary Clinton");
	
svg.append("text").attr("class", "subheader")
	.attr("x", foci.trump.x).attr("y", 0).attr("text-anchor", "middle")
	.text("Sim. Win Percentage");
svg.append("text")
	.attr("class", "header")
	.attr("x", foci.trump.x)
	.attr("y", 30)
	.attr("text-anchor", "middle")
	.text("Donald Trump");
svg.append("text")
	.attr("class", "subtitle")
	// .attr("x", foci.center.x)
	// .attr("y", 22)
	.attr("dy", 0)
	.attr("transform", "translate("+foci.center.x+",2)")
	.attr("text-anchor", "middle")
	.text("2 Possible Outcomes, " + num_nodes + " Simulated Elections")
	.call(wrap, 250);

// Controls
var prob_slider = d3.slider().min(0).max(99).ticks(0).stepValues(d3.range(1,100)).value(USER_PROB)
	.callback(brushed);
d3.select("#probslider").call(prob_slider);
d3.select("#probclintonvalue").text(USER_PROB + "%");
d3.select("#probtrumpvalue").text((100-USER_PROB) + "%");

// Speed control buttons
d3.selectAll("#speedcontrol .button").on("click", function() {
	var speed = d3.select(this).attr("data-speed");
	d3.select("#speedcontrol .current").classed("current", false);
	d3.select(this).classed("current", true);
	clearTimeout(timeout);
	
	USER_SPEED = +speed;
	if (USER_SPEED > 0) {
		timer();
	}
	
});



// Counters
svg.append("text")
	.attr("id", "clintoncounter")
	.attr("class", "counter")
	.attr("data-choice", "clinton")
	.attr("x", foci.clinton.x)
	.attr("y", 65)
	.attr("text-anchor", "middle")
	.text("0%");
svg.append("text")
	.attr("id", "trumpcounter")
	.attr("class", "counter")
	.attr("data-choice", "trump")
	.attr("x", foci.trump.x)
	.attr("y", 65)
	.attr("text-anchor", "middle")
	.text("0%");



//
// Simulate and update counts.
//
var curr_node_index = 0;
var reset = false;
var clinton_so_far = 0;
var trump_so_far = 0;
var timeout;
function timer() {
	
	if (curr_node_index == nodes.length && !reset) {
		reset = true;
		timeout = setTimeout(timer, 5000);
		
	}
	else if (curr_node_index == nodes.length) { //reset
		d3.range(0, num_nodes).forEach(function(i) {
			nodes[i].choice = "center";
			nodes[i].cx = foci.center.x + Math.random();
			nodes[i].cy = foci.center.y + Math.random();
			nodes[i].radius = init_radius;
		});
		curr_node_index = 0;
		clinton_so_far = 0;
		trump_so_far = 0;
		reset = false;
		force.resume();
		
	d3.selectAll("text.counter")
		.transition()
		.duration(2500)
		.tween("text", function(d) {
			var re = /(\d+)%/;
			var meta_array = re.exec(this.textContent);
			var just_number = meta_array[1];
			if (just_number.substring(0,1) == "<") {
				just_number = just_number.substring(1);
			}
			new_pct = 0;
			var i = d3.interpolate(just_number, new_pct);
			return function(t) {
				this.textContent = Math.round(i(t)) + "%";
			}
		});
		
		if (USER_SPEED > 0) {
			timeout = setTimeout(timer, 3000);
		}
	}
	
	else { //real deal
            //is random probability less than user assigned prob?
		var p = 100 * Math.random();
		if (p < USER_PROB) {
			var choice = "clinton";
			clinton_so_far += 1;
		} else {
			var choice = "trump";
			trump_so_far += 1;
		}
	
		nodes[curr_node_index].cx = foci[choice].x;
		nodes[curr_node_index].cy = foci[choice].y;
		nodes[curr_node_index].choice = choice;
		nodes[curr_node_index].radius = max_radius;
		curr_node_index += 1;
	
		force.resume();
	
		
		d3.selectAll("text.counter")
			.transition()
			.duration(USER_SPEED)
			.tween("text", function(d) {
				var re = /(\d+)%/;
				var meta_array = re.exec(this.textContent);
				if (meta_array) {
					var just_number = meta_array[1];
					if (just_number.substring(0,1) == "<") {
						just_number = just_number.substring(1);
					}
				} else {
					var just_number = 0;
				}
				
				var choice = d3.select(this).attr("data-choice");
				if (choice == "clinton") {
					var new_pct = 100 * clinton_so_far / (clinton_so_far + trump_so_far);
				} else {
					var new_pct = 100 * trump_so_far / (clinton_so_far + trump_so_far);
				}
				
				var i = d3.interpolate(just_number, new_pct);
				return function(t) {
					if (i(t) < 1 && i(t) > 0) {
						this.textContent = "<1%";
					} else {
						this.textContent = Math.round(i(t)) + "%";
					}
				}
			});
		
		if (USER_SPEED > 0) {
			timeout = setTimeout(timer, USER_SPEED);
		} 
		
	}
	
}
timeout = setTimeout(timer, 5000);


function tick(e) {
	
  circle
	.each(gravity(.051 * e.alpha))
  	.each(collide(.5))
  	.style("fill", function(d) { return foci[d.choice].color; })
	// .attr("r", function(d) {
	// 	if (d.choice == "center") { return init_radius; }
	// 	else { return max_radius; }
	// })
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; });
}

// Move nodes toward cluster focus.
function gravity(alpha) {
  return function(d) {
    // d.y += (d.cy - d.y) * alpha;
    // d.x += (d.cx - d.x) * alpha;
    d.y += (foci[d.choice].y - d.y) * alpha;
    d.x += (foci[d.choice].x - d.x) * alpha;
  };
}

function force(alpha) {
  for (var i = 0, n = nodes.length, node, k = alpha * 0.1; i < n; ++i) {
    node = nodes[i];
    node.vx -= node.x * k;
    node.vy -= node.y * k;
  }
}


// Resolve collisions between nodes.
function collide(alpha) {
  var quadtree = d3.geom.quadtree(nodes);
  return function(d) {
	  var r = d.radius + max_radius + Math.max(padding, cluster_padding),
        nx1 = d.x - r,
        nx2 = d.x + r,
        ny1 = d.y - r,
        ny2 = d.y + r;
    quadtree.visit(function(quad, x1, y1, x2, y2) {
      if (quad.point && (quad.point !== d)) {
        var x = d.x - quad.point.x,
            y = d.y - quad.point.y,
            l = Math.sqrt(x * x + y * y),
            r = d.radius + quad.point.radius + (d.choice === quad.point.choice ? padding : cluster_padding);
        if (l < r) {
          l = (l - r) / l * alpha;
          d.x -= x *= l;
          d.y -= y *= l;
          quad.point.x += x;
          quad.point.y += y;
        }
      }
      return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
    });
  };
}



function resetSim() {
	
	clearTimeout(timeout);
	
	d3.range(0, num_nodes).forEach(function(i) {
		nodes[i].choice = "center";
		nodes[i].cx = foci.center.x + Math.random();
		nodes[i].cy = foci.center.y + Math.random();
		nodes[i].radius = init_radius;
	});
	curr_node_index = 0;
	clinton_so_far = 0;
	trump_so_far = 0;
	reset = false;
	
	timeout = setTimeout(timer, 1000);
}



function brushed() {
	USER_PROB = prob_slider.value();
	d3.select("#probclintonvalue").text(USER_PROB + "%");
	d3.select("#probtrumpvalue").text((100-USER_PROB) + "%");
	
	resetSim();
}








// For SVG text-wrapping
function wrap(text, width) {
  text.each(function() {
    var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.4, // ems
        y = text.attr("y"),
        dy = parseFloat(text.attr("dy")),
        tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
		tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", lineHeight + dy + "em").text(word);
        // tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
      }
    }
  });
}



function type(d, i) {
	
	d3.keys(d).map(function(key) {
		d[key] = +d[key];
	});
	return d;

}
/////////////


///////////SECOND SCRIPT

var w = 1280,
    h = 800,
    color = d3.scale.category10();

var force = d3.layout.force()
    .gravity(0)
    .charge(-10)
    .size([w, h]);

var nodes = force.nodes(),
    a = {type: 0, x: 3 * w / 6, y: 2 * h / 6, fixed: true},
    b = {type: 1, x: 4 * w / 6, y: 4 * h / 6, fixed: true},
    c = {type: 2, x: 2 * w / 6, y: 4 * h / 6, fixed: true};

nodes.push(a, b, c);

// we have nodes and force here?

var svg = d3.select("#chart").append("svg:svg")
    .attr("width", w)
    .attr("height", h);

svg.append("svg:rect")
    .attr("width", w)
    .attr("height", h);

svg.selectAll("circle")
    .data(nodes)
  .enter().append("svg:circle")
    .attr("r", 12)
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; })
    .style("fill", fill)
    .call(force.drag);

force.on("tick", function(e) {
  var k = e.alpha * .1;
  nodes.forEach(function(node) {
    var center = nodes[node.type];
    node.x += (center.x - node.x) * k;
    node.y += (center.y - node.y) * k;
  });
    
    //node created near mouse
    //tick function moves it difference
    
    //a simple equals does not work

  svg.selectAll("circle")
      .attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; });
});

var p0;

svg.on("mousemove", function() {
  var p1 = d3.svg.mouse(this),
      node = {type: Math.random() * 3 | 0, x: p1[0], y: p1[1], px: (p0 || (p0 = p1))[0], py: p0[1]};

  p0 = p1;
    
    //do we need to change circle attribute?

  svg.append("svg:circle")
      .data([node])
      .attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; })
      .attr("r", 4.5)
      .style("fill", fill)
    .transition()
      .delay(3000)
      .attr("r", 1e-6)
      .each("end", function() { nodes.splice(3, 1); })
      .remove();

  nodes.push(node);
  force.start();
});

function fill(d) {
  return color(d.type);
}

    </script>
  </body>
</html>




</script>
</body>