
document.addEventListener('DOMContentLoaded', function() {

var currSlides = [0, 0];

  $('.nav-link').click(function(e) {
   e.preventDefault();
   var target = this.hash, $target = $(target);
   $('html, body').stop().animate({
     'scrollTop': $target.offset().top-30
   }, 300, 'swing', function() {
     window.location.hash = target;
   });
 });

 (function() {
  'use strict';

  var section = document.querySelectorAll(".block");
  var sections = {};
  var i = 0;

  Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = e.offsetTop-50;
  });

  window.onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    for (i in sections) {
      if (sections[i] <= scrollPosition) {
        document.querySelector('.active').setAttribute('class', 'nav-link');
        document.querySelector('a[href*=' + i + ']').setAttribute('class', 'nav-link active');
      }
    }
  };
})();

  function createNavCircles(){
    $('.nav-wrapper').each(function(e){
      circleHolder = $(this).find('.block-circles');
      numSlides = $(this).find('.content-slide').length;
      for (i = 0; i < numSlides; i++){
        circleHolder.append('<div class="circle"></div>');
      }
    })
  }

  var currSlides = [0, 0]

  function navRefresh(input){
    parentNav = input.id;
    currSlide = currSlides[input.index];
    numElements =   $(parentNav + '.content-slide').length;
    $(parentNav + '.content-slide').each(function(i, d){
      if (currSlide == 0) {
        $(this).find('.prev-btn').addClass('disabled');
      } else {
        $(this).find('.prev-btn').removeClass('disabled')
      }
      if (currSlide == numElements-1){
        $(this).find('.next-btn').addClass('disabled');
      } else {
        $(this).find('.next-btn').removeClass('disabled')
      }
      if (i == currSlide && !$(this).hasClass('curr')){
        $(this).removeClass('prev').removeClass('next').addClass('curr');
      } else if (i < currSlide && !$(this).hasClass('prev')){
        $(this).removeClass('curr').removeClass('next').addClass('prev');
      } else if (i > currSlide && !$(this).hasClass('next')){
        $(this).removeClass('curr').removeClass('prev').addClass('next');
      }
    })
    currCircle = $($(parentNav + '.circle').get(currSlide));
    if (!currCircle.hasClass('active')){
      $(parentNav + '.circle').removeClass('active');
      currCircle.addClass('active');
    }
  }
  function getParentNav(e){
    parent = e.closest('.nav-wrapper');
    returnobj =  {index: parent.index('.nav-wrapper'), id: $(parent[0]).id};
    return {index: parent.index('.nav-wrapper'), id: '#' + $(parent[0])[0].id + ' '}
  }
  function initializeNavs(){
    $('.nav-wrapper').each(function(d, i){
      navRefresh(getParentNav($(this)))
    })
  }
  createNavCircles();
  initializeNavs();
  
  $('.flat-btn.prev-btn').click(function(){
    parentNav = getParentNav($(this));
    currSlides[parentNav.index] = currSlides[parentNav.index] - 1;
    navRefresh(parentNav);
  })
  $('.flat-btn.next-btn').click(function(){
    parentNav = getParentNav($(this));
    currSlides[parentNav.index] = currSlides[parentNav.index] + 1;
    navRefresh(parentNav);
  })
  $('.circle').click(function(){
    parentNav = getParentNav($(this));
    currSlides[parentNav.index]  = $(this).index();
    navRefresh(parentNav);
  })


  function showToolTip(){
      $('.info-tooltip').hide();
      $('.block-text.layered').one('click', showToolTip);
      //if it was the same one
      $(this).find('.info-tooltip').show().css('display', 'block');
      $(this).one('click', hideToolTip);
  };
  function hideToolTip(){
      $(this).find('.info-tooltip').hide();
      $(this).one('click', showToolTip);
  };

  $('.block-text.layered').one('click', showToolTip);



  // document.querySelector('.').on('click', showToolTip);
})
