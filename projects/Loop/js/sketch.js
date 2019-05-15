document.addEventListener('DOMContentLoaded', function() {

  //DECLARE AND LOAD ASSETS
  var canvas = d3.select('.canvas');
  var numSections = 40;
  var numRows = 4;
  // axiosLocal = axios.create({baseURL: 'http://localhost:3000'});
  // test = axiosLocal.get('/processedText');
  // test.then(res => {console.log(res); drawText(res.data[0])})

  var promises = [d3.text('./data/2018 notes.txt'), d3.text('./data/phrases.txt')]
  Promise.all(promises).then(function(values) {
    inputRaw = values[0];
    drawText(startSketch(inputRaw, numSections)[0]);
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


      var colors = ['#e6261f', '#f7d038', '#49da9a', '#49da9a', '#d23be7', '#d23be7' ];
      function getRandColor(){
        randIndex = Math.round(Math.random()*colors.length-1);
        return colors [randIndex];
      }

      canvas.selectAll('.fragment')
      .transition()
      .style('opacity', .9)
      .tween("text", function(d) {
            var newText = d.phrase;
            var textLength = newText.length;
            return function (t) {
                this.textContent = newText.substr(0,
                                   Math.round( t * textLength) );
            };
        })
      .delay(function(d,i){
        return d.delay*10;
      })
      .duration(function(d, i){
        return (d.phrase.length)*10
      })
      .each(function(d,i){
        if (d.order > 1){
          // FIRST HIGHLIGHT THEN REMOVE
          sel = canvas.select('[phraseid="' + d.phraseId + '"]' + '[order="' + (d.order-1) + '"]')['_groups'][0][0];
          d3.select(sel)
            .attr('class', 'fragment hidden')
            .transition(200)
            .style('background', 'black')
            .style('opacity', 1)
            .style('color', 'black')
          ;
        }
      })


    // fragments = canvas.selectAll('.fragment').data(textIndexed, function(d){return d.indices[0]});
    //
    // fragments.enter().append('div')
    //   .attr('class', 'fragment')
    //   .attr('order', function(d){
    //     return d.order;
    //   })
    //   .attr('phraseId', function(d){
    //     return d.phraseId;
    //   })
    //
    // canvas.selectAll('.fragment')
    // .transition()
    // .style('opacity', 1)
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
    //   return (d.phrase.length)
    // })
    // .each(function(d,i){
    //   if (d.order > 1){
    //     // FIRST HIGHLIGHT THEN REMOVE
    //     sel = canvas.select('[phraseid="' + d.phraseId + '"]' + '[order="' + (d.order-1) + '"]')['_groups'][0][0];
    //     d3.select(sel)
    //       .attr('class', 'fragment hidden')
    //       .transition(200)
    //       .style('border', '1px solid #9e9ef3')
    //       .style('background', '#ededff')
    //       .transition(200)
    //       .delay(400)
    //       .style('background', 'rgb(99, 99, 225)')
    //       .style('color', 'white')
    //     ;
    //   }
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
