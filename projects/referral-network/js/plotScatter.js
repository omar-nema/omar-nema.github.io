function plotScatter(inputNodes) {
    var tooltip = d3.select('.tooltip');
    blobName = inputNodes.minorName;
    setCurrentPage(2);
    scatterCanvas = getSVG();
    $('.subtitle').text('Cost and Frequency by Practice: ' + blobName + ' Visits (Graph 2/3)');
    d3.selectAll('.link').data([]).exit().transition().remove();
    svg.attr('transform', 'translate(0,0) scale(1)')

    setFilterState(false);
    svg.select('.selected-provider-chip').style('opacity', '0');

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
    var colorScale = d3.scaleLinear()
              .domain([0, .4, 1])
              .range(['#800080', '#b75eb2', '#e1e1e1']);

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

    scatterCanvas.selectAll('.inner-band')
        .on('mouseover', function() {
          text = '<div>Distribution curve (from previous graph) representing median quartiles</div>'
          flatToolTip(text,  tooltip);
          band = d3.select(this);
          band.on('mouseout', function(d){
            offFlat(null, tooltip);
          })
        })
        .on('click', function() {})
        .style('mix-blend-mode', 'multiply')
        .style('filter', 'url(#glow)')
        .style('stroke', '#c5c3c336')
        .style('fill', function(d) {
          return colorScale(d.PercentileBands.Bands[0][0].PctInNet);
        })
        .transition()
        .style('stroke-width', '15')
        .attr('fill-opacity', .2)
        .attr("d", function(d) {
            d = d.PercentileBands.Bands[0];
            return rescaleLine(d)
        });



    scatterCanvas.selectAll('.circle').data([]).exit().remove();
    var pcpPoints = scatterCanvas.selectAll('.pcp-point').data(pcps);
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
                '</label><br><div class="secondary-tip cutoff">' + blobName + ' Referrals</div></div><div class="tip-text" style="padding-top:5px"><label style="text-transform:capitalize">' + d.NPI.toLowerCase() + '</label><br>' + d.Frequency + ' events (' + Math.round(d.EventsPer1000) + ' per 1000)<br>$' + Math.round(d.CostPerEvent) + ' per event - ' + Math.round(d.PctInNet * 100) + '% In Network' + '</div>' +
                '<p class="center-align" style="text-align:center; margin-top:10px; font-size:14px"><a class="btn waves btn-flat refer white grey-text">Show Referral Paths<i class="material-icons" style="font-size:11px; padding-left:3px">launch</i></a></p>';
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
          return colorScale(d.PctInNet);
        })
        .attr('r', function(d){
          return sizeScale(d.MemberMonths);
        })
        .attr('cy', function(d) {
            return newScales[1](d.EventsPer1000)
        });

};
