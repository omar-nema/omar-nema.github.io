///FRAGILE - DEPENDS ON DIFFERENT CSV AND CONSISTENT NAMING STRUCTURE

$(window).load(function(){ 
    
    if ($('.widthchecker').css('float') == 'right'){
        setLayout('datacopy/categories.csv','datacopy/projects.csv');
    }
    else if ($('.widthchecker').css('float') == 'left'){
        setLayout('datacopy/categories.csv','datacopy/projects.csv');
    }
    else if ($('.widthchecker').css('float') == 'none'){
//        setLayout('datacopy/categories.csv','datacopy/projects.csv');
    }

});

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

    for (var i=0; i<projects.length; i++){
        var cardHolder = categoryHolder.find('.cardholder.' +projects[i].title);
        var cardholderStyle = {
            'width': projects[i].width,
            'height': projects[i].height,
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




//$(window).resize(function(){
//   //if this is a new size, recalculate css
//});


//        if (i==numCards-1){
//            .css(box-shadow: 0 1px 0px 0px grey);
//        }


//
//{% if category.category == project.category %}
//                                 <div class="cardholder {{project.title}}" style="color:{{project.color}}; width: {{project.width}}; height: {{project.height}}; position: {{project.position}}; top: {{project.top}}; left: {{project.left}}; border-radius: {{project.border-radius}}">
//                                    <div class="card thumbnail {{project.title}}" style="opacity: .2; background-color: {{category.color}}; width: 85%; height: 85%; transform: translateX(6%) translateY(6%); border-radius: {{project.border-radius}}; position:absolute; z-index: 1; font-size: {{project.font-size}}"></div>  
//                                    <div class="card synposis {{project.title}}" style="opacity: .42; background-color:{{category.color}}; width: 85%; height: 85%; transform: translateX(12%) translateY(12%); border-radius: 9%; position: absolute; z-index: 2; font-size: {{project.font-size}}"></div>
//                                    <div class="card tags {{project.title}}" style="opacity: 1;  position:absolute; width: 85%; height:85%; background-color:{{category.color}}; transform: translateX(18%) translateY(18%); border-radius: {{project.border-radius}}; z-index: 3; font-size: {{project.font-size}}; box-shadow: 0 1px 0px 0px grey"><p>{{project.title}}</p></div>
//
//       {% for category in site.data.categories %}
//            {% if category.layout == 'left' %}
//                       <section class="{{category.category}}">
//                  {% for project in site.data.projects %}
//                              {% if category.category == project.category %}
//                                 <div class="cardholder {{project.title}}" style="color:{{project.color}}; width: {{project.width}}; height: {{project.height}}; position: {{project.position}}; top: {{project.top}}; left: {{project.left}}; border-radius: {{project.border-radius}}">
//                                    <div class="card thumbnail {{project.title}}" style="opacity: .2; background-color: {{category.color}}; width: 85%; height: 85%; transform: translateX(6%) translateY(6%); border-radius: {{project.border-radius}}; position:absolute; z-index: 1; font-size: {{project.font-size}}"></div>  
//                                    <div class="card synposis {{project.title}}" style="opacity: .42; background-color:{{category.color}}; width: 85%; height: 85%; transform: translateX(12%) translateY(12%); border-radius: 9%; position: absolute; z-index: 2; font-size: {{project.font-size}}"></div>
//                                    <div class="card tags {{project.title}}" style="opacity: 1;  position:absolute; width: 85%; height:85%; background-color:{{category.color}}; transform: translateX(18%) translateY(18%); border-radius: {{project.border-radius}}; z-index: 3; font-size: {{project.font-size}}; box-shadow: 0 1px 0px 0px grey"><p>{{project.title}}</p></div>
//                           
//                                </div>
//                            {% endif %}
//                  {% endfor %}
//                        </section>
//            {% endif %}
//      {% endfor %}



//d3.csv('datacopy/categories.csv', function(data){
//
//    
//    console.log(data);
//});
//



//$(window).resize(function(event) {
//  console.log( $(window).width() );
//   
//});


//project sizing and locations handled here
//takes input from csv file
