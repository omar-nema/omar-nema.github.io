


function collapseNav(){
    $('.project-info').addClass('project-info-collapse');
        
    $('.project-info').mouseover(function(){
        $(this).removeClass('project-info-collapse');
    }).mouseleave(function(){
        $(this).addClass('project-info-collapse');     
    });  
};

function imageMouseover(){
    $(this).parents('.block').children().css('opacity', '.4');
    $(this).parent().css('opacity', '1');
    $(this).addClass('image-enlarge');  
    $(this).one('click', imageMouseleave);
};

function imageMouseleave(){
    $(this).removeClass('image-enlarge');    
    $(this).parents('.block').children().css('opacity', '1');
    $(this).one('click', imageMouseover);    
};

function imageOnlyView(){
    removeTextView();
    $('.block.intro').fadeOut(500);
    $('.block-text p').fadeOut(500);  
//    console.log($(this).attr('button-type')); 
//    console.log($(this).attr('button-type')=='image-button');       
    $('.image-button').one('click', normalView);  
};

function normalView(){
    $('.block.intro').fadeIn(500);
    $('.block-text p').fadeIn(500); 
    $('.image-button').one('click', imageOnlyView); 
    if ($(this).attr('button-type')=='image-button'){
        $(this).one('click', imageOnlyView);
    }    
};

function homeClick(){
    $('.block').fadeOut(200, function(){
           window.location.href = '/'; 
    });
};

function textView(){
    normalView();
    $('.block-image-container').css('display','none');
    $('.highlight').addClass('active');
    $(this).one('click', removeTextView);
}
function removeTextView(){
    $('.block-image-container').css('display','block');
    $('.highlight').removeClass('active');
    if ($(this).attr('button-type')=='text-button'){
        $(this).one('click', textView); 
    }       
}


$(document).ready(function(event){
    
//    
//    $(window).load(function(event){
//        $('.block').fadeIn(100);
//    });

    $('.project-content-wrapper').scroll(function(){   
        console.log('scroll as hell');
    });
    $('.project-border').scroll(function(){
        collapseNav();
    });
    $('.project-content-wrapper').click(function(){   
        collapseNav();
    });
    
    $('.image-button').one('click', imageOnlyView);
    $('.home-button').one('click', homeClick);    
    $('.text-button').one('click', textView);        
    
    $('.block-image-small').click(imageMouseover).mouseleave(imageMouseleave);
    
});