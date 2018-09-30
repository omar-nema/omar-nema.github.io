




var cards = []

var listitem = [
  "adulthood",
  "third-person.",
  "grabbing, clutching, current routine, naming it: you.",
  "but that will mess up my hair.",
  "walking swiftly, not running.",
  "okay with: standing in long lines.",
  "it's in the details.",
  "the details.",
  "having: a favorite quote.",
  "a favorite something.",
  "but it was so obvious all these years.",
  "how much should I tip",
  "social currency"
]


cards.push(listitem);
var cardWidth = 400;
var positions = [['2%','9%'], ['7%','50%'], ['26%', '23%'], ['56%', '-2%'], ['50%', '40%'], ['39%', '69%']]

function scatterPosition(num){
  console.log(num, positions.length)
  if (num < positions.length){
    var posPct = positions[num];
    return posPct;
  } else {
    console.log('okay')
    pos1 = Math.min(Math.max(Math.floor(Math.random() * 101), 25), 75);
    var posPct1 = String(pos1) + '%';
    pos2 = Math.min(Math.max(Math.floor(Math.random() * 101), 25), 75);
    var posPct2 = String(pos2) + '%';
    console.log(posPct1, posPct2);
    return [posPct1, posPct2];
  }

}


function createCard(list, num){
  spaceLessName = list.name.replace(/ /g, '');
  var container = "<div class='thought-card " + spaceLessName+ "'>"
  var header = "<div class='thought-header'>" + list.name + '</div>'
  var listhtml = '<div class="thought-content">';
  list['values'].forEach(function(d){
    listItem = '<div class="thought">' + d + '</div>'
    listhtml = listhtml + listItem;
  });
  listhtml = listhtml + '</div>';
  container = container + header + listhtml + '</div>';
  $('body').append(container);
  var pos = scatterPosition(num)
  $('.' + spaceLessName).css({
    'left': pos[0],
    'top': pos[1],
    'width': cardWidth
  });
}


var currZ = 1;

$(function() {
    $.getJSON("/projects/Lists/lists.json", function(lists) {
      lists.forEach(function(e, i){
        createCard(e, i);
        $('.thought-card').draggable({
          start: function(e){
            $(this).css('z-index', currZ);
            currZ = currZ + 1;
          }
        });
      })
    });

  }
)


//create generative thought-card


//https://shopify.github.io/draggable/examples/


//have these words animate?









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
