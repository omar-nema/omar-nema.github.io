
var breakpoint1 = 1000;
var breakpointMid = 850;
var breakpoint2 = 750;
var numCards = 3;
//percentage of cardholder width to pass before switching cards
var fractionIncrement = .1;
var layoutResizeEnabled = true;
var currCard; 

///button mouseover function


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
            $('.content').attr('class', 'content scatter-medium');          
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
    $('.sidebar-categories .tab').css('opacity', '.3');
    clearTimeout(resizeId);
    resizeId = setTimeout(doneResizing, 200);    
});
var doneResizing = function(){
    $('.sidebar-categories .tab').css('opacity', '1');    
};



function categoryMouseLeave(){
      $(this).removeClass('showCategory').addClass('hideCategory');
       $('.cardholder').css('opacity', '1');    
    console.log('call me beep me');
};

function categoryHover(){
      $(this).removeClass('hideCategory').addClass('showCategory');
       $('.cardholder').css('opacity', '.3');
       $('.cardholder.' + $(this).attr('category')).css('opacity', '1');       
}


function hideCat() {
    $(this).one('click', showCat);  
    $(this).bind('mouseleave', categoryMouseLeave);
    layoutResizeEnabled = true;
    $('.cardholder').css('display', 'block');
    generateLayout();
};
function showCat() {
    $('.sidebar-categories .button').removeClass('showCategory').addClass('hideCategory');
    $('.sidebar-categories .button').mouseleave(categoryMouseLeave);

    $(this).unbind('mouseleave');   
    $(this).removeClass('hideCategory').addClass('showCategory');    
    $('.content').attr('class', 'content grid');
    layoutResizeEnabled = false;
    $(this).one('click', hideCat);
    //console.log($(this).attr('category'));
    $('.cardholder').css('display', 'none');
    $('.cardholder.' + $(this).attr('category')).css('display', 'block'); 

};

function timeSort(){
        //get currently selected category !
        var origHTML = $('.content').html();    
        $('.time-sort').one('click', function(){
            return undoTimeSort(origHTML);
        });    
    
        $(this).unbind('mouseleave');      
        $(this).removeClass('hideCategory').addClass('showCategory');   
        $('.content').attr('class', 'content grid timesort');
        $('.card').addClass('stackedBar');        
        var year3 = $('.content').find('.cardholder[data-time=3]');
        var year2 = $('.content').find('.cardholder[data-time=2]');      
        var year1 = $('.content').find('.cardholder[data-time=1]');             
        year3.insertAfter('.year-3');
        year2.insertAfter('.year-2');
        year1.insertAfter('.year-1');  
        layoutResizeEnabled = false;
};

function undoTimeSort(origHTML){ 
    $('.time-sort').bind('mouseleave', categoryMouseLeave);    
    $('.time-sort').one('click', timeSort);      
    layoutResizeEnabled = true;
    $('.content').html(origHTML);
    $('.cardholder').mouseenter(cardEnter).mouseleave(cardExit);
    //
    
    //do we have to re-bind evnet listeners ?
    
    generateLayout();       
};

var currCardClassChange = function(currCard, classToRemove, classToAdd){
    currCard.removeClass(classToRemove);
    currCard.addClass(classToAdd);                 
};

function cardEnter(){
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
    console.log(currHover);
    $('.colheader.timeline').css('visibility', 'hidden');  
//    if (phaseOrder == 'second' || phaseOrder == 'third'){
//      $('.colheader.timeline').css('visibility', 'hidden');  
//    };
    currHover.css('display', 'block');
    yearHeader.css('display', 'none');
};

function aboutTimeLineMouseLeave() {
    var phaseOrder = $(this).data('phaseorder');    
    var currHover = $('.phaseHover.' + $(this).data('phaseorder'));
    var yearHeader = $(this).find('.year-header .date1');
    if (phaseOrder == 'second' || phaseOrder == 'third'){
      $('.colheader.timeline').css('visibility', 'visible');    
    };    
    currHover.css('display', 'none');    
    yearHeader.css('display', 'block'); 
    //we need orig yearHeader text, store in data ?
};

function aboutFirstClick(){
        console.log('hey');
        $('.about-button').one('click', aboutSecondClick);    
        $('.about-page').css('display', 'block');
        $('.content').css('display', 'none');
        $('.about-button').html('<p>i see..</p>');  
        $('.about-button').attr('class', 'about-button about-button-aboutpage');
    
        $('.phase').mouseover(aboutTimeLineMouseover).mouseleave(aboutTimeLineMouseLeave);
        
};
function aboutSecondClick(){
    console.log('irunz');

    $('.about-button').one('click', aboutFirstClick);  
    $('.content').css('display', 'block');
    $('.about-page').css('display', 'none');
    var newHTML =  '<p>omar<br>nema.</p>';
    $('.about-button').html(newHTML);
    $('.about-button').attr('class', 'about-button about-button-clicked');

};



$(document).ready(function(event){
    //run things when layout gen is done?
    $(window).load(function(){   
        generateLayout();     
        $('.content').fadeIn(500, function(){
            //all functions dependent on intial CSS property load below
        });    
    });
    
    $('.about-button').one('click', aboutFirstClick);
    
    //SIDEBAR
    $('.time-sort').one('click', timeSort);
    $('.time-sort').mouseenter(function(){return $(this).removeClass('hideCategory').addClass('showCategory')}).mouseleave(categoryMouseLeave);    
    
    //SIDEBAR CATEGORIES
    $('.sidebar-categories .category').one('click', showCat);
    $('.sidebar-categories .category').mouseenter(categoryHover).mouseleave(categoryMouseLeave);
    
    //CARD FLIP
    $('.cardholder').mouseenter(cardEnter).mouseleave(cardExit);
    
});

    

    //edge cases: round2 (not that imp?), card before cardholder ()
    //jumps over gap and enters cardholder within card - solved w mousemove but sometimes runs 2 times in parallel
