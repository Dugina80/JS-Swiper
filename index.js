
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
        nextEl: ".swiper-button-next-products",
        prevEl: ".swiper-button-prev-products",
      },
    });

