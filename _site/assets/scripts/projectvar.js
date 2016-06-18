

//project sizing and locations handled here
//takes input from csv file

//
//$('.narrative').html('<p>developing a framework to analyze and visualize narratives</p>');
//
//var data = $.csv.toObjects('_data/projects.csv');
//
//console.log(data);


//var projects = [];
//var categories = [] ;  
//var categoryWeights = {datavis: 1, research: 2, object: 3};   
//
//function project(name, category, date, synposis, tags, numCards, thumbnails, position, width, offset){
//    this.title =  name;  
//    this.category = category;    
//    this.date = date;
//    this.synposis = synposis;
//    this.tags = tags;
//    this.thumbnails = thumbnails;  
//    this.position = position;
//    this.width = width;
//    this.height = .73*parseInt(this.width);
//    this.offset = offset;
//};
//function category (title, projectdata, weight){
//    this.title =  title;
//    this.projects = projectdata;
//    this.weight = weight;
//};
////can you have key value in array?
////how is structure here?
//function groupByCategory(projects){
//    var categoryNames = projects.map(function(d) {return d.category});  
//    categoryNames = categoryNames.filter(function(v,i) { return categoryNames.indexOf(v) == i; });
//   
//    for (i=0;i<categoryNames.length; i++){
//        var name = categoryNames[i];
//        var projectsByCategory = projects.filter(
//            function(d){
//                return d.category === categoryNames[i];
//            }
//        );
//        var newcat = categories.push(new category(categoryNames[i], projectsByCategory, categoryWeights[categoryNames[i]]));
//    }
//    //sort categories by order
//    return categories.sort(function(d){
//        return -d.weight;
//    });
//};
//
//
//
//var hospital = projects.push(new project('hospital','datavis', '2014-2015', 'computational model to predict movement from electrical stimulation', 'research, coding, python, neuro-engineering', null, null, null, null));
//var rx = projects.push(new project('rx', 'datavis', '2014-2015', 'computational model to predict movement from electrical stimulation', 'research, coding, python, neuro-engineering', null, null, null, null));
//var personaldata = projects.push(new project('personaldata', 'datavis', '2014-2015', 'computational model to predict movement from electrical stimulation', 'research, coding, python, neuro-engineering', null, null, null, null));
//var thesis = projects.push(new project('thesis', 'research', '2014-2015', 'computational model to predict movement from electrical stimulation', 'research, coding, python, neuro-engineering', null, null, null, null));
//var narrative = projects.push(new project('narrative', 'research', '2014-2015', 'computational model to predict movement from electrical stimulation', 'research, coding, python, neuro-engineering', null, null, null, null)); 
//var tools = projects.push(new project('tools', 'object', '2014-2015', 'computational model to predict movement from electrical stimulation', 'research, coding, python, neuro-engineering', null, null, null, null));
//var table = projects.push(new project('table', 'object', '2014-2015', 'computational model to predict movement from electrical stimulation', 'research, coding, python, neuro-engineering', null, null, null, null));
//var tea = projects.push(new project('tea', 'object', '2014-2015', 'computational model to predict movement from electrical stimulation', 'research, coding, python, neuro-engineering', null, null, null, null));
//
//categories = groupByCategory(projects);
//
////helper for generateScatterGrid function
//
//console.log(categories);
//
////creating pseudo-grid system
//function generateScatterGrid(categories, leftwidth, rightwidth, leftheights, rightheights){
//    var leftSideNumDivs = parseInt(categories.length/2) + categories.length%2;
//    var rightSideNumDivs = parseInt(categories.length/2);
//    
//    for (var i=0; i<leftSideNumDivs; i++){
//        var newString ='<section class="'+ categories[i].title + '" style="height:'+ leftheights[i] +'%"></section>';
//        $('.leftcontent').append(newString);
//        var cardholder = ($('.leftcontent').find('.' + categories[i].title));
//        //add cards       
//        for (var j=0; j<categories[i].projects.length; j++){
//            var newCard ='<section class="cardholder '+ categories[i].projects[j].title + '"></section>';
//            cardholder.append(newCard);
//        };   
//    };
//    $('.leftcontent').css({width: leftwidth+ '%'});
//    
//    for (var i=leftSideNumDivs; i<(rightSideNumDivs+leftSideNumDivs); i++){
//          var newString ='<section class="'+ categories[i].title + '" style="height:'+ rightheights[i-1] +'%"></section>';
//        $('.rightcontent').append(newString);  
//        var cardholder = ($('.rightcontent').find('.' + categories[i].title));        
//        for (var j=0; j<categories[i].projects.length; j++){
//        var newCard ='<section class="cardholder '+ categories[i].projects[j].title + '"></section>';
//            cardholder.append(newCard);
//        };    
//    };
//    $('.rightcontent').css({width: rightwidth+ '%'});
//}
//
//
//var floatLeftWidth = 65;
//var floatRightWidth = 35;
//floatLeftHeights = [60, 40];
//floatRightHeights = [100, 0];
//generateScatterGrid(categories, floatLeftWidth, floatRightWidth, floatLeftHeights, floatRightHeights);
//    
//
////$('hospital').css({
////    
//////       top: 15%;
//////    left: 5%;
//////    position: absolute;
//////    width: 300px;
//////    height: 235px;
//////    z-index: 100;
//////    background-color: blue; 
////    
////});
//
//
////now experiment w visual elements
//
////function generateSingleCard(){
////    
////};
//
//var generateProject = function(name, position, width, offset, numCards, cardData){
//    var height = .78*parseInt(width);
//    var $container = $('.content');
//    var stringtoadd = '<div class="cardholder '+ 
//    name + '"> <div class="card1"> <p>' + name + '</p></div><div class="card2"></div><div class="card3"></div></div>' ;
//    
//    $container.append(stringtoadd);
//    var $project = $container.find('.cardholder.' + name);
//    
//    $project.css({'top': position[0] + '%', 'left': position[1] + '%', 'position': 'absolute', 'width': width +'px', 'height': height + 'px', 'z-index': '-5'});
//    
//    generateCards($project, numCards);
//    
//};
//
//var generateCards = function(project, numCards){
//    
//    //each card will hold attributes
//    for (i=0; i<numCards ; i++){
//        cardNum = i+1;
//
//        var opacity = [1, .43, .2];
//        var translateX = 25-7*i;
//        var translateY =  25-7*i;
//        var zindex = numCards - i;
//        project.find('.card' + cardNum).css(
//            {
//            'z-index': zindex,
//            'background-color': '#FF0000',
//            'width': '80%',
//            'height': '80%',
//            'opacity': opacity[i],
//            'position': 'absolute',
//            'transform': 'translateX(' + translateX+  '%) translateY(' + translateY+ '%)',
//            'border-radius': '9%'
//            }
//        ); 
//    };
//      
//};
//
//
//
//var thesisData = ['thesis', 'n/a', 'modeling spinal cord stimulation in monkeys', 'neuro-engineering, computational model, coding, finite element method']
////
//
