
    // var clicked;
    // setCurrentPage(1);
    // d3.selectAll('.axis').transition().style('opacity',1);
    // clicked = getZoomVariables();
    // scale(initxmax, initymax);
    // var selectedMinor = d3.select(clicked.parentNode);
    // var bands = selectedMinor.data()[0].PercentileBands;
    // var PCPNest = selectedMinor.data()[0].PCPNest;
    // ///update pattern is in here?
    // selectedMinor.select('.minor-point.median')
    //   .attr('r', 1)
    //   .attr('cx', function(d){return  xScale(d.PercentileBands.Median.CostPerEvent) })
    //   .attr('cy', function(d){return yScale(d.PercentileBands.Median.EventsPer1000) });
    // var parent = d3.select(clicked.parentNode);
    // d3.selectAll('.pcp-point').data([]).exit().transition().remove();
    // d3.selectAll('.service-point').data([]).exit().transition().remove();
    // d3.selectAll('.link').data([]).exit().transition().remove();
    // // console.log(d3.selectAll('.inner-band').data());
    // selectedMinor.selectAll('.inner-band').transition().attr("d", innerline);
    // d3.selectAll('.inner-band').style('visibility', 'visible');
    // d3.selectAll('.minor-point.median').style('visibility', 'visible');
    // d3.select('.zoom-out-button').style('visibility', 'hidden');
    //


    xMax = d3.max(pcps, function(d) {
        return d.CostPerEvent;
    });

    var pcps = inputNodes.nodes.filter(function(d) {
        return d.ProviderType == 'PCP'
    });
    var pcpPoints = inputBlob.selectAll('.pcp-point').data(function(d) {
        return pcps
    });
    minCost = d3.min(nodes, function(d) {
        return d.CostPerEvent;
    });
    maxCost = d3.max(nodes, function(d) {
        return d.C

    //  var bands = inputBlob.data()[0].PercentileBands;
      var PCPNest = inputBlob.data()[0].PCPNest;











      function xray() {
          nodeData(filterData('routine chest x-ray'));
          minRad = 0;
          maxRad = 15;
          var strokewidth = 2;
          costColor = d3.scaleLinear().domain([0, .8, 1]).range(['rgb(0, 206, 209)', 'lightgray', 'rgb(255, 80, 80)']);
          costColor = d3.scaleLinear().domain([0, .8, 1]).range(["rgb(69, 117, 180)", "#fcfcd7", "rgb(255, 50, 80)"]);
          costColor = d3.scaleLinear().domain([0, 1]).range(["rgb(123, 210, 67)", "rgb(196, 86, 180)"]);
          opacityScale = d3.scaleLinear().domain([minServ, maxServ / 1000, maxServ / 100, maxServ / 50, maxServ / 4, maxServ]).range([0, 0.01, .02, .05, .1, 1]);
          var opacityScale = d3.scaleLinear().domain([minServ, maxServ / 1600, maxServ / 10, maxServ / 5, maxServ]).range([0, .5, .7, .95, 1]);
          var strokeOpacity = d3.scaleLinear().domain([minServ, maxServ / 1600, maxServ / 10, maxServ / 5, maxServ]).range([0, .01, .02, .8, .9]);
          ///categorical scale
          servRadius = d3.scalePow().exponent(.7).domain([minServ, maxServ]).range([minRad, maxRad]);

          //  opacityScale = d3.scaleLinear().domain([minServ, maxServ/1000, maxServ/50, maxServ]).range([.1, 0.9, .95, 1]);
          var costColor = d3.scaleLinear().domain([0, .4999, .501, 1]).range(['rgb(69, 117, 180)', 'rgb(69, 117, 180)', 'rgb(255, 50, 80)', 'rgb(255, 50, 80)']);
          var opacityScale = d3.scaleLinear().domain([0, .4999, .501, 1]).range([1, .4, .4, 1]);
          var linestroke = 70;
          //add a stroke scale
          var simulation = d3.forceSimulation(nodes)
              .alphaDecay(.02)
              .force('collide', d3.forceCollide().radius(function(d) {
                  if (d.ProviderType == 'ServiceProvider') {
                      return servRadius(d.Frequency) * 2.5;
                  } else {
                      return servRadius(d.Frequency) * 1.5;
                  }
              }))
              .force('forceX', d3.forceX(width * .5).strength(0.034))
              .force('forceY', d3.forceY(height * .5).strength(0.04))
              .force('link', d3.forceLink().links(links).strength(function(d) {
                      return d.value
                  })
                  .id(function(d) {
                      return d.id
                  }))
              .force('charge', d3.forceManyBody().strength(-70))
              .stop()
          generateElements('static', simulation, costColor, costColor, opacityScale, servRadius, strokewidth, linestroke, strokeOpacity);
      };

    //SHOULD JUST BE EMBEDDED IN SCATTER FUNCTION
    // d3.selectAll('.pcp-point').data([]).exit().transition().remove();
    // d3.selectAll('.service-point').data([]).exit().transition().remove();
    // d3.selectAll('.link').data([]).exit().transition().remove();



    ///zoom OUT BUTTON DECENTRALIZED - we need data to b epushed up
    // if (!firstPage){
    //   firstPage = true;
    //   $('.nav-item.one').on('mousedown',function(e){
    //       console.log(thisData);
    //       plotBlobs(thisData);
    //   })
    // };
    //
    // if (!secondPage){
    //   secondPage = true;
    //   $('.nav-item.two').on('mousedown',function(e){
    //       plotScatter();
    //   })
    // };



    //
    // var zoomVariables;
    // function setZoomVariables(clicked){
    //   zoomVariables = clicked;
    // }
    // function getZoomVariables(){
    //   return zoomVariables;
    // }

    //Queued after data load,

    //we don't need set and get if everything is ocntained in setAttribute
