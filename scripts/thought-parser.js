var colorRectBackground = 'rgb(61, 61, 61)';
var colorHeaderText = '#ff7171';
var colorText = 'white';
var textPadding = 20;
var width = $('svg.canvas').width();
var height = $('svg.canvas').height();
var currZ = 1;
var tooltip = d3.select('.tooltip')


function scatterX(num, orientation) {
    return (Math.random()*.6 + .1) * width;
}
function scatterY(num, orientation) {
    return (Math.random()*.7 + .15) * height;
}

$(function() {
    var thoughts = d3.csv('projects/Lists/thoughts.csv', function(d) {
        return {
            thought: d.thought,
            pattern: d.pattern,
            context: d.context
        }
    }).then(function(thoughtData) {
        var canvas = d3.select('body').select('svg.canvas');
        var filter = canvas.append('defs').append('filter').attr('id', 'shadow')
          .append('feDropShadow')
          .attr('dx', 4).attr('dy', 4).attr('stdDeviation', 4).attr('flood-color', '#28282847')
        var lists = d3.nest().key(function(d) {
            return d.pattern
        }).entries(thoughtData);
        var thoughtNest = d3.nest().key(function(d) {
            return d.thought
        }).entries(thoughtData);


        var offset;
        var initX;
        var initY;

        function getTranslation(transform) {
            var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
            g.setAttributeNS(null, "transform", transform);
            var matrix = g.transform.baseVal.consolidate().matrix;
            return [matrix.e, matrix.f];
        }
        function dragStart(e) {
            this.parentNode.appendChild(this);
            this.parentNode.parentNode.appendChild(this.parentNode)
            translation = getTranslation(d3.select(this).attr('transform'));
            offset = [];
            initX = d3.event.x;
            initY = d3.event.y;
            offset[0] = initX - translation[0];
            offset[1] = initY - translation[1];
        }
        function dragged(d) {
            d3.select(this).attr('transform', function() {
                x = d3.event.x - offset[0];
                y = d3.event.y - offset[1];
                return 'translate(' + x + ', ' + y + ')';
            })
        }
        //click event to work on windows
        function dragEnd(){
          if (d3.event.x == initX &&  d3.event.y == initY){
            d3.event.sourceEvent.path.forEach(function(e){ //b/c click and drag interfere on le
              if ($(e).hasClass('thought-container')){
                var thoughtg = d3.select(e);
                thoughtg.each(function(d){
                  d3.selectAll('.thought-container').transition(500).attr('opacity', function(x){
                    if (x.thought != d.thought){
                      return 0.3;
                    }
                  })
                  tooltip.style('opacity', 1)
                    .html(function(){
                      return d.context;
                    })
                    .style("left", (d3.event.x - 70) + "px")
                    .style("top", (d3.event.y + 15) + "px");
                });
              }
            })
          }
        };

        $(window).on('click', function(){
          tooltip.style('opacity', 0);
          d3.selectAll('.thought-container').transition(200).attr('opacity', 1);
        })

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
                  return '"' + d.key + '"'
              })
              .attr('class', 'thought-pattern')
              .attr('dy', 0);

          thought = canvas.selectAll('.thought-card').selectAll('.thought-container').data(function(d) {
                  return d.values
              }).enter().append('g').attr('class', 'thought-container')

              // .each(function(d,i){
              //   tippy(d3.select(this).node(), {
              //     content: 'AAAAAAAAAAAAAAAA',
              //     trigger: 'click',
              //     arrow: false,
              //     size: 'small',
              //     duration: 500
              //   })
              //   // if (d.context.length > 1) {
              //   //
              //   // }
              // })
              ;
          rects = thought.append('rect').attr('class', 'thought-background').attr('fill', colorRectBackground).attr('fill-opacity', '.85')
            ;
          thought
              .append('text')
              .attr('class', 'thought')
              .attr('fill', colorText)
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
              // .attr('rx', '5').attr('ry', '5');
        }

        function flattenThoughts(){
          canvas.selectAll('.thought-container').each(function(d){
            var addMe = d3.select(this).node();
            var svg = d3.select('svg').node();
            svg.append(addMe);
          })
        }


        function splitThoughts() {
            var svg = d3.select('svg').node();
            canvas.selectAll('.thought-container-background').attr('stroke', 'none');
            canvas.selectAll('.thought-background').attr('filter', 'url(#shadow)')
            canvas.selectAll('.thought-card').select('.thought-container-background').transition().attr('fill', 'none').on('end', function(d) {
                thoughtCard = d3.select(this.parentNode);
                thoughtCard.transition(300).attr('transform', 'translate(0,0)')
                thoughtCard.selectAll('.thought-pattern').transition(100).attr('fill', 'transparent');
                thoughtCard.selectAll('.thought-container')
                    .call(d3.drag().on("start", dragStart).on('drag', dragged).on('end', dragEnd))
                    .attr('fill-opacity', .88)
                    .transition(600)
                    .attr('transform', function(d, i) {
                        return 'translate(' + scatterX(i) + ',' + scatterY(i) + ')'
                    })
                    .on('end',function(){
                      //flatten !! because d3 got no z index :(
                      addMe = d3.select(this).node();
                      svg.append(addMe)
                    })
                    .selectAll('.thought-background')
                    .attr('stroke', 'rgba(255,255,255,.2)')
                    .attr('fill', colorRectBackground)
                    ;
            })

        };

        function groupThoughts() {
            //group dem back
            canvas.selectAll('.thought-card').each(function(d){
              var card = d3.select(this).node();
              canvas.selectAll('.thought-container').each(function(z){
                if (d.key == z.pattern){
                  var thought = d3.select(this).node();
                  card.append(thought)
                }
              })
            })

            canvas.selectAll('.thought-card').style('cursor', 'grab').transition(600).attr('transform', function(d, i) {
                return 'translate(' + scatterX(i) + ',' + scatterY(i) + ')'
            });
            canvas.selectAll('.thought-container').attr('filter', 'none')
            canvas.selectAll('.thought-card').selectAll('.thought-background').transition(400).attr('fill', 'none').attr('stroke', 'none').attr('filter', 'none')
            ;

            var startY;
            canvas.selectAll('.thought-card').selectAll('.thought-container').on(".drag", null)
            .transition(600).attr('transform', function(d,i){
              var prevElement = d3.select(this.previousElementSibling);
              if (prevElement.classed('thought-container')){
                prevHeight = prevElement.node().getBBox().height;
                // prevY = getTranslation(prevElement.attr('transform'))[1];
                startY = prevHeight + startY;
                return 'translate(0, ' + startY + ')';
              } else {
                startY = d3.select(this).node().getBBox().height+5;
                return 'translate(0,' + startY + ')';
              }
            })
            .on('end', function(d) {
                thoughtCard = d3.select(this.parentNode);
                thoughtCard.call(d3.drag().on("start", dragStart).on('drag', dragged).on('end', dragEnd));
                thoughtCard.select('.thought-pattern').transition(100).attr('fill', colorHeaderText)
                  .attr('transform', 'translate(0, 15)')
                thoughtCard.select('.thought-container-background').attr('fill', colorRectBackground).attr('fill-opacity', .88)
                //.attr('rx', 5).attr('ry', 5)
                .attr('stroke', 'rgba(255,255,255,.2)')
                .transition(100).attr('width', function(d) {
                    return d3.select(this.parentNode).node().getBBox().width + textPadding;
                }).attr('height', function(d) {
                    return d3.select(this.parentNode).node().getBBox().height;
                })
                .attr('x', -textPadding/2)
                ;
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
                        //++lineNumber * lineHeight
                        tspan = text.append("tspan").attr('x', 0).attr("dy", lineHeight + dy + "em").text(word);
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
