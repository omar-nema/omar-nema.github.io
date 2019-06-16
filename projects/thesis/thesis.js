
document.addEventListener('DOMContentLoaded', function() {
  // code
  const scrollspy = new VanillaScrollspy(document.querySelector('.nav'));
  scrollspy.init();


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
