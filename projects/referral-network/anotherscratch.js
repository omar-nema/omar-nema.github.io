.on('mousedown', function(d) {
    var clickedOne = d3.select(this);
    var text;
    if (d.ProviderType == 'ServiceProvider' && d.InNetwork == 1) {
        text =
            '<div class="tipheader">Servicing Provider (In Network)<br><span class="secondary-tip">' + getCurrentMinor() + ' Procedures</span></div>' +
            '<br>Cost/Evt: $' + Math.round(d.CostPerEvent * 10) / 10 + ' (' + Math.round(d.pctRank * 10) + ' percentile) ' +
            '<br>Frequency: ' + Math.round(d.Frequency * 10) / 10 + ' events ' +
            '</p><p class="center-align"><a class="btn waves btn-flat route white grey-text">Highlight Routes</a></p>';
    } else if (d.ProviderType == 'ServiceProvider' && d.InNetwork == -1) {
        text =
            '<div class="tipheader">Servicing Provider (Out of Network)<br><span class="secondary-tip">' + getCurrentMinor() + ' Procedures</span></div>' +
            '<br>Cost/Evt: $' + Math.round(d.CostPerEvent * 10) / 10 + ' (' + Math.round(d.pctRank * 10) + ' percentile) ' + '<br>Frequency: ' + Math.round(d.Frequency * 10) / 10 + ' events ' +
            '</p><p class="center-align"><a class="btn waves btn-flat route white grey-text">Highlight Routes</a></p>';
    } else {
        text =
            '<div class="tipheader">' + d.ProviderType + '<br><span class="secondary-tip">' + getCurrentMinor() + ' Referrals</span></div>' +
            '<br>Cost/Evt: $' + Math.round(d.CostPerEvent * 10) / 10 + ' (' + Math.round(d.pctRank * 10) / 10 + ' percentile) ' +
            'Events/1000: ' + Math.round(d.EventsPer1000 * 10) / 10 + ' (' + Math.round(d.Frequency * 10) / 10 + ' events)' +
            '<br>% In Network: ' + Math.round(d.PctInNet * 10) / 10 +
            '</p><p class="center-align"><a class="btn waves btn-flat route white grey-text">Highlight Routes</a></p>' + '<a class="clickable right" style="padding-bottom:5px; font-size:14px" >CLOSE</div>';
    }
    onHover(text, null, tooltip);
    $('.clickable').on('click', function() {
        offHover(null, tooltip);
    })
    $('.btn-flat.route').on('mousedown', function() {
        highlightRoutes(clickedOne);
    });
})
.transition()
.attr('r', 5)
.style('stroke-width', function(d) {
    if (d.ProviderType == 'ServiceProvider' && d.InNetwork == -1) {
        return Math.min(9, .5 * servRadius(d.Frequency));
    } else {
        return '.5px';
    }
})
;


// var clickedOne = d3.select(this);
// var text;
// if (d.ProviderType == 'ServiceProvider' && d.InNetwork == 1) {
//     text =
//         '<div class="tipheader">Servicing Provider (In Network)<br><span class="secondary-tip">' + getCurrentMinor() + ' Procedures</span></div>' +
//         '<br>Cost/Evt: $' + Math.round(d.CostPerEvent * 10) / 10 + ' (' + Math.round(d.pctRank * 10) + ' percentile) ' +
//         '<br>Frequency: ' + Math.round(d.Frequency * 10) / 10 + ' events ' +
//         '</p><p class="center-align"><a class="btn waves btn-flat route white grey-text">Highlight Routes</a></p>';
// } else if (d.ProviderType == 'ServiceProvider' && d.InNetwork == -1) {
//     text =
//         '<div class="tipheader">Servicing Provider (Out of Network)<br><span class="secondary-tip">' + getCurrentMinor() + ' Procedures</span></div>' +
//         '<br>Cost/Evt: $' + Math.round(d.CostPerEvent * 10) / 10 + ' (' + Math.round(d.pctRank * 10) + ' percentile) ' + '<br>Frequency: ' + Math.round(d.Frequency * 10) / 10 + ' events ' +
//         '</p><p class="center-align"><a class="btn waves btn-flat route white grey-text">Highlight Routes</a></p>';
// } else {
//     text =
//         '<div class="tipheader">' + d.ProviderType + '<br><span class="secondary-tip">' + getCurrentMinor() + ' Referrals</span></div>' +
//         '<br>Cost/Evt: $' + Math.round(d.CostPerEvent * 10) / 10 + ' (' + Math.round(d.pctRank * 10) / 10 + ' percentile) ' +
//         'Events/1000: ' + Math.round(d.EventsPer1000 * 10) / 10 + ' (' + Math.round(d.Frequency * 10) / 10 + ' events)' +
//         '<br>% In Network: ' + Math.round(d.PctInNet * 10) / 10 +
//         '</p><p class="center-align"><a class="btn waves btn-flat route white grey-text">Highlight Routes</a></p>' + '<a class="clickable right" style="padding-bottom:5px; font-size:14px" >CLOSE</div>';
// }
// onHover(text, null, tooltip);
// $('.clickable').on('click', function() {
//     offHover(null, tooltip);
// })
// $('.btn-flat.route').on('mousedown', function() {
//     highlightRoutes(clickedOne);
// });





// .style('stroke-width', function(d) {
//     if (d.ProviderType == 'ServiceProvider' && d.InNetwork == -1) {
//         return Math.min(9, .5 * servRadius(d.Frequency));
//     } else {
//         return '.5px';
//     }
// })




// minorBlob.selectAll('circle')
// .style('filter', 'url(#glow)')
//     .style('mix-blend-mode', 'multiply')
//     .transition(300)
//     .style('stroke-opacity', function(d) {
//         if (d.ProviderType == 'ServiceProvider') {
//             return opacityScale(d.pctRank);
//         } else {
//             if (d.Frequency < 0) {
//                 return 0;
//             } else {
//                 return 1;
//             }
//         }
//     })
//     .style('opacity', function(d) {
//         if (d.ProviderType == 'ServiceProvider') {
//             // return opacityScale(d.pctRank);
//             return 1;
//         } else {
//             if (d.Frequency < 0) {
//                 return 0;
//             } else {
//                 return 1;
//             }
//         }
//     })
//     // .style('stroke', function(d) {
//     //     if (d.ProviderType == 'ServiceProvider' && d.InNetwork == -1) {
//     //       console.log(d);
//     //         d.color = colorScale(d.pctRank);
//     //         return colorScale(d.pctRank);
//     //     } else if (d.ProviderType == 'ServiceProvider' && d.InNetwork == 1) {
//     //         return 'white';
//     //     }
//     // })
//     .attr('fill', function(d) {
//         console.log(d);
//         if (d.ProviderType == 'ServiceProvider') {
//           console.log(d);
//             d.color = colorScale(d.pctRank);
//             return colorScale(d.pctRank);
//         }
//     })
//     .attr('r', function(d) {
//         return servRadius(d.Frequency);
//     })
//     .attr("cx", function(d) {
//         return d.x;
//     })
//     .attr("cy", function(d) {
//         return d.y;
//     })
//
// ;
