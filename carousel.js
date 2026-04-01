class Carousel {
  constructor(container) {
    this.container = container;
    this.currSlide = 0;
    this._maxH = Math.max(80, window.innerHeight - 100);

    const imgPaths = JSON.parse(container.dataset.imgs);
    this.imgCap = container.dataset.cap || '1200px';
    const addTopMargin = container.dataset.topMargin === 'true';

    this.imgsWithTypes = imgPaths.map((d) => ({
      path: d,
      type: d.includes('mp4') || d.includes('avi') ? 'video' : 'image',
    }));

    this.render(addTopMargin);
    this.initSlideSize();
    window.addEventListener('resize', () => this.initSlideSize());
  }

  // Reactive maxH — syncs all DOM elements whenever it changes,
  // replicating Svelte's reactive `style="height: {maxH}px"`
  get maxH() {
    return this._maxH;
  }

  set maxH(val) {
    this._maxH = val;
    this._syncMaxH();
  }

  _syncMaxH() {
    if (this.slidesEl) {
      this.slidesEl.style.height = this._maxH + 'px';
    }
    if (this.slideEls) {
      this.slideEls.forEach((slide) => {
        const media = slide.querySelector('img, video');
        if (media) {
          media.style.maxHeight = this._maxH + 'px';
        }
      });
    }
  }

  render(addTopMargin) {
    const slider = document.createElement('div');
    slider.className = 'slider' + (addTopMargin ? ' with-top-margin' : '');
    slider.style.maxWidth = `min(98vw, ${this.imgCap})`;

    const slides = document.createElement('div');
    slides.className = 'slides';
    this.slidesEl = slides;

    // Set initial height immediately (Svelte does this reactively)
    slides.style.height = this._maxH + 'px';

    // Left nav
    const leftBtn = document.createElement('div');
    leftBtn.className = 'nav-btn left';
    leftBtn.innerHTML = '<span class="material-icons-round">arrow_left</span>';
    leftBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.prev();
    });

    // Right nav
    const rightBtn = document.createElement('div');
    rightBtn.className = 'nav-btn right';
    rightBtn.innerHTML = '<span class="material-icons-round">arrow_right</span>';
    rightBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.next();
    });

    slides.appendChild(leftBtn);
    slides.appendChild(rightBtn);

    // Slides
    this.slideEls = [];
    this.imgsWithTypes.forEach((img, i) => {
      const slideDiv = document.createElement('div');
      slideDiv.className = 'slide';

      if (img.type === 'image') {
        const imgEl = document.createElement('img');
        imgEl.style.maxWidth = `min(98vw, ${this.imgCap})`;
        imgEl.style.maxHeight = `${this._maxH}px`;
        imgEl.src = img.path;
        // Handle load event — also check .complete for cached images
        imgEl.addEventListener('load', () => this.initSlideSize());
        slideDiv.appendChild(imgEl);
      } else {
        const videoEl = document.createElement('video');
        videoEl.autoplay = true;
        videoEl.loop = true;
        videoEl.muted = true;
        videoEl.playsInline = true;
        videoEl.style.maxWidth = `min(98vw, ${this.imgCap})`;
        videoEl.style.maxHeight = `${this._maxH}px`;
        const source = document.createElement('source');
        source.src = img.path;
        source.type = 'video/mp4';
        videoEl.appendChild(source);
        videoEl.addEventListener('loadedmetadata', () => this.initSlideSize());
        slideDiv.appendChild(videoEl);
      }

      slideDiv.addEventListener('click', () => this.next());

      this.slideEls.push(slideDiv);
      slides.appendChild(slideDiv);
    });

    slider.appendChild(slides);

    // Dots
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'dots';
    this.dotEls = [];
    this.imgsWithTypes.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.className = 'dot';
      dot.dataset.index = i;
      dot.addEventListener('click', () => this.goTo(i));
      this.dotEls.push(dot);
      dotsContainer.appendChild(dot);
    });

    slider.appendChild(dotsContainer);
    this.container.appendChild(slider);

    this.updateClasses();

    // Handle already-cached images that won't fire 'load'
    this.slideEls.forEach((slide) => {
      const img = slide.querySelector('img');
      if (img && img.complete && img.naturalHeight > 0) {
        this.initSlideSize();
      }
    });
  }

  initSlideSize() {
    // Step 1: reset to viewport max (same as Svelte)
    const viewportMax = Math.max(0, window.innerHeight - 100);
    if (viewportMax > 80) {
      this.maxH = viewportMax;
    }

    // Step 2: force reflow, then measure and tighten synchronously.
    // In Svelte this happens reactively; here we force the browser to
    // lay out with the new maxH so we can measure the actual rendered size.
    const el = this.slidesEl.querySelector('img, video');
    if (el) {
      // Force layout so getBoundingClientRect reflects the new maxH constraint
      void el.offsetHeight;
      const rendered = el.getBoundingClientRect().height;
      if (rendered > 0 && rendered < this._maxH) {
        this.maxH = rendered;
      }
    }
  }

  updateClasses() {
    this.slideEls.forEach((el, i) => {
      el.classList.toggle('curr', i === this.currSlide);
      el.classList.toggle('before', i < this.currSlide);
      el.classList.toggle('after', i > this.currSlide);
    });
    this.dotEls.forEach((el, i) => {
      el.classList.toggle('active', i === this.currSlide);
    });
  }

  next() {
    if (this.currSlide < this.imgsWithTypes.length - 1) {
      this.currSlide++;
    } else {
      this.currSlide = 0;
    }
    this.updateClasses();
  }

  prev() {
    if (this.currSlide > 0) {
      this.currSlide--;
    } else {
      this.currSlide = this.imgsWithTypes.length - 1;
    }
    this.updateClasses();
  }

  goTo(index) {
    this.currSlide = index;
    this.updateClasses();
  }

  updateCap(newCap) {
    this.imgCap = newCap;
    const slider = this.container.querySelector('.slider');
    if (slider) {
      slider.style.maxWidth = `min(98vw, ${newCap})`;
    }
    this.slideEls.forEach((slide) => {
      const media = slide.querySelector('img, video');
      if (media) {
        media.style.maxWidth = `min(98vw, ${newCap})`;
      }
    });
    // Re-measure height since width change affects rendered height
    this.initSlideSize();
  }
}

// Initialize all carousels and handle dynamic imgCap
document.addEventListener('DOMContentLoaded', () => {
  const carousels = [];
  document.querySelectorAll('[data-carousel]').forEach((el) => {
    carousels.push(new Carousel(el));
  });

  // Dynamic imgCap: match text-container content width
  const textContainer = document.querySelector('.text-container');
  function updateImgCap() {
    if (!textContainer) return;
    const style = window.getComputedStyle(textContainer);
    const paddingLeft = parseFloat(style.paddingLeft);
    const paddingRight = parseFloat(style.paddingRight);
    const contentWidth = textContainer.offsetWidth - paddingLeft - paddingRight;
    const cap = contentWidth + 'px';
    carousels.forEach((c) => {
      if (!c.container.dataset.fixedCap) {
        c.updateCap(cap);
      }
    });
  }

  updateImgCap();
  window.addEventListener('resize', updateImgCap);
});
