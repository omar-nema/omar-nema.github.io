queue(2)
	.defer(d3.csv, 'data/full/cost-data-full.csv')
	.await(start);



// ON PAGE LOAD
// (function($){
//     $(function(){
//
//
//     }); // end of document ready
// })(jQuery); // end of jQuery name space
