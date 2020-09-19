function getStyleProp(int) {
    return int.toString() + "px"
}
canvas = d3.select('.canvas');
tooltip = d3.select('body').append('div').attr('class', 'tooltip').style("opacity", 0);

var maxComplaints = 500;
var selectedDay;
var selectedZip;
var zipGroup;


function plotAll(){
    zg = zipGroup.get(selectedZip).get(selectedDay);
    heatmap(selectedZip);
    textStr = 'Complaint Detail: ' + selectedZip + ' on ' + getDayOfWeek(selectedDay);
    d3.select('.detail-text').node().textContent = textStr;
    draw(zg);

}
function getDayOfWeek(day){
     dayTranslation = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return dayTranslation[day-1]
}

function draw(data) {
    //grp data to make drawing by category easier

    console.log('starting drawing')
    dataGrp = Array.from(d3.group(data, d => d.timeInt));
    distinctTimes = dataGrp.map(d => d[0]);

    d3.selectAll('.dummy').remove();

    //get distinct categories to use for colors
    distinctComps = Array.from(d3.group(data, d => d.mappedCategory).keys())
    // colScheme = d3.schemeTableau10;
    colScheme = ['rgb(89, 161, 79)', '#e6383a', '#c047c7', '#4593e6', '#2dcec6', '#7c47ad', '#555963', '#a52b74', '#2992ff', '#e0893f']
    var colorScale = d3.scaleOrdinal().domain(distinctComps).range(colScheme);

    //add missing times for placeholder data
    for (var i = 0; i < 24; i++) {
        if (distinctTimes.indexOf(i) == -1) {
            //console.log(dataGrp)
            dummyData = [i, [{
                timeInt: i,
                timeHour: i,
                mappedCategory: 'No data to display'
            }]]
            //
            dataGrp.push(dummyData);
        }
    }
    //re-sort data now that we've manually inserted other info
    dataGrp.sort((a, b) => parseInt(a[0]) - parseInt(b[0]))

    //calc grid stuff
    canvasHt = d3.select('.canvas').node().getBoundingClientRect().height;
    canvasWidth = canvas.node().getBoundingClientRect().width;
    let rectWidth = 120,
        rectHeight = 35;
    var padding = 40;
    var numCols = Math.ceil(canvasWidth / (rectWidth + padding));
    var numRows = Math.ceil(data.length / numCols);
    var xScale = d3.scaleLinear().domain([0, numCols]).range([0, canvasWidth]);
    var yScale = d3.scaleLinear().domain([0, numRows]).range([0, canvasHt])

    //encode positions
    data.forEach(function(d, i) {
        d.rowNum = Math.floor(i / numCols);
        d.colNum = i % numCols;
        d.xVal = xScale(d.colNum);
        d.yVal = yScale(d.rowNum);
    });

    //remove other dataset
  

    //draw!
    var timeGrps= canvas.selectAll('.time-group').data(dataGrp);
    
    timeGrps.enter().append('div').attr('class', 'time-group').append('div').attr('class', 'time-header')
        .text(function(d) {
            len = d[0].toString().length
            if (parseInt(d[0]) == 0) {
                return '12am'
            } else if (parseInt(d[0]) < 12) {
                return d[0] + 'am'
            } else if (parseInt(d[0]) == 12) {
                return '12px'
            } else {
                num = parseInt(d[0]) % 12;
                return num.toString() + 'pm'
            }
        });

    console.log('drawing chips')
    // .text((d)=>  '0' + d[0] + ':00');
    var comps = d3.selectAll('.time-group').selectAll('.comp').data(function(d, i) {
            return d[1]
        }, function(d, i){return d.key});


    trans = d3.transition()
        .duration(300)
        .ease(d3.easeLinear)
        .on('end', function(){
            d3.selectAll('.comp')
            .append('div').attr('class', 'compText').text((d) => d.mappedCategory);
        })
        ;
    comps.enter()
        .append('div')
        .on('click', function(e) {
            d = d3.select(this).data()[0]
            tooltip.transition().duration(200).style("opacity", .95)
                .style("left", (e.pageX) + "px")
                .style("top", (e.pageY + 22) + "px");
            firstline = '<div class="first"><strong>' + d.complaintType + '</strong></div>'
            secondline = '<div><strong>' + 'Description:</strong> ' + d.desc + '</div>';
            var thirdline;
            if (d.resolution != '') {
                thirdline = '<div><strong>' + 'Resolution:</strong> ' + d.resolution + '</div>'
            } else {
                thirdline = '<div class="noreshighlight">No Resolution</div>'
            }
            fourth = '<div>' + '<strong>Location:</strong> ' + d.location + ' at ' + d.address + '</div>';

            str = firstline + secondline + thirdline + fourth;
            tooltip.html(str)
        })
        .on('mouseout', function() {
            tooltip.style("opacity", 0);
        })
        .each(function(d) {
            if (d.key) {
                d3.select(this).attr('class', 'comp')
                d3.select(this).style('background', colorScale(d.mappedCategory))
            } 
            else {
                d3.select(this).html('No data to display');
                d3.select(this).attr('class', 'dummy');
            }
            if (d.resolution == '') {
                d3.select(this).append('div').attr('class', 'nores').text('!')
            }
        })
        .transition(trans)
        .style('width', getStyleProp(rectWidth))
        .style('height', getStyleProp(rectHeight));
    
    comps.exit().transition().duration(100).style('width', 0).style('height', 0).remove();

    // d3.selectAll('.time-group').exit().remove();   
    // d3.selectAll('.comp').exit().remove();
    // d3.selectAll('.time-group').selectAll('.comp').exit().remove();   
}

function setSelectedDay(dayNum){
    d3.selectAll('.day').attr('class', 'day')
    d3.select(d3.selectAll('.day')['_groups'][0][dayNum-1]).classed('selected', true);
    selectedDay = dayNum;
};

function filterByZip(zipBor){
    return zipGroup.get(zipBor);
}

function heatmap(data){
    data = Array.from(filterByZip(data));
    //d3.schemeReds
    heatScale = d3.scaleLinear().domain([0, maxComplaints]).range(['white', 'red']);
    hmap = d3.select('.heatmap').selectAll('.day').data(data);
    hmap.selectAll('.day').attr('background', 'white')
    hmap
        .style('background', d => heatScale(d[1].length))
        .on('click', function(d){
            d3.selectAll('.day').attr('class', 'day')
            selectedDay = d3.select(this).data()[0][0] ;
            d3.select(this).classed('selected', true)
            plotAll();
        })
        .on('mouseover', function(e){
            tooltip.transition().duration(200).style("opacity", .95)
                .style("left", (e.pageX) + "px")
                .style("top", (e.pageY + 22) + "px");
            numComplaints = d3.select(this).data()[0][1].length;
            dayOfWeek = getDayOfWeek(d3.select(this).data()[0][0])
            str = '<div>Number of complaints on ' + dayOfWeek + ': ' + numComplaints + '</div>'
            tooltip.html(str)
        })
        .on('mouseout', function(d){
            tooltip.style("opacity", 0);
        })
    ;
}

function calculateWeekAverages(data){
    weekData = d3.groups(data, d => +d.dayOfWeek);
    // weekData = d3.groups(data, function(d){console.log(d)})
    console.log(weekData)
}


document.addEventListener("DOMContentLoaded", function() {

    d3.csv('fulldataset.csv', function(d) {
        newd = new Date(d['Created Date']);
        newd.setMinutes(0);
        return {
            zip: d.ZIP,
            zipBorough: d.Borough + ' (' + d.ZIP + ')',
            dayOfWeek: +d.dayOfWeek,
            key: +d['Unique Key'],
            borough: d.Borough,
            city: d.City,
            createdDate: new Date(d['Created Date']),
            timeInt: new Date(d['Created Date']).getHours(),
            timeHour: newd.toLocaleTimeString(),
            complaintType: d['Complaint Type'],
            location: d['Location Type'],
            desc: d.Descriptor,
            address: d['Incident Address'],
            mappedCategory: d.mappedCategory,
            resolution: d['Resolution Description']
        }
    }).then(function(data) {

        zipGroup = d3.group(data, d => d.zipBorough, d => d.dayOfWeek);
        //prep filter data
        boroughZips = Array.from(zipGroup.keys()); 
        days = [1,2,3,4,5,6,7];
        zipObjects = [];
        boroughZips.forEach(function(d, i){
            obj = {
               value: d,
               label: d,
            };
            zipObjects.push(obj);
        })

        function filterData(zipBor, dayOfWeek) {
            return zipGroup.get(zipBor).get(dayOfWeek);
        }

        function getCurrZip(){
            return document.querySelector('.zip-select').currentValue;
        }
        
        var zipSelect = new Choices(document.querySelector('.zip-select'), {
            silent: false,
            items: [],
            choices: zipObjects,
            renderChoiceLimit: -1,
            maxItemCount: -1,
            addItems: true,
            renderSelectedChoices: 'auto',
            loadingText: 'Loading...',
            noResultsText: 'No results found',
            noChoicesText: 'No choices to choose from',
            itemSelectText: ''
        })  
        selectedZip = zipSelect.getValue(true);
        setSelectedDay(1);
        plotAll();

        document.querySelector('.zip-select').addEventListener('change', function(e){
            selectedZip = zipSelect.getValue(true);
            plotAll();
        })
    
    })

});




        // data = filterData(selectedZip, selectedDay);
        // draw(data);

            // console.log(selectedZip)
            // heatmap(selectedZip);
            // data = filterData(selectedZip, selectedDay);
            // draw(data);