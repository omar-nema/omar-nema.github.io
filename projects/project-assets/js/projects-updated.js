window.addEventListener('load', (event) => {
  let slideIndex = 0;
  let slides = document.querySelectorAll('.slide');

  function updateSlides() {
    let dots = document.querySelectorAll('.dot');
    slides.forEach((d, i) => {
      if (i < slideIndex) {
        d.className = 'slide before';
      } else if (i == slideIndex) {
        d.className = 'slide curr';
      } else {
        d.className = 'slide after';
      }
    });
    dots.forEach((d, i) => {
      if (i == slideIndex) {
        d.className = 'dot active';
      } else {
        d.className = 'dot';
      }
    });
  }

  document.querySelector('.slides').addEventListener('click', () => {
    if (slideIndex < slides.length - 1) {
      slideIndex++;
    } else {
      slideIndex = 0;
    }
    updateSlides();
  });

  function createDots() {
    let slider = document.querySelector('.slider');
    let dots = document.createElement('div');
    dots.className = 'dots';
    slider.append(dots);
    let i;
    for (i = 0; i < slides.length; i++) {
      let dot = document.createElement('div');
      if (i == slideIndex) {
        dot.className = 'dot active';
      } else {
        dot.className = 'dot';
      }

      dots.append(dot);
      dot.dataset.index = i;
      dot.addEventListener('click', (e) => {
        slideIndex = e.target.dataset.index;
        updateSlides();
      });
    }
  }

  createDots();
  updateSlides();

  function initSlideSize() {
    let maxH = document.querySelector('img').getBoundingClientRect().height;
    document.querySelector('.slides').style['max-height'] = maxH + 'px';
  }

  initSlideSize();

  window.addEventListener('resize', () => {
    initSlideSize();
  });
});
