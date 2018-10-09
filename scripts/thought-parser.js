function cardHTML(d) {
    var header = "<div class='thought-header'>" + d.pattern + '</div>'
    var listhtml = '<div class="thought-content">';
    listItem = '<div class="thought">' + d.thought + '</div>';
    listhtml = listhtml + listItem + '</div>';
    return header + listhtml;
}


var cardWidth = 400;
var positions = [
    ['2%', '9%'],
    ['7%', '50%'],
    ['26%', '23%'],
    ['56%', '-2%'],
    ['50%', '40%'],
    ['39%', '69%']
]
var positions = [
    [.02, .09],
    [.07, .5],
    [.26, .23],
    [.56, -.02],
    [.5, .4],
    [.39, .69]
]

var textPadding = 10;

var width = $('svg.canvas').width();
var height = $('svg.canvas').height();

function scatterX(num, orientation) {
    return (Math.random() * .95 + .05) * width;
}

function scatterY(num, orientation) {
    return (Math.random() * .95 + .05) * height;
}
var currZ = 1;
$(function() {
    var thoughts = d3.csv('projects/Lists/thoughts.csv', function(d) {
        return {
            thought: d.thought,
            pattern: d.pattern,
            context: d.context
        }
    }).then(function(thoughtData) {
        var canvas = d3.select('body').select('svg.canvas');
        var lists = d3.nest().key(function(d) {
            return d.pattern
        }).entries(thoughtData);
        var thoughtNest = d3.nest().key(function(d) {
            return d.thought
        }).entries(thoughtData);


        var offset;

        function getTranslation(transform) {
            var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
            g.setAttributeNS(null, "transform", transform);
            var matrix = g.transform.baseVal.consolidate().matrix;
            return [matrix.e, matrix.f];
        }
        function dragStart(e) {
            translation = getTranslation(d3.select(this).attr('transform'));
            offset = [];
            offset[0] = d3.event.x - translation[0];
            offset[1] = d3.event.y - translation[1];
        }
        function dragged(d) {
            d3.select(this).attr('transform', function() {
                x = d3.event.x - offset[0];
                y = d3.event.y - offset[1];
                return 'translate(' + x + ', ' + y + ')'
            })
        }

        function drawThoughts(){
          canvas.selectAll('.thought-card').on(".drag", null)
          var thoughtCard = canvas.selectAll('.thought-card').data(lists, function(d) {
              return d.key
          })
          thoughtCard = thoughtCard.enter().append('g')
              .attr('class', 'thought-card');
         thoughtCard
            .append('rect').attr('class', 'thought-container-background');
          thoughtCard
              .append('text')
              .style('cursor', 'pointer')
              .text(function(d) {
                  return d.key
              })
              .attr('class', 'thought-pattern')
              .attr('dy', 0);
              
          thought = canvas.selectAll('.thought-card').selectAll('.thought').data(function(d) {
                  return d.values
              }).enter().append('g').attr('class', 'thought-container');
          rects = thought.append('rect').attr('class', 'thought-background').attr('fill', '#343434').attr('fill-opacity', '.85')
            ;
          thought.append('text')
              .attr('class', 'thought')
              .attr('fill', 'rgba(255,255,255,.8)')
              .attr('x', 0)
              .attr('dy', 0)
              .text(function(d) {
                  return d.thought;
              })
              .call(wrap, 350)
              ;
          rects
            .attr('x', function(d) {
                return -0.5*textPadding + d3.select(this.parentNode).node().getBBox().x;
            })
            .attr('y', function(d) {
                return -0.5*textPadding + d3.select(this.parentNode).node().getBBox().y;
            })
            .attr('height', function(d) {
                return textPadding + d3.select(this.parentNode).node().getBBox().height;
            })
            .attr('width', function(d) {
                return (textPadding + d3.select(this.parentNode).node().getBBox().width);
            });
          thought.selectAll('.thought-background')
              .attr('rx', '5').attr('ry', '5');
        }

        function splitThoughts() {
            canvas.selectAll('.thought-card').select('.thought-container-background').transition().attr('fill', 'none').on('end', function(d) {
                thoughtCard = d3.select(this.parentNode);
                thoughtCard.transition(300).attr('transform', 'translate(0,0)')
                thoughtCard.selectAll('.thought-pattern').transition(100).attr('fill', 'transparent');
                thoughtCard.selectAll('.thought-container')
                    .call(d3.drag().on("start", dragStart).on('drag', dragged))
                    .each(function(d,i){
                      if (d.context.length > 1) {
                        tippy(d3.select(this).node(), {
                          content: d.context,
                          trigger: 'click',
                          arrow: false,
                          size: 'small',
                          duration: 500
                        })
                      }
                    })
                    .transition(600)
                    .attr('transform', function(d, i) {
                        return 'translate(' + scatterX(i) + ',' + scatterY(i) + ')'
                    })
                    .selectAll('.thought-background')
                    .attr('stroke', 'darkgray')
                    .attr('fill', '#585555')
                    ;
            })
        };

        function groupThoughts() {

            canvas.selectAll('.thought-card').style('cursor', 'grab').transition(600).attr('transform', function(d, i) {
                return 'translate(' + scatterX(i) + ',' + scatterY(i) + ')'
            });
            canvas.selectAll('.thought-card').selectAll('.thought-background').transition(400).attr('fill', 'none').attr('stroke', 'none')
            .selectAll('.thought-background')
            ;

            var startY;
            canvas.selectAll('.thought-card').selectAll('.thought-container').on(".drag", null).transition(600).attr('transform', function(d,i){
              var prevElement = d3.select(this.previousElementSibling);
              if (prevElement.classed('thought-container')){
                prevHeight = prevElement.node().getBBox().height;
                // prevY = getTranslation(prevElement.attr('transform'))[1];
                startY = prevHeight + startY;
                return 'translate(0, ' + startY + ')';
              } else {
                startY = 36;
                return 'translate(0, 36)';
              }

            })
            .on('end', function(d) {
                thoughtCard = d3.select(this.parentNode);
                thoughtCard.call(d3.drag().on("start", dragStart).on('drag', dragged))
                thoughtCard.select('.thought-pattern').transition(100).attr('fill', 'red')
                  .attr('transform', 'translate(0, 15)')
                thoughtCard.select('.thought-container-background').attr('fill', 'rgba(0,0,0,.8)').transition(100).attr('width', function(d) {
                    return d3.select(this.parentNode).node().getBBox().width;
                }).attr('height', function(d) {
                    return d3.select(this.parentNode).node().getBBox().height;
                });
            })
        };


        function wrap(text, width) {
            text.each(function() {
                var text = d3.select(this),
                    words = text.text().split(/\s+/).reverse(),
                    word,
                    line = [],
                    lineNumber = 0,
                    lineHeight = 1.2, // ems
                    y = text.attr("y"),
                    dy = parseFloat(text.attr("dy")),
                    tspan = text.text(null).append("tspan").attr("dy", dy + "em");
                while (word = words.pop()) {
                    line.push(word);
                    tspan.text(line.join(" "));
                    if (tspan.node().getComputedTextLength() > width) {
                        line.pop();
                        tspan.text(line.join(" "));
                        line = [word];
                        tspan = text.append("tspan").attr('x', 0).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
                    }
                }
            });
        }
        drawThoughts();
        splitThoughts();

        $('.split-btn').on('click', function(e) {
            splitThoughts();
        })
        $('.sort-btn').on('click', function(e) {
            groupThoughts();
        })

    });
})
