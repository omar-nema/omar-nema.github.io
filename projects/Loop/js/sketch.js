document.addEventListener('DOMContentLoaded', function() {

  //DECLARE AND LOAD ASSETS
  var canvas = d3.select('.canvas');
  var tooltip = d3.select('.tooltip');
  var numSections;
  var numRows;
  // axiosLocal = axios.create({baseURL: 'http://localhost:3000'});
  // test = axiosLocal.get('/processedText');
  // test.then(res => {console.log(res); drawText(res.data[0])})

  d3.select('.zoom-btn').on('click', function(e){
    d3.select('.canvas')
      .transition()
      .duration(300)
      .style('transform', 'scale(1)')
      ;
    d3.select('.canvas').classed('zoomed', false);
    d3.select(this).classed('enabled', false);
    d3.selectAll('.fragment.phrase').on('click', null);
    tooltip.classed('active', false)
  })


  function displayTooltip(){
      canvas.selectAll('.fragment.phrase').on('click', function(d){
        if (canvas.classed('zoomed')){
          tooltip.select('.text-holder').html(function(){return d.surroundingHtml[d.order-1]});
          tooltip.select('.select-holder').html(function(){return d.circleHtml});
          rect = tooltip.node().getBoundingClientRect();
          console.log(rect)


          tooltip.style('left', d3.event.clientX - (rect.width/2) + 'px').style('top', d3.event.clientY - (rect.height/2)+ 'px');

          //upperbounds

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
      d3.select('.zoom-btn').classed('enabled', true)
      d3.select(this).classed('zoomed', true);
      displayTooltip();
    } else {
      tooltip.classed('active', false)
    }
  }

  var promises = [d3.text('./data/2018 notes.txt'), d3.text('./data/phrases.txt')]
  Promise.all(promises).then(function(values) {
    inputRaw = values[0];
    //startSketch(inputRaw, numSections);
    if (window.innerWidth < 600) {
      numSections = 40;
      numRows = 20;
    } else if  (window.innerWidth >= 600 && window.innerWidth < 1000){
      numSections = 12;
      numRows = 3;
    } else if  (window.innerWidth > 1000 && window.innerWidth <= 1500){
      numSections = 16;
      numRows = 4;
    }
    else if  (window.innerWidth > 1500){
      numSections = 8;
      numRows = 2;
    }
    drawText(startSketch(inputRaw, numSections)[0]);
    d3.select('.canvas').on('click', zoomed)

  });


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
      .style('border', function(d,i){
        if (d.order > 0){
           return '0.1px solid rgb(74, 74, 74)';
        }
      })
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

      canvas.selectAll('.textHolder')
      .transition()
      .duration(1000)
      .style('opacity', 1);
  }
}, false);




//use async.each() to parse in parallel
//1) function to parse phrases
//let phraseLibrary = ['omar is', 'big cat']
//2) read text and create this
//go throug
//phrases parsed =
//{phrase: x, index: y, order: 2}
//phrase lookup within dom
//animate: go through phrases.
