
document.addEventListener('DOMContentLoaded', function() {

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
