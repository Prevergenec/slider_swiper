'use strict'

window.addEventListener('DOMContentLoaded', () => {

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });


});


var swiper = new Swiper(".mySwiper", {
    // Отступы между слайдами
    spaceBetween: 20,
    // Количество показываемых слайдов
    slidesPerView: 4,
    // Loop - Бесконечные слайды 
    loop: true,
    // Speed - Скорость
    speed: 1000,
    // Autoplay - Автоматическая прокрутка слайдов, где speed - Скорость. 
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    // Элементы навигации
    // Стрелки
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // Буллеты (точки)
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: 'bullets',
    },
    // Мобилка
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 20,
      },
      550: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      769: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1064: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
  // Прячем элементы навигации если слайдов меньше 4
  function checkSlides() {
    let sliderItem = document.querySelectorAll('.swiper-slide');
    let swiperNext = document.querySelector('.swiper-button-next');
    let swiperPrev = document.querySelector('.swiper-button-prev');
    let pagination = document.querySelector('.swiper-pagination');
    if (sliderItem.length <= 4)  { // Цифра ограничения
      swiperNext.style.display = 'none';
      swiperPrev.style.display = 'none';
      pagination.style.display = 'none';
    }
  }
  checkSlides();