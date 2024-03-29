window.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
      },
  });  
});

// 뉴마커스 완성 //