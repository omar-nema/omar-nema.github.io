
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



$(document).ready(function(event){
    
    $('.project-border').scroll(function(){
        collapseNav();
    });
       
    $(document).one('click touchstart', function(){
        collapseNav();        
    });
    
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
    
    
    //revise?!
    function showToolTip(){
        $('.info-tooltip').hide();
            $('.block-text.layered').one('click', showToolTip); 
        //if it was the same one
        $(this).find('.info-tooltip').show(); 
        $(this).one('click', hideToolTip);
    };
    function hideToolTip(){       
        $(this).find('.info-tooltip').hide();    
        $(this).one('click', showToolTip);        
    };
    
    $('.block-text.layered').one('click', showToolTip);

   
});


//            tooltip
//                .style("display", "block")
//                .html(d.provider + '<br>' + d.city + ' , ' + d.state)
//                .style("left", (d3.event.pageX)-$('.chartwrapper').offset().left + "px")
//                .style("top", 15+(d3.event.pageY)-$('.chartwrapper').offset().top + "px");    

//function defaultView(){   
//    $('.project-border').attr('class','project-border defaultView');         
//};
//function imageOnlyView(){
//    if (!$(this).hasClass('active')){
//        $('.project-border').attr('class','project-border imageView');                    
//    } 
//};
//function textView(){    
//    if ($(this) == $('.view-button.one')){
//        clicked = true;   
//    }
//    if (!$('.view-button.one').hasClass('active')){
//        $('.project-border').attr('class','project-border textView');                   
//    }     
//};
//function changeView(viewName, button){
//    console.log('me ow');
//    if ($(this).hasClass('view-button')){
//        clicked = true;   
//    }  
//    if (!button.hasClass('active')){
//        $('.project-border').attr('class','project-border ' + viewName);                   
//    }      
//}
//
////are the classes doing anything?
//function viewCheck(width){
//    if (!clicked){
//        if (width < 551) {
//         textView();
//        }  
//        else if (width > 551) {
//         defaultView();
//        };               
//    }
//};
//$(window).resize(function(event){
//    viewCheck($(this).width());
//});