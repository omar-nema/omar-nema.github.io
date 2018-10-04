
//
//
// function createCard(list, num){
//   spaceLessName = list.name.replace(/ /g, '');
//   var container = "<div class='thought-card " + spaceLessName+ "'>"
//   var header = "<div class='thought-header'>" + list.name + '</div>'
//   var listhtml = '<div class="thought-content">';
//   list['values'].forEach(function(d){
//     listItem = '<div class="thought">' + d + '</div>'
//     listhtml = listhtml + listItem;
//   });
//   listhtml = listhtml + '</div>';
//   container = container + header + listhtml + '</div>';
//   $('body').append(container);
//   var pos = scatterPosition(num)
//   $('.' + spaceLessName).css({
//     'left': pos[0],
//     'top': pos[1],
//     'width': cardWidth
//   });
//   list['values'].forEach(function(d){
//     var header = "<div class='thought-header'>" + d.pattern + '</div>'
//     var listhtml = '<div class="thought-content">';
//     listItem = '<div class="thought">' + d + '</div>'
//     listhtml = listhtml + listItem;
//     listhtml = listhtml + '</div>';
//   });
// }

function cardHTML(d){
  var header = "<div class='thought-header'>" + d.pattern + '</div>'
  var listhtml = '<div class="thought-content">';
  listItem = '<div class="thought">' + d.thought + '</div>';
  listhtml = listhtml + listItem + '</div>';
  return header + listhtml;
}
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

var cardWidth = 400;
var positions = [['2%','9%'], ['7%','50%'], ['26%', '23%'], ['56%', '-2%'], ['50%', '40%'], ['39%', '69%']]
var positions = [[.02, .09],[.07, .5],[.26, .23],[.56, -.02],[.5, .4],[.39, .69]]

var width = $('svg.canvas').width();

function scatterPosition(num, orientation){
  if (num < positions.length){
    if (orientation == 'left'){
      posPct = positions[num][0]*width
    } else {
      posPct = positions[num][1]*width
    }
    return posPct;
  } else {
    return (Math.random()*.6 + .25)*width
  }
}
var currZ = 1;
$(function() {
    var thoughts = d3.csv('projects/Lists/thoughts.csv', function(d){
      return {
        thought: d.thought,
        pattern: d.pattern,
        context: d.context
      }
    }).then(function(thoughtData){
        var lists = d3.nest().key(function(d){return d.pattern}).entries(thoughtData);
        var canvas = d3.select('body').select('svg.canvas');
        var thoughtNest = d3.nest().key(function(d){return d.thought}).entries(thoughtData);
        var thoughtCard = canvas.selectAll('.thought-card').data(thoughtNest, function(d){return d.values[0].pattern})
        //this is where we do the update
        thoughtCard = thoughtCard.enter().append('g').attr('class', 'thought-card')
          // .attr('transform', function(d, i))
          // .attr('transform', function(d, i){
          //   return 'translate(' + scatterPosition(i) + ',' + scatterPosition(i) + ')'
          // })
          // .attr('x', function(d, i){
          //   return scatterPosition(i);
          // })
          // .attr('y', function(d, i){
          //   return scatterPosition(i);
          // })
          // .attr('width', 200)
          // .attr('height', 2000)
          .append('text')
            // .attr('width', 100)
            // .attr('height', 50)
            .text(function(d){
              return d.key
            })
            .attr('fill', 'white')
            ;




          ;

          // .style('width', 50)
          // .style('height', 50)
          // .attr('fill', 'white')
          // .style('cx', function(d, i){
          //   return scatterPosition(i)
          // })
          // .style('cy', function(d, i){
          //   return scatterPosition(i)
          // })
          // .style('max-width', 400)
          //.append('div').attr('class', 'thought-header').text(function(d){return d.values[0].pattern})
        ;

        // thoughtCard.selectAll('.thought').data(function(d){return d.values}).enter().append('div').attr('class', 'thought')
        //   .text(function(d){return d.thought})
        // ;
        // $('.thought-card').draggable({
        //       start: function(e){
        //       $(this).css('z-index', currZ);
        //       currZ = currZ + 1;
        //     }
        //     });

        console.log(lists, thoughtNest)

        function sortList(listInput){
          var listCard = d3.selectAll('.thought-card').data(listInput, function(d){return d.key});
          listCard.exit().transition().remove()
          listCard = listCard.enter().append('div').attr('class', 'thought-card')
            .style('left', function(d, i){
              return scatterPosition(i)
            })
            .style('top', function(d, i){
              return scatterPosition(i)
            })
            .style('max-width', 400)
            .append('div').attr('class', 'thought-header').text(function(d){return d.key});

            listCard.selectAll('.thought').data(function(d){return d.values}).enter().append('div').attr('class', 'thought')
              .text(function(d){return d.thought})

              $('.thought-card').draggable({
                    start: function(e){
                    $(this).css('z-index', currZ);
                    currZ = currZ + 1;
                  }
                  });
        }

        $('.sort-btn').on('click', function(e){
          console.log(lists)
          sortList(lists);
        })









    });




    // $.getJSON("/projects/Lists/lists.json", function(lists) {
    //   lists.forEach(function(e, i){
    //     createCard(e, i);
    //     $('.thought-card').draggable({
    //       start: function(e){
    //       $(this).css('z-index', currZ);
    //       currZ = currZ + 1;
    //     }
    //     });
    //   })
    // });

  }
)


//create generative thought-card


//https://shopify.github.io/draggable/examples/


//have these words animate?








//     d3.dsv(",", "projects/Lists/thoughts.csv", function(d) {
//   return {
//     year: new Date(+d.Year, 0, 1), // convert "Year" column to Date
//     make: d.Make,
//     model: d.Model,
//     length: +d.Length // convert "Length" column to number
//   };
// }).then(function(data) {
//   console.log(data);
// });


// tippy.setDefaults({
//   arrow: false,
//   multiple: false,
//   delay: 50,
//   allowHTML: true,
//   duration: 200,
//   interactive: true,
//   livePlacement: false,
//   sticky: true,
//   trigger: 'click',
//
// })




 // d3.selectAll('thought-card').selectAll('.thought').data(function(d){console.log(d.thought);return d}).enter()
 //          .append('div').attr('class', 'thought')

              // .selectAll('.thought').data(function(d, i){console.log(d); return d})
        // var smallCard = canvas.selectAll('.thought-card').data(thoughtData, function(d){return d.pattern});
        //  smallCard.enter().append('div').attr('class', 'thought-card')
        //   // .html(function(d){
        //   //   return cardHTML(d)
        //   // })
        //   .style('left', function(d, i){
        //     return scatterPosition(i)
        //   })
        //   .style('top', function(d, i){
        //     return scatterPosition(i)
        //   })
        //   .style('max-width', 400)
        // ;
        //
        //
        // smallCard
        //
        // var thought = canvas.selectAll('.thought-card').selectAll('.thought').data(function(d){return d.thought});
        // thought.enter().append('div').attr('class', 'thought')
        //
        // console.log(lists);
        // var exit = d3.selectAll('.thought-card').data(thoughtData, function(d){return d.pattern});
        // exit.exit().remove();

      //  var exit = d3.selectAll('.thought-card').data(lists, function(d){console.log(d.key);return d.key});
      //  exit.enter().append('div').attr('class', 'thought-card')

        // var exit = d3.selectAll('.thought-card').data(lists, function(d){return d.key});
        // exit.exit().remove();

        //
        // console.log(smallCard.data())
        //
        // var thought = d3.selectAll('.thought-card');
        // // ;.data(function(d){console.log(d)});
        // d3.selectAll('.thought-card').enter().append('div').attr('class', 'test');

        // append('div').attr('class', 'test')
        //   .data(thoughtData,function(d, i){console.log(d, i) ; return d})



//
//
// <!-- <div class="thought-card">
//   <div class="thought-header">
//     adulthood
//   </div>
//   <div class="thought-content">
//     <div>
//       third-person.
//     </div>
//     <div>
//       but that will mess up my hair.
//     </div>
//     <div>
//       walking swiftly, not running.
//     </div>
//     <div>
//       okay with: standing in long lines.
//     </div>
//     <div>
//       it's in the details.
//     </div>
//     <div>
//       the details.
//     </div>
//     <div>
//       clutching current routine, naming it: you.
//     </div>
//     <div>
//       having: a favorite quote.
//     </div>
//     <div>
//       a favorite something.
//     </div>
//     <div>
//       how much should I tip.
//     </div>
//     <div>
//       social currency
//     </div>
//   </div>
// </div> -->
//
// <!-- clarity in thoughts does not exist
// beyond the narrative -->
