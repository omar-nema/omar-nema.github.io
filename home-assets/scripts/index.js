function populateCard(cards){
  title = cards.append('div').attr('class', 'list-row card-title');
  title
    .append('span')
    .text(function(d){return d.title})
  title
      .append('span')
      .html('<i class="material-icons link">open_in_new</i>')

  cards.append('div').attr('class', 'list-row card-body')
    .text(function(d){return d.description});
  footer = cards.append('div').attr('class', 'list-row card-footer');
  cards.selectAll('.card-footer')
    .each(function(d){
      sel = d3.select(this);
      if (d['tag-art'] == '1'){
        sel.append('div').attr('class', 'chip art').text('art')
      }
      if (d['tag-datavis'] == '1'){
        sel.append('div').attr('class', 'chip datavis').text('datavis')
      }
      if (d['tag-product'] == '1'){
        sel.append('div').attr('class', 'chip product').text('product')
      }
      textDate = d['date-desc'];
      sel.append('div').attr('class', 'chip date').text(textDate)
    })
    cards.transition().duration(500).style('opacity', 1)
};


function sortByDate(data){
  return data.sort(function(a, b){
    return parseInt(b.datesort) - parseInt(a.datesort);
  })
}
function sortByType(data){
  return data.sort(function(a, b){
    return parseInt(b.datesort) - parseInt(a.datesort);
  })
}

d3.csv('../home-assets/data/project-data.csv').then(function(data){

  data = sortByDate(data);
  proj = d3.select('.project-list-holder').selectAll('.card').data(data);
  cards = proj.enter().append('div').attr('class', 'card');
  populateCard(cards);


    d3.selectAll('.project-filter.sort .filter-option').on('click', function(){
      //remove and re-add if it's different
    });

    d3.selectAll('.project-filter.type .filter-option').on('click', function(){
      d3.selectAll('.project-filter.type .filter-option').classed('selected', false);
      d3.select(this).classed('selected', true);
      tag = 'tag-' + d3.select(this).attr('filter-type');

      newData = data.filter(function(d){
        if (tag == 'tag-all'){
          return d;
        } if (d[tag] == '1' && d[tag] !== 'tag-all'){
          return d;
        }
      });

      newsel = d3.select('.project-list-holder').selectAll('.card').data(newData);
      enterGrp = newsel.enter()
        .append('div').attr('class','card');

      newsel.exit()
      .transition()
      .duration(300)
      .style('opacity', '0')
      .remove()
      ;

      populateCard(enterGrp);
    });


})
