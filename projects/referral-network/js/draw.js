var zoomed;
var theRadius = 8;
var width;
var height;
var svg;

var xaxis;
var yaxis;

function setAxes(xinput, yinput){
  xaxis = xinput;
  yaxis = yinput;
}
function getAxes(){
  return [xaxis, yaxis];
}
var xscale, yscale;
function setScales(x, y){
  xscale = x;
  yscale = y;
}
function getScales(){
  return [xscale, yscale];
}

function scale(xmin, xinput, ymin, yinput) {
    // var xscale = d3.scaleLinear().range([30, getWidth()-40]).domain([0, xinput]);
    // var yscale = d3.scaleLinear().range([getHeight()-27, 27]).domain([0, yinput]);
    var xscale = d3.scalePow().exponent(0.3).range([0, getWidth()]).domain([xmin, xinput]);
    var yscale = d3.scalePow().exponent(0.4).range([getHeight(), 0]).domain([ymin, yinput]);
    // setScales(xscale, yscale);
    // var yscale = d3.scaleLinear().range([getHeight(), 0]).domain([0, yinput]);
    setScales(xscale, yscale);
    var newXaxis = d3.axisBottom(xscale).ticks(8).tickSize(0).tickPadding(15);
    var newYaxis = d3.axisLeft(yscale).ticks(6).tickSize(0).tickPadding(15);
    setAxes(newXaxis, newYaxis);
    d3.select('.x.axis').call(newXaxis);
    d3.select('.y.axis').call(newYaxis);


    return [xscale, yscale];
};


function findTopSpecialists(input){
  var newForceData = jQuery.extend({}, getCurrNodes());
  var filteredLinks = newForceData.links.filter(function(d, i){
    //why does data struct change for links here?
    if (d.source == input.id || d.target == input.id || d.source.id == input.id || d.target.id == input.id){
      return d;
    }
  });
  var targetVals = filteredLinks.map(function(d){return d.target});

// getCurrNodes().links.filter(function(d){
//   if (d.source.ProviderType == 'PCP' && d.target.ProviderType == 'PCP')
//     {console.log('yamma', d)}
//   })

  var filteredNodes = newForceData.nodes.filter(function(d){
    if (targetVals.indexOf(d.id) > -1){
      return d;
    }
  });
  filteredNodes = filteredNodes.sort(function(a,b){
    return b.Frequency - a.Frequency;
  })

  filteredLinks = filteredLinks.sort(function(a,b){
    return b.rawFrequency - a.rawFrequency;
  })
  function getNetString(x){
    console.log(x)
    if (x.inNetwork == 1){
      return ' in network '
    } else {
      return ' out of network '
    }
  }
  ///pcp cost and tooltips do not add p
  var text = '';
  if (filteredLinks.length > 1) {
    text = '<div class="tip-comp" style="margin-top: 16px;"><div style="font-weight:600; color:gray">Top Facilities Referred To</div><div class="facility cutoff" style="padding-top:0px"><strong>'
    + filteredLinks[0].targetName.toLowerCase() + '</strong><br>' + filteredLinks[0].rawFrequency + getNetString(filteredLinks[0]) + 'events, $' + Math.round(filteredLinks[0].rawCost) + ' each</div><div class="facility cutoff"><strong>'
    + filteredLinks[1].targetName.toLowerCase() + '</strong><br>' + filteredLinks[1].rawFrequency + getNetString(filteredLinks[1]) + 'events, $' + Math.round(filteredLinks[1].rawCost) + ' each</div><div class="facility"><strong></div></div>'
  } else {
    text = '<div class="tip-comp" style="margin-top: 16px;"><div style="font-weight:600; color:gray">Top Facilities Referred To</div><div class="facility cutoff" ><strong>'
    + filteredLinks[0].targetName.toLowerCase() + '</strong><br>' + filteredLinks[0].rawFrequency + getNetString(filteredLinks[0]) + 'events, $' + Math.round(filteredLinks[0].rawCost) + ' each</div><div class="facility"><strong></div>'
  }
  //+ filteredNodes[2].ServiceFacility + '</strong><br>' + filteredNodes[2].Frequency + getNetString(filteredNodes[2]) + 'events, $' + Math.round(filteredNodes[2].CostPerEvent) + ' each</div></div>'

  ;

  return text;
}

function filterNodeData(input){
  thisfilter = getNodeFilters();
  var newForceData = jQuery.extend({}, input);
  var networkState = $("input:checked" ).attr('id')

  var filteredNodes = newForceData.nodes.filter(function(d){
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
      return d.pctFrequency > thisfilter[1][0] && d.pctFrequency < thisfilter[1][1] && d.pctCost > thisfilter[0][0] && d.pctCost < thisfilter[0][1] && netState;
    };
  })
  //////
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


function start(error, costData) {
    //CREATING CANVAS
    setCostData(costData);
    var div = d3.select("#graph-1");
    var width, height;
    width = $('#graph-1').width();
    height = .65*width;
    var offset = 70;
    var innerWidth = width - offset;
    var innerHeight = height - offset;

    var svg = div.select('.main-holder').append('svg').attr('class', 'main').attr('height', height).attr('width', width);
    svg = svg.append("svg").attr('height', innerHeight).attr('width', innerWidth).attr('x', offset).attr('y', 5).append('g').attr('class', 'zoomable').attr('transform', 'translate(0,0) scale(1)').attr('height', height-offset).attr('width', width-offset);
    setSVG(svg);
    defs = svg.append('defs');
    var tooltip = d3.select('.tooltip');
    var filter;
    setWidth(innerWidth);
    setHeight(innerHeight);
    // filter = defs
    //     .append('filter')
    //     .attr('id', 'gauss') /// !!! important - define id to reference it later
    //     .append('feGaussianBlur')
    //     .attr('in', 'SourceAlpha')
    //     .attr('stdDeviation', 3) // !!! important parameter - blur
    //     .attr('result', 'blur');

      var filter = defs.append("filter")
      	.attr("id","glow");
      filter.append("feGaussianBlur")
      	.attr("stdDeviation",".5")
      	.attr("result","coloredBlur");
      var feMerge = filter.append("feMerge");
      feMerge.append("feMergeNode")
      	.attr("in","coloredBlur");
      feMerge.append("feMergeNode")
      	.attr("in","SourceGraphic");

        setStyleFilter(filter);

        var widthtext = width-115;

        var xheight = innerHeight + 5;
    d3.select('.main').append('g').attr('class', 'x axis').attr("transform", "translate(" + offset +',' + xheight + ")")
        .append('text').text('Cost/Event').attr('transform', 'translate(' + widthtext + ',' + offset/1.2 + ')')
        .attr('class', 'x-label');
    d3.select('.main').append("g").attr("class", "y axis")
        .attr('transform', 'translate(' + offset + ',5)')
        .append('text').text('Events/1000').attr('transform', 'translate(' + -offset/1.3 + ', ' + 0 + ') rotate(-90)')
        .attr('class', 'y-label');

    var zoom = d3.zoom()
    .scaleExtent([1, 5])
    .translateExtent([[getWidth()/-10000, -99999999], [999999999,getHeight()+offset+10]])
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
    function resetted() {
        svg.transition()
            .duration(750)
            .call(zoom.transform, d3.zoomIdentity.translate(0, 0).scale(1));
    }
    d3.select('svg').call(zoom).on("dblclick.zoom", null).on("click.zoom", null);
    var leftOffset = $('.main').offset().left;
    var topOffset = $('.main').offset().top;
    var data = prepData(costData);
    setOrigData(data.MinorNest);
    setCurrData(data.MinorNest);


    $('svg.main').on('click', function(e) {
        if (!$(e.target).attr('class').includes('inner-band') && !$(e.target).attr('class').includes('pcp-point') && !$(e.target).hasClass('tooltip') && !$(e.target).attr('class').includes('service-point')) {
          d3.selectAll('circle').classed('selected-node', false);
            offHover(null, tooltip);

        }
    });

    //FILTER FUNCTIONS HERE
    function generateCheckBox(element, tier){
      var html = ''
      if (tier == 'tier-1'){
        html = html.concat('<div class="left tier-1 collapse expanded"><i class="material-icons">arrow_drop_down</i></div><div class="checkholder"><div class="left box"></div><div class="left content">',element, '</div></div>' );
      }
      else if (tier == 'tier-2'){
        html = html.concat('<div class="left tier-2 collapse"><i class="material-icons">arrow_drop_down</i></div><div class="checkholder"><div class="left box"></div><div class="left content">',element, '</div></div>' );
      }
      else {
        html = html.concat('<div class="checkholder"><div class="left box"></div><div class="left content">',element, '</div></div>' );
      }
      return html;
    }


    $('#filters').css('max-height', height);
    var tier1 = d3.select('#filters').select('.procedure-filters').selectAll('.tier-1.holder').data(data.MajorNest)
      .enter().append('div').attr('class', 'tier-1 holder');

    tier1 = tier1.append('div').attr('class', 'tier-1 selector row').html(function(d){return generateCheckBox(d.key, 'tier-1')})

    d3.selectAll('.tier-1.holder').selectAll('.tier-2.holder').data(function(d){return d.values}).enter().append('div').attr('class', 'tier-2 holder').append('div').attr('class', 'tier-2 selector row').html(function(d){return generateCheckBox(d.key, 'tier-2')});

    d3.selectAll('.tier-2.holder').selectAll('.tier-3.holder').data(function(d){return d.values}).enter().append('div').attr('class', 'tier-3 holder').append('div').attr('class', 'tier-3 selector row').html(function(d){return generateCheckBox(d.key)});


//$(this).closest('.tier-1.holder')
    $('.collapse').on('click',function(){
      if ($(this).hasClass('expanded')){
        $(this).removeClass('expanded');
        if ($(this).hasClass('tier-1')){
          $(this).closest('.holder').find('.tier-2').hide(100);
        } else {
          $(this).closest('.holder').find('.tier-3').hide(100);
        }

      } else {
        $(this).addClass('expanded');
        if ($(this).hasClass('tier-1')){
          $(this).closest('.holder').find('.tier-2').show(100);
        } else {
          $(this).closest('.holder').find('.tier-3').show(100);
        }
      }
    });

    $('.checkholder').on('click', function(){
      if ($(this).hasClass('unselected')){
        $(this).removeClass('unselected');
        $(this).closest('.holder').find('.checkholder').removeClass('unselected');
      } else {
        $(this).addClass('unselected');
        $(this).closest('.holder').find('.checkholder').addClass('unselected');
      }
      checkFilters();
    })

    function checkFilters(){
      var minorfilters = [];
      $('.checkholder').each(function(d){
        if (!$(this).hasClass('unselected')){
          minorfilters.push($(this).text());
        }
      })
      setFilters(minorfilters);
      plotBlobs(filterData(getFilters()));
    };

    $('.filterheader').on('click', function(){
      if (!$(this).hasClass('active')){
        $(this).html('<i class="material-icons">close</i>Filter');
        $(this).addClass('active');
        $('#filters').fadeIn(400);
      } else {
        $(this).html('<i class="material-icons">filter_list</i>Filter');
        $(this).removeClass('active');
        $('#filters').fadeOut(100);
      }

    });

    $('.rescale').on('click', function(){
      $(this).removeClass('inactive')
      // t.x = Math.min
      d3.select('.zoomable').transition().duration(300).call(zoom.transform, d3.zoomIdentity.translate(0,0).scale(1));
      $('.rescale').removeClass('inactive');

    })

    setFilters(data.minorList);
    //GLOBAL SCALES
    var xMax, yMax;
    plotBlobs(filterData(getFilters()));
  }