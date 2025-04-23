import { Swiper } from '../../../../node_modules/swiper/swiper-bundle.min.mjs'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export function newsSlider() {
  const elSlider = document.querySelector('.news-swiper')
  const elPagination = document.querySelector('.news-swiper-pagination')
  if (elSlider) {
    const swiperNews = new Swiper(elSlider, {
      slidesPerView: 1.1,
      spaceBetween: 10,
      modules: [Pagination],
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
        },
        1200: {
          centeredSlides: true,
          centeredSlidesBounds: true,
          slidesPerView: 2.75,
          spaceBetween: 0,
          initialSlide: 0,
        },
      },
      on: {
        init: function(){
          resetWrapper(elSlider)
        }
      }
    })
  }
}

function resetWrapper(elSlider){
  const wrapper = elSlider.querySelector(".swiper-wrapper");
  setTimeout(()=>{wrapper.setAttribute('style', 'transform: translate3d(0px, 0px, 0px)')}, 100);
}
