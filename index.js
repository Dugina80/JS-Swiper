
    new Swiper('.image-slider', {
   
        loop: true, 
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    new Swiper(".products-swiper", {
      loop: true,
      slidesPerView: 5,
      spaceBetween: 10,
    
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    new Swiper(".partners-swiper", {
      loop: true,
      slidesPerView: 9,
      spaceBetween: 18,
    
      navigation: {
        nextEl: ".swiper-button-next-partners",
        prevEl: ".swiper-button-prev-partners",
      },
    });

