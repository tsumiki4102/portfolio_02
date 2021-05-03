'use strict';

{

  var swiper = new Swiper('.swiper-container_1', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var swiper = new Swiper('.swiper-container_2', {
    slidesPerView: 2,
    spaceBetween: 20,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      750: {
        slidesPerView: 4
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  //ハンバーガーメニュー
  const open = document.getElementById('open');
  const close =document.getElementById('close');
  const mainNavSp = document.getElementById('main_nav_sp');

  open.addEventListener('click', () =>{
    mainNavSp.classList.add('open');
    open.classList.add('hide');
    close.classList.add('show');
  });

  close.addEventListener('click', () =>{
    mainNavSp.classList.remove('open');
    open.classList.remove('hide');
    close.classList.remove('show');
  });

  //スムーススクロール
  const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
  for (let i = 0; i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault();
      let href = smoothScrollTrigger[i].getAttribute('href');
      let targetElement = document.getElementById(href.replace('#', ''));
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const gap = 60;
      const target = rect + offset - gap;
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    });
  }
}