function plotScatter(inputNodes) {
    var tooltip = d3.select('.tooltip');
    blobName = inputNodes.minorName;
    setCurrentPage(2);
    scatterCanvas = getSVG();
    $('.subtitle').text('(Graph 2/3) Cost and Frequency by Practice - ' + blobName + ' Visits');
    d3.selectAll('.link').data([]).exit().transition().remove();
    svg.attr('transform', 'translate(0,0) scale(1)')

    var pcps, newScales;
    if (inputNodes) {
        pcps = inputNodes.nodes.filter(function(d) {
            return d.ProviderType == 'PCP'
        });
        xMax = d3.max(inputNodes.nodes, function(d) {
            if (d.ProviderType == 'PCP') {
                return d.CostPerEvent;
            }
        });
        xMin = d3.min(inputNodes.nodes, function(d) {
            if (d.ProviderType == 'PCP') {
                return d.CostPerEvent;
            }
        });
        yMin = d3.min(inputNodes.nodes, function(d) {
            if (d.ProviderType == 'PCP') {
                return d.EventsPer1000;
            }
        });
        yMax = d3.max(inputNodes.nodes, function(d) {
            if (d.ProviderType == 'PCP') {
                return d.EventsPer1000;
            }
        });
        maxMonth = d3.max(inputNodes.nodes, function(d) {
            if (d.ProviderType == 'PCP') {
                return d.MemberMonths;
            }
        });
    } else {
        pcps = [];
        xMax = 0; ///CHANGE ME
        yMax = 0; ///CHANGE ME
    }

    var newScales = scale(xMin/1.5, xMax, 0, yMax);

    var colorScale = d3.scaleQuantize()
                .domain([0, 1])
                .range(['#ff0068','#ff7a95', '#eea7b2', '#8dc7da','#7f96f4'])

    var blueScale = d3.scaleQuantize()
                  .domain([0,1])
                  .range([getColors()[0], getColors()[1]])

    var redScale = d3.scaleQuantize()
                  .domain([0,1])
                    .range([getColors()[2], getColors()[3]])


    var rescaleLine = d3.line().curve(d3.curveBasisClosed)
        .x(function(d) {
            return newScales[0](d.x * d.Median.CostPerEvent + d.Median.CostPerEvent);
        })
        .y(function(d) {
            return newScales[1](d.y * d.Median.EventsPer1000 + d.Median.EventsPer1000);
        });

   var sizeScale = d3.scaleLinear().domain([0, maxMonth]).range([2, 10])

    var band = scatterCanvas.selectAll('.inner-band').data(getCurrBlob(), function(d) {
        return d.key
    });
    band.enter().append('path').attr('class', 'inner-band');

    scatterCanvas.selectAll('.inner-band').on('mouseover', function() {}).on('click', function() {})
        .style('filter', 'url(#glow)')
        .transition()
        // .style('fill', function(d) {
        //
        //     if (d.PercentileBands.Bands[0][0].PctInNet < 0.7){
        //       return redScale(d.PercentileBands.Bands[0][0].CostPerEvent);
        //     } else {
        //       return blueScale(d.PercentileBands.Bands[0][0].CostPerEvent);
        //     }
        //
        // })
        .attr('fill-opacity', .4)
        .attr("d", function(d) {
            d = d.PercentileBands.Bands[0];
            return rescaleLine(d)
        });



    var pcpPoints = scatterCanvas.selectAll('circle').data(pcps);
    ///EXIT
    pcpPoints.exit().transition().remove(); //keep the rite ones
    ///ENTER PCP POINTS
    var pts = pcpPoints.enter().append('circle').attr('class', 'pcp-point');
    //UPDATE PCP POINTS
    scatterCanvas.selectAll('.pcp-point')
        .on('mouseover', function(d) {
            text = '<div>Practice - ' + d.Frequency + ' referrals, ' + Math.round(d.PctInNet * 100) + '% in-network <i class="material-icons clicktip">launch</i></div>'
            flatToolTip(text, tooltip)
            d3.select(this).on('mouseout', function(d) {
                offFlat(null, tooltip)
            })
        })
        .on('click', function(d) {
            d3.select(this).on('mouseout', function(d) {
                //ensures that clicked tooltip remains on mouseout
            })
            offFlat(null, tooltip);
            //findTopSpecialists(d)
            var clickedNode = d3.select(this);
            d3.selectAll('.pcp-point').classed('selected-node', false);
            d3.select(this).classed('selected-node', true);
            theParent = d3.select(this.parentNode);
            var route = this; //d.freq is an option

            var text = '<span class="col s12 center-align"><div class="tipheader">Practice Details' +
                '</strong><br><div class="secondary-tip cutoff">' + blobName + ' Referrals</div></div><div class="tip-comp" style="padding-top:5px"><div style="font-weight:600; color: gray;">Practice</div><strong style="text-transform:capitalize">' + d.NPI.toLowerCase() + '</strong><br>' + d.Frequency + ' events (' + Math.round(d.EventsPer1000) + ' per 1000)<br>$' + Math.round(d.CostPerEvent) + ' per event - ' + Math.round(d.PctInNet * 100) + '% In Network' + '</div>' +
                findTopSpecialists(d) +
                '<p class="center-align" style="text-align:center; margin-top:10px; font-size:14px"><a class="btn waves btn-flat refer white grey-text">Show Referral Paths<i class="material-icons" style="font-size:11px; padding-left:3px">launch</i></a></p>' + '<a class="clickable right" style="padding-bottom:5px; font-size:14px" >CLOSE</div>';
            onHover(text, null, tooltip);
            var orig = d3.select(this);
            // $('.clickable').on('click', function() {
            //     offHover(null, tooltip);
            // })
            $('.btn-flat.refer').on('mousedown', function() {
                // $('.loading').addClass('show');
                // d3.select('svg.main').classed('loading', true);
                setCurrentPage(3);
                d3.selectAll('.inner-band').data([]).exit().transition(300).remove();
                plotNodes(currNodes.nodes, clickedNode);
                setTimeout(function() {
                    $('.filterheader').trigger('click');
                }, 300)
            });
        })
        .style('filter', 'url(#glow)')
        .style('mix-blend-mode', 'multiply')
        .transition()
        .attr('cx', function(d) {
            return newScales[0](d.CostPerEvent)
        })
        .attr('fill-opacity', 1)
        .attr('fill', function(d) {
          if (d.PctInNet < 0.7){
            return redScale(d.pctCost);
          } else {
            return blueScale(d.pctCost);
          }
            // return colorScale(d.PctInNet)
        })
        .attr('r', function(d){
          return sizeScale(d.MemberMonths);
        })
        .attr('cy', function(d) {
            return newScales[1](d.EventsPer1000)
        });

};