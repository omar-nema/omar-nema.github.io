
var breakpoint1 = 1000;
var breakpointMid = 850;
var breakpoint2 = 900;
var numCards = 3;
//percentage of cardholder width to pass before switching cards
var fractionIncrement = .1;
var layoutResizeEnabled = true;
var currCard;


//var isTouchDevice = 'ontouchstart' in document.documentElement;
var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

///if touchDevice, new drag events !!

var generateLayout = function(){
    if (layoutResizeEnabled){
    var width = $(window).width();
    $('.content').attr('class', 'content grid fadeIn');     
//        if (width >= breakpoint1){
//            $('.content').attr('class', 'content scatter-large fadeIn');
//        }
//        else if (width < breakpoint2){
//            $('.content').attr('class', 'content grid fadeIn');
//        }
//        else if (width >= breakpointMid && width < breakpoint1){
//            $('.content').attr('class', 'content scatter-medium fadeIn');
//        }
//        else if (width < breakpointMid && width < breakpoint1){
//            $('.content').attr('class', 'content scatter-medium fadeIn');
//        };
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
    $('.sidebar-categories .tab').css('opacity', '.3');
    clearTimeout(resizeId);
    resizeId = setTimeout(doneResizing, 200);
});
var doneResizing = function(){
    $('.sidebar-categories .tab').css('opacity', '1');
};


function categoryHover(){
      $(this).removeClass('hideCategory').addClass('showCategory');
       $('.cardholder').css('opacity', '.3');
       $('.cardholder.' + $(this).attr('category')).css('opacity', '1');
}
function categoryMouseLeave(){
    $(this).removeClass('showCategory').addClass('hideCategory');
    $('.cardholder').css('opacity', '1');
};
function showCat() {
    //reset
    $('.sidebar-categories .category').removeClass('showCategory').addClass('hideCategory');
    $('.sidebar-categories .category').one('click', showCat);
    $('.sidebar-categories .category').mouseleave(categoryMouseLeave);
    $(this).unbind('mouseleave');
    $(this).removeClass('hideCategory').addClass('showCategory');
    $(this).one('click', hideCat);
    $('.content').attr('class', 'content grid');
    layoutResizeEnabled = false;
    $('.cardholder').css('display', 'none');
    $('.cardholder.' + $(this).attr('category')).css('display', 'block');

};
function hideCat() { 
    if (supportsTouch){
        $('.category').removeClass('showCategory').addClass('hideCategory'); 
        $('.cardholder').css('opacity', '1');        
    }    
    $(this).one('click', showCat);
    $(this).bind('mouseleave', categoryMouseLeave);
    layoutResizeEnabled = true;
    $('.cardholder').css('display', 'block');
    generateLayout();
};

function timeSort(){
        $('.sidebar-categories .category').removeClass('showCategory').addClass('hideCategory');
        $('.cardholder').css('display', 'block');
        $('.cardholder').css('opacity', '0'); //transition
        var origHTML = $('.content').html();
        $('.time-sort').one('click', function(){
            return undoTimeSort(origHTML);
        });
        $(this).unbind('mouseleave');
        $(this).removeClass('hideCategory').addClass('showCategory');
        $('.content').attr('class', 'content grid timesort fadeIn');
        $('.card').addClass('stackedBar');
        var year3 = $('.content').find('.cardholder[data-time=3]');
        var year2 = $('.content').find('.cardholder[data-time=2]');
        var year1 = $('.content').find('.cardholder[data-time=1]');
        year3.addClass('fadeIn').insertAfter('.year-3');
        year2.addClass('fadeIn').insertAfter('.year-2');
        year1.addClass('fadeIn').insertAfter('.year-1');

        $('.cardholder').css('opacity', '1');

        layoutResizeEnabled = false;
};

function undoTimeSort(origHTML){
    $('.time-sort').bind('mouseleave', categoryMouseLeave);
    $('.time-sort').one('click', timeSort);
    layoutResizeEnabled = true;
    $('.cardholder').css('opacity', '0'); //transition

    $('.content').html(origHTML);
    $('.cardholder').css('opacity', '1'); //transition
    $('.cardholder').mouseenter(cardEnter).mouseleave(cardExit);
//    $('.cardholder').click(cardClick);
    generateLayout();
};

var currCardClassChange = function(currCard, classToRemove, classToAdd){
    currCard.removeClass(classToRemove);
    currCard.addClass(classToAdd);
};

function cardEnter(event){
    
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

        $(currHolder).mousemove(function(event){

            currCardClassChange(currCard, currCard.attr('default'), 'card-selector');
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

                    currCardClassChange(currCard, 'card-selector', currCard.attr('default'));
                    currCard = getCardInSequence(currCard, currDirection);
                    currCardClassChange(currCard, currCard.attr('default'), 'card-selector');
                }
            };
            if (prevX) {
                prevDirection = parseFloat(currDirection);
            };
            prevX = currX;
            prevMove = currMove;
        });

    });
};

function cardExit(){
         if (currCard){
                currCardClassChange(currCard, 'card-selector', currCard.attr('default'));
            }
            currCard = null;
            $('.cardholder').unbind('mousemove');
            $('.card').unbind('mouseenter');
};



function aboutTimeLineMouseover() {
    var phaseOrder = $(this).data('phaseorder');
    var currHover = $('.phaseHover.' + phaseOrder);
    var yearHeader = $(this).find('.year-header .date1');
//    $('.colheader.timeline').css('visibility', 'hidden');
//    currHover.css('visibility', 'visible');
    $('.colheader.timeline').css('opacity', '0');
    currHover.css('opacity', '1');
    yearHeader.css('display', 'none');
};

function aboutTimeLineMouseLeave() {
    var phaseOrder = $(this).data('phaseorder');
    var currHover = $('.phaseHover.' + $(this).data('phaseorder'));
    var yearHeader = $(this).find('.year-header .date1');
//$('.colheader.timeline').css('visibility', 'visible');
//    currHover.css('visibility', 'hidden');
    $('.colheader.timeline').css('opacity', '1');
    currHover.css('opacity', '0');
    yearHeader.css('display', 'block');
};

function aboutFirstClick(){
        $('.about-button').one('click', aboutSecondClick);
        $('.about-page').css('display', 'block');
        $('.about-page').removeClass('slideUp').addClass('slideDown');
        $('.about-button').html('<p>enough omar.</p>');
        $('.about-button').attr('class', 'about-button about-button-aboutpage button');
        $('.phase').mouseover(aboutTimeLineMouseover).mouseleave(aboutTimeLineMouseLeave);

};
function aboutSecondClick(){
    $('.about-page').removeClass('slideDown').addClass('slideUp');
    $('.about-button').one('click', aboutFirstClick);
    var newHTML =  '<p>omar<br>nema.</p>';
    $('.about-button').html(newHTML);
    $('.about-button').attr('class', 'about-button about-button-clicked button');

};
//needs to remember currCArd
function mobileFirstCardClick(event){
    event.preventDefault();    
    if (currCard){
        currCard.one('click', mobileFirstCardClick);
        currCardClassChange(currCard, 'card-selector', currCard.attr('default'));        
    };
    currCard = $(this);
    currCardClassChange(currCard, currCard.attr('default'), 'card-selector');
};
function desktopListeners(){
    $('.sidebar-categories .category').mouseenter(categoryHover).mouseleave(categoryMouseLeave);
    //CARD FLIP
    $('.cardholder').mouseenter(cardEnter).mouseleave(cardExit);           
};

function mobileListeners(){
    $(window).click(function(){//deselection since mouseover ain't detected - later accommodate ipad        
        $('.card1').removeClass('.card-selector').addClass('card1select');           
    });        
    $('.project-link').addClass('inactive');  
        
    $(document).on('click touchstart',function(event){
        if ($(event.target)[0] === $('.content')[0]){
           if (currCard){
                currCardClassChange(currCard, 'card-selector', currCard.attr('default')); 
                currCard.one('click', mobileFirstCardClick); 
               currCard = null;                   
            };                 
        } ;          
    });
    
    $('.card.card1').one('click', mobileFirstCardClick);        
};
    

$(document).ready(function(event){
    
    generateLayout();
    $('.content').css('display', 'block');
    $('.about-button').one('click', aboutFirstClick);   
    //SIDEBAR
    $('.time-sort').one('click', timeSort);
    $('.time-sort').mouseenter(function(){return $(this).removeClass('hideCategory').addClass('showCategory')}).mouseleave(categoryMouseLeave);    
    
    //SIDEBAR CATEGORIES
    $('.sidebar-categories .category').one('click', showCat);  
    
    //MOBILE LISTENERS
    if (supportsTouch){
        
        if (screen.width < 700){
            $('.card.card3').css('display', 'none');      //should have the entire styling   
            $('.card.card2').css('display', 'none');///            
        } else {
            $('.card.card3').addClass('link-inactive');
              $('.card.card3').addClass('link-inactive');          
        };
        $(window).bind('mousemove.hasMouse',function(){
            $(window).unbind('.hasMouse');
            desktopListeners();            
        }).bind('touchstart.hasMouse',function(){ //we see this disappear in ipad
            $(window).unbind('.hasMouse');
            mobileListeners();
        });
    } 
        ///DESKTOP LISTENERS    
    else {
        desktopListeners();
    }  ;
       
    



    

    
});
