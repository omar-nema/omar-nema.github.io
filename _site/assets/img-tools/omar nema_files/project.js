


//function detectScroll(){
//    
//}


$(document).ready(function(event){
    
    console.log('hi');
    

    $('.project-content-wrapper').scroll(function(){   
        console.log('scroll as hell');
    });
    
//    window.onscroll(function(){
//        console.log('scroll');
//    });
//    

    
    $('.project-content-wrapper').click(function(){   
        $('.project-info').addClass('project-info-collapse');
        
            $('.project-info').mouseover(function(){
                $(this).removeClass('project-info-collapse');
            }).mouseleave(function(){
                $(this).addClass('project-info-collapse');     
            });
    
    });
    

    
});