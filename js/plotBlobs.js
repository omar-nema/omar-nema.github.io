function plotBlobs(blobInput) {
    setCurrentPage(1);
    $('.subtitle').text('(Graph 1/3) Procedure Categories - Cost, Frequency, and Variation');

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
    var colorScale = d3.scaleLinear().domain([0, .4, .8, 1]).range(['#da496d','#da496d', 'rgb(217, 215, 216)' ,'rgb(217, 215, 216)']);
    //
    // var colorScale = d3.scaleQuantize()
    //     .domain([0, .25, .75, 1])
    //     .range(['#0058ff', '#7f96f4', '#7f96f4', '#add8e6']);
    //



    var colorScale = d3.scaleQuantize()
                .domain([0, 1])
                .range(['#ff0068','#ff7a95', '#eea7b2', 'lightblue','#7f96f4'])




        // inColorScale = d3.scaleQuantize()
        //     .domain([0, .25, .75, 1])
        //     .range([, , , ]);

    // var colorScale = d3.scaleOrdinal(d3.schemePRGn[4])

    //var colorScale = d3.scaleLinear().domain([0, .7, 1]).range(['#ff5050','lightgray',  '#00CED1']);

    var xMax = 0;
    blobInput.forEach(function(x){
      xMax = Math.max(xMax, x.PercentileBands.Median.CostPerEvent)
    });
    var yMax = 0;
    blobInput.forEach(function(x){
      yMax = Math.max(yMax, x.PercentileBands.Median.EventsPer1000)
    });


    var blueScale = d3.scaleQuantize()
                  .domain([0,2000])
                  .range([getColors()[0], getColors()[1]])

    var redScale = d3.scaleQuantize()
                  .domain([0,2000])
                    .range([getColors()[2], getColors()[3]])

    // xMax = 5000;
    // yMax = 180;
    // console.log(xMax, yMax)
    //


    //

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
          text = '<div>' + d.key + '<i class="material-icons clicktip">launch</i></div>'
          flatToolTip(text,  tooltip)
          d3.select(this).on('mouseout', function(d){
            offFlat(null, tooltip)
          })
        })
        .on('click', function(d) {
            d3.select(this).on('mouseout', function(d){
              //ensures that clicked tooltip remains on mouseout
            })
            offFlat(null, tooltip);
            x = d;
            d = d.PercentileBands.Bands[0];
            var route = this;
            //inject the CPT description in there
            console.log(d);
            var text = '<div class="col s12 center-align"><div class="tipheader cutoff">' + d[0].Minor + ' <br><div class="secondary-tip cutoff">' + x.CPTCategory+ ': ' + x.CPTDescription +
                '</div></div><p class="tip-text" style="text-align:left; padding-left: 0; margin-left:0 ">' +
                '<strong>Cost/Event:</strong> $' + Math.round(d[0].CostPerEvent * 10) / 10 +
                '<br><strong>Events/1000:</strong> ' + Math.round(d[0].Median.EventsPer1000 * 10) / 10 +
                '<br><strong>In Network: </strong>' + Math.round(d[0].PctInNet * 100) + '%<br><strong>' + d[0].NumService + ' referrals across ' + d[0].NumPCP + ' practices</strong>'+
                '</p><p style="text-align:center; margin-top:10px; font-size:14px"><a class="btn waves btn-flat dist white grey-text">See Distribution<i class="material-icons" style="font-size:11px; padding-left:3px">launch</i></a></p>' +
                '<a class="clickable right" style="padding-bottom:5px; font-size:14px" >CLOSE</div>';
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
            if (d.PercentileBands.Bands[0][0].PctInNet < 0.7){
              return redScale(d.PercentileBands.Bands[0][0].CostPerEvent);
            } else {
              return blueScale(d.PercentileBands.Bands[0][0].CostPerEvent);
            }
            // d = d.PercentileBands.Bands[0];
            // return colorScale(d[0].PctInNet)
        })
        .transition()
        .attr("d", function(d) {
            d = d.PercentileBands.Bands[0];
            return innerline(d)
        })
        .attr('fill-opacity', 1)

        ;
        // minorPoints.enter().append('circle').attr('class', 'minor-point median');
        // svg.selectAll('.minor-point.median')
        //     .attr('r', 2)
        //     .attr('cx', function(d) {
        //         d = d.PercentileBands;
        //         return xScale(d.Median.CostPerEvent)
        //     })
        //     .attr('cy', function(d) {
        //         d = d.PercentileBands;
        //         return yScale(d.Median.EventsPer1000)
        //     });

      minorBands.exit().transition().style('fill-opacity', 0).remove();
      minorPoints.exit().transition().style('fill-opacity', 0).remove();

}
