document.addEventListener('DOMContentLoaded', function() {

  //DECLARE AND LOAD ASSETS
  var canvas = d3.select('.canvas');
  var tooltip = d3.select('.tooltip');
  var numSections;
  var numRows;
  var toastInd = false;
  var alreadyZoomed = false;

  var promises = [d3.text('./data/curatednotes.txt'), d3.json('./data/phrases.json')]
  Promise.all(promises).then(function(values) {
    inputRaw = values[0];
    phrases = values[1];
    console.log(phrases)
    //startSketch(inputRaw, numSections);
    if (window.innerWidth < 600) {
      numSections = 20;
      numRows = 20;
    } else if  (window.innerWidth >= 600 && window.innerWidth < 1000){
      numSections = 12;
      numRows = 3;
    } else if  (window.innerWidth > 1000 && window.innerWidth <= 1500){
      numSections = 24;
      numRows = 8;
    }
    else if  (window.innerWidth > 1500){
      numSections = 8;
      numRows = 2;
    }
    indexedArr = getTextIndices(inputRaw, phrases, numSections);
    console.log(indexedArr)
    drawText(indexedArr);
    d3.select('.canvas').on('click', zoomed);
  });

  function hideWithTransition(sel){
    sel.style('display', 'none').style('opacity', '0')
  }
  function showWithTransition(sel){
    sel.style('display', 'block').transition().duration(300).style('opacity', '1')
  }
  d3.select('.header .about').on('click', function(){
    if (canvas.classed('desc')){
      canvas.classed('desc', false);
      hideWithTransition(d3.select('.project-desc'));
      showWithTransition(canvas);
      d3.select('.about').text('Tell me more!')
      ;
    } else {
      canvas.classed('desc', true);
      hideWithTransition(canvas);
      showWithTransition(d3.select('.project-desc'))
      d3.select('.about').text('Back to Project')
    }
  })
  d3.select('.zoom-btn').on('click', function(e){
    d3.select('.canvas')
      .transition()
      .duration(300)
      .style('transform', 'scale(1)')
      ;
    d3.select('.canvas').classed('zoomed', false);
    d3.select(this).classed('enabled', false);
    d3.selectAll('.fragment.phrase').on('click', null);
    d3.select('.zoom-instruction').classed('enabled', false);
    tooltip.classed('active', false)
  })
  function displayTooltip(){
      canvas.selectAll('.fragment.phrase').on('click', function(d){
        if (canvas.classed('zoomed')){
          tooltip.select('.text-holder').html(function(){return d.surroundingHtml[d.order-1]});
          tooltip.select('.select-holder').html(function(){return d.circleHtml});
          rect = tooltip.node().getBoundingClientRect();
          d3.select('.zoom-instruction').classed('enabled', false);
          d3.select('.zoom-btn').classed('enabled', true);
          tooltipX = Math.min(d3.event.clientX, window.innerWidth - rect.width - 10);
          tooltipY = Math.min(d3.event.clientY, window.innerHeight - rect.height - 10)
          tooltip.style('left', tooltipX + 'px').style('top', tooltipY + 'px');
          tooltip.classed('active', true);
          tooltip.selectAll('.tip-select').on('click', function(z,i){
            tooltip.selectAll('.tip-select').classed('selected', false);
            d3.select(this).classed('selected', true);
            tooltip.select('.text-holder').html(function(){return d.surroundingHtml[i]})
          })
          var selectString = '.tip-select:nth-child(' + d.order + ')';
          tooltip.selectAll(selectString).classed('selected', true);
          d3.event.stopPropagation();
        }
    })
  }
  function zoomed(e) {
    canvasNode = d3.select(this).node();
    if (!d3.select(this).classed('zoomed')){ //ZOOM IN
      xTrans = Number.parseFloat(d3.event.clientX) - canvasNode.offsetLeft;
      yTrans = Number.parseFloat(d3.event.clientY) + d3.select('.canvas-holder').node().scrollTop;
      d3.select(this)
      .style('transform-origin', xTrans + 'px ' + yTrans + 'px 0')
      .transition()
      .duration(300)
      .style('transform', 'scale(3)')
      d3.select(this).classed('zoomed', true);
      displayTooltip();
      if (!alreadyZoomed){
          d3.select('.zoom-instruction').classed('enabled', true);
      } else {
        d3.select('.zoom-btn').classed('enabled', true)
      }
      alreadyZoomed = true;
    } else {
      tooltip.classed('active', false)
    }
  }

  function drawText(textIndexed){

    for (i=0; i < numSections; i++){
      canvas.append('div').
      attr('class', 'textHolder' + ' num-' + i)
      .style('width', (90/(numSections/numRows)).toString() + '%')
      .style('clear', function(d, z){
          if (i % (numSections/numRows) == 0){
            return 'both';
          }
      })
    }
    canvas.append('div').attr('class', 'clearme').style('clear', 'both')


    nestedBySection = d3.nest().key(function(d){return d.sectionNum}).entries(textIndexed);
    textHolder=  canvas.selectAll('.textHolder').data(nestedBySection);
    textHolder.enter().append('div')
      .attr('class', 'textHolder' + ' num-' + i);

    // d3.select('.textHolder.num-'+(numSections/numRows)).style('clear', 'both')

    fragments = textHolder.selectAll('.fragment').data(function(d){return d.values});
    fragments.enter().append('div')
      .attr('class', 'fragment')
      .attr('order', function(d){
        return d.order;
      })
      .attr('phraseId', function(d){
        return d.phraseId;
      })
      .text(function(d){
        return d.phrase;
      })
      .style('background', function(d,i){
        if (d.order > 0){
          return d.color;
        }
      })
      // .style('border', function(d,i){
      //   if (d.order > 0){
      //      return '0.1px solid rgb(74, 74, 74)';
      //   }
      // })
      .style('color', function(d,i){
        if (d.order > 0){
          return 'white'
        } else {
          return 'black'
        }
      })
      .classed('phrase', function(d){
        if (d.order > 0){
          return true;
        }
      })
      ;

      var colors = ['#e6261f', '#f7d038', '#49da9a', '#49da9a', '#d23be7', '#d23be7' ];
      function getRandColor(){
        randIndex = Math.round(Math.random()*colors.length-1);
        return colors [randIndex];
      }

      d3.select('.simple-loader').transition().style('opacity', 0).style('color', '#2f3132');

      canvas
      // .transition()
      // .duration(2000)
      .style('opacity', 1);


  }
}, false);
