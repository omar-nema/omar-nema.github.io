var pcts = [10, 15, 25, 30, 50, 70, 75, 85, 90];

var stats = ["Cost", "EventsPer1000", "CostPerEvent"];


function prepData(costData) {

    var maxEvt = 0;
    var maxNumProviders = 0;
    console.log(costData)
    // BASIC COST DATA CLEANSE
    var numFields = ["Cost", "Frequency", "InNetwork", "PCPID", "ProviderID", "RiskAdjustedCost", "ServiceProviderID"];
    console.log(costData, numFields)
    costData = convertNumFields(costData, numFields);
    costData.forEach(function(d) {
        d.CostPerEvent = d.Cost / d.Frequency;
        d.InNetwork = +d.InNetwork;
    });
    var minorMajorMap = {};
    d3.nest().key(function(d) {
        return d.Minor
    }).entries(costData).forEach(function(d) {
        minorMajorMap[d.key] = d.values[0].Major
    });



    // NEST BY PROCEDURE - changed to major
    var ProcedureNestByMajor = d3.nest().key(function(d) {
        return d.Major
    }).key(function(d){
        return d.CPTCategory
    }).key(function(d) {
        return d.Minor
    }).entries(costData);

    var uniqueMajor = [];
    ProcedureNestByMajor.forEach(function(d) {
        d.Major = d.key;
        uniqueMajor.push(d.key);
        d.Minors = d.values;
        d.Minors.forEach(function(d2) {
            d2.Minor = d2.key;
            d2.PCPNest = d3.nest().key(function(d) {
                return d.PCPID
            }).entries(d2.values);
            d2.PCPNest.forEach(function(dd) {

                dd.PCPID = +dd.key;
                dd.CostPerEvent =
                    d3.sum(dd.values, function(n) {
                        return +n.Cost
                    }) / d3.sum(dd.values, function(n) {
                        return n.Frequency
                    });
                dd.Frequency =
                    d3.sum(dd.values, function(n) {
                        return +n.Frequency
                    });
                dd.EventsPer1000 =
                    d3.sum(dd.values, function(n) {
                        return +n.Frequency
                    }) * 1000 / +dd.values[0].memberMonths;
                if (dd.CostPerEvent > 0) {
                    maxEvt = Math.max(maxEvt, dd.EventsPer1000);
                }
            });

            d2.PercentilesPCP = pctCalc(d2.PCPNest, ["EventsPer1000", "CostPerEvent"], pcts);

            var median = d2.PercentilesPCP[50];
            if (median.EventsPer1000 < -19999) {
                if (d.Minors.length < 1) {

                }
            } else {
                var uniqueservice = d3.nest().key(function(dd) {
                    return dd.ServiceProviderID
                }).entries(d2.values).length;
                d2.UniqueServiceProviders = uniqueservice;


                var uniquePCP = d3.nest().key(function(dd) {
                    return dd.PCPID
                }).entries(d2.values).length;
                d2.PCP = uniquePCP;


                var pctIn = d3.sum(d2.values, function(z) {
                    if (z.InNetwork == 1) {
                        return z.Frequency;
                    }
                }) / d3.sum(d2.values, function(z) {
                    return z.Frequency
                });

                d2.PercentileBands = {
                    Median: median,
                    Bands: [

                        [

                            {
                                x: (d2.PercentilesPCP[25].CostPerEvent - median.CostPerEvent) / (median.CostPerEvent),
                                y: -.1,
                                Median: median,

                                NumPCP: uniquePCP,
                                Major: d.Major,
                                Minor: d2.Minor,
                                realX: d2.PercentilesPCP[25].CostPerEvent,
                                realY: 0,
                                PctInNet: pctIn
                            },

                            {
                                x: (d2.PercentilesPCP[25].CostPerEvent - median.CostPerEvent) / (median.CostPerEvent),
                                y: .1,
                                Median: median,
                                Major: d.Major,
                                Minor: d2.Minor,
                                realX: d2.PercentilesPCP[30].CostPerEvent,
                                realY: 0
                            },

                            {
                                x: -.1,
                                y: (d2.PercentilesPCP[75].EventsPer1000 - median.EventsPer1000) / (median.EventsPer1000),
                                Median: median,
                                realX: 0,
                                realY: d2.PercentilesPCP[75].EventsPer1000
                            },

                            {
                                x: .1,
                                y: (d2.PercentilesPCP[75].EventsPer1000 - median.EventsPer1000) / (median.EventsPer1000),
                                Median: median,
                                realX: 0,
                                realY: d2.PercentilesPCP[75].EventsPer1000
                            },

                            {
                                x: (d2.PercentilesPCP[75].CostPerEvent - median.CostPerEvent) / (median.CostPerEvent),
                                y: .1,
                                Median: median,
                                realX: d2.PercentilesPCP[75].CostPerEvent,
                                realY: 0
                            },

                            {
                                x: (d2.PercentilesPCP[75].CostPerEvent - median.CostPerEvent) / (median.CostPerEvent),
                                y: -.1,
                                Median: median,
                                realX: d2.PercentilesPCP[75].CostPerEvent,
                                realY: 0
                            },


                            // {x: -.1, y: (d2.PercentilesPCP[25].EventsPer1000-median.EventsPer1000)/(median.EventsPer1000), Median: median
                            // ,realX:0
                            //  ,realY:d2.PercentilesPCP[25].EventsPer1000},

                            {
                                x: .1,
                                y: (d2.PercentilesPCP[25].EventsPer1000 - median.EventsPer1000) / (median.EventsPer1000),
                                Median: median,
                                realX: 0,
                                realY: d2.PercentilesPCP[25].EventsPer1000
                            },

                            {
                                x: -.1,
                                y: (d2.PercentilesPCP[25].EventsPer1000 - median.EventsPer1000) / (median.EventsPer1000),
                                Median: median,
                                realX: 0,
                                realY: d2.PercentilesPCP[25].EventsPer1000
                            }

                        ]

                    ]
                };
                d2.PercentileArray = [d2.PercentilesPCP[50]];
                maxNumProviders = Math.max(maxNumProviders, d2.UniqueServiceProviders);
            }
        });
    });


    var minorNest = d3.nest().key(function(d) {
        return d.Minor
    }).entries(costData);

    var uniqueMinor = [];

    minorNest.forEach(function(d2){
          d2.Minor = d2.key;
          d2.CPTCategory = d2.values[0].CPTCategory;
          d2. CPTDescription =d2.values[0].CPTDescription ;
          d2.Major = d2.values[0].Major
          uniqueMinor.push(d2.key);
          // d2.Major = 'Specialist';
          d2.PCPNest = d3.nest().key(function(d) {
              return d.PCPID
          }).entries(d2.values);
          d2.PCPNest.forEach(function(dd) {

              dd.PCPID = +dd.key;
              dd.CostPerEvent =
                  d3.sum(dd.values, function(n) {
                      return +n.Cost
                  }) / d3.sum(dd.values, function(n) {
                      return n.Frequency
                  });
              dd.Frequency =
                  d3.sum(dd.values, function(n) {
                      return +n.Frequency
                  });
              dd.EventsPer1000 =
                  d3.sum(dd.values, function(n) {
                      return +n.Frequency
                  }) * 1000 / +dd.values[0].memberMonths;
              if (dd.CostPerEvent > 0) {
                  maxEvt = Math.max(maxEvt, dd.EventsPer1000);
              }
          });

          d2.PercentilesPCP = pctCalc(d2.PCPNest, ["EventsPer1000", "CostPerEvent"], pcts);

          var median = d2.PercentilesPCP[50];
          if (median.EventsPer1000 < -19999) {
              if (d.Minors.length < 1) {

              }
          } else {
              var uniqueservice = d3.nest().key(function(dd) {
                  return dd.ServiceProviderID
              }).entries(d2.values).length;
              d2.numService = uniqueservice;

              var numPCP = d3.nest().key(function(dd) {
                  return dd.PCPID
              }).entries(d2.values).length;
              d2.numPCP = numPCP;

              var freq = d3.sum(d2.values, function(dd){return dd.Frequency});
              d2.totalFrequency = freq;


              var costPerEvent = d3.sum(d2.values, function(dd){return dd.Cost})/freq;
              d2.CostPerEvent = costPerEvent;



              var pctIn = d3.sum(d2.values, function(z) {
                  if (z.InNetwork == 1) {
                      return z.Frequency;
                  }
              }) / d3.sum(d2.values, function(z) {
                  return z.Frequency
              });

              d2.PercentileBands = {
                  Median: median,
                  Bands: [

                      [

                          {
                              x: (d2.PercentilesPCP[25].CostPerEvent - median.CostPerEvent) / (median.CostPerEvent),
                              y: -.1,
                              Median: median,
                              NumService: uniqueservice,
                              CostPerEvent: Math.round(costPerEvent),
                              TotalFrequency: freq,
                              NumPCP: numPCP,
                              Major: d2.Major,
                              Minor: d2.Minor,
                              realX: d2.PercentilesPCP[25].CostPerEvent,
                              realY: 0,
                              PctInNet: pctIn
                          },

                          {
                              x: (d2.PercentilesPCP[25].CostPerEvent - median.CostPerEvent) / (median.CostPerEvent),
                              y: .1,
                              Median: median,
                              NumService: uniqueservice,
                              Major: d2.Major,
                              Minor: d2.Minor,
                              realX: d2.PercentilesPCP[30].CostPerEvent,
                              realY: 0
                          },

                          {
                              x: -.1,
                              y: (d2.PercentilesPCP[75].EventsPer1000 - median.EventsPer1000) / (median.EventsPer1000),
                              Median: median,
                              realX: 0,
                              realY: d2.PercentilesPCP[75].EventsPer1000
                          },

                          {
                              x: .1,
                              y: (d2.PercentilesPCP[75].EventsPer1000 - median.EventsPer1000) / (median.EventsPer1000),
                              Median: median,
                              realX: 0,
                              realY: d2.PercentilesPCP[75].EventsPer1000
                          },

                          {
                              x: (d2.PercentilesPCP[75].CostPerEvent - median.CostPerEvent) / (median.CostPerEvent),
                              y: .1,
                              Median: median,
                              realX: d2.PercentilesPCP[75].CostPerEvent,
                              realY: 0
                          },

                          {
                              x: (d2.PercentilesPCP[75].CostPerEvent - median.CostPerEvent) / (median.CostPerEvent),
                              y: -.1,
                              Median: median,
                              realX: d2.PercentilesPCP[75].CostPerEvent,
                              realY: 0
                          },


                          // {x: -.1, y: (d2.PercentilesPCP[25].EventsPer1000-median.EventsPer1000)/(median.EventsPer1000), Median: median
                          // ,realX:0
                          //  ,realY:d2.PercentilesPCP[25].EventsPer1000},

                          {
                              x: .1,
                              y: (d2.PercentilesPCP[25].EventsPer1000 - median.EventsPer1000) / (median.EventsPer1000),
                              Median: median,
                              realX: 0,
                              realY: d2.PercentilesPCP[25].EventsPer1000
                          },

                          {
                              x: -.1,
                              y: (d2.PercentilesPCP[25].EventsPer1000 - median.EventsPer1000) / (median.EventsPer1000),
                              Median: median,
                              realX: 0,
                              realY: d2.PercentilesPCP[25].EventsPer1000
                          }

                      ]

                  ]
              };
              d2.PercentileArray = [d2.PercentilesPCP[50]];
              maxNumProviders = Math.max(maxNumProviders, d2.UniqueServiceProviders);
          }
      });



    //
    //
    // });
    //



    return {
        CostData: costData,
        MajorNest: ProcedureNestByMajor,
        MaxEvtPer1000: maxEvt,
        MaxServiceProviders: maxNumProviders,
        MinorNest: minorNest,
        majorList: uniqueMajor,
        minorList: uniqueMinor
    };

}


function getNetworkMapData(data, Procedure) {
    var forceData = {
        nodes: [],
        links: []
    }
    var thisData = data;
    var ProviderAdded = {};
    var PCPFreq = {};

    var width = getWidth();
    var height = getHeight();

    d3.nest().key(function(d) {
        return d.PCPID
    }).entries(thisData).forEach(function(d) {
        var f = d3.sum(d.values, function(n) {
            return n.Frequency
        });

        var inNetCost = d3.sum(d.values, function(n) {
            if (n.InNetwork == 1) {
                return n.Cost
            }
        });

        //in SQL, add pctRank within a given set

        var totalCost = d3.sum(d.values, function(n) {
            return n.Cost;
        });

        forceData.nodes.push({
            id: +d.key,
            ProviderType: "PCP",
            Frequency: f,
            CostPerEvent: d3.sum(d.values, function(n) {
                return n.Cost
            }) / f,
            MemberMonths: d.values[0].memberMonths,
            PctInNet: inNetCost/totalCost,
            x: width / 2 + Math.random() * 50,
            y: height / 2 + Math.random() * 50,
            pctCost: +d.values[0].pcpPctCost,
            pctFrequency: +d.values[0].pcpPctFrequency,
            ProviderID: +d.key,

            City: d.values[0].PCPCity,
            NPI: d.values[0].PCPNPI,
            EventsPer1000: 1000 * f / (+d.values[0].memberMonths)
        });
        ProviderAdded[+d.key] = true;
        PCPFreq[+d.key] = f;
    });
    ///for all servicing prov, what is the max frequency

    d3.nest().key(function(d) {
        return d.ServiceProviderID
    }).entries(thisData).forEach(function(d) {
        if (typeof ProviderAdded[+d.key] == 'undefined') {
            var freq = d3.sum(d.values, function(n) {
                return n.Frequency
            });
            forceData.nodes.push({
                id: +d.key,
                ProviderType: "ServiceProvider",
                InNetwork: Math.round(d.values[0].InNetwork, 2),
                Frequency: Math.round(d3.sum(d.values, function(n) {
                    return n.Frequency
                }), 2),
                ServiceFacility: d.values[0].ServiceFacility,
                ServiceProviderName: d.values[0].ServiceProviderName,
                CostPerEvent: Math.round(d3.sum(d.values, function(n) {
                    return n.Cost
                }) / freq, 2),
                x: width / 2 + Math.random() * 300
                    // , x: width/2 + Math.random()*30
                    ,
                y: height / 2 + Math.random() * 50,
                ServiceProviderID: d.values[0].ServiceProviderID,
                City: d.values[0].ServiceCity,
                State: d.values[0].ServiceState,
                NPI: d.values[0].ServiceNPI,
                pctCost: d3.sum(d.values, function(n) {
                    val = n.Frequency * +n.servicePctCost / freq;
                    return val;
                }),
                pctFrequency: d3.sum(d.values, function(n) {
                    val = n.Frequency * +n.servicePctFrequency / freq;
                    return  val;
                })
            });
        }
        ProviderAdded[+d.key] = true;
    });

    var minFreq = d3.min(thisData, function(d) {
        return d.Frequency
    });
    var maxFreq = d3.max(thisData, function(d) {
        return d.Frequency
    });
    // console.log(thisData, minFreq, maxFreq);
    var color;
    var freqtolinkval = d3.scaleLinear().domain([0, maxFreq]).range([0, 1]);

    thisData.forEach(function(d) {
        if (d.InNetwork == 1) {
            color = "rgb(0, 206, 209)";
        } else {
            color = "#f66d69";
        }



        forceData.links.push({
            source: d.PCPID,
            target: d.ServiceProviderID,
            rawFrequency: d.Frequency,
            rawCost: d.CostPerEvent,
            sourceName: d.PCPNPI,
            targetName: d.ServiceProviderName,
            value: freqtolinkval(d.Frequency),
            // value: d.Frequency,
            color: color,
            inNetwork: d.InNetwork
        });
    });


    return forceData;
}
