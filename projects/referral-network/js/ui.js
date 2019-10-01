var width, height;
width = $('.main-holder').width()- 20;
height = .65*width;
setWidth(width);
setHeight(height);

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
var currBlob;
function setCurrBlob(input){
    currBlob = input;
}
function getCurrBlob(){
  return currBlob;
}


function filterData(filters){
  origData = getOrigData();
  filtered = origData.filter(function(d, i){
    return filters.indexOf(d.Minor) > -1;
  })
  if (filtered.length < origData.length){
    numFiltered = 'Filters (' + (origData.length - filtered.length).toString()+ ')';
    d3.select('.filterheader').classed('applied', true).text(numFiltered);
  } else {
    d3.select('.filterheader').classed('applied', false).text('Filters (0)');
  }
  currData = filtered;
  return currData;
}

function setDescription(description){
  $('.graph-description').html(description)
}
function setCurrentPage(input){
  currentPage = input;
  if (input == 3){
    setWideZoom();
    d3.select('.main').style('border', '.5px solid rgba(0,0,0,.1)');
    $('.crumb').attr('class', 'crumb');
    $('.axis-label').hide(100);
    $('#three').addClass('selected');
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
    $('.filterheader').fadeIn(transitionTime).text('Filters');

    $('.netbutton').hide();
    $('.zoom-out-button').show();
    offHover(null, d3.select('.tooltip'));
  }
  if (input == 2){
    setNarrowZoom();
    setDescription(desc2);
    d3.select('.main').style('background-image', 'none').style('border', 'none');
    $('.axis-label').show(100);
    $('.crumb').attr('class', 'crumb');
    $('#two').addClass('selected');
    $('.graph1').css('display', 'none');
    $('.graph2').css('display', 'block');
    $('.graph3').css('display', 'none');
    $('#filters').hide()
    $('.axis').css('visbility', 'show');
    $('.nav-item.three').removeClass('possible');
    $('.nav-item').removeClass('selected');
    $('.nav-item.two').addClass('selected');
    // $('.network-legend').removeClass('show');
    // $('.network-button').removeClass('show');
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
    setNarrowZoom();
    d3.select('.main').style('background-image', 'none').style('border', 'none');
    setDescription(desc1);
    $('.axis-label').show(100);
    $('.crumb').attr('class', 'crumb disabled')
    $('#one').addClass('selected').removeClass('disabled');
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
    // $('.network-legend').removeClass('show');
    // $('.network-button').removeClass('show');
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

//DRAWING CONTAINERS

var offset = 0;
//ZOOM FUNCTIONS
var svg = d3.select("#graph-1").select('.main-holder').append('svg').attr('class', 'main').attr('height', getHeight()).attr('width', getWidth()).attr('x', 0).attr('y', 0);
svg = svg.append("svg").attr('height', innerHeight).attr('width', innerWidth).attr('x', 0).attr('y',-20).append('g').attr('class', 'zoomable').attr('transform', 'translate(0,0) scale(1)').attr('height', height-offset).attr('width', width-offset);
setSVG(svg);


function resetted() {
    svg.transition()
        .duration(750)
        .call(zoom.transform, d3.zoomIdentity.translate(0, 0).scale(1));
}

zoom = d3.zoom()
.scaleExtent([1, 5])
.on('zoom', function() {
    var t = d3.event.transform;
    // t.x = Math.min
    d3.select('.zoomable').attr("transform", t);
    var xAxis = getAxes()[0];
    var yAxis = getAxes()[1];
    d3.select(".x.axis").call(xAxis.scale(d3.event.transform.rescaleX(getScales()[0])));
    d3.select(".y.axis").call(yAxis.scale(d3.event.transform.rescaleY(getScales()[1])));
    $('.rescale').removeClass('inactive');
});

d3.select('svg').call(zoom).on("dblclick.zoom", null).on("click.zoom", null);
$('.rescale').on('click', function(){
  $(this).removeClass('inactive')
  // t.x = Math.min
  d3.select('.zoomable').transition().duration(300).call(zoom.transform, d3.zoomIdentity.translate(0,0).scale(1));
  $('.rescale').removeClass('inactive');
})

function setNarrowZoom(){
  zoom = zoom.translateExtent([[getWidth()/-10000, -99999999], [999999999,getHeight()+10]]);
}

function setWideZoom(){
  zoom = zoom.translateExtent([[-getWidth()*3,-getHeight()*1.5], [getWidth()*3,getHeight()*1.5]])

}



var desc1 = "'Network Explorer' begins with a procedure-level comparison of referral patterns. Each blob below represents referral patterns across a procedure category. Clicking into a procedure will break apart the distribution into individual points."

var desc2 = "For the selected procedure category, referral patterns for individual practices are shown. Clicking an individual practice will zoom into the full referral network for the selected provider."

var desc3 = "For the selected procedure category, all referrals over a 12 month period are visualized below. Each point in this graph represents an individual practice. Gray points are referring providers, and colored show servicing facilities."

var transitionTime = 150;


//NAVIGATION
function zoomMeOut(){
  zoomed = true;
  d3.selectAll('.axis').transition().style('opacity', 1);
  if (getCurrentPage() == 2) {
      plotBlobs(filterData(getFilters()));
  } else if (getCurrentPage() == 3) {
      plotScatter(getCurrNodes())
  }
}


//EVENT HANDLERS
$('#one').on('click', function(e){
  if (getCurrentPage() == 2){
    zoomMeOut();
  } else if (getCurrentPage() == 3){
    zoomMeOut();
    zoomMeOut();
  }
})
$('#two').on('click', function(e){
  if (getCurrentPage() == 3){
    zoomMeOut();
  }
})
$('#three').on('click', function(e){
  if (getCurrentPage() == 2){
    d3.selectAll('.inner-band').data([]).exit().remove();
    setCurrentPage(3);
    setFilterState(true)
    plotNodes(getCurrNodes().nodes);
  }
});

$('.filterheader').on('click', function(){
  if (!$(this).hasClass('active')){
    $(this).addClass('active');
    $('#filters').fadeIn(400);
  } else {
    $(this).removeClass('active');
    $('#filters').fadeOut(100);
  }
});
$('.graph-holder').on('click', function(e){
  // $('.legend-image').hide();
  // d3.select('.legend-btn').classed('active', false);
  $('#filters').hide();
  d3.select('.filterheader').classed('active', false);
});
d3.select('.legend-btn').on('click', function(e){
  d3.event.stopPropagation();
})
d3.select('.filterheader').on('click', function(e){
  d3.event.stopPropagation();
})
d3.select('#filters').on('click', function(e){
  d3.event.stopPropagation();
})


$('.legend-btn').on('click', function(e){
  currPage = getCurrentPage();
  var legendBtn = d3.select(this);
  $('.legend-image').hide();
  if (legendBtn.classed('active')){
    legendBtn.classed('active', false);
  } else {
    legendBtn.classed('active', true);
    if (currPage == 1 ){
      $('.legend-one').fadeIn(100);
    } else if (currPage == 2){
      $('.legend-two').fadeIn(100);
    } else if (currPage == 3) {
      $('.legend-three').fadeIn(100);
    }
  }


})
$('.nav-page.context').on('click', function(){
  $('.nav-page.visual').removeClass('selected');
  $(this).attr('class', 'nav-page context selected');
  $('.scroll-holder').fadeOut(200);
  $('.project-context').fadeIn(400);
  $(".scroll-holder").animate({ scrollTop: 0 }, "fast");
})
$('.nav-page.visual').on('click', function(){
  $('.nav-page.context').removeClass('selected');
  $(this).attr('class', 'nav-page visual selected');
  $('.project-content').fadeOut(200);
  $('.scroll-holder').fadeIn(400);
  $(".scroll-holder").animate({ scrollTop: 0 }, "fast");
})


//NODE ACCESSORS
var clickedNode;
var clickedNodeTargets;

var selectedProvChip = d3.select('.selected-provider-chip');
function setClickedNode(input){
  d3.selectAll('circle').classed('selected-node', false)
  if (input){
    d = input.data()[0];
    var text ='';
    var typeString = '';
    var numberString = '';
    var freqString = '';
    var chipString = '';
    if (d.ProviderType == 'PCP'){
      typeString = '<span class="provspan">Practice (' + Math.round(100*d.PctInNet) + '% In Network)</span>';
      freqString = Math.round(d.EventsPer1000) + ' events/1000 (' + Math.round(100*d.pctFrequency) + ' percentile)';
      chipString = 'Practice'
    } else {
      freqString = Math.round(d.Frequency) + ' events (' + Math.round(100*d.pctFrequency) + ' percentile)';
      chipString = 'Service facility'
      if (d.InNetwork == 1) {
        typeString = '<span class="provspan">Service Facility (In-network)</span>';

      } else {
        typeString ='<span class="provspan">Service Facility (Out-of-network)</span>'
      }
    }
    text = '<div class="selection-status nodebody">' + typeString + '<br>Cost/Event: '+ Math.round(d.CostPerEvent) + ' (' + Math.round(100*d.pctCost) + ' percentile) '+ '<br> Frequency: ' + freqString + '</div><div class="btn-flat dist node-provider-button">Remove</div></div>'
    d3.select('.selected-content').html(text);

    textChip = chipString + ' routes selected (x)'
    selectedProvChip.html(textChip).transition(300).style('opacity', '1');
  }
  clickedNode = input;
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
var currNodes;
//this is used by second graph
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
//this is resetting from selection really.
//what if you have filters and then select. should it just clear? or restore. prob restore

var filterState = false;
var filterhead =  d3.select('.filterheader');

//disabled

//filters are active but not really applied
//really filters are not active with clicked node
function setFilterState(ind){ //false means they may be paused. true means working, but no filtered prov. filtered prov is from clickednode.
  nodeFilters = getNodeFilters();
  if (getClickedNode()){
    filterhead.classed('active', false).classed('applied', true);
    d3.select('.nodebody.specialists').classed('disabled', true);
  } else if (ind){
    d3.select('.nodebody.specialists').classed('disabled', false);
    if (nodeFilters[0][0] != 0 || nodeFilters[1][0] != 0 || nodeFilters[0][1] != 1 || nodeFilters[1][1] != 1){
      filterhead.classed('applied', true);
    } else {
      filterhead.classed('active', false).classed('applied', false);
    }
  } else if (!ind){
    bothbtn = document.getElementById("both-types");
    both.checked = true;
    lowerThumb =  d3.selectAll('.thumb.thumb-lower');
    upperThumb =  d3.selectAll('.thumb.thumb-upper');
    lowerThumb.style('left', 0);
    lowerThumb.selectAll('.thumb-tooltip').text('0.0')
    upperThumb.style('left', '100%');
    upperThumb.selectAll('.thumb-tooltip').text('1.0')
  }
  filterState = ind;
}
function getFilterActive(){
  return filterState;
}
var nodeFilters = [];

//these are just the slider filters. in or out of network state is in the next.
function getNodeFilters(){
  nodeFilters = [];
  networkState =  $("input:checked" ).attr('id');
  if (getClickedNode()) {
    nodeFilters = [[0,0], [0,0]];
  } else {
    sliderWidth = $('.slider').width();
    nodeFilters.push([parseInt($('.cost .thumb-lower').get(0).style.left)/100,parseInt($('.cost .thumb-upper').get(0).style.left)/100]);
    nodeFilters.push([parseInt($('.frequency .thumb-lower').get(0).style.left)/100,parseInt($('.frequency .thumb-upper').get(0).style.left)/100]);
    nodeFilters.push(networkState);
  }
  return nodeFilters;
}

function filterNodeData(input){
  thisfilter = getNodeFilters();
  var newForceData = jQuery.extend({}, input);
  var networkState = thisfilter[2];
  var filteredNodes = new Array();
  filteredNodes = newForceData.nodes.filter(function(d){
    if (d.ProviderType == 'ServiceProvider'){
      var netState;
      if (networkState == 'both'){
        netState = true;
      } else {
        netState = false;
        if (d.InNetwork == 1 && networkState == 'in'){
          netState = true;
        } else if (d.InNetwork == 0 && networkState == 'out') {
          netState = true;
        }
      }
      return d.pctFrequency >= thisfilter[1][0] && d.pctFrequency <= thisfilter[1][1] && d.pctCost >= thisfilter[0][0] && d.pctCost <= thisfilter[0][1] && netState;
    }
  })
  if (getClickedNode()){
    filteredNodes.push(clickedNode.data()[0]);
  }
  filteredNodeIDs = filteredNodes.map(function(d){
    return d.id
  })
  filteredLinks = newForceData.links.filter(function(d){
    if (filteredNodeIDs.indexOf(d.source.id) > -1 || filteredNodeIDs.indexOf(d.target.id) > -1){
      if (filteredNodeIDs.indexOf(d.source.id) == -1){
        filteredNodes.push(d.source)
      }
      if (filteredNodeIDs.indexOf(d.target.id) == -1){
        filteredNodes.push(d.target);
      }
      return d;
    }
    // return filteredNodeIDs.indexOf(d.source.id) > -1 || filteredNodeIDs.indexOf(d.target.id) > -1 ;
  })
  newForceData.nodes = filteredNodes;
  newForceData.links = filteredLinks;
  return newForceData;
}


//NODE FILTER UI ELEMENTS
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
$('.thumb').mousedown(mouseDownThumb);
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

//HELPERS
function getColors(){
  return ['#7F96F4', '#c0c0fb','#ffb3bf', '#FF0068' ]
}
