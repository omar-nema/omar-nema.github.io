
document.addEventListener('DOMContentLoaded', function() {

``

  $('body').append('<div class="img-modal"></div>');

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

  var currSlides = [];

  function createNavCircles(){
    $('.nav-wrapper').each(function(e){
      currSlides.push(0);
      circleHolder = $(this).find('.block-circles');
      numSlides = $(this).find('.content-slide').length;
      for (i = 0; i < numSlides; i++){
        circleHolder.append('<div class="circle"></div>');
      }
    })
  }

  function showModal(content){
    var newCont = $(content).clone();
    $('.img-modal').html(newCont)
    $('.img-modal').fadeIn(500)
    return newCont;
  }
  function hideModal(){
    $('.img-modal').fadeOut(300)
  }


  function navRefresh(input){
    parentNav = input.id;
    currSlide = currSlides[input.index];
    numElements =   $(parentNav + '.content-slide').length;

    $(parentNav + '.content-slide').each(function(i, d){
      block = $($(this).parents('.block'));
      if (currSlide == 0) {
        block.find('.prev-btn').addClass('disabled');
      } else {
        block.find('.prev-btn').removeClass('disabled')
      }
      if (currSlide == numElements-1){
        block.find('.next-btn').addClass('disabled');
      } else {
        block.find('.next-btn').removeClass('disabled')
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
    parentNav = getParentNav($(this))
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

  $('img').click(function(e){
    e.stopPropagation();
    showModal(this);
    $(document).click(function(){
      hideModal();
    })
  });

  $('video').click(function(e){
    e.stopPropagation();
    vidPlayed = showModal(this);
    vidPlayed[0].play();
    console.log(vidPlayed[0].currentTime);
    vidPlayed[0].onended = function(z){
      hideModal();
    }
    $(document).click(function(){
      hideModal();
    })
  })


})
