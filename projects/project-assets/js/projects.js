
document.addEventListener('DOMContentLoaded', function() {

var currSlide = 0;

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





  numElements = $('.content-slide').length;

  //3 to 0

  function navRefresh(parentNav){
    if (!parentNav){
      parentNav = '';
    }
    $(parentNav + '.content-slide').each(function(i, d){
      if (currSlide == 0) {
        $('.prev-btn').addClass('disabled');
      } else {
        $('.prev-btn').removeClass('disabled')
      }
      if (currSlide == numElements-1){
        $('.next-btn').addClass('disabled');
      } else {
        $('.next-btn').removeClass('disabled')
      }
      if (i == currSlide && !$(this).hasClass('curr')){
        $(this).removeClass('prev').removeClass('next').addClass('curr');
      } else if (i < currSlide && !$(this).hasClass('prev')){
        $(this).removeClass('curr').removeClass('next').addClass('prev');
      } else if (i > currSlide && !$(this).hasClass('next')){
        $(this).removeClass('curr').removeClass('prev').addClass('next');
      }
    })
    currCircle = $($('.circle').get(currSlide));
    if (!currCircle.hasClass('active')){
      $('.circle').removeClass('active');
      currCircle.addClass('active');
    }
  }

  //get navNumber

  function getParentNav(e){
    index = e.closest('.nav-wrapper')[0].className + ' ';
  }

  navRefresh();


  $('.flat-btn.prev-btn').click(function(){
    currSlide = currSlide - 1;
    getParentNavIndex($(this))
    navRefresh(getParentNav($(this)));
  })
  $('.flat-btn.next-btn').click(function(){
    currSlide = currSlide + 1;
    navRefresh(getParentNav($(this)));
  })
  $('.circle').click(function(){
    currSlide = $(this).index();
    navRefresh(getParentNav($(this)));
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
