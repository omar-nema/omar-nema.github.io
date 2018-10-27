var colorRectBackground = '#262626';
var colorHeaderText = '#ff7171';
var colorText = 'rgba(255,255,255,.9)';
var textPadding = 20;
var width = $('svg.canvas').width();
var height = $('svg.canvas').height();
var currZ = 1;
var tooltip = d3.select('.tooltip')


function scatterX(num, orientation) {
    return Math.random()*(width-300);
}
function scatterY(num, orientation) {
    return Math.max(Math.random()*(height-50), 15+Math.random()*15);
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

        function thoughtHeightAdjustment(thoughtContainer){
          textBBox =
          thoughtContainer.select('.thought-background')
            .transition(100)
            .attr('height', function(d) {
                return textPadding + d3.select(this.parentNode).select('.text-holder').node().getBBox().height;
            })
            .attr('width', function(d) {
                return (textPadding + d3.select(this.parentNode).select('.text-holder').node().getBBox().width);
            })
            ;
        };

        function cardFade(e){
          d3.select(e).each(function(d){
            d3.selectAll('.thought-container')
            .filter(function(x){
              if (x.thought != d.thought){
                return x;
              }
            })
            .attr('opacity', '0.1')
            .attr('fill-opacity', '0.3')
            ;
          });
        }
        function cardShow(e){
          d3.selectAll('.thought-container').attr('opacity', '1').attr('fill-opacity', '0.88');
        }
        function thoughtShowContext(thoughtContainer){
          thoughtContainer.selectAll('.additional-info').transition(100).attr('opacity', '1').attr('fill-opacity', '.88');
          thoughtContainer.transition(100).attr('transform', 'translate(' + centeredX/2 + ',' + centeredY/2 + ')scale(1)')
        }
        function thoughtHideContext(clickedThought){
          clickedThought.selectAll('.additional-info').attr('opacity', 0).attr('display', 'none');
          clickedThought.select('.thought-text').attr('display', 'block').attr('opacity', '1');
        }
        //click event to work on windows
        function dragEnd(){
          if (d3.event.x == initX &&  d3.event.y == initY){
            var thoughtContainer, cardTranslation, thoughtTranslation;
            var dragRecipient = d3.select(this);
            var dragParent = d3.select(this.parentNode);
            d3.event.sourceEvent.path.forEach(function(e){ //b/c click and drag interfere on le
              //if you click the more button
              if ($(e).hasClass('more-button')){
                if (dragRecipient.classed('thought-container')){
                  thoughtContainer = dragRecipient;
                  cardTranslation = [0,0];
                } else {
                  cardTranslation = getTranslation(dragRecipient.attr('transform'));
                  d3.event.sourceEvent.path.forEach(function(x){
                    if ($(x).hasClass('thought-container')){
                      thoughtContainer = d3.select(x);

                    }
                  })
                }
                thoughtTranslation = getTranslation(thoughtContainer.attr('transform'));
                thoughtContainer.attr('class', 'thought-container active')
                thoughtContainer.select('.thought-text').transition(50).attr('opacity', '0').on('end', function(d){
                  d3.select(this).attr('display', 'none');
                });
                d3.selectAll('.additional-info').attr('display', 'block');
                thoughtContainer.selectAll('.additional-info')
                  .attr('y', function(d, i){
                    if (i == 0){
                      return 0
                    } else {
                      bbox = d3.select(this.previousSibling).node().getBBox();
                      return bbox.height + bbox.y + 15 + 'px';
                    }
                  });
                centeredX = width - thoughtContainer.node().getBBox().width/2 - cardTranslation[0];
                centeredY = height - thoughtContainer.node().getBBox().height/2 - cardTranslation[1];
                //transition all other opacity
                cardFade(e);
                thoughtHeightAdjustment(thoughtContainer);
                thoughtShowContext(thoughtContainer);
                canvas.on('mousedown', function(){
                  d3.event.preventDefault();
                  console.log('dd')
                })
                // $(window).one('click', function(){
                //   cardShow();
                //   thoughtHideContext(thoughtContainer);
                //   thoughtHeightAdjustment(thoughtContainer); //100 ms
                //   thoughtContainer.transition(100).attr('transform', 'translate(' + thoughtTranslation[0] + ', ' + thoughtTranslation[1] + ')');
                // })
              }///end more
            })
          }
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
              ;
          rects = thought.append('rect').attr('class', 'thought-background').attr('fill', colorRectBackground).attr('fill-opacity', '.85')
            ;
          thought = thought.append('g').attr('class', 'text-holder')
          thought
              .append('text')
              .attr('class', 'thought-text')
              .attr('fill', colorText)
              .attr('x', 0)
              .attr('dy', 0)
              .text(function(d) {
                  return d.thought;
              })
              .call(wrap, 350)
              ;

          thought.select('text').each(function(d){
            if (d.context != ''){
              d3.select(this).append('tspan').text('(more)').attr('class', 'more-button').attr('dy', '0').attr('dx', '8')
                    .attr('fill', '#e9a2a2');
            }
          });

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
            thoughtText = thought.selectAll('.thought-text');
            thought.append('text')
              .attr('class', 'context-header additional-info')
              .attr('x', 0)
              .attr('dy', 0)
              .attr('fill', 'red')
              .text('context')
              .attr('y', 0)
              .attr('display', 'none')
              .attr('opacity', '0')
              ;
            thought.append('text')
              .attr('class', 'context additional-info')
              .attr('x', 0)
              .attr('dy', 0)
              .attr('y', 0)
              .attr('fill', 'white')
              .text(function(d){
                return '"...' + d.context + '..."'
              })
              .attr('fill-opacity', '0.9')
              .call(wrap, 350)
              .attr('opacity', '0')
              .attr('display', 'none');
              ;

              thought.append('text')
                .attr('class', 'pattern-header additional-info')
                .attr('x', 0)
                .attr('dy', 0)
                .attr('fill', 'red')
                .text('pattern')
                .attr('opacity', '0')
                .attr('fill-opacity', '0.9')
                .attr('display', 'none');
              thought.append('text')
                .attr('class', 'pattern additional-info')
                .attr('x', 0)
                .attr('dy', 0)
                .attr('fill', 'white')
                .text(function(d){
                  return d.pattern
                })
                .attr('opacity', '0')
                .attr('display', 'none');
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


        drawThoughts();
        splitThoughts();



        $('.option.project').on('click',function(){
          $('.canvas').hide(300);
          $('.project-desc').show(300);
        });
        $('.option.context').on('click',function(){
          $('.project-desc').hide(300);
          $('.canvas').show(300);
        });
        $('.split-btn').on('click', function(e) {
            splitThoughts();
        })
        $('.sort-btn').on('click', function(e) {
            groupThoughts();
        })

    });
})
