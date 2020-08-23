$(function () {
   $('.reviews__slider').slick({
      prevArrow: '<button class="slider-btn slider-btn__left"><img src="images/reviews-arrow-right.svg"></button>',
      nextArrow: '<button class="slider-btn slider-btn__right"><img src="images/reviews-arrow-right.svg"></button>',

      centerMode: true,
      centerPadding: 60,
      slidesToShow: 3,
      responsive: [
         {
            breakpoint: 770,
            settings: {
               slidesToShow: 1,
               arrows: false,
               autoplay: true,
            }
         }
      ]
   });

   // $('.type__list').slick({
   //    centerMode: true,
   //    responsive: [
   //       {
   //          breakpoint: 450,
   //          settings: {
   //             slidesToShow: 3,
   //             slidesToScroll: 1,
   //             infinite: true,
   //          }
   //       }
   //    ]
   // });
})