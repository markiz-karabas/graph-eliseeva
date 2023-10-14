//HERO-CAROUSEL
const owl = $('.owl-carousel');
owl.owlCarousel({
  center: true,
  loop: true,
  margin: 10,
  items: 3,
  autoplay: true,
  autoplayTimeout: 3000,
});
$('.hero-slider__btn--prev').click(function() {
  owl.trigger('prev.owl.carousel', [300]);
});
$('.hero-slider__btn--next').click(function() {
  owl.trigger('next.owl.carousel');
});
//PORTFOLIO-GALLERY
const albumItems = Array.from(document.querySelectorAll('.album__item')),
      albumImgs = Array.from(document.querySelectorAll('.album__img')),
      albumSlider = document.querySelector('.slider-gallery'),
      sliderBox = document.querySelector('.slider-gallery__box'),
      albumBtnPrev = document.querySelector('.slider-gallery__btn--prev'),
      albumBtnNext = document.querySelector('.slider-gallery__btn--next'),
      albumBtnClose = document.querySelector('.icon-close');

let imgIndex = 0,
    imgFullSize;
//functions
function chengeImg(dir) {
  if(dir === 'prev') {
    if (imgIndex > 0) {
      imgIndex--;
    } else {
      imgIndex = albumItems.length - 1;
    }
  } else if (dir === 'next') {
    if (imgIndex < albumItems.length - 1) {
      imgIndex++;
    } else {
      imgIndex = 0;
    }
  }
  let newImg = albumImgs[imgIndex].cloneNode();
  newImg.style.objectFit = "contain";
  imgFullSize.replaceWith(newImg);
  imgFullSize = newImg;
  imgFullSize.style.pointerEvents = "none";

}
//eventlisteners
albumItems.forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    imgIndex = albumItems.indexOf(item);
    imgFullSize = albumImgs[imgIndex].cloneNode();
    imgFullSize.style.objectFit = "contain";
    imgFullSize.style.pointerEvents = "none";
    sliderBox.append(imgFullSize);
    albumSlider.classList.add('active');
  })
});
albumBtnPrev.addEventListener('click', event => {
  event.preventDefault();
  chengeImg('prev');
});
albumBtnNext.addEventListener('click', event => {
  event.preventDefault();
  chengeImg('next');
});
albumBtnClose.addEventListener('click', event => {
  event.preventDefault();
});
albumBtnClose.addEventListener('click', event => {
  event.preventDefault();
  albumSlider.classList.remove('active');
  imgFullSize.remove();
  newImg.remove();
});