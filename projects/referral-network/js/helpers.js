/**
 * Created by Nick on 8/23/14.
 */

// COLORS
var green = ["#cae6b4", "#7bc143", "#5c9330", "#3d6220"];
var blue = ["#98c9f0", "#1b75bc", "#14588d", "#0e3b5e"];
var orange = ["#fdd8b7", "#f99e4b", "#eb7408", "#9d4e05"];
var gray = ["#e7eaea", "#c3cacb", "#8e9b9d", "#5c696b"];
var teal = ["#b7dde8", "#4aabc5", "#31849a", "#215867"];
var yellow = ["#ffebae", "#fece34", "#e4ae01", "#987401"];
var red = ["#f4b3b5", "#e44145", "#c01b1f", "#801215"];
var pink = ["#e7bbd9", "#c456a0", "#9d377b", "#692452"];
var black = ["#000000", "#000000", "#000000", "#000000"];

var color = d3.scaleOrdinal()
    .range([teal[1], orange[1], blue[1], pink[1], green[1], red[1], yellow[1]
        , teal[2], orange[2], blue[2], pink[2], green[2], red[2], yellow[2]
        , teal[3], orange[3], blue[3], pink[3], green[3], red[3], yellow[3]]);


// DATE/NUMBER FORMATS
var dateFormat = "%m/%d/%Y %H:%M";
var dateFormatShortYear = "%m/%d/%y %H:%M";
var dateFormatSimple = "%m/%d/%Y";
var timeFormat = "%I:%M %p";
var inputDateFormat = "%m/%d/%Y";
var dateFormatSQL = "%Y-%m-%d";
var timeSimpleFormat = "%H:%M";
var dateTimeFormatSQL = "%Y-%m-%d %H:%M:%S.%L";

var dateFormats = [dateFormat,dateFormatShortYear,dateFormatSimple,timeFormat,inputDateFormat,dateFormatSQL,timeSimpleFormat,dateTimeFormatSQL];

Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h);
    return this;
};























////

function parseDate(date, format){
    if (Object.prototype.toString.call(date) === "[object Date]")
    {
        return date;
    }
    else {
        return d3.time.format(format).parse(date);
    }
}


function parseDateAll(data, dateField) {
    var curDateFormat;
    dateFormats.forEach(function(d){
        if (parseDate(data[0][dateField], d)!=null) {
            curDateFormat = d;
        }
    });
    if (typeof curDateFormat != 'undefined') {
        data.forEach(function(d){
            d[dateField] = parseDateFast(d[dateField], curDateFormat);
        });
    }
    return data;
}

var dateMap = {};
function parseDateFast(date,format){
    if (Object.prototype.toString.call(date) === "[object Date]")
    {
        return date;
    }
    else {
        if (typeof dateMap[date] == 'undefined') {
            dateMap[date] = d3.time.format(format).parse(date);
        }
        return dateMap[date];
    }
    //    return d3.time.format(format).parse(date);
}

function parseDateSimple(date){
    if (Object.prototype.toString.call(date) === "[object Date]")
    {
        return date;
    }
    else {
        return d3.time.format(dateFormatSimple).parse(date);
    }
}

//var formatDate = d3.time.format(dateFormat);
//var formatDateSimple = d3.time.format(dateFormatSimple);
//var formatTime = d3.time.format(timeFormat);
//var formatCurrency = d3.format("$,f");
//var formatInt = d3.format(",f");
//var formatDecimal = d3.format(".02f");
//var formatPct = d3.format("%f");


function getSundays(year) {
    var date = new Date(year, 0, 1);
    while (date.getDay() != 0) {
        date.setDate(date.getDate() + 1);
    }
    var days = [];
    while (date.getFullYear() == year) {
        var m = date.getMonth() + 1;
        var d = date.getDate();
        days.push(
                year + '-' +
                (m < 10 ? '0' + m : m) + '-' +
                (d < 10 ? '0' + d : d)
        );
        date.setDate(date.getDate() + 7);
    }
    return days;
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}





// SIMPLE TOOLTIPS
var origColor;
var tooltipDiffX = 20;
var tooltipDiffY = -24;


function flatToolTip(text, tooltip){

  tooltip.style("opacity",0);
  tooltip.attr('class', 'tooltip flat');
  tooltip.style("visibility", "visible");
  tooltip.style("top", (event.pageY-50)+"px").style("left",(event.pageX+6)+"px");
  tooltip.html(text.toString());
  tooltip.transition().duration(100).style("opacity",1);
}

// function nodeLabel(text, tooltip){
//
//   tooltip.style("opacity",0);
//   tooltip.style("visibility", "visible");
//   tooltip.style("top", (event.pageY-50)+"px").style("left",(event.pageX+6)+"px");
//   tooltip.html(text.toString());
//   tooltip.transition().duration(100).style("opacity",1);
// }

function onHover(text, object, tooltip){


    tooltip.style("opacity",0);
    tooltip.style("visibility", "visible");
    tooltip.style("top", (event.pageY+tooltipDiffY)+"px").style("left",(event.pageX+tooltipDiffX)+"px");
    tooltip.html(text.toString());
    if(typeof object !== 'undefined' && object !== null) {
        object.moveToFront();
        origColor = d3.rgb(object.style("fill"));
        origWidth = object.attr("width");
        origHeight = object.attr("height");
        object
            .style("fill", function(){ return origColor.brighter(1);});
    }
    tooltip.transition().duration(100).style("opacity",1);
    tooltip.style("visibility", "visible");
}

function offHover(object, tooltip){
    tooltip.style("visibility", "hidden");
    tooltip.style("opacity",0);
    if (object !== null) {
        object.style("fill", origColor);
    }
}

function offFlat(object, tooltip){
    tooltip.style("visibility", "hidden");
    tooltip.attr('class', 'tooltip');
    tooltip.style("opacity",0);
    if (object !== null) {
        object.style("fill", origColor);
    }
}

function showDetailBox(text, object, tooltip, top){
    tooltip.style("opacity", 0);
    tooltip.style("visibility", "visible");
    tooltip.transition().style("opacity", 1);
    tooltip.style("top",top+"px");
    tooltip.html(text.toString());
}


d3.selection.prototype.moveToFront = function() {
    return this.each(function(){
        this.parentNode.appendChild(this);
    });
};





// SHOW/HIDE TRANSITIONS
function slowHide(object) {
    object.transition().style("opacity", 0).each("end", function() {
        object.classed("hidden", true);
    });
}
function slowShow(object) {
    object.classed("hidden", false);
    object.transition().style("opacity", 1);
}


// STRING HELPERS
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function camelToSpace(str) {
    return str
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, function(str){ return str.toUpperCase(); })
}

function replaceAll(find, replace, str) {
    return str.replace(new RegExp(find, 'g'), replace);
}

function abbreviate(str, i) {
    var len = str.length;
    if (len > i) {
        str = str.substring(0, i) + "..."
    }
    return str;
}




// PERCENTILE
function getPercentile(data,field,pct){
    pct = pct<1?pct:pct/100;
    data.sort(function(a,b){return d3.ascending(a[field], b[field])});
    return data[Math.floor(data.length*pct)][field];
}

function convertNumFields(inp,fields) {
    fields.forEach(function(dd){
        inp.forEach(function(d){
            if (typeof d[dd] != 'undefined') {d[dd] = +d[dd]; }
        });
    });
    return inp;
}

function pctCalc(d,stats,pcts) {
    var nestPct = {};

    pcts.forEach(function(p){
        nestPct[p] = {};
        stats.forEach(function(s){
            d.sort(function(a,b){return d3.ascending(a[s],b[s])});
            nestPct[p][s] = d[Math.floor((d.length-1)*p/100)][s];
        });
    });
    return nestPct;
}

// CSV EXPORT
function csvExport(exportSet) {
    var keys = Object.keys(exportSet[0]);
    var csvContent = "data:text/csv;charset=utf-8,";
    var headerData = [];
    keys.forEach(function(d){
        headerData.push(d);
    });
    var dataString = headerData.join(",");
    csvContent += dataString+ "\n";
    exportSet.forEach(function(d, i){
        var rowData = [];
        keys.forEach(function(e){
            rowData.push(d[e])
        });
        dataString = rowData.join(",");
        csvContent += i < exportSet.length ? dataString+ "\n" : dataString;
    });
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "export.csv");

    link.click();
}




// GET SCREEN INFO
function getScreenInfo() {
    return {
        width: $(window).width(),
        height: $(window).height(),
        mediumScreen: $(window).width()<=768,
        smallScreen: $(window).width()<450,
        vOrient: $(window).height()>$(window).width()
    }
}



// GRADIENT BUILDER
function buildLinearGradient(svg,colors,angle) {
    angle = Math.min(angle,90);
    var id = "grad-"+getGuid();
    var lg = svg.append("defs").append("linearGradient").attr("id",id);
    lg.attr("x1","0%").attr("y1","0%").attr("x2",(100*(1-angle/90))+"%").attr("y2",(100*angle/90)+"%");
    colors.forEach(function(d,i){
        var c="rgb(0,0,0)",o=1;
        if (typeof d === 'object') {
            if (d.hasOwnProperty("o")) {o=d.o}
            if (d.hasOwnProperty("c")) {c=d.c}
        } else {
            c=d;
        }
        lg.append("stop").attr("offset",(i*100/(colors.length-1))+"%").style("stop-color", c).style("stop-opacity",o);
    });

    return id;

}

function getGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = crypto.getRandomValues(new Uint8Array(1))[0]%16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}


// LINE/AREA BISECTOR
function addXBisector(svg,data,xScale,yScale,xName,yName,fn) {
    var bisectX = d3.bisector(function(d) { return d[xName]; }).left;

    var focus = svg.append("g")
        .attr("class", "focus")
        .style("display", "none");

    focus.append("circle")
        .attr("class","background")
        .attr("cx",2).attr("cy",2)
        .attr("r", 6);
    focus.append("circle")
        .attr("class","foreground")
        .attr("r", 6);
    focus.append("line")
        .attr("x1",0).attr("x2",0)
        .attr("y1",0).attr("y2",svg.style("height"));

    svg.append("rect")
        .attr("class", "overlay")
        .attr("width", svg.style("width"))
        .attr("height", svg.style("height"))
        .on("mousemove", mousemove)
        .on("mouseover",function(){focus.style("display", null); })
        .on("mouseout",function(){
            offHover(d3.select(this),d3.select("#tooltip"));
            focus.style("display", "none");
        });

    function mousemove() {
        var x0 = xScale.invert(d3.mouse(this)[0]),
            i = bisectX(data, x0, 1),
            d0 = data[i - 1],
            d1 = data[i],
            d = x0 - d0[xName] > d1[xName] - x0 ? d1 : d0;
        focus.attr("transform", "translate(" + xScale(d[xName]) + "," + yScale(d[yName]) + ")");
        if (typeof fn != 'undefined') {
            fn(d,this);
        } else {
            console.log(d);
        }

    }
}


// FILTERS
function buildDimMap(data, field, toggleAll) {
    toggleAll = typeof toggleAll == 'undefined' ? true : toggleAll;
    var output = {};
    var sorted = data.sort(function(a,b){return d3.ascending(a[field],b[field])});
    var nested = d3.nest().key(function(d){return d[field];}).entries(sorted);
    nested.forEach(function(d, i){
        if (typeof output[d.key] == 'undefined') {
            if (toggleAll) {output[d.key] = true;}
            else {output[d.key] = i == nested.length-1}
        }
    });
    return output;
}

function buildFilters(data, filterList, filterDiv, changeFunction) {

    var filterData = {};
    //
    //    filterList.forEach(function(d){
    //        filterData[d.name] = buildDimMap(data, d.name);
    //    });

    var filterCols = d3.max([Math.floor(12/filterList.length), 3]);

    filterList.forEach(function(d){
        var isDate = false;
        if (typeof d.date != 'undefined') {isDate = d.date}
        filterData[d.name] = buildDimMap(data, d.name,!isDate);

        var thisFilterDiv = filterDiv.append("div").attr("class","input-field col s12 m"+filterCols);
        var thisFilterSelect = thisFilterDiv.append("select").attr("class", d.name+"-select");
        thisFilterDiv.append("label").text(d.name);
        thisFilterSelect.append("option").attr("value","ALL").attr("selected",!isDate).text("ALL");

        var theseOptions = Object.keys(filterData[d.name]).sort(function(a,b){return d3.ascending(a,b)});
        if (isDate) {theseOptions = theseOptions.sort(function(a,b){return d3.ascending(new Date(a), new Date(b))})}
        theseOptions.forEach(function(e, j){
            var thisOption = thisFilterSelect.append("option").attr("value", e).text(isDate?formatDateSimple(new Date(e)):e);
            if (isDate){thisOption.attr("selected",j==0)}
        });
    });
    $('select').material_select();

    filterList.forEach(function(d){
        $("select."+d.name+"-select").change(function(){
            var selectedVal = $(this).val();
            Object.keys(filterData[d.name]).forEach(function(e){
                filterData[d.name][e] = e==selectedVal;
                if (selectedVal=="ALL") {filterData[d.name][e]=true}
            });
            changeFunction();
        });
    });

    return filterData;

}
