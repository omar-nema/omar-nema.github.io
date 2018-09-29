
function setDescription(description){
  $('.graph-description').html(description)
}

//more about the dataset

var desc1 = 'In the first visual below, common outpatient procedures are plotted along the axes of <strong>cost (x)</strong> and <strong>frequency (y)</strong>. Each <strong>blob represents an aggregation of referrals conducted by each in-network practice</strong>. <strong>Distribution of each variable is represented in the shape</strong> of each point. <strong>Red denotes a higher percentage of out-of-network procedures, and blue denotes a low percentage</strong>. Click on an individual procedure category to zoom into a more granular distribution.'

var desc2 = "For the selected procedure category, individual practices are plotted along the axes of <strong>cost (x)</strong> and <strong>frequency (y)</strong>. <strong>The size of each bubble corresponds to the quantity of patients managed</strong>. Similar to the previous graph, red denotes a higher percentage of out-of-network referrals. Click on an individual node to view a particular PCP's referral routes - or click the 'see network' button to see the full referral network"

var desc3 = 'A full referral network, over a 12 month period, is visualized below. Select an individual point to highlights its referral routes, and use the filters to find alternative routes. <br>In this view - <strong>practices are denoted with small gray dots</strong>, and <strong>servicing facilities</<strong> are <strong>colored</strong>. </strong><strong>Blue represents good referral patterns</strong> (dark blue denotes low cost, in network) and <strong>red represents poor referral patterns</strong> (dark red means high cost, and out of network)'

var transitionTime = 150;

function setCurrentPage(input){
  currentPage = input;
  if (input == 3){
    $('.graph1').css('display', 'none');
    $('.graph2').css('display', 'none');
    $('.graph3').css('display', 'block');
    $('.procedure-filters').hide();
    $('.node-filters').show();
    setDescription(desc3);
    $('.zoom-out-button').html('<i class="material-icons rightarrow" >chevron_left</i>Practices');
    $('.btn-flat.remove').css('visibility', 'visible')
    $('.nav-item').removeClass('selected');
    $('.nav-item.three').addClass('selected');
    $('.nav-item.two').addClass('possible');
    $('.axis').fadeOut(transitionTime);
    $('.procedure-filters').css('display', 'none');
    if ($('.filterheader').css('display') == 'none') {
      $('.filterheader').fadeIn(transitionTime);
    }
    $('.netbutton').hide();
    $('.zoom-out-button').show();
    // $('.network-legend').addClass('show');
    offHover(null, d3.select('.tooltip'));
  }
  if (input == 2){
    setDescription(desc2);

    $('.graph1').css('display', 'none');
    $('.graph2').css('display', 'block');
    $('.graph3').css('display', 'none');
    $('#filters').hide()
    $('.axis').css('visbility', 'show');
    $('.nav-item.three').removeClass('possible');
    // $('.btn-flat.remove').css('visibility', 'hidden')
    $('.nav-item').removeClass('selected');
    $('.nav-item.two').addClass('selected');
    $('.network-legend').removeClass('show');
    $('.network-button').removeClass('show');
    $('.netbutton').show(transitionTime*1.5);
    $('.zoom-out-button').html('<i class="material-icons rightarrow" >chevron_left</i>Procedures');
    $('.zoom-out-button').show(transitionTime*1.5);

    $('.procedure-filters').css('display', 'none');
    if ($('.axis').css('display') == 'none') {
      $('.axis').fadeIn(transitionTime);
    }
    $('.filterheader').fadeOut(transitionTime);

    d3.selectAll('.pointer-holder').remove();
    offHover(null, d3.select('.tooltip'));
  }
  if (input == 1){
    setDescription(desc1);
    $('.graph1').css('display', 'block');
    $('.graph2').css('display', 'none');
    $('.graph3').css('display', 'none');
    $('.procedure-filters').show();
    $('.node-filters').hide();
    $('.netbutton').hide();
    $('.filterheader').fadeIn(transitionTime);
    if ($('.filterheader').css('display') == 'none') {
      $('.filterheader').fadeIn(transitionTime);
    }

    $('.zoom-out-button').hide();
    $('.axis').css('visbility', 'show');
    $('.nav-item.two').removeClass('possible');
    $('.nav-item.three').removeClass('possible');
    $('.btn-flat.remove').css('visibility', 'hidden')
    $('.nav-item').removeClass('selected');
    $('.nav-item.one').addClass('selected');
    $('.netbutton').hide();
    $('.network-legend').removeClass('show');
    $('.network-button').removeClass('show');
    $('.procedure-filters').css('display', 'block');
    if ($('.axis').css('display') == 'none') {
      $('.axis').fadeIn(100);
    }
    d3.selectAll('.pointer-holder').remove();
    offHover(null, d3.select('.tooltip'));
  }
};


function getCurrentPage(){
  return currentPage;
};
$('.zoom-out-button').on('click', function(e) {
    zoomed = true;
    d3.selectAll('.axis').transition().style('opacity', 1);
    if (getCurrentPage() == 2) {
        plotBlobs(filterData(getFilters()));
    } else if (getCurrentPage() == 3) {
        plotScatter(getCurrNodes())
    }
});




function modalChecker() {
    if (count == 0) {
        count = count + 1;
        $('.modal').removeClass('three').removeClass('two').removeClass('one').addClass('one');
    } else if (count == 1) {
        count = count + 1;
        $('.modal').removeClass('three').removeClass('two').removeClass('one').addClass('two');
    } else if (count == 2) {
        $('.modal-next').text('Done')
        count = count + 1;
        $('.modal').removeClass('three').removeClass('two').removeClass('one').addClass('three');
    } else {
        count = 0;
    }
}
$('.help-button').on('click', function() {
    count = getCurrentPage() - 1;
    $('.modal-next').text('Next')
    modalChecker();
    $('.modal').openModal();
});
$('.modal-linked').on('click', function() {
    count = 0;
    $('.modal-next').text('Next')
    modalChecker();
    $('.modal').openModal();
});

$('.modal-next').on('click', function() {
    if (count == 3) {
        $('.modal').closeModal();
    } else {
        modalChecker();
    }
});


////first we show only the selected PCP and fields
//click apply on filter and get all the specialists (filterActive)

//click remove on filter to remove all the specialists (filterInactive)
//click remove on selection to get all points (filterActive)

//filterApplied, filterNotApplied

var filterState = false;
function setFilterState(ind){
  filterState = ind;
}
function getFilterActive(){
  return filterState;
}


var nodeFilters = [];



function getNodeFilters(){
  //only works after filter is actually opened ? say wha mama
  //set initial values to 0 and 100
  //set and get methods
  //starts at 0 and 100


  nodeFilters = [];
  if (filterState){
    sliderWidth = $('.slider').width();

    nodeFilters.push([parseInt($('.cost .thumb-lower').get(0).style.left)/100,parseInt($('.cost .thumb-upper').get(0).style.left)/100]);
    nodeFilters.push([parseInt($('.frequency .thumb-lower').get(0).style.left)/100,parseInt($('.frequency .thumb-upper').get(0).style.left)/100]);
  } else {
    nodeFilters = [[0,0], [0,0], 'both'];
  }
  console.log(nodeFilters)
  return nodeFilters;
}


function setWidth(input){
  width = input;
}
function getWidth(){
  return width;
}
function setHeight(input){
  height = input;
}
function getHeight(){
  return height;
}
function setSVG(input){
  svg = input
}
function getSVG(){
  return svg;
}
var currData;
function setCurrData(input){
  currData = input;
}
function getCurrData(){
  return currData;
}
var origData;
function setOrigData(input){
  origData = input;
}
function getOrigData(){
  return origData;
}
var costData;
function setCostData(input){
    costData = input;
}
function getCostData(){
  return costData;
}
function filterData(filters){
  filtered = getOrigData().filter(function(d){
    return filters.indexOf(d.Minor) > -1
    ;
  })
  currData = filtered;
  return currData;
}
var currBlob;
function setCurrBlob(input){
    currBlob = input;
}
function getCurrBlob(){
  return currBlob;
}

var clickedNode;
var clickedNodeTargets;
function setClickedNode(input){

  d3.selectAll('circle').classed('selected-node', false)



  if (input){
    d = input.data()[0];
    var text ='';
    var typeString = '';
    var numberString = '';
    var freqString = '';
    if (d.ProviderType == 'PCP'){
      typeString = '<span class="provspan">PCP (' + Math.round(100*d.PctInNet) + '% In Network)</span>';
      freqString = Math.round(d.EventsPer1000) + ' events/1000 (' + Math.round(100*d.pctFrequency) + ' percentile)';
    } else {
      freqString = Math.round(d.Frequency) + ' events (' + Math.round(100*d.pctFrequency) + ' percentile)';
      if (d.InNetwork == 1) {
        typeString = '<span class="provspan">Specialist - In Network</span>';
      } else {
        typeString ='<span class="provspan">Specialist - Out of Network</span>'
      }
    }
    //routed to x specialists


    text = '<div class="selection-status nodebody">' + typeString + '<br>Cost/Event: '+ Math.round(d.CostPerEvent) + ' (' + Math.round(100*d.pctCost) + ' percentile) '+ '<br> Frequency: ' + freqString + '<div style="clear:both"></div><a class="btn waves btn-flat dist node-provider-button centered">Remove</a></div>'
    d3.select('.selected-content').html(text);
  }
  clickedNode = input;

}


function getLinks(source, target){
  links = filterNodeData(getCurrNodes()).links;
  var sourceInd;
  var link = links.filter(function(d){
    if (d.source.id == source.id && d.target.id == target.id){
      sourceInd = true;
      return d;
    } else if (d.source.id == target.id && d.target.id == source.id){
      sourceInd = false;
      return d;
    }
  })
  return [link[0], sourceInd];
}



function getClickedNode(){
  return clickedNode;
}
var styleFilter;
function setStyleFilter(input){
  styleFilter = input;
}
function getStyleFilter(){
  return styleFilter;
}


var currNodes;

function nodeData(input) {
    forceData = getNetworkMapData(input);

    nodes = forceData.nodes,
        links = forceData.links;

    minServ = d3.min(nodes, function(d) {
        return d.Frequency;
    });
    maxServ = d3.max(nodes, function(d) {
        if (d.ProviderType == "ServiceProvider") {
            return d.Frequency;
        } else {
            return 0;
        }
    });

    forceData.minorName = input[0].Minor;
    forceData.majorName = input[0].Minor;
    currNodes = forceData;
    return currNodes;
};
function getCurrNodes(){
  return currNodes;
}
var filters = [];
function setFilters(input){
  filters = input;
}
function getFilters(){
  return filters;
}

//
// $('.with-gap').on('click', function(e){
//   e.preventDefault();
//   $('.with-gap').attr('checked', false);
//   if (!$(this).attr('checked')){
//     $(this).attr('checked', 'checked')
//   }
// })
//

function resetNodes(){
  d3.selectAll('circle').classed('selected-node', false);
  setClickedNode(undefined);
  text = '<div class="selection-status nodebody"><div class="default-prov-msg">Click on a provider from the graph to show highlighted routes</div></div>';
  $('.selected-content').html(text)
  setTimeout(function(){$('.node-filter-button').trigger('click');}, 100)
}

function getColors(){
  //dark blue, light blue , light red, dark red
  return ['#7F96F4', '#c0c0fb','#ffb3bf', '#FF0068' ]
}


$('.netbutton').on('click', function(){
  d3.selectAll('.inner-band').data([]).exit().transition(300).remove();
  setCurrentPage(3);
  setFilterState(true)
  resetNodes();
  plotNodes(getCurrNodes().nodes);

  // $('.selection-status.nodebody').html('<div class="default-prov-msg">Click on a provider from the graph to show highlighted routes</div>')
  // $('.node-filter-button').trigger('click');

});




function setThumbToolTip(thumb, slider){
    var pct;
    pct = Math.abs(100*(thumb.offset().left-slider.offset().left+thumb.width())/slider.width());
    // thumb.find('.thumb-tooltip').html((pct/100).toFixed(1));
    return pct;
};

function mouseOverSlider(){
    // $(this).find('.thumb-tooltip').css('display', 'block');
    setThumbToolTip($(this).find('.thumb-upper'), $(this));
    setThumbToolTip($(this).find('.thumb-lower'), $(this));
};

//GET GRANULAR HERE
function mouseDownThumb(){

    var thumb  = $(this);
    var sliderParent = $(this).closest('.slider-block');
    var thumbToolTip = thumb.find('.thumb-tooltip').css('display', 'block');
    slider = sliderParent.find('.slider');

    if (thumb.hasClass('thumb-lower')){
        var pct = setThumbToolTip(sliderParent.find('.thumb-upper'), sliderParent.find('.slider'));
        sliderParent.mousemove(function(event){sliderMouseMove(sliderParent, thumb, 0, pct, true, false, thumbToolTip, event)} );
    }
    else if (thumb.hasClass('thumb-upper')){
        var pct = setThumbToolTip(sliderParent.find('.thumb-lower'), sliderParent.find('.slider'));
        sliderParent.mousemove(function(event){sliderMouseMove(sliderParent, thumb, pct, 100, false, true, thumbToolTip, event)} );
    };

    // if (thumb.hasClass('thumb-active')){
    //
    // };
    sliderParent.mouseup(mouseUpSlider).mouseleave(mouseUpSlider);
};
function sliderMouseMove(sliderParent, thumb, lowerbound, upperbound, lower, upper, thumbToolTip, event){
    var cssproperty;
    event.preventDefault();

    slider = sliderParent.find('.slider');


    var upperpos = null; var lowerpos = null;
    var upperY = slider.offset().left;
    var pct = 100*(event.pageX-upperY)/slider.width();
    cssproperty = 'left';
    pct = Math.max(lowerbound, Math.min(upperbound, pct));
    thumb.css(cssproperty, pct + '%');
    thumbToolTip.html((pct/100).toFixed(1));
    if (upper){
        filterUpperPct = pct;
        filterLowerPct = null;
    }
    else if (lower){
        filterUpperPct = null;
        filterLowerPct = pct;
    };

    // sliderParent.mouseup(function(){sliderParent.unbind('mouseup')});
    // sliderParent.mouseleave(function(){sliderParent.unbind('mousemove')});

};

//mouseleave triggers a data update
function mouseUpSlider(){
    $(this).unbind('mousemove');
    if (!$('.node-filter-button').hasClass('active')){
      $('.node-filter-button').addClass('active');
    }
    $(this).unbind('mouseup');
    $(this).unbind('mouseleave')
};

function mouseLeaveSlider(){
    // $(this).find('.thumb-tooltip').css('display', 'none');
};
$('.with-gap').on('click', function(){
  if (!$('.node-filter-button').hasClass('active')){
    $('.node-filter-button').addClass('active');
  }
});


$('.thumb').mousedown(mouseDownThumb);
//.mouseout(function(){$(this).removeClass('thumb-active')})

// $('.slider-block').mouseUp()
// $('.slider').mouseup(function(){
//   $('.thumb').mousemove(function(){})
// });

//.mouseover(function(){$(this).addClass('thumb-active')});
