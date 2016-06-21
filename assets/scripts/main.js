
var breakpoint1 = 1000;
var breakpointMid = 850;
var breakpoint2 = 750;
var numCards = 3;


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
    
    $(window).load(function(){   
        generateLayout();
        $('.content').fadeIn(300); 
    });

    var hoverstyle = {
     'z-index': '1000', 'opacity': '1' 
    };
    $('.about-button').click(function(event){
        $('.about-page').slideDown(800);   
    });
    


    
    
    var currX, currY;
    var currCard;
    var movingLeft = false,  movingRight = false,
     movingUp = false,  movingDown = false;
    var next;
    //if this moves right 10 increments
    var originalX;
    

    
    ///other card movements - mouse drag? !
    

    var getCardInSequence = function(card, next){
        
        var order = parseInt(card.attr('order'));
        var title = card.attr('title');
        var nextCard;
        //reached end of stack
        if ( (order == 3 && next==-1) || (order == 1 && next==1)  ){
//           return null;
        }
        else {
            var ordernext = parseInt(order) - parseInt(next);
            nextCard = $('.'+ title).find("div[order=" + ordernext + "]");
            currCard = nextCard;
        };
    };
    
    var initialX;
    

    $('.cardholder').mouseover(function(event){
        console.log('firstfire');
           
        $('.cardholder').mousemove(function(event){
            var newX = event.pageX - $(this).offset().left;
            var newY = event.pageY - $(this).offset().top;
            if (!currX){
                currX = newX;
            }
    //        if (!currY){.css
    //            currY = newY;
    //        }
            if (currCard){
                currCard.css('background-color', 'yellow');
                if (newX > currX){
                    getCardInSequence(currCard, 1)
                    movingRight = true;
                    movingLeft = false;
                }
                else if (newX < currX){
                    getCardInSequence(currCard, -1)                    
                    movingRight = false;
                    movingLeft = true;       
                }; 
            }

            currX = newX;
    //        currY = newY;  

        });
        
        $('.card').mouseenter(function(event){  
            var initialX = currX;
                currCard = $(this);
                
                $(this).unbind('mouseenter');
                $(this).off('mouseenter');
                })
            .mouseleave(function(event){
    //            console.log('leavemealone');
                     $(this).off('mouseenter');
                });
        
    }).mouseleave(function(event){console.log('left')});
        
//        .mouseleave(function(event){
//        $(this).unbind('mouseenter');
//        $(this).mouseenter('');
//    });
    
//    .sidebar-button {
//        color: white;
//        font-size: 30px;
//    }
//    

    
//    $('.cardholder').mouseover(function(event){
//  
//        var parentOffset = $(this).offset(); 
//        //top and left offset
//        var width = $(this).width();

//        
//        
////        
//        $(this).css('border', '1px dotted black');
////        $('.card').mouseover(function(event){
////            $(this).css('background-color', 'green');
////            $(this).css('opacity', '1');              
////            $(this).css('z-index', '5');
////        }).mouseleave(function(event){
////            $(this).css('background-color', 'blue');            
////            $(this).css('z-index', '1')
////            $(this).css('opacity', '.2');      
////        });
//        //detect upward mouse movement
//    });
    
//    $('.card').mouseenter(function(event){
//       $(this).css(hoverstyle); 
//        var initCard = $(this);
//        $('.card').mouseenter(function(event){
//            console.log('yessir');            
//           $(this).css({'background-color': 'yellow'}); 
//            initCard.css('background-color', 'green');
//        });        
//    });
//    $('.card').mouseleave(function(event){
//                  $(this).css({'background-color': 'green'}); 
//    });
//    
//    
    
});
