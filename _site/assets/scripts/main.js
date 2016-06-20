
var breakpoint1 = 1000;
var breakpointMid = 850;
var breakpoint2 = 750;


var generateLayout = function(){
    var width = $(window).width();

    if (width >= breakpoint1){
//        $('.content').removeClass('grid'); 
//        $('.content').removeClass('scatter-medium');     
////        $('.content').addClass('scatter-large'); 
////        
        $('.content').attr('class', 'content scatter-large');
    }
    else if (width < breakpoint2){
        console.log('confuseme');
//        $('.content').removeClass('scatter-large');  $('.content').removeClass('scatter-medium');    
//        $('.content').removeClass('scatter-small');            
//        $('.content').addClass('grid');
        $('.content').attr('class', 'content grid');
    }
    else if (width >= breakpointMid && width < breakpoint1){
//        $('.content').removeClass('scatter-medium');   
//        $('.content').removeClass('scatter-small')    
//        $('.content').removeClass('scatter-large');  
//        $('.content').removeClass('grid');  
//        
//        $('.content').addClass('scatter-medium'); 
        $('.content').attr('class', 'content scatter-medium');        
    }
    else if (width < breakpointMid && width < breakpoint1){
//      $('.content').removeClass('scatter-large');    
//      $('.content').removeClass('scatter-medium');      
//        $('.content').removeClass('grid');   
//        $('.content').addClass('scatter-small');  
        $('.content').attr('class', 'content scatter-small');          
    };    
 
};


$(window).load(function(){   
    generateLayout();
});



$(window).resize(function(event){
    generateLayout();
});

$(document).ready(function(event){
    
    $('.about-button').click(function(event){
        console.log('click');
        $('.about-page').slideDown(800);   
        //automatically changing slide element?!?!
//        $('.about-page').css('display', 'block');
//         $('.content').css('display', 'none');
//        $('.sidebar').css('display', 'none');
//        $('.footer').css('display', 'none');  
    });
    
});
