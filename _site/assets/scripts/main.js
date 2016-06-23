
var breakpoint1 = 1000;
var breakpointMid = 850;
var breakpoint2 = 750;
var numCards = 3;
//percentage of cardholder width to pass before switching cards
var fractionIncrement = .1;
var layoutResizeEnabled = true;
var currCard; 

var generateLayout = function(){
    if (layoutResizeEnabled){
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
    }
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

var resizeId;
$(window).resize(function(event){
    generateLayout();
    //opaque sidebar when resizing    
    $('.sidebar').css('opacity', '.3');
    clearTimeout(resizeId);
    resizeId = setTimeout(doneResizing, 200);    
});
var doneResizing = function(){
    $('.sidebar').css('opacity', '1');    
};

function hideCat() {
    $(this).removeClass('showCategory').addClass('hideCategory');          
};
function showCat() {
    $('.sidebar-categories .button').removeClass('showCategory').addClass('hideCategory');
    //re-binding the same event listener
    $('.sidebar-categories .button').bind
    ({mouseleave:function(){
        $(this).removeClass('showCategory').addClass('hideCategory');  
        }
    });
    $(this).unbind('mouseleave');   
    $(this).removeClass('hideCategory').addClass('showCategory');    
    $('.content').attr('class', 'content grid');
    layoutResizeEnabled = false;
    $(this).one('click', hideCat);
};


$(document).ready(function(event){
    //run things when layout gen is done?
    $(window).load(function(){   
        generateLayout();     
        $('.content').fadeIn(300, function(){
            //all functions dependent on intial CSS property load below
        });    
    });
    
    //EVENT LISTENERS
    
    $('.about-button').click(function(){
        $('.about-page').toggle(); 
        $('.' + $('.content').attr('class').replace(' ', '.')).toggle();
    });

    $('.sidebar-categories .button').one('click', showCat);

    $('.sidebar-categories .button')
        .mouseenter(function(event){
        console.log('enter running')
       $(this).removeClass('hideCategory').addClass('showCategory');
           
    })
        .mouseleave(function(event){
       $(this).removeClass('showCategory').addClass('hideCategory');        
    });
        
    $('.cardholder').mouseenter(function(event){
            var prevX;
            var prevMove, currMove;
            var next;
            var initialX;
            var prevDirection;
            var currHolder = $(this);
        
            category = currHolder.attr('category');
//            $('.sidebar').find('.button.' +  category).removeClass('hideCategory').addClass('showCategory');
        
            $('.card').one('mousemove', function(event2){            //MAKE SURE THIS RUNS JUST ONCE!!
                $('.card').unbind('mousemove');             
                initialX = parseFloat(event.pageX) - parseFloat($(currHolder).offset().left);
                currCard = $(this); //enter selects child
//                //style curr card here?
                
                $(currHolder).mousemove(function(event){   
                    currCard.removeClass(currCard.attr('default'));
                    currCard.addClass('card-selector');                    
                    
                    var currX = parseFloat(event.pageX) - parseFloat($(this).offset().left);  
                    var currDirection = parseFloat(currX - prevX); 
                    //update initialX if direction switched
                    if (prevX && prevDirection){   
                        var directionSwitch = Math.sign(currDirection)*Math.sign(prevDirection)==-1;
                        if (directionSwitch){
                            initialX = prevX;
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
