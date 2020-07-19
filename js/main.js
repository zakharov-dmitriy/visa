$(function () {
   $('.reviews__slider').slick({
      prevArrow: '<button class="slider-btn slider-btn__left"><img src="images/reviews-arrow-right.svg"></button>',
      nextArrow: '<button class="slider-btn slider-btn__right"><img src="images/reviews-arrow-right.svg"></button>',

      centerMode: true,
      centerPadding: 60,
      slidesToShow: 3,
   });
})