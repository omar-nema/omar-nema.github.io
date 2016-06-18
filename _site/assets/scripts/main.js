
//WHAT METADATA DO PROJECTS AND CARD NEED?

//var createCategories


//
//var generateCategory = function(){
//    
//    
//}



var generateProject = function(name, position, width, offset, numCards, cardData){
    var height = .78*parseInt(width);
    var $container = $('.content');
    var stringtoadd = '<div class="cardholder '+ 
    name + '"> <div class="card1"> <p>' + name + '</p></div><div class="card2"></div><div class="card3"></div></div>' ;
    
    $container.append(stringtoadd);
    var $project = $container.find('.cardholder.' + name);
    
    $project.css({'top': position[0] + '%', 'left': position[1] + '%', 'position': 'absolute', 'width': width +'px', 'height': height + 'px', 'z-index': '-5'});
    
    generateCards($project, numCards);
    
};

var generateCards = function(project, numCards){
    
    //each card will hold attributes
    for (i=0; i<numCards ; i++){
        cardNum = i+1;

        var opacity = [1, .43, .2];
        var translateX = 25-7*i;
        var translateY =  25-7*i;
        var zindex = numCards - i;
        project.find('.card' + cardNum).css(
            {
            'z-index': zindex,
            'background-color': '#FF0000',
            'width': '80%',
            'height': '80%',
            'opacity': opacity[i],
            'position': 'absolute',
            'transform': 'translateX(' + translateX+  '%) translateY(' + translateY+ '%)',
            'border-radius': '9%'
            }
        ); 
    };
      
};


//card data:

//title:
//image url
//synposis
//tags

//name, position, width, offset, numCards, cardData
//store data in me

var thesisData = ['thesis', 'n/a', 'modeling spinal cord stimulation in monkeys', 'neuro-engineering, computational model, coding, finite element method']
//
//generateProject('o', [15, 5], 300, 3, thesisData);
//




///*cards as percentage of holder works*/
//.cardholder.datavis {
//    top: 15%;
//    left: 5%;
//    position: absolute;
//    width: 300px;
//    height: 235px;
//    z-index: 100;
///*    background-color: blue;*/
//}
//

//
//.card1 p {
//    position: absolute;
//    top: 80%;
//    left: 40%;
//    color: white;
//    z-index: 1;
//}
//
//.card2 {
//    z-index: 3;
//    background-color: #FF0000;
//    width: 80%;
//    height: 80%;
//    border-radius: 9%; 
//    opacity: .4;
//    position: absolute;
//    transform: translateX(18%) translateY(18%); 
//}
//
//.card3 {
//    z-index: 4;
//    background-color: #FF0000;
//    width: 80%;
//    height: 80%;
//    border-radius: 9%; 
//    opacity: .2;
//    position: absolute;
//    transform: translateX(11%) translateY(11%); 
//}