// function scatterPosition(num){
//   if (num < positions.length){
//     var posPct = positions[num];
//     return posPct;
//   } else {
//     pos1 = Math.min(Math.max(Math.floor(Math.random() * 101), 25), 75);
//     var posPct1 = String(pos1) + '%';
//     pos2 = Math.min(Math.max(Math.floor(Math.random() * 101), 25), 75);
//     var posPct2 = String(pos2) + '%';
//     return [posPct1, posPct2];
//   }
// }

// canvas.selectAll('.thought-card').selectAll('.thought-container-background').data(['dummy']).enter().append('rect').attr('class', 'thought-container-background');


// .attr('width', function(d) {
//     return d3.select(this.parentNode).node().getBBox().width;
// })
// .attr('height', function(d) {
//     return d3.select(this.parentNode).node().getBBox().height;
// })
// .attr('x', function(d) {
//     return d3.select(this.parentNode).node().getBBox().x;
// })
// .attr('y', function(d) {
//     return d3.select(this.parentNode).node().getBBox().y;
// })


//tooltip.transition().style('opacity', .9);
// tooltip.select('.tip-text.context')
//   .html(function(){
//     return  '"...' + d.context +  '..."';
//   });
//   tooltip.select('.tip-text.pattern')
//     .html(function(){
//       return  d.pattern;
//     });
//


  // .style("left", (d3.event.x - 70) + "px")
  // .style("top", (d3.event.y + 15) + "px");


  // if ($(e).hasClass('thought-container')){
  //   var thoughtg = d3.select(e);
  //   thoughtg.each(function(d){
  //     d3.selectAll('.thought-container').transition(100).attr('opacity', function(x){
  //       if (x.thought != d.thought){
  //         return 0.5;
  //       }
  //     })
  //
  //   });
  // }
