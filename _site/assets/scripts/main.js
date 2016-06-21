
var breakpoint1 = 1000;
var breakpointMid = 850;
var breakpoint2 = 750;
var numCards = 3;
//percentage of cardholder width to pass before switching cards
var fractionIncrement = .15;

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
    });
        

    

    //edge cases: round2 (not that imp?), card before cardholder ()
    //jumps over gap and enters cardholder within card - solved w mousemove but sometimes runs 2 times in parallel

    $('.cardholder').mouseenter(function(event){
            console.log('ENTER');
            var prevX;
            var currCard;
            var prevMove, currMove;
            var next;
            var initialX;
            var prevDirection;
            var currHolder = $(this);
            //we keep track of increments of .05
            //send the X's to a function
            $('.card').one('mousemove', function(event2){
                $('.card').unbind('mousemove');             
                initialX = parseFloat(event.pageX) - parseFloat($(currHolder).offset().left);
                currCard = $(this); //enter selects child
                $(currHolder).mousemove(function(event){               
                    var currX = parseFloat(event.pageX) - parseFloat($(this).offset().left);  
                    var currDirection = parseFloat(currX - prevX);  
                    if (prevX && prevDirection){   
                            var directionSwitch = Math.sign(currDirection)*Math.sign(prevDirection)==-1;
                            if (directionSwitch){
                                initialX = prevX;
                            };                         
                    };
                    var currMove = (currX-initialX)/parseFloat($(this).width());
                    var criticalMove = Math.abs(currMove) > fractionIncrement;    
                    if (criticalMove){
                      initialX = currX;  
                        console.log('GOT IT');
                    };
//                    console.log(prevMove, currMove);
                     
//                    if (currMove > 0 && criticalMove){ //moving right
////                        console.log('right critical');
//                    }
//                    else if (currMove < 0 && criticalMove){ //moving left
////                        console.log('left critical');                        
//                    };
                    
                    if (prevX) {
                        prevDirection = parseFloat(currDirection);
                    };
                    prevX = currX;
                    prevMove = currMove;
         

                });    
            });///card

   
        }).mouseleave(function(event){ //stop listening
            console.log('EXIT');
            currCard = null;
            $('.cardholder').unbind('mousemove');
            $('.card').unbind('mouseenter');
        });
    
});


//                        if (Math.sign(currDirection)*Math.sign(prevDirection)==1)
//                        {
//                            directionSwitch = true;
//                            initialX = prevX;
////                            console.log('directionswitch', directionSwitch);
//                        };   
                        
//                        currCard.css('background-color', 'yellow');
//                        if (currX > prevX){
//    //                        getCardInSequence(currCard, 1)
//                            currMovingRight = true;
//                        }
//                        else if (currX < prevX){
//    //                        getCardInSequence(currCard, -1)                    
//                            currMovingRight = false;   
//                        };        





//    var getCardInSequence = function(card, next){
//        
//        var order = parseInt(card.attr('order'));
//        var title = card.attr('title');
//        var nextCard;
//        //reached end of stack
//        if ( (order == 3 && next==-1) || (order == 1 && next==1)  ){
////           return null;
//        }
//        else {
//            var ordernext = parseInt(order) - parseInt(next);
//            nextCard = $('.'+ title).find("div[order=" + ordernext + "]");
////            currCard.css('background-color', 'blue');
//            currCard = nextCard;
//        };
//    };
//    



//    
//    $('.cardholder').mouseover(function(event){
//           
//        $('.cardholder').mousemove(function(event){
//            var newX = event.pageX - $(this).offset().left;
//            var newY = event.pageY - $(this).offset().top;
//            if (!currX){
//                currX = newX;
//            }
//            if (currCard){
//                currCard.css('background-color', 'yellow');
//                if (newX > currX){
//                    getCardInSequence(currCard, 1)
//                    movingRight = true;
//                    movingLeft = false;
//                }
//                else if (newX < currX){
//                    getCardInSequence(currCard, -1)                    
//                    movingRight = false;
//                    movingLeft = true;       
//                }; 
//            }
//            currX = newX;
//
//        });
//        //fires multiple times before leave event!
//
//        
//    });
    
    
