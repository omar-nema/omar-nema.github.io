var simulation, scaleColor, scaleOpacity, pointRadiusScale, minRad, maxRad;
var inColorScale;
var outColorScale;
var serviceColorScale;
var simulation;

function plotNodes(nodes, clickedNode) {


    $('.subtitle').text('Referral Network: ' + getCurrBlob()[0].Minor + ' Visits (Graph 3/3)');
    var tooltip = d3.select('.tooltip');
    setCurrentPage(3);
    minRad = 5;
    maxRad = 30;
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
    var serviceColorScale =  d3.scaleQuantize()
        .domain([0, 1])
        .range(['#03caa5', '#03caa5','#c0c0c5' , '#ca31ca', '#ca31ca']);

    var scaleColor = d3.scaleSequential(d3.interpolatePRGn).domain([0, 1])
    var scaleOpacity = d3.scaleLinear().domain([minServ, maxServ]).range([.9, 1]);
    var pointRadiusScale = d3.scalePow(0.3).domain([minFreq, maxFreq]).range([minRad, maxRad]);
    var scaleStrokeOpacity = d3.scaleLinear().domain([0, 0.05, .1, .4, .6, 1]).range([.05, .2, .8, .9, .95, 1]);

    var scaleFillOpacity = d3.scaleLinear().domain([minRad, maxRad/4, maxRad/3, maxRad/2, maxRad]).range([.05, .1 ,.5, 1, 1])
  //  var scaleFillOpacity = d3.scaleLinear().domain([minRad, maxRad/4, maxRad/3, maxRad/2, maxRad]).range([.1, .5 ,.7, .8, .82])
    var scaleStrokeWidth = d3.scalePow(0.3).domain([0, 1]).range([.5, 3.5]);
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
            return -60;
        }))
        .stop()

    var parameters = ['static', simulation, scaleColor, scaleOpacity, pointRadiusScale, scaleStrokeOpacity, scaleStrokeWidth, scaleFillOpacity, scalePCPOpacity,maxFreq, serviceColorScale]

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
        if (d.ProviderType == 'ServiceProvider') {
            return scaleFillOpacity(pointRadiusScale(d.Frequency));
        } else if (d.ProviderType == 'PCP') {
            return scalePCPOpacity(d.Frequency);
        } else {
            return 1;
        }
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
            setTimeout(function() {
                highlightRoutes(clickedNode)
            }, 1000)
        })
    } else {
        drawNodes();
    }



    function drawNodes() {

        var allNodes = minorBlob.selectAll('circle').data(forceData.nodes, function(d) {
            return d.id
        });

        var link = minorBlob.selectAll('.link').data(forceData.links, function(d) {
                return d.index
            }).enter().insert('line', 'circle')
            .style('filter', function(d){
              if (d.rawFrequency > maxFreq/8){
                return 'url(#glow-hard)'
              }
            })
            .attr('class', function(d) {
                // return 'link id' + d.source.id + ' id' + d.target.id
                var classString = '';

                if (d.inNetwork == -1) {
                    classString = classString.concat('outNetwork');
                    return classString.concat(' link');
                } else {
                    classString = classString.concat('inNetwork');
                    return classString.concat(' link');
                }
            });
        link
          .on('mouseover', function(d){})
          .transition(300)
            .attr('stroke', function(d) {
                return returnColor(d.target)
                // return returnColor(d.target.pctCost)
            })
            .attr("stroke-width", function(d) {
                return scaleStrokeWidth(d.value);
            })
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
            .attr('stroke-opacity', 0.05);

        allNodes.enter().append('circle')
            .attr('class', function(d) {
                var classString = '';
                if (d.ProviderType == 'ServiceProvider') {
                    if (d.InNetwork == -1) {
                        return classString.concat('service-point outNetwork');
                    } else {
                        return classString.concat('service-point inNetwork');
                    }
                } else {
                    return classString.concat(' pcp-point');
                }
            })
            .attr('z-index', 1);

        minorBlob.selectAll('circle')
        .attr('class', function(d) {
                var classString = '';
                if (d.ProviderType == 'ServiceProvider') {
                    if (d.InNetwork == -1) {
                        return classString.concat('service-point outNetwork');
                    } else {
                        return classString.concat('service-point inNetwork');
                    }
                } else {
                    return classString.concat('pcp-point');
                }
            })
            .style('mix-blend-mode', 'inherit')
            .style('filter', function(d){
              if (d.ProviderType == 'ServiceProvider'){
                if (d.pctFrequency > 0.8 ){
                  return 'url(#glow-hard)';
                } else {
                  return  'url(#glow-lite)';
                }
              }
            })
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
                    highlightRoutes(clickedNode);
                });
            })
            // .attr('fill-opacity', '0.05')
            .attr('fill', function(d) {
              if (d.ProviderType == 'ServiceProvider' && d.InNetwork == 1){
                return serviceColorScale(d.pctCost);
              } else if (d.ProviderType == 'ServiceProvider' && d.InNetwork == 0){
                return '#f9f6f6';
              }
              else {
                  return '#717171'
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
            .attr('stroke-opacity', function(d){

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
                    return 2;
                } else {
                    return pointRadiusScale(d.Frequency);
                }
            })
            .attr("cx", function(d) {
                return d.x;
            })
            .attr("cy", function(d) {
                return d.y;
            });


        $('.remove.btn-flat').on('mousedown', function(d) {
            minorBlob.selectAll('.link').classed('showme', false);
            minorBlob.selectAll('circle').classed('showme', false);
            d3.selectAll('.pointer-holder').remove();
        });

        d3.select('minorBlob.main').classed('loading', false);
        $('.network-legend').addClass('show');
        d3.select('.loading').classed('show', false);
        $('.network-button').addClass('show');

        function dragstarted(d) {
          simulation.restart();
          // if (!d3.event.active) simulation.alphaTarget(0.1).restart();
          //
          // simulation.alphaTarget(0.1).restart();
          d.fx = d.x;
          d.fy = d.y;
        }

        function dragged(d) {
          d.fx = d3.event.x;
          d.fy = d3.event.y;
          console.log('dragging')
        }

        function dragended(d) {
          if (!d3.event.active) simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
          console.log('end')
        }
        if (type == 'dynamic') {
            function ticked() {
                console.log('tick');
                node = minorBlob.selectAll('circle');
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
                node
                    .attr("cx", function(d) {
                        return d.x;
                    })
                    .attr("cy", function(d) {
                        return d.y;
                    });
            }

             simulation = d3.forceSimulation(nodes)
                .alphaDecay(.02)
                .on('tick', ticked)
                .force('collide', d3.forceCollide().radius(function(d) {
                    if (d.ProviderType == 'ServiceProvider') {
                        return pointRadiusScale(d.Frequency) + 20;
                    } else {
                        return pointRadiusScale(d.Frequency) + 2;
                    }
                }))
                .force('forceX', d3.forceX(width * .5).strength(0.03))
                .force('forceY', d3.forceY(height / 2).strength(0.05))
                .force('link', d3.forceLink().links(links).strength(function(d) {
                        return d.value
                    })
                    .id(function(d) {
                        return d.id
                    }))
                .force('charge', d3.forceManyBody().strength(-2))
        }
    }


    function highlightRoutes() {

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
              .on('mouseover', function(d){ //only show servicing provider mouseovers
                if (d.ProviderType == 'ServiceProvider') {
                   if (d.InNetwork == 1) {
                       networkString = 'In Network'
                   } else {
                       networkString = 'Out of Network'
                   }
                   text = '<div>Service Facility - ' + d.Frequency + ' referrals $' + d.CostPerEvent + ' (' + networkString + ')<i class="material-icons clicktip">launch</i></div>';
                   flatToolTip(text, tooltip);
                   d3.select(this).on('mouseout', function(d) {
                       offFlat(null, tooltip)
                   })
               }

             })
            .transition()
            .attr('fill-opacity', 0.05)
            ;

        selectedLines.exit()
            .transition()
            .attr('stroke-opacity', 0.05);
        selectedNodes
            .attr('stroke-width', 0.3)
            .attr('stroke', 'rgba(0,0,0,.1)')

        if (getClickedNode()) {
          var clickednode = getClickedNode();
          clickednode.classed('selected-node', true)
            selectedNodes
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
                      console.log(linkreturn[0])
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

                .transition()
                .attr('fill-opacity', function(d) {
                    if (d.id == clickednode.data().id){
                      return 1
                    } else {
                      return Math.min(returnFillOpacity(d), .8);
                      // return Math.max(returnFillOpacity(d), .4);
                    }
                })
            selectedLines
                .attr('stroke-width', function(d){
                  return 3*scaleStrokeWidth(d.value);
                })
                .transition()
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
                .transition()
                .attr('fill-opacity', function(d) {
                    return returnFillOpacity(d);
                })
                .attr('stroke-opacity', function(d) {
                    return returnFillOpacity(d);
                })
            selectedLines
                .transition()
                .attr('stroke-opacity', function(d) {
                    return scaleStrokeOpacity(d.value);
                })
        }
    };



    function nodeSelectionClick() {
        setFilterState(true);
        $('.selection-status.nodebody').html('<div class="default-prov-msg">Click on a provider from the graph to show highlighted routes</div>')
        $('.node-filter-button').trigger('click');
    };



    $('.node-remove-button').on('click', function() {
        if ($(this).hasClass('active')) {
            setFilterState(false);
            $(this).removeClass('active')
            if (!$('.node-filter-button').hasClass('active')) {
                $('.node-filter-button').addClass('active');
            }
        }
        highlightRoutes();
    })

    $('.node-filter-button').on('click', function() {
        // filterNodeData(getCurrNodes());
        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
            // $('.nodebody.specialists').addClass('active');
            $(this).removeClass('active');
            setFilterState(true);
            if (!$('.node-remove-button').hasClass('active')) {
                $('.node-remove-button').addClass('active');
            }
        }
        highlightRoutes();
    });


}




// if (nodes.length < 200){
//       generateElements('dynamic', simulation, scaleColor, scaleColor, scaleOpacity, pointRadiusScale, strokewidth, linestroke, scaleStrokeOpacity, inputBlob, lastplotScatter);
// } else {
//       generateElements('static', simulation, scaleColor, scaleColor, scaleOpacity, pointRadiusScale, strokewidth, linestroke, scaleStrokeOpacity, inputBlob,lastplotScatter);
// }
