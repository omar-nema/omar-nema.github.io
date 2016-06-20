
var breakpoint1 = 950;
var breakpoint2 = 750;


var generateLayout = function(){
    var width = $(window).width()
    if (width >= breakpoint1){
        $('.content').removeClass('grid'); 
        $('.content').removeClass('scatter-small');         
        $('.content').addClass('scatter-large');        
    }
    else if (width < breakpoint2){
        $('.content').removeClass('scatter-large');     
        $('.content').removeClass('scatter-small');            
        $('.content').addClass('grid');
    }
    else if (width >= breakpoint2 && width < breakpoint1){
        $('.content').removeClass('scatter-large');     
        $('.content').removeClass('grid');   
        $('.content').addClass('scatter-small');       
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
