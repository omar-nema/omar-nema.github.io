document.addEventListener('DOMContentLoaded', function() {

  //DECLARE AND LOAD ASSETS
  var canvas = d3.select('.canvas');
  var numSections;
  var numRows;
  // axiosLocal = axios.create({baseURL: 'http://localhost:3000'});
  // test = axiosLocal.get('/processedText');
  // test.then(res => {console.log(res); drawText(res.data[0])})

  var promises = [d3.text('./data/2018 notes.txt'), d3.text('./data/phrases.txt')]
  Promise.all(promises).then(function(values) {
    inputRaw = values[0];
    //startSketch(inputRaw, numSections);
    if (window.innerWidth < 600) {
      numSections = 40;
      numRows = 20;
    } else if  (window.innerWidth >= 600 && window.innerWidth < 1000){
      numSections = 12;
      numRows = 6;
    } else if  (window.innerWidth > 1000 && window.innerWidth <= 1500){
      numSections = 16;
      numRows = 4;
    }
    else if  (window.innerWidth > 1500){
      numSections = 8;
      numRows = 2;
    }
    drawText(startSketch(inputRaw, numSections)[0]);

    // panzoom(document.querySelector('.canvas'), {
    //     zoomDoubleClickSpeed: 4,
    //     minZoom: 1,
    //     maxZoom: 3,
    //
    // });



    d3.select('.canvas').on('click', zoomed)

    //.call(d3.zoom().on('zoom', zoomed))


    function zoomed(e) {
      canvasNode = d3.select(this).node();
      if (d3.select(this).classed('zoomed')){
        d3.select(this)
        .transition()
        .duration(300)
        .style('transform', 'scale(1)')
        ;
        d3.select(this).classed('zoomed', false);
      } else {
        d3.select(this).classed('zoomed', true);
        xTrans = Number.parseFloat(d3.event.clientX) - canvasNode.offsetLeft;
        yTrans = Number.parseFloat(d3.event.clientY) - canvasNode.offsetTop;
        d3.select(this)
        .style('transform-origin', xTrans + 'px ' + yTrans + 'px 0')
        .transition()
        .duration(300)
        .style('transform', 'scale(4)')
        ;
      }
  }

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
      ;

      var colors = ['#e6261f', '#f7d038', '#49da9a', '#49da9a', '#d23be7', '#d23be7' ];
      function getRandColor(){
        randIndex = Math.round(Math.random()*colors.length-1);
        return colors [randIndex];
      }

      canvas.selectAll('.fragment')
      .transition()
      .style('opacity', 1)
      .style('color', function(d,i){
        if (d.order > 0){
          return 'white'
        } else {
          return 'black'
        }
      })

      // .tween("text", function(d) {
      //       var newText = d.phrase;
      //       var textLength = newText.length;
      //       return function (t) {
      //           this.textContent = newText.substr(0,
      //                              Math.round( t * textLength) );
      //       };
      //   })
      // .delay(function(d,i){
      //   return d.delay;
      // })
      // .duration(function(d, i){
      //   return d.duration
      // })

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
