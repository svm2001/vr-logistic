import './home.scss'
import main from '@/assets/scripts/main'
import { countups } from '@/assets/scripts/modules/countups'
import { Swiper } from '../../../node_modules/swiper/swiper-bundle.min.mjs' 

window.onload = () => {
  main()
  countups()
}

function initSwiperNews( elSlider = '.swiper' , elPagination = '.swiper-pagination'){
  console.log('asfaf')
  const swiperNews = new Swiper(elSlider, {
    slidesPerView: 1.1,
    spaceBetween: 10,

    pagination: {
        el: elPagination,
        type: 'bullets',
        clickable: true,
    },
    
    breakpoints: {
        450: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },

        540: {
          slidesPerView: 2.1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1.5,
          spaceBetween: 30,
        },
        900: {
          slidesPerView: 1.5,
          spaceBetween: 30,
          centeredSlides: true,
          centeredSlidesBounds: false,
          centerInsufficientSlides: false,
        },
        1200: {
          centeredSlides: true,
          centeredSlidesBounds: true,
          centerInsufficientSlides: true,
          slidesPerView: 2.5,
          spaceBetween: 0,
        },
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const elSlider = document.querySelector('.news-swiper');
  const elPagination = document.querySelector('.news-swiper-pagination');
  if(elSlider){
    initSwiperNews(elSlider, elPagination);
  }
})