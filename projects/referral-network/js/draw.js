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
    var xscale = d3.scalePow().exponent(0.3).range([0, getWidth()]).domain([xmin, xinput]);
    var yscale = d3.scalePow().exponent(0.4).range([getHeight(), 0]).domain([ymin, yinput]);

    // var xscale = d3.scaleLinear().range([50, getWidth()]).domain([xmin, xinput/4]);
    // var yscale = d3.scaleLinear().range([getHeight(), 0]).domain([ymin, yinput/5]);

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

function start(error, costData) {
    //CREATING CANVAS
    setCostData(costData);
    var div = d3.select("#graph-1");
    var width, height;
    width = getWidth();
    height = getHeight();
    offset = 0;


    var offset = 0;
    var innerWidth = width - offset;
    var innerHeight = height - offset;

    svg = getSVG();
    defs = svg.append('defs');
    var tooltip = d3.select('.tooltip');
    var filter;
    setWidth(innerWidth);
    setHeight(innerHeight);

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

        glowHard = defs.append('filter').attr('id', 'glow-hard')
        glowHard.append("feGaussianBlur")
        	.attr("stdDeviation","1.2")
        	.attr("result","coloredBlur");
        var glowFeMerge = glowHard.append("feMerge");
        glowFeMerge.append("feMergeNode")
        	.attr("in","coloredBlur");
        glowFeMerge.append("feMergeNode")
        	.attr("in","SourceGraphic");
          setStyleFilter(filter);

          glowLite = defs.append('filter').attr('id', 'glow-lite')
          glowLite.append("feGaussianBlur")
          	.attr("stdDeviation","0.25")
          	.attr("result","coloredBlur");
          var liteFeMerge = glowLite.append("feMerge");
          liteFeMerge.append("feMergeNode")
          	.attr("in","coloredBlur");
          liteFeMerge.append("feMergeNode")
          	.attr("in","SourceGraphic");
            setStyleFilter(filter);




    var widthtext = width-115;
    var xheight = innerHeight - 30;

    var leftOffset = $('.main').offset().left;
    var topOffset = $('.main').offset().top;
    var data = prepData(costData);
    setOrigData(data.MinorNest);
    setCurrData(data.MinorNest);

    //ADD LABELS
    d3.select('.main').append('g').attr('class', 'x axis').attr("transform", "translate(" + 0 +',' + xheight + ")")

    d3.select('.main').append("g").attr("class", "y axis")
        .attr('transform', 'translate(' + 40 + ',40)');


    //remove tooltips
    $('svg.main').on('click', function(e) {
      target = d3.select(e.target);
        if (!target.classed('inner-band') && !target.classed('pcp-point') && !target.classed('tooltip') && !target.classed('service-point') && !target.classed('circle')) {
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



    // $('.rescale').on('click', function(){
    //   $(this).removeClass('inactive')
    //   // t.x = Math.min
    //   d3.select('.zoomable').transition().duration(300).call(zoom.transform, d3.zoomIdentity.translate(0,0).scale(1));
    //   $('.rescale').removeClass('inactive');
    //
    // })

    setFilters(data.minorList);
    //GLOBAL SCALES
    var xMax, yMax;
    plotBlobs(filterData(getFilters()));
  }
