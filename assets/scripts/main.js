
var breakpoint1 = 1000;
var breakpointMid = 850;
var breakpoint2 = 750;
var numCards = 3;
//percentage of cardholder width to pass before switching cards
var fractionIncrement = .1;

//need to rethink fractionIncrement
//

var hoverStyle = {
    'background-color': 'yellow'
};
//reverStyle and setStyle functions

//var initialLoad = true;

var generateLayout = function(){

    var width = $(window).width();
    if (width >= breakpoint1){
        $('.content').attr('class', 'content scatter-large');
    }
    else if (width < breakpoint2){
        $('.content').attr('class', 'content grid');
    }
    else if (width >= breakpointMid && width < breakpoint1){
        $('.content').attr('class', 'content scatter-medium');        
    }
    else if (width < breakpointMid && width < breakpoint1){
        $('.content').attr('class', 'content scatter-small');          
    };
};

    var getCardInSequence = function(card, direction){
        var nextOrder = parseInt(card.attr('order')) - Math.sign(parseInt(direction));
        var title = card.attr('title');
    
        if (nextOrder > 0 && nextOrder < 4){
            var nextCard = $('.'+ title).find("div[order=" + nextOrder + "]");
            return nextCard;          
        }
        else {
            return card;
        };
    };


$(window).resize(function(event){
    generateLayout();
});

$(document).ready(function(event){
    //run things when layout gen is done?
    $(window).load(function(){   
        generateLayout();     
        $('.content').fadeIn(300, function(){
            //all functions dependent on intial CSS property load below
        });    
    });
    
  
    
    $('.about-button').click(function(event){
        $('.about-page').slideDown(800); 
        $('.' + $('.content').attr('class').replace(' ', '.')).css('display', 'none');        
    });
    
    
        
    var currCard;  
        
    $('.cardholder').mouseenter(function(event){
            console.log('ENTER');
            var prevX;
            var prevMove, currMove;
            var next;
            var initialX;
            var prevDirection;
            var currHolder = $(this);
        
            $('.card').one('mousemove', function(event2){            //MAKE SURE THIS RUNS JUST ONCE!!
 
                $('.card').unbind('mousemove');             
                initialX = parseFloat(event.pageX) - parseFloat($(currHolder).offset().left);
                currCard = $(this); //enter selects child
//                //style curr card here?
                
                $(currHolder).mousemove(function(event){   
//                    var currCardClass = 'card' + currCard.attr('order') + 'select';
                    console.log(currCard.attr('default'));
                    currCard.removeClass(currCard.attr('default'));
                    currCard.addClass('card-selector');                    
                    
                    var currX = parseFloat(event.pageX) - parseFloat($(this).offset().left);  
                    var currDirection = parseFloat(currX - prevX); 
                    //update initialX if direction switched
                    if (prevX && prevDirection){   
                        var directionSwitch = Math.sign(currDirection)*Math.sign(prevDirection)==-1;
                        if (directionSwitch){
                            initialX = prevX;
                            console.log('switchup!');
                        };                         
                    };
                    //detect if mouse movement has passed critical threshold to flip cards
                    var currMove = (currX-initialX)/parseFloat($(this).width());
                    var criticalMove = Math.abs(currMove) > fractionIncrement;    
                    if (criticalMove){
                        initialX = currX;      
                        //new card coming in
                        if (currCard !== getCardInSequence(currCard, currDirection) ){
                            currCard.removeClass('card-selector');
                            currCard.addClass(currCard.attr('default'));
                            currCard = getCardInSequence(currCard, currDirection);
                            currCard.removeClass(currCard.attr('default'));
                            currCard.addClass('card-selector');
                        }                                    
                    };
                    if (prevX) {
                        prevDirection = parseFloat(currDirection);
                    };
                    prevX = currX;
                    prevMove = currMove;
                });    
                
            });
        }).mouseleave(function(event){ //stop listening
            console.log('EXIT');
            if (currCard){
                currCard.removeClass('card-selector');
                currCard.addClass(currCard.attr('default'));
            }
            currCard = null;
            $('.cardholder').unbind('mousemove');
            $('.card').unbind('mouseenter');
        });
    
});

    

    //edge cases: round2 (not that imp?), card before cardholder ()
    //jumps over gap and enters cardholder within card - solved w mousemove but sometimes runs 2 times in parallel
