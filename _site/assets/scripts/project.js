
var clicked = false;

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





function homeClick(){
    $('.block').fadeOut(200, function(){
           window.location.href = '/'; 
    });
};


function defaultView(){   
    $('.project-border').attr('class','project-border defaultView');         
};
function imageOnlyView(){
    if (!$(this).hasClass('active')){
        $('.project-border').attr('class','project-border imageView');                    
    } 
};
//function textView(){    
//    if ($(this) == $('.view-button.one')){
//        clicked = true;   
//    }
//    if (!$('.view-button.one').hasClass('active')){
//        $('.project-border').attr('class','project-border textView');                   
//    }     
//};

function changeView(viewName, button){
    console.log('me ow');
    if ($(this).hasClass('view-button')){
        clicked = true;   
    }  
    if (!button.hasClass('active')){
        $('.project-border').attr('class','project-border ' + viewName);                   
    }      
}

//are the classes doing anything?
function viewCheck(width){
    if (!clicked){
        if (width < 551) {
         textView();
        }  
        else if (width > 551) {
         defaultView();
        };               
    }
};


$(window).resize(function(event){
    viewCheck($(this).width());
});

$(document).ready(function(event){
    
    $('.project-border').scroll(function(){
        collapseNav();
    });
    $('.project-content-wrapper').click(function(){   
        collapseNav();
    });
    
    viewCheck($(window).width());
    
    $('.home-button').one('click', homeClick);       
    $('.view-button.one').click(function(){
        changeView('textView', $(this)) 
    });   
    $('.view-button.two').click(function(){
        changeView('imageView', $(this)) 
    });   
    $('.view-button.three').click(function(){
        changeView('defaultView', $(this)) 
    });       
 
    $('.block-image').click(imageMouseover).mouseleave(imageMouseleave);
    
    //    $('.view-button.one').click(textView);  
//    $('.view-button.two').click(imageOnlyView);      
//    $('.view-button.three').click(defaultView);  
    
});



//    $('.block.intro').fadeIn(500);
//    $('.block-text p').fadeIn(500); 
//    $('.image-button').one('click', imageOnlyView); 
//    if ($(this).attr('button-type')=='image-button'){
//        $(this).one('click', imageOnlyView);
//    } 


//    $(this).addClass('active').one('click', removeTextView);
//    $(this).addClass('active').one('click', normalView);      
//    $('.image-button').addClass('active').one('click', normalView);   
//function removeTextView(){
//    $('.block-image-container').css('display','block');
//    $('.highlight').removeClass('active');
//    $('.view-button').removeClass('active');
//    if ($(this).attr('button-type')=='text-button'){
//        $(this).one('click', textView); 
//    }       
//}
