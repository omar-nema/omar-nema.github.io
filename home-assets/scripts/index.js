function populateCard(cards){
  cards.append('div').attr('class', 'list-row card-title')
    .text(function(d){return d.title})
  cards.append('div').attr('class', 'list-row card-body')
    .text(function(d){return d.description});
  footer = cards.append('div').attr('class', 'list-row card-footer');
}

d3.csv('../home-assets/data/project-data.csv').then(function(data){
  console.log(data)

  sorted = data.sort(function(a, b){
    console.log(parseInt(a.datesort), b.datesort)
    if (parseInt(a.datesort) >  parseInt(b.datesort)){
      return a;
    }
  })
  console.log(sorted)

  proj = d3.select('.project-list-holder').selectAll('.card').data(data);
  cards = proj.enter().append('div').attr('class', 'card');
  populateCard(cards);

  cards.selectAll('.card-footer')
    .each(function(d){
      sel = d3.select(this);
      if (d['tag-art'] == '1'){
        sel.append('div').attr('class', 'chip').text('art')
      }
      if (d['tag-datavis'] == '1'){
        sel.append('div').attr('class', 'chip').text('datavis')
      }
      if (d['tag-product'] == '1'){
        sel.append('div').attr('class', 'chip').text('product')
      }
      textDate = d['date-desc'];
      sel.append('div').attr('class', 'chip').text(textDate)
    })

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
      populateCard(enterGrp);
      newsel.exit()
      .transition()
      .duration(300)
      .style('opacity', '0')
      .transition()
      .delay(300)
      .remove();
    });


})
