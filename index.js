/*new Swiper('.image-slider',{
    navigation: {
        nextE1: '.swiper-button-next',
        prevE1: '.swiper-button-prev'
    },
});

  let mySwiper = new Swiper('.image-slider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });*/

  document.addEventListener('DOMContentLoaded', function() {
    const mySwiper = new Swiper('.image-slider', {
      //navigation: {
        //nextEl: '.swiper-button-next',
        //prevEl: '.swiper-button-prev',
     // },  
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  });

