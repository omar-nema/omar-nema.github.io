///FRAGILE - DEPENDS ON DIFFERENT CSV AND CONSISTENT NAMING STRUCTURE

$(window).load(function(){ 
    
    if ($('.widthchecker').css('float') == 'right'){
        setLayout('datacopy/categories.csv','datacopy/projects.csv');
    }
    else if ($('.widthchecker').css('float') == 'left'){
        setLayout('datacopy/categories.csv','datacopy/projects.csv');
//        document.location = "indexgrid.html"
    }
    else if ($('.widthchecker').css('float') == 'none'){
        setLayout('datacopy/categories.csv','datacopy/projects.csv');
    }
    
//    setLayout('datacopy/categories.csv','datacopy/projects.csv');

});



//how are we changing layouts?
//break point 600 - 900 - add more spacing around elements, enlarge & leave scattered
//simply switch to grid layout
//sustainability of solution?!?!?!
//similar layout but more padding and bigger size

var setLayout = function(categoryFile, projectFile){
    d3.csv(categoryFile, function(categories){
        d3.csv(projectFile, function(projects){ 
             for (i=0; i<categories.length; i++){
                var projectsByCategory = projects.filter(function(d){return d.category === categories[i].category;});  
                if (categories[i].layout == 'left'){
                      generateCSS($('.leftcontent'), categories[i], projectsByCategory);

                  }
                else if (categories[i].layout == 'right'){
                      generateCSS($('.rightcontent'), categories[i], projectsByCategory);
                  };
              };       
        });   
    });
};

    
var generateCSS = function($contentholder, category, projects){
    var categoryHolder = $contentholder.find('.' + category.category);

    
console.log(projects);
    for (var i=0; i<projects.length; i++){
        var cardHolder = categoryHolder.find('.cardholder.' +projects[i].title);
        var cardholderStyle = {
            'width': projects[i].width,
            //maintain aspect ratio           
            'height': .73*parseInt(projects[i].width)+'vw',            
            'position': projects[i].position,
            'top': projects[i].top,
            'left': projects[i].left,
            'border-radius': projects[i].borderradius}
        cardHolder.css(cardholderStyle);
 
        var numCards = parseInt(projects[i].numCards);
        var currVal = 6;
        var offset = 6;
        //this below needs to be generative
        var cardCats = ['thumbnail', 'synposis', 'tags'];
        opacity = [.2, .4, .9];
        for (var j=0; j<numCards; j++){
            currOpacity = opacity[j];
            //very weak please fix
            var card = cardHolder.find('.card.' + cardCats[j] + '.' + projects[i].title);     
            var cardStyle = {
                'width': '85%',
                'height': '85%',
                'transform': 'translateX(' + currVal + '%) translateY(' + currVal + '%)',
                'background-color': projects[i].backgroundcolor,
                'border-radius': projects[i].borderradius,
                'position': 'absolute',
                'font-size': projects[i].fontsize,
                'opacity': currOpacity,
                'color': 'white',
                'z-index': j};  
                
            card.css(cardStyle);
//            if (j == numCards -1){
//                card.append('<p>' + projects[i].synposis + '</p>')  
//            };
      
            currVal = currVal+offset;
            }
    };        
};




