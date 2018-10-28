var colorRectBackground = '#1e1d1d';
var colorHeaderText = '#ff7171';
var colorText = 'rgba(255,255,255,.8)';
var textPadding = 23;
var width = $('svg.canvas').width();
var height = $('svg.canvas').height();
var currZ = 1;
var tooltip = d3.select('.tooltip')
var cardWidth = 240;
var colorContextHeader = '#ff75f7';
var colorMoreButton = '#abc0fc'

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

        function setForeignObjectHeight(thoughtContainer){
          thoughtContainer.selectAll('.foreign')
          .attr('height', function(d) {
            thoughtTextHolder = $(this).find('.thought-text-holder');
            return thoughtTextHolder.height()+ parseInt(thoughtTextHolder.css('padding-top')) + parseInt(thoughtTextHolder.css('padding-bottom'));
          })
          .attr('width', function(d) {
            return $(this).find('.thought-text-holder').width()+parseInt(thoughtTextHolder.css('padding-left')) + parseInt(thoughtTextHolder.css('padding-right'));
          });
        };


        function thoughtMoveToCenter(thoughtContainer, cardTranslation){
          centeredX = width - thoughtContainer.node().getBBox().width - cardTranslation[0];
          centeredY = height - thoughtContainer.node().getBBox().height - cardTranslation[1];
          thoughtTranslation = getTranslation(thoughtContainer.attr('transform'));
          thoughtContainer.transition(100).attr('transform', 'translate(' + centeredX/2 + ',' + centeredY/2 + ')');
          return thoughtTranslation;
        }
        function thoughtShowContext(thoughtContainer){
          thoughtContainer.selectAll('.additional-info').style('display', 'inline');
          thoughtContainer.select('.more-button').style('display', 'none')
          thoughtContainer.selectAll('.additional-info').transition(200).style('opacity', 1);
        }
        function thoughtHideContext(clickedThought){
          clickedThought.classed('active', false);
          clickedThought.select('.more-button').style('display', 'inline');
          clickedThought.selectAll('.additional-info').style('display', 'none').style('opacity', '0');
        }
        function dragStart(e) {
            opacityLayer = canvas.select('.opacity-layer'); //this runs too many times, fix
            opacityLayerNode = opacityLayer.node();
            canvas.node().appendChild(opacityLayerNode);
            this.parentNode.appendChild(this);
            this.parentNode.parentNode.appendChild(this.parentNode);
            translation = getTranslation(d3.select(this).attr('transform'));
            offset = [];
            initX = d3.event.x;
            initY = d3.event.y;
            offset[0] = initX - translation[0];
            offset[1] = initY - translation[1];
        }
        function dragged(d) {
            console.log(offset)
            d3.select(this).attr('transform', function() {
                x = d3.event.x - offset[0];
                y = d3.event.y - offset[1];
                return 'translate(' + x + ', ' + y + ')';
            })
        }
        //click event to work on windows
        function dragEnd(){
          opacityLayer = canvas.select('.opacity-layer');
          if (d3.event.x == initX &&  d3.event.y == initY){
            var thoughtContainer, cardTranslation, thoughtTranslation;
            var dragRecipient = d3.select(this);
            var dragParent = d3.select(this.parentNode);
            d3.event.sourceEvent.path.forEach(function(e){ //b/c click and drag interfere on le
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

                thoughtContainer.attr('class', 'thought-container active')
                thoughtShowContext(thoughtContainer);
                setForeignObjectHeight(thoughtContainer);
                thoughtTranslation = thoughtMoveToCenter(thoughtContainer, cardTranslation);
                opacityLayer.attr('display', 'block').attr('opacity', '0.8');

                opacityLayer.on('mousedown', function(){
                    d3.select(this).attr('opacity', 0).attr('display', 'none');
                    thoughtHideContext(thoughtContainer);
                    setForeignObjectHeight(thoughtContainer);
                    thoughtContainer.transition(100).attr('transform', 'translate(' + thoughtTranslation[0] + ', ' + thoughtTranslation[1] + ')');
                    opacityLayer.on('mousedown', null);
                })
              }///end more
            })
          }
        };

        function generateThoughtString(currThought, thoughtText, fontWeight){
          currThought.append('text')
            .attr('class', 'context additional-info')
            .attr('x', 0)
            .attr('dy', 0)
            .attr('y', 0)
            .style('font-weight', fontWeight)
            .attr('fill', 'white')
            .text(function(){
              return thoughtText;
            })
            .call(wrap, cardWidth)
            .attr('opacity', '0')
            .attr('display', 'none');
            ;
        }

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
          canvas.append('rect').attr('class', 'opacity-layer')
            .attr('transform', 'translate(0,0)').attr('width', '100%')
            .attr('opacity', '0')
            .attr('fill', 'black')
            .attr('display', 'none')
          ;
          canvas.selectAll('.thought-card').on(".drag", null)
          var thoughtCard = canvas.selectAll('.thought-card').data(lists, function(d) {
              return d.key
          })
          thoughtCard = thoughtCard.enter().append('g')
              .attr('class', 'thought-card');
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
          ;

          foreignObj = thought
          // .append('g')
            .append('foreignObject')
            .attr('class', 'foreign')
            .style('color', 'white')
            .style('display', 'inline-block')
            .attr('height', '20')
            .append('xhtml:div')
            .attr('class', 'thought-text-holder')
            .style('width', '240px')
            .style('height', 'auto')
            .each(function(d){
              var sel = d3.select(this);
              splitString = d.context.split(d.thought);
              thoughtString = d.thought;
              textMoreButton = '(more)';
              textPrefix = splitString[0]
              textThought = thoughtString;
              textSuffix = splitString[1];
              sel.append('span').text(textPrefix).attr('class', 'context-prefix additional-info');        ;
              sel.append('span').text(textThought).attr('class', 'thought-text');
              sel.append('span').text(textSuffix).attr('class', 'context-suffix additional-info');
              sel.append('span').text(textMoreButton).attr('class', 'more-button');
              return;
            })
            ;

            setForeignObjectHeight(canvas);
            ;
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

            canvas.selectAll('.thought-card').each(function(d){
              thoughtCard = d3.select(this);
              thoughtCard.transition(300).attr('transform', 'translate(0,0)')
              thoughtCard.selectAll('.thought-pattern').transition(100).attr('fill', 'transparent');
              thoughtCard.selectAll('.thought-container')
                  .call(d3.drag().on("start", dragStart).on('drag', dragged).on('end', dragEnd))
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
                  .attr('stroke', 'rgba(255,255,255,.1)')
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
            // canvas.selectAll('.thought-card').selectAll('.thought-background').transition(400).attr('fill', 'none').attr('stroke', 'none').attr('filter', 'none')
            ;

            var startY;
            canvas.selectAll('.thought-card').selectAll('.thought-container').on(".drag", null)
            .transition(100).attr('transform', function(d,i){
              var prevElement = d3.select(this.previousElementSibling);
              if (prevElement.classed('thought-container')){
                // boundingRect = prevElement.select('.thought-text-holder').node().getBoundingClientRect()
                // prevHeight = boundingRect.height;
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
                // thoughtCard.select('.thought-container-background').attr('fill', colorRectBackground)
                // .attr('stroke', 'rgba(255,255,255,.2)')
                .transition(100).attr('width', function(d) {
                    return d3.select(this.parentNode).node().getBBox().width + textPadding;
                }).attr('height', function(d) {
                    return d3.select(this.parentNode).node().getBBox().height;
                })
                .attr('x', -textPadding/2)
                ;
            })
          // canvas.node().appendChild(canvas.select('.opacity-opacityLayer').node());
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
