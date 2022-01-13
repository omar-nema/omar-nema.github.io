function populateCard(cards) {
  title = cards.append('div').attr('class', 'list-row card-title');
  // title
  //   .append('span')
  //   .text(function(d){return d.title});
  title.each(function (d) {
    sel = d3.select(this);
    sel.append('span').text(function (d) {
      return d.title;
    });
    if (d['protected'] == '1') {
      sel
        .append('svg')
        .attr('width', '15')
        .attr('height', '15')
        .append('image')
        .attr('href', '../home-assets/visuals/lock-black-18dp.svg')
        .attr('width', '15px')
        .attr('height', '15px');
    }
  });

  cards
    .append('div')
    .attr('class', 'list-row card-body')
    .text(function (d) {
      return d.description;
    });
  footer = cards.append('div').attr('class', 'list-row card-footer');
  cards.selectAll('.card-footer').each(function (d) {
    sel = d3.select(this);
    if (d['tag-art'] == '1') {
      sel.append('div').attr('class', 'chip art').text('art');
    }
    if (d['tag-datavis'] == '1') {
      sel.append('div').attr('class', 'chip datavis').text('datavis');
    }
    if (d['tag-product'] == '1') {
      sel.append('div').attr('class', 'chip product').text('product');
    }
    textDate = d['date-desc'];
    sel.append('div').attr('class', 'chip date').text(textDate);
  });
  cards
    .on('click', function (d) {
      console.log(d);
      if (parseInt(d.protected) == 0) {
        window.open(d.url, '_self');
      } else {
        var testV = 1;
        var pass1 = prompt('Please enter password', '');
        while (testV < 3) {
          if (!pass1) console.log(pass1);
          if (pass1.toLowerCase() == 'spillit') {
            window.location.replace(d.url);
            break;
          }
          testV += 1;
          var pass1 = prompt(
            'Access Denied - Password Incorrect, Please Try Again.',
            'Password'
          );
        }
        if ((pass1.toLowerCase() != 'password') & (testV == 3)) return ' ';
      }
    })
    .transition()
    .duration(300)
    .style('opacity', 1);
}

function sortByDate(data) {
  return data.sort(function (a, b) {
    return parseInt(b.datesort) - parseInt(a.datesort);
  });
}
function sortByType(data) {
  return data.sort(function (a, b) {
    return parseInt(b.datesort) - parseInt(a.datesort);
  });
}

d3.csv('../home-assets/data/project-data.csv').then(function (data) {
  data = sortByDate(data);
  proj = d3
    .select('.project-list-holder')
    .selectAll('.card')
    .data(data, function (d) {
      return d.id;
    });
  cards = proj
    .enter()
    .append('div')
    .attr('class', 'card')
    .attr('href', function (d) {
      return d.url;
    });
  populateCard(cards);

  d3.selectAll('.project-filter.type .filter-option').on('click', function () {
    d3.selectAll('.project-filter.type .filter-option').classed(
      'selected',
      false
    );
    d3.select(this).classed('selected', true);
    tag = 'tag-' + d3.select(this).attr('filter-type');

    newData = data.filter(function (d) {
      if (tag == 'tag-all') {
        return d;
      }
      if (d[tag] == '1' && d[tag] !== 'tag-all') {
        return d;
      }
    });
    console.log(newData);

    newsel = d3
      .select('.project-list-holder')
      .selectAll('.card')
      .data(newData, function (d) {
        return d.id;
      });
    enterGrp = newsel.enter().append('div').attr('class', 'card');

    newsel.exit().transition().duration(700).style('opacity', '0').remove();

    populateCard(enterGrp);
  });

  d3.select('.nav-item.work').on('click', function (d) {
    d3.selectAll('.nav-item').classed('selected', false);
    d3.select(this).classed('selected', true);
    d3.select('.about-page')
      .transition()
      .duration(100)
      .style('opacity', '0')
      .on('end', function () {
        d3.select(this).style('display', 'none');
        d3.select('.content')
          .style('display', 'block')
          .transition()
          .duration(100)
          .style('opacity', 1);
      });
  });
  d3.select('.nav-item.about').on('click', function (d) {
    d3.selectAll('.nav-item').classed('selected', false);
    d3.select(this).classed('selected', true);
    d3.select('.content')
      .transition()
      .duration(100)
      .style('opacity', '0')
      .on('end', function () {
        d3.select(this).style('display', 'none');
        d3.select('.about-page')
          .style('display', 'block')
          .transition()
          .duration(100)
          .style('opacity', 1);
      });
  });
});
