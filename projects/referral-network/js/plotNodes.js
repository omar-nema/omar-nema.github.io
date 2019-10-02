var simulation, scaleColor, scaleOpacity, pointRadiusScale, minRad, maxRad;
var inColorScale;
var outColorScale;
var serviceColorScale;
var simulation;

function plotNodes(nodes, clickedNode) {


    $('.subtitle').text('Referral Network: ' + getCurrBlob()[0].Minor + ' Visits (Graph 3/3)');
    var tooltip = d3.select('.tooltip');
    setCurrentPage(3);
    minRad = 7;
    maxRad = 45;
    var maxFreq = d3.max(forceData.nodes, function(d) {
        return d.Frequency;
    })
    var minFreq = d3.min(forceData.nodes, function(d) {
        return d.Frequency;
    })
    var maxCost = d3.max(forceData.nodes, function(d) {
        return d.CostPerEvent;
    })
    var minCost = d3.min(forceData.nodes, function(d) {
        return d.CostPerEvent;
    })
    var maxPCPFreq = d3.max(forceData.nodes, function(d) {
        if (d.ProviderType == 'PCP') {
            return d.Frequency
        };
    })
    var minPCPFreq = d3.min(forceData.nodes, function(d) {
        if (d.ProviderType == 'PCP') {
            return d.Frequency
        };
    })
    var serviceColorScale =  d3
        .scaleLinear()
        .domain([0, 0.5, 1])
        .range(['#078c07', '#a7a5a5', '#d60459'])

    // var serviceColorScale = d3.scaleSequential(d3.interpolateRdGy)  ;
        // .range(['#03caa5', '#03caa5','#c0c0c5' , '#ca31ca', '#ca31ca']);

    var scaleColor = d3.scaleSequential(d3.interpolatePRGn).domain([0, 1])
    var scaleOpacity = d3.scaleLinear().domain([minServ, maxServ]).range([.9, 1]);
    var pointRadiusScale = d3.scalePow(0.3).domain([minFreq, maxFreq]).range([minRad, maxRad]);
    var scaleStrokeOpacity = d3.scaleLinear().domain([0, 0.05, .1, .4, .6, 1]).range([.05, .25, .8, .9, .95, 1]);
    var scaleFillOpacity = d3.scaleLinear().domain([0, .1, .2, .5,  1]).range([.1, .15, .2, .4, 1])
    var scaleStrokeWidth = d3.scalePow(0.8).domain([0, 1]).range([.5, 6.0]);
    var scalePCPOpacity = d3.scalePow(0.3).domain([minPCPFreq, maxPCPFreq / 3]).range([0, 1]);

    var simulation = d3.forceSimulation(nodes)
        .alphaDecay(0.3)
        .force('collide', d3.forceCollide(function(d) {
            if (d.ProviderType == 'PCP') {
                return 3.5;
            } else {
                return 2*pointRadiusScale(d.Frequency);
            }
        }))
        .force('forceX', d3.forceX(width * .5).strength(0.04))
        .force('forceY', d3.forceY(height * .5).strength(0.04))
        .force('link', d3.forceLink().links(links).strength(function(d) {
                return d.value
            })
            .id(function(d) {
                return d.id
            }))
        .force('charge', d3.forceManyBody().strength(function(d) {
            return -70;
        }))
        .stop()

    var parameters = ['static', simulation, scaleColor, scaleOpacity, pointRadiusScale, scaleStrokeOpacity, scaleStrokeWidth, scaleFillOpacity, scalePCPOpacity,maxFreq, serviceColorScale]

    d3.selectAll('.pcp-point').data([]).exit().remove();
    setClickedNode(clickedNode);
    setFilterState(false);
    generateElements(parameters);

}


function generateElements(parameters) {


    clickedInd = false;
    type = parameters[0];
    simulation = parameters[1];
    scaleColor = parameters[2];
    scaleOpacity = parameters[3];
    pointRadiusScale = parameters[4];
    scaleStrokeOpacity = parameters[5];
    scaleStrokeWidth = parameters[6];
    scaleFillOpacity = parameters[7];
    scalePCPOpacity = parameters[8];
    maxFreq = parameters[9]
    serviceColorScale = parameters[10];

    function returnFillOpacity(d) {
      return scaleFillOpacity(d.pctFrequency);
    };
    function returnColor(d) {
        if (d.ProviderType == 'ServiceProvider'){
          return serviceColorScale(d.pctCost);
        }
        else {
            return '#717171'
        }
    };

    var minServ, maxServ, minCost, maxCost;
    var tooltip = d3.select('.tooltip');
    var width = $("#graph-1").width() / 3;
    var height = width / 3;
    var leftOffset = $('.main').offset().left;
    var topOffset = $('.main').offset().top;
    //var minorBlob = d3.select(inputBlob);

    var minorBlob = getSVG();

    if (type == 'static') {
        d3.timeout(function() {
            for (var i = 0, n = Math.ceil(Math.log(simulation.alphaMin()) / Math.log(1 - simulation.alphaDecay())); i < n; ++i) {
                simulation.tick();
            }
            drawNodes();
            // updateNodes();
            setTimeout(function() {
                updateNodes(clickedNode)
            }, 1000)
        })
    } else {
        drawNodes();
    }

    var fadeOpacity = 0.06;


    function drawNodes() { //initialize nodes and add unchanging values
        var allNodes = minorBlob.selectAll('circle').data(forceData.nodes, function(d) {
            return d.id
        });
        var link = minorBlob.selectAll('.link').data(forceData.links, function(d) {
                return d.index
            }).enter().insert('line', 'circle')
            ;
        link
            .attr("x1", function(d) {
                return d.source.x;
            })
            .attr("y1", function(d) {
                return d.source.y;
            })
            .attr("x2", function(d) {
                return d.target.x;
            })
            .attr("y2", function(d) {
                return d.target.y;
            })
            .attr('stroke', function(d) {
                return returnColor(d.target)
            })
            .attr('opacity', fadeOpacity)
            .attr('class', 'link')
            ;
        allNodes.enter().append('circle').attr('z-index', 1);
        minorBlob.selectAll('circle')
            .style('mix-blend-mode', 'inherit')
            .style('filter', function(d){
              if (d.ProviderType == 'ServiceProvider'){
                if (d.pctFrequency > 0.8 ){
                  return 'url(#glow)';
                } else {
                  return  'url(#glow-lite)';
                }
              }
            })
            .attr('class', 'circle')
            .attr('z-index', 1)
            .on('click', function(d) {
                d3.select(this).on('mouseout', function(d) {
                    //ensures that clicked tooltip remains on mouseout
                })
                offFlat(null, tooltip);
                var text = '';
                if (d.ProviderType == 'PCP') {
                    text = '<span class="col s12 center-align"><div class="tipheader cutoff">Practice Details' +
                        '<br><span class="secondary-tip">' + blobName + ' Referrals</span></div><p class="tip-text" style="text-align:left; padding-left: 0; margin-left:0 ">' +
                        'Cost/Evt: $' + Math.round(d.CostPerEvent * 10) / 10 + ' (' + Math.round(100 * d.pctCost) + ' percentile)' +
                        '<br>Evt/1000: ' + Math.round(d.EventsPer1000 * 10) / 10 + ' (' + Math.round(d.Frequency) + ' events)' + '<br>' +  Math.round(d.PctInNet*100) + '% In Network' +
                        '</p><p class="center-align" style="text-align:center; margin-top:10px; font-size:14px"><a class="btn waves btn-flat refer white grey-text">Highlight referral path<i class="material-icons" style="font-size:11px; padding-left:3px">launch</i></a></p>';
                } else {

                    var networkString = '';
                    if (d.InNetwork == 1) {
                        networkString = 'In Network'
                    } else {
                        networkString = 'Out of Network'
                    }
                    text = '<span class="col s12 center-align"><div class="tipheader cutoff">Service Facility (' + networkString + ')' +
                        '<br><span class="secondary-tip">' + blobName + ' Referrals</span></div><p class="tip-text" style="text-align:left; padding-left: 0; margin-left:0 ">' +
                        '' + d.ServiceFacility + '<br>'  +
                        'Cost/Evt: $' + Math.round(d.CostPerEvent * 10) / 10 + ' (' + Math.round(100 * d.pctCost) + ' percentile)' +
                        '<br># Referrals: ' + d.Frequency + ' (' + Math.round(100 * d.pctFrequency) + ' percentile)' +
                        '</p><p class="center-align" style="text-align:center; margin-top:10px; font-size:14px"><a class="btn waves btn-flat refer white grey-text">Highlight referral path<i class="material-icons" style="font-size:11px; padding-left:3px">launch</i></a></p>';
                }
                onHover(text, null, d3.select('.tooltip'));

                $('.clickable').on('click', function() {
                    offHover(null, tooltip);
                })
                var me = d3.select(this);
                $('.btn-flat.refer').on('mousedown', function() {
                    setClickedNode(me);
                    setFilterState(false);
                    offHover(null, tooltip);
                    updateNodes(clickedNode);
                });
            })
            .attr('fill', function(d) {
              if (d.ProviderType == 'ServiceProvider' && d.InNetwork == 1){
                return serviceColorScale(d.pctCost);
              } else if (d.ProviderType == 'ServiceProvider' && d.InNetwork == 0){
                return '#f2f5f7';
              }
              else {
                  return 'black'
              }
            })
            .attr('stroke', function(d) {
              if (d.ProviderType == 'ServiceProvider' && d.InNetwork == 0){
                  return returnColor(d);
              }
              else  {
                return '#565353';
              }
            })
            .attr('stroke-width', function(d){
              if (d.ProviderType == 'ServiceProvider' && d.InNetwork == 0){
                  return pointRadiusScale(d.Frequency)/5;
              } else  {
                return 0.5;
              }
            })
            .attr('r', function(d) {
                if (d.ProviderType == 'PCP') {
                    return 3.5;
                } else {
                    return pointRadiusScale(d.Frequency);
                }
            })
            .attr("cx", function(d) {
                return d.x;
            })
            .attr("cy", function(d) {
                return d.y;
            })
            .attr('opacity', 0.1)
            ;

        $('.remove.btn-flat').on('mousedown', function(d) {
            minorBlob.selectAll('.link').classed('showme', false);
            minorBlob.selectAll('circle').classed('showme', false);
            d3.selectAll('.pointer-holder').remove();
        });
        //should all be handed in ui.js
        d3.select('minorBlob.main').classed('loading', false);
        $('.network-legend').addClass('show');
        d3.select('.loading').classed('show', false);
        $('.network-button').addClass('show');
    }


    function updateNodes() {

        minorBlob = getSVG();
        $('.node-provider-button').on('click', function() {
            setFilterState(true);
            resetNodes();
        });
        $('.selected-provider-chip').on('click', function(){
          setFilterState(true);
          resetNodes();
        })
        var filtered = filterNodeData(getCurrNodes());
        var selectedNodes = minorBlob.selectAll('circle').data(filtered.nodes, function(d) {
            return d.id
        });
        var selectedLines = minorBlob.selectAll('.link').data(filtered.links, function(d) {
            return d.index
        });

        selectedNodes.exit()
            .on('mouseover', null)
            .style('pointer-events', 'none')
            .style('cursor', 'inherit')
            .transition()
            .attr('opacity', fadeOpacity)
            ;
        selectedLines.exit()
            .attr('opacity', fadeOpacity);


        var minOpacity = 0;
        var minStrokeOpacity=  0;
        if (filterhead.classed('applied')){ //bad practice oh well
          minOpacity = 0.65;
          minStrokeOpacity = 0.3;
        }

        var clickednode = getClickedNode();
        if (clickednode) {
          clickednode.classed('selected-node', true);
            selectedNodes
                .style('pointer-events', 'inherit')
                .on('mouseover', function(d) {
                    var text, networkString;
                    if (d.id == clickednode.data()[0].id){
                      if (d.ProviderType == 'PCP') {
                          text = '<div>Practice - ' + d.Frequency + ' referrals, ' + Math.round(d.PctInNet*100) + '% in-network <i class="material-icons clicktip">launch</i></div>'
                      } else {
                          if (d.InNetwork == 1) {
                              networkString = 'In Network'
                          } else {
                              networkString = 'Out of Network'
                          }
                          text = '<div>Service Facility - ' + d.Frequency + ' referrals $' + d.CostPerEvent + ' (' + networkString + ')<i class="material-icons clicktip">launch</i></div>'
                      }
                    } else {
                      linkreturn =  getLinks(d, getClickedNode().data()[0]);
                      var pctTotalFreq, totalFreq, text;
                      if (linkreturn[1] == false){
                        totalFreq = linkreturn[0].source.Frequency;
                      } else {
                        totalFreq = linkreturn[0].target.Frequency;
                      }
                      pctTotalFreq = Math.round(100*(linkreturn[0].rawFrequency/totalFreq));
                      if (d.ProviderType == 'PCP') {
                          text = '<div>Practice - ' + pctTotalFreq + "% of referrals for selected facility" + '<i class="material-icons clicktip">launch</i></div>'
                      } else {
                          text = '<div>Service Facility - ' + pctTotalFreq + "% of referrals for selected practice" + '<i class="material-icons clicktip">launch</i></div>'
                      }
                    }
                    flatToolTip(text, tooltip)
                    d3.select(this).on('mouseout', function(d) {
                        offFlat(null, tooltip)
                    })
                })
                .style('cursor', 'pointer')
                .transition()
                .attr('stroke-opacity', 1)
                .attr('fill-opacity', 1)
                .attr('opacity', 1)
                ;
            selectedLines
                .transition()
                .attr('opacity', 1)
                .attr('stroke-width', function(d){
                  return 2*scaleStrokeWidth(d.value);
                })
                .attr('stroke-opacity', function(d) {
                    if (d.source.id ==  getClickedNode().data()[0].id){
                        return Math.max(scaleStrokeOpacity(d.value), .6);
                    } else {
                        return Math.max(scaleStrokeOpacity(d.value), .6);
                    }

                })
            clickednode.transition().attr('fill-opacity', 1).attr('stroke', 'black').attr('stroke-width', 1.5)
            ;
        } else {
            selectedNodes
                .style('cursor', 'pointer')
                .style('pointer-events', 'inherit')
                .on('mouseover', function(d){
                    var text;
                    if (d.ProviderType == 'ServiceProvider') {
                       if (d.InNetwork == 1) {
                           networkString = 'In Network'
                       } else {
                           networkString = 'Out of Network'
                       }
                       text = '<div>Service Facility - ' + d.Frequency + ' referrals $' + d.CostPerEvent + ' (' + networkString + ')<i class="material-icons clicktip">launch</i></div>';
                   } else {
                       text = '<div>Practice - ' + d.Frequency + ' referrals $' + Math.round(d.CostPerEvent, 2) + '<i class="material-icons clicktip">launch</i></div>';                   }
                   flatToolTip(text, tooltip);
                   d3.select(this).on('mouseout', function(d) {
                       offFlat(null, tooltip)
                   })
                 })
                 .attr('stroke-width', function(d){
                   if (d.ProviderType == 'ServiceProvider' && d.InNetwork == 0){
                       return pointRadiusScale(d.Frequency)/5;
                   } else  {
                     return 0.5;
                   }
                 })
                .transition()
                .attr('fill-opacity', function(d) {
                    return Math.max(minOpacity, returnFillOpacity(d));
                })
                .attr('stroke-opacity', function(d) {
                    return Math.max(minOpacity, returnFillOpacity(d));
                })
                .attr('opacity', 1)
                ;
            selectedLines
                .transition()
                .attr('opacity', 1)
                .attr('stroke-opacity', function(d) {
                    return Math.max(minStrokeOpacity, scaleStrokeOpacity(d.value));
                })
                .attr('stroke-width', function(d){
                  return scaleStrokeWidth(d.value);
                })
        }
    };

    function nodeSelectionClick() {
        setFilterState(true);
        $('.selection-status.nodebody').html('<div class="default-prov-msg">Click on a provider from the graph to show highlighted routes</div>')
        $('.node-filter-button').trigger('click');
    };

    function resetNodes(){
      d3.selectAll('circle').classed('selected-node', false);
      setClickedNode(undefined);
      setFilterState(true);
      text = '<div class="selection-status nodebody"><div class="default-prov-msg">Click on a provider from the graph to show highlighted routes</div></div>';
      $('.selected-content').html(text);
      selectedProvChip.transition(300).style('opacity', '0').on('end', function(){
        d3.select(this).html('');
        updateNodes();
      });
    }



    //this is the clear button
    $('.node-remove-button').on('click', function() {
        if ($(this).hasClass('active')) {
            setFilterState(false);
            $(this).removeClass('active')
            if (!$('.node-filter-button').hasClass('active')) {
                $('.node-filter-button').addClass('active');
            }
        }
        updateNodes();
    })
    $('.node-filter-button').on('click', function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
            // $('.nodebody.specialists').addClass('active');
            $(this).removeClass('active');
            setFilterState(true);
            if (!$('.node-remove-button').hasClass('active')) {
                $('.node-remove-button').addClass('active');
            }
        }
        updateNodes();
    });



}

///this is gon





// if (nodes.length < 200){
//       generateElements('dynamic', simulation, scaleColor, scaleColor, scaleOpacity, pointRadiusScale, strokewidth, linestroke, scaleStrokeOpacity, inputBlob, lastplotScatter);
// } else {
//       generateElements('static', simulation, scaleColor, scaleColor, scaleOpacity, pointRadiusScale, strokewidth, linestroke, scaleStrokeOpacity, inputBlob,lastplotScatter);
// }
