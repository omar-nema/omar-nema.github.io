queue(2)
	.defer(d3.csv, 'data/full/cost-data-full.csv')
	// .defer(d3.csv, '/data/full/pcp-data-full.csv')
	.await(start);
	// .await(start);



// ON PAGE LOAD
(function($){
    $(function(){
			$('.tooltipped').tooltip();
			$('.modal').modal();
        // $('.tooltipped').tooltip({delay: 0});

    }); // end of document ready
})(jQuery); // end of jQuery name space

//
// function createCanvas(error, costData) {
// 	var div = d3.select("#graph-1");
// 	width = $("#graph-1").width();
// 	height = $(window).innerHeight() - 130;
// 	svg = div.append('svg').attr('class', 'main').style('height', height + 'px').style('width', width + 'px');
// 	svg = svg.append("g").attr('class', 'zoomable').attr('transform', 'translate(0,0) scale(1)');
// 	defs  = svg.append('defs');
// 	 filter = defs
// 			.append('filter')
// 			.attr('id', 'gauss') /// !!! important - define id to reference it later
// 			.append('feGaussianBlur')
// 			.attr('in', 'SourceAlpha')
// 			.attr('stdDeviation', 3) // !!! important parameter - blur
// 			.attr('result', 'blur');
// 	var leftOffset = $('.main').offset().left;
// 	var topOffset = $('.main').offset().top;
//
// 	console.log(costData);
// 	setTimeout
// 	return start(costData);
// }
