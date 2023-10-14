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