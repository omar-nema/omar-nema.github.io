function plotBlobs(blobInput) {
    setCurrentPage(1);
    $('.subtitle').text('Procedure Categories: Cost, Frequency, and Variation (Graph 1/3)');

    var svg = getSVG();
    var width = getWidth();
    var height = getHeight();
    var tooltip = d3.select('.tooltip');
    var nestedByMinor = d3.nest().key(function(d) {
        return d.Minor
    }).entries(getCostData());


    svg.attr('transform', 'translate(0,0) scale(1)');
    nestedByMinor.forEach(function(d) {
        d.Major = d.values[0].Major;
    })

    function filterDataByMinor(minor) {
        var newData;
        if (minor) {
            newData = nestedByMinor.filter(function(d) {
                return d.key.toLowerCase() == minor.toLowerCase();
            });
        }
        return newData[0].values;
    }


    d3.selectAll('.pcp-point').data([]).exit().remove();


    var colorScale = d3.scaleLinear()
                .domain([0, .4, 1])
                .range(['#800080', '#b75eb2', '#e1e1e1']);
                
    var xMax = 0;
    blobInput.forEach(function(x){
      xMax = Math.max(xMax, x.PercentileBands.Median.CostPerEvent)
    });
    var yMax = 0;
    blobInput.forEach(function(x){
      yMax = Math.max(yMax, x.PercentileBands.Median.EventsPer1000)
    });

    scales = scale(20, Math.min(xMax, 5000),.8, Math.min(yMax, 180));
    xScale = scales[0];
    yScale = scales[1]
    var multiplier = .85; //blob size
    var xBandScale = d3.scaleLinear().range([-width * multiplier, width * multiplier]).domain([-10, 10]);
    var yBandScale = d3.scaleLinear().range([height * .8*multiplier, -height * .8*multiplier]).domain([-10, 10]);
    var innerline = d3.line().curve(d3.curveBasisClosed)
        .x(function(d) {
            return xBandScale(Math.min(d.x, 10)) +
                xScale(d.Median.CostPerEvent)
        })
        .y(
            function(d) {
                return yBandScale(Math.min(10, d.y)) + yScale(d.Median.EventsPer1000)
            });


    var minorBands = svg.selectAll('.inner-band').data(blobInput, function(d) {
        return d.key
    });

    var minorPoints = svg.selectAll('.minor-point.median').data(blobInput, function(d, i) {
        return d.key
    });
    //ENTER / EXIT MEDIANS AND BLOBS
    minorBands.enter().append('path').attr('class', 'inner-band');
    svg.selectAll('.inner-band')
        .on('mouseover', function(d){
          offFlat(null, tooltip);
          d3.selectAll('.inner-band').style('mix-blend-mode', 'multiply').style('filter', 'url(#glow)').style('stroke', 'none');
          text = '<div>' + d.key + '<i class="material-icons clicktip">launch</i></div>'
          flatToolTip(text,  tooltip)
          band = d3.select(this);
          band.transition().style('filter', 'none').style('mix-blend-mode', 'inherit').style('stroke', 'rgba(0,0,0,.3)');
          band.on('mouseout', function(){
            offFlat(null, tooltip);
          })
        })
        .on('mouseout', function(d){
          d3.selectAll('.inner-band').style('mix-blend-mode', 'multiply').style('filter', 'url(#glow)').style('stroke', 'none');
        })
        .on('click', function(d) {
            band = d3.select(this);
            band.on('mouseout', null)
            x = d;
            d = d.PercentileBands.Bands[0];
            var route = this;
            //inject the CPT description in there
            var text = '<div class="col s12 center-align"><div class="tipheader cutoff">' + d[0].Minor + ' <br><div class="secondary-tip cutoff">' + x.CPTCategory+ ': ' + x.CPTDescription +
                '</div></div><p class="tip-text" style="text-align:left; padding-left: 0; margin-left:0 ">' +
                '<label>Cost/Event:</label> $' + Math.round(d[0].CostPerEvent * 10) / 10 +
                '<br><label>Events/1000:</label> ' + Math.round(d[0].Median.EventsPer1000 * 10) / 10 +
                '<br><label>In Network: </label>' + Math.round(d[0].PctInNet * 100) + '%<br><label>' + d[0].NumService + ' referrals across ' + d[0].NumPCP + ' practices</label>'+
                '</p><p style="text-align:center; margin-top:10px; font-size:14px"><a class="btn waves btn-flat dist white grey-text">See Distribution<i class="material-icons" style="font-size:11px; padding-left:3px">launch</i></a></p>' +
                '';
            onHover(text, null, tooltip);
            var orig = d3.select(this);
            orig.classed('selected-band', true);

            $('.clickable').on('click', function() {
                offHover(null, tooltip);
            })

            $('.btn-flat.dist').on('click', function() {
                orig.classed('selected-band', false);
                offHover(null, tooltip);
                // setZoomVariables(route);
                currBlobName = d[0].Minor;
                major = d[0].Major;

                //do removal here because we don't want to update filters.
                setCurrBlob(filterData([currBlobName]));

                d3.selectAll('.inner-band').data(getCurrBlob(), function(d) {
                    return d.key
                }).exit().remove();
                d3.selectAll('.minor-point.median').data(getCurrBlob(), function(d) {
                    return d.key
                }).exit().remove();
                d3.selectAll('.minor-point.median').remove();

                nodeData(filterDataByMinor(currBlobName));
                // currBlob = route.parentNode;
                plotScatter(getCurrNodes());
                setCurrentPage(2);

            });
        })
        .style('filter', 'url(#glow)')
        .style('fill', function(d) {
          return colorScale(d.PercentileBands.Bands[0][0].PctInNet);
        })
        .style('stroke-width', '0.5')
        .transition()
        .style('stroke', 'none')
        .attr("d", function(d) {
            d = d.PercentileBands.Bands[0];
            return innerline(d)
        })
        .attr('fill-opacity', 1)
        ;
      minorBands.exit().transition().style('fill-opacity', 0).remove();
      minorPoints.exit().transition().style('fill-opacity', 0).remove();

}
