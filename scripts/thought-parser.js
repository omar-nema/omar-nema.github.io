var colorRectBackground = '#1e1d1d';
var colorHeaderText = '#ff7171';
var colorText = 'rgba(255,255,255,.8)';
var textPadding = 23;
var width = $('.canvas').width();
var height = $('.canvas').height();
var currZ = 1;
var tooltip = d3.select('.tooltip')
var colorContextHeader = '#ff75f7';
var colorMoreButton = '#abc0fc'
var opacityLayer = d3.select('.canvas-opacity-layer');

function scatterX(num, container) {
    // containerWidth = 0;
    // if (container){
    //   console.log(container, container.node().getBBox());
    //   containerWidth = container.node().getBBox().width;
    // }
    return Math.random()*(width-200);
}
function scatterY(num, container) {
    // containerHeight = 0;
    // if (container){
    //   containerHeight = container.node().getBBox().height;
    // }
    return Math.random()*(height-50);

}

$(function() {
    var thoughts = d3.csv('projects/Lists/thoughts.csv', function(d) {
        return {
            thought: d.thought,
            pattern: d.pattern,
            context: d.context
        }
    }).then(function(thoughtData) {
        var canvas = d3.select('body').select('.project-holder').select('.canvas');
        var lists = d3.nest().key(function(d) {
            return d.pattern
        }).entries(thoughtData);
        var thoughtNest = d3.nest().key(function(d) {
            return d.thought
        }).entries(thoughtData);


        var offset;
        var initX;
        var initY;


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
          var bbox = thoughtContainer.node().getBoundingClientRect();
          centeredX = width/2 - bbox.width/2 - cardTranslation[0];
          centeredY = height/2 - bbox.height/2 - cardTranslation[1];
          thoughtTranslation = getTranslation(thoughtContainer.style('transform'));
          thoughtContainer.transition(100).style('transform', 'translate(' + centeredX + 'px,' + centeredY + 'px)');
          return thoughtTranslation;
        }
        function thoughtShowContext(thoughtContainer, dragRecipient){
          opacityLayer.style('z-index', getMaxZ(dragRecipient)-1).transition(100).style('opacity', '0.7')
          thoughtContainer.selectAll('.additional-info').style('display', 'inline');
          thoughtContainer.selectAll('.additional-info.info-header').style('display', 'block');
          thoughtContainer.select('.more-button').style('display', 'none')
          thoughtContainer.selectAll('.additional-info').transition(200).style('opacity', 1);


          if (dragRecipient.classed('thought-card')){
            dragRecipient.selectAll('.thought-opacity-holder').filter(function(d){
              return d.thought != thoughtContainer.data()[0].thought
            }).attr('opacity', '.2')
          }
        }
        function thoughtHideContext(clickedThought, dragRecipient){
          opacityLayer.transition(100).style('opacity', 0).on('end', function(){
            d3.select(this).style('z-index', '0')
          })
          clickedThought.classed('active', false);
          clickedThought.select('.more-button').style('display', 'inline');
          clickedThought.selectAll('.additional-info').style('display', 'none').style('opacity', '0');
          if (dragRecipient.classed('thought-card')){
            dragRecipient.selectAll('.thought-opacity-holder').filter(function(d){
              return d.thought != clickedThought.data()[0].thought
            }).attr('opacity', '1')
          }
        }

        function getTranslation(transform) {
            translate = transform.substring(transform.indexOf("(")+1, transform.indexOf(")")).split(",");
            return [parseInt(translate[0]), parseInt(translate[1])];
        }

        function getMaxZ(obj){
          if (obj.classed('thought-card')){
            console.log('yee')
            x = 1;
            canvas.selectAll('.thought-card').each(function(d){
              x = Math.max(x, parseInt(d3.select(this).style('z-index')) || 0);
            })
            console.log(x)
            return x;
          } else {
            z = 0;
            canvas.selectAll('.thought-container').each(function(d){
              z = Math.max(z, parseInt(d3.select(this).style('z-index')));
            })
            return z;
          }

        }

        function dragStart(e) {
            d3.select(this).style('z-index', 2+getMaxZ(d3.select(this)));
            translation = getTranslation(d3.select(this).style('transform'));
            offset = [];
            initX = d3.event.x;
            initY = d3.event.y;
            offset[0] = initX - translation[0];
            offset[1] = initY - translation[1];
        }
        function dragged(d) {
            d3.select(this).style('transform', function() {
                x = d3.event.x - offset[0];
                y = d3.event.y - offset[1];
                return 'translate(' + x + 'px, ' + y + 'px)';
            })
        }
        //click event to work on windows
        function dragEnd(){
          if (d3.event.x == initX &&  d3.event.y == initY){
            var thoughtContainer, cardTranslation, thoughtTranslation, thoughtCard;
            var dragRecipient = d3.select(this);
            var dragParent = d3.select(this.parentNode);
            d3.event.sourceEvent.path.forEach(function(e){ //b/c click and drag interfere on le
              if ($(e).hasClass('more-button')){
                if (dragRecipient.classed('thought-container')){
                  thoughtContainer = dragRecipient;
                  cardTranslation = [0,0];
                } else {
                  cardTranslation = getTranslation(dragRecipient.style('transform'));
                  d3.event.sourceEvent.path.forEach(function(x){
                    if ($(x).hasClass('thought-container')){
                      thoughtContainer = d3.select(x);
                    }
                  })
                }

                thoughtContainer.classed('active', true)
                thoughtShowContext(thoughtContainer, dragRecipient);
                setForeignObjectHeight(thoughtContainer);
                thoughtTranslation = thoughtMoveToCenter(thoughtContainer, cardTranslation);
                opacityLayer.attr('display', 'block').attr('opacity', '0.8');

                opacityLayer.on('mousedown', function(){
                    d3.select(this).attr('opacity', 0).attr('display', 'none');
                    thoughtHideContext(thoughtContainer, dragRecipient);
                    setForeignObjectHeight(thoughtContainer);
                    thoughtContainer.transition(100).style('transform', 'translate(' + thoughtTranslation[0] + 'px, ' + thoughtTranslation[1] + 'px)');
                })
              }///end more
            })
          }
        };

        function drawThoughts(){

          canvas.selectAll('.thought-card').on(".drag", null)
          var thoughtCard = canvas.selectAll('.thought-card').data(lists, function(d) {
              return d.key
          })
          thoughtCard = thoughtCard.enter().append('div')
              .attr('class', 'thought-card');

          thoughtCard
              .append('div')
              .attr('class', 'foreign-header thought-opacity-holder')
              .style('height', '29px')
              // .style('width', '256')
              .append('xhtml:div')
              .attr('class', 'thought-pattern')
              .text(function(d) {
                  return '"' + d.key + '"'
              });

          thought = canvas.selectAll('.thought-card').selectAll('.thought-container').data(function(d) {
                  return d.values
              }).enter().append('div').attr('class', 'thought-container thought-opacity-holder')
              ;
          ;

          foreignObj = thought
            .append('div')
            .attr('class', 'thought-text-holder')
            .style('height', 'auto')
            .each(function(d){
              var sel = d3.select(this);
              splitString = d.context.split(d.thought);
              thoughtString = d.thought;
              textMoreButton = '(more)';
              textPrefix = '...' + (splitString[0] || '');
              textThought = thoughtString;
              textSuffix = ' ' + (splitString[1] || '') + '...';
              pattern =  d.pattern;
              sel.append('div').html('context').attr('class', 'info-header additional-info');
              sel.append('span').text('"').attr('class', 'ellipsis');
              sel.append('span').text(textPrefix).attr('class', 'context-prefix additional-info');
              sel.append('span').text(textThought).attr('class', 'thought-text');
              sel.append('span').text(textSuffix).attr('class', 'context-suffix additional-info');
              sel.append('span').text('"').attr('class', 'ellipsis');
              sel.append('span').text(textMoreButton).attr('class', 'more-button');
              sel.append('div').html('<br>pattern').attr('class', 'info-header additional-info');
              sel.append('span').text(pattern).attr('class', 'additional-info pattern');
              return;
            })
            ;
            setForeignObjectHeight(canvas);
            ;
        }

        var inline = d3.select('.project-holder')
        .append('div').attr('class', 'flat-layout-holder')
          .selectAll('.thought-flat-text')
          .data(thoughtNest).enter();
        spanHolder = inline
          .append('div')
          .attr('class', 'thought-flat-text')
        spanHolder
          .append('span')
          .attr('class', 'thought-flat-span')
          .text(function(d){
            return '"' + d.key + '"';
          })
          .on('mousedown', function(d){
            thoughtString = d.key;
            splitString = d.values[0].context.split(thoughtString);
            textPrefix = '"...' + (splitString[0] || '');
            textSuffix = ' ' + (splitString[1] || '') + '..."';
            pattern =  d.values[0].pattern;
            overlay = d3.select('.project-holder-overlay');
            overlay.classed('active', true).style('opacity', .85);
            overlay.select('.context-prefix').text(textPrefix);
            overlay.select('.thought-text').text(thoughtString);
            overlay.select('.context-suffix').text(textSuffix);
            overlay.select('.pattern').text(pattern);
            $(overlay.node()).fadeIn(500);

            overlay.on('mousedown', function(d){
              $(this).fadeOut(300);
            })
          })
        spanHolder.append('span').attr('class', 'thought-separator');
        ;

        function splitThoughts() {
            var svg = canvas.node();

            canvas.selectAll('.thought-card').each(function(d){
              thoughtCard = d3.select(this);
              if (thoughtCard.classed('grouped')){
                thoughtCard
                .transition()
                .duration(450)
                .style('transform', 'translate(0px, 0px)')
                .on('end',function(){
                  d3.select(this).classed('grouped', false);
                  d3.select(this).style('transform', 'initial')
                })
              };
              thoughtCard.selectAll('.thought-pattern').transition(100).attr('fill', 'transparent');
              thoughtCard
                .selectAll('.thought-container')
                  .call(d3.drag().on("start", dragStart).on('drag', dragged).on('end', dragEnd))
                  .transition()
                  .duration(450)
                  .style('transform', function(d,i){
                    return 'translate(' + scatterX(i, d3.select(this)) + 'px, ' + scatterY(i, d3.select(this)) + 'px)'
                  })

                  ;
            })
        };
        function groupThoughts() {
            canvas
              .selectAll('.thought-card')
              .style('cursor', 'grab')
              .style('transform', 'translate(0,0)')
              .style('position', 'absolute')
              .transition()
              .duration(400)
              .style('transform', function(d, i) {
                sel = d3.select(this);
                return 'translate(' + scatterX(i, sel) + 'px ,' + scatterY(i, sel) + 'px)'
            });
            ;
            var startY;
            canvas.selectAll('.thought-card')
            .selectAll('.thought-container').on(".drag", null)
            .transition()
            .duration(400)
            .style('transform', function(d,i){
              var prevElement = d3.select(this.previousElementSibling);
              if (prevElement.classed('thought-container')){
                prevHeight = prevElement.node().getBoundingClientRect().height;
                startY = prevHeight + startY;
                return 'translate(0px, ' + startY + 'px)';
              } else {
                startY = 30;
                return 'translate(0px,' + startY + 'px)';
              }
            })
            .on('end', function(d) {
                thoughtCard = d3.select(this.parentNode);
                thoughtCard.call(d3.drag().on("start", dragStart).on('drag', dragged).on('end', dragEnd));
                thoughtCard.classed('grouped', true)
            })
        };

// d3.selectAll('.thought-container').style('transform', 'translate(0px,0px)');
// d3.selectAll('.thought-container').transition(800).style('transform', 'translate(0px,0px)');




      drawThoughts();

      function mobileLayout(){
        $('.canvas').hide(300);
        $('.flat-layout-holder').show(300);
      }
        if(window.innerWidth >= 800) {
          splitThoughts();
        } else {
          mobileLayout();
        }
        $('.option.project').on('click',function(){
          if (!$(this).hasClass('active')){
            $('.pages').removeClass('active')
            $(this).addClass('active');
          }
          $('.views').show(300);
          $('.project-desc').fadeOut(300);
          $('.project-holder').fadeIn(300);
        });
        $('.option.context').on('click',function(){
          if (!$(this).hasClass('active')){
            $('.pages').removeClass('active')
            $(this).addClass('active');
          }
          $('.views').fadeOut(300);
          $('.project-holder').fadeOut(300);
          $('.project-desc').fadeIn(300);
        });
        $('.split-btn').on('click', function(e) {
            if (!$(this).hasClass('active')){
              if (!$(this).hasClass('active')){
                $('.layout').removeClass('active')
                $(this).addClass('active');
              }
              $('.flat-layout-holder').fadeOut(300);
              $('.canvas').fadeIn(300);
              splitThoughts();
            }
        })
        $('.sort-btn').on('click', function(e) {
            if (!$(this).hasClass('active')){
              if (!$(this).hasClass('active')){
                $('.layout').removeClass('active')
                $(this).addClass('active');
              }
              $('.flat-layout-holder').fadeOut(300);
              $('.canvas').fadeIn(300);
              groupThoughts();
            }
        })
        $('.flat-btn').on('click', function(e) {
            if (!$(this).hasClass('active')){
              if (!$(this).hasClass('active')){
                $('.layout').removeClass('active')
                $(this).addClass('active');
              }
              mobileLayout();
            }
        })

        tippy('.twitter-one', {
          content: '<img src="/projects/Lists/img/twitter-post-initial.PNG" width="500">',
          trigger: 'click',
          duration: 100
        })
        tippy('.twitter-two', {
          content: '<img src="/projects/Lists/img/twitter-post-two.PNG" width="500">',
          trigger: 'click',
          duration: 100
        })
        tippy('.code-photo-one', {
          content: '<img src="/projects/Lists/img/code-photo-one.png" width="500">',
          trigger: 'click',
          duration: 100
        })
        tippy('.code-photo-two', {
          content: '<img src="/projects/Lists/img/code-photo-two.png" width="500">',
          trigger: 'click',
          duration: 100
        })
        tippy('.code-photo-three', {
          content: '<img src="/projects/Lists/img/code-photo-three.png" width="500">',
          trigger: 'click',
          duration: 100
        })
    });
})
