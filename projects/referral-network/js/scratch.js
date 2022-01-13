// // add the X gridlines
//  d3.select('.main').append("g")
//      .attr("class", "x grid")
//      .attr("transform", "translate(0," + height + ")");
//
//  // add the Y gridlines
//  d3.select('.main').append("g")
//      .attr("class", "y grid")
//      .attr("transform", "translate(" + width + ", 0)");
//      ;
// d3.select(".x.grid")
//     .call(d3.axisBottom(xscale).ticks(6)
//       .tickFormat("")
//       .tickSize(-1*getHeight())
//     )
//
//
// // add the Y gridlines
// d3.select(".y.grid")
//     .call(d3.axisLeft(yscale).ticks(5)
//         .tickFormat("")
//         .tickSize(getWidth())
//     )
    // minorBands
    //     .on('mousedown', function(d) {
    //         d = d.PercentileBands.Bands[0];
    //         var route = this;
    //         var text = '<span class="col s12 center-align"><div class="tipheader">' + d[0].Minor + ' <br><span class="secondary-tip">(' + d[0].Major +
    //             ')</span></div><p class="tip-text" style="text-align:left; padding-left: 0; margin-left:0 "><br>Cost/Event: $' +
    //             Math.round(d[0].Median.CostPerEvent * 10) / 10 +
    //             '<br>Events/1000: ' + Math.round(d[0].Median.EventsPer1000 * 10) / 10 +
    //             '<br>' + Math.round(d[0].PctInNet * 100) + '% In Network' +
    //             '</p><p style="text-align:center; margin-top:10px; font-size:14px"><a class="btn waves btn-flat dist white grey-text">See Distribution<i class="material-icons" style="font-size:11px; padding-left:3px">launch</i></a></p>' +
    //             '<a class="clickable right" style="padding-bottom:5px; font-size:14px" >CLOSE</div>';
    //         onHover(text, null, tooltip);
    //         var orig = d3.select(this);
    //         orig.classed('selected-band', true);
    //
    //         $('.clickable').on('click', function() {
    //             offHover(null, tooltip);
    //         })
    //
    //         $('.btn-flat.dist').on('click', function() {
    //             orig.classed('selected-band', false);
    //             offHover(null, tooltip);
    //             // setZoomVariables(route);
    //             currBlobName = d[0].Minor;
    //             major = d[0].Major;
    //
    //             d3.selectAll('.inner-band').data(filterData([
    //                 [major],
    //                 [currBlobName]
    //             ]), function(d) {
    //                 return d.key
    //             }).exit().remove();
    //             d3.selectAll('.minor-point.median').data(filterData([
    //                 [major],
    //                 [currBlobName]
    //             ]), function(d) {
    //                 return d.key
    //             }).exit().remove();
    //
    //             nodeData(filterDataByMinor(currBlobName));
    //             currBlob = route.parentNode;
    //             setCurrBlob(route.parentNode);
    //             plotScatter(getCurrBlob(), getCurrNodes());
    //             setCurrentPage(2);
    //         });
    //     })
    //     .transition()
    //     .attr("d", function(d) {
    //         d = d.PercentileBands.Bands[0];
    //         return innerline(d)
    //     })
    //     .style('fill-opacity', function(d) {
    //         d = d.PercentileBands.Bands[0];
    //         return opacityScale(d[0].Median.EventsPer1000);
    //     })
    //     .style('stroke-opacity', function(d) {
    //         d = d.PercentileBands.Bands[0];
    //         return .7 * opacityScale(d[0].Median.EventsPer1000);
    //     })
    //     .style('fill', function(d) {
    //         d = d.PercentileBands.Bands[0];
    //         return colorScale(d[0].PctInNet)
    //     });




    function calculateStats(input) {
        input = input.filter(function(d) {
            return d.ProviderType == 'ServiceProvider';
        })
        var innet = d3.sum(input, function(d) {
            if (d.InNetwork == 1 && d.ProviderType == 'ServiceProvider') {
                return d.Frequency * d.CostPerEvent;
            }
        });
        var outnet = d3.sum(input, function(d) {
            if (d.InNetwork == -1 && d.ProviderType == 'ServiceProvider') {
                return d.Frequency * d.CostPerEvent;
            }
        });
        var costInNet = innet / (outnet + innet);
    };

    function showLowCost() {
        d3.selectAll('.lowcost').attr('fill', 'red');
    }

    function showHighCost() {
        d3.selectAll('.highcost').attr('fill', 'red');
    }

    function showOutNet() {
        d3.selectAll('circle.outNetwork').attr('fill', 'black');
    }

    function colorByNetwork() {
        d3.selectAll('circle.outNetwork').attr('fill', 'black');
        //circle and connections --- PCP reminas gry
        d3.selectAll('.inNetwork').attr('fill', 'red').attr('stroke', 'red');
        d3.selectAll('.outNetwork').attr('fill', 'blue').attr('stroke', 'blue');
    };
