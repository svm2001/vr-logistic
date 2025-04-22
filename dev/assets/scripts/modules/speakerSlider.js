import {Swiper} from '../../../../node_modules/swiper/swiper-bundle.min.mjs'
import {Pagination} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export function speakersSlider() {
  const slider = document.querySelector('.content-text__speakers-list .swiper')

  if (!slider) return

  const swiper = new Swiper(slider, {
    modules: [Pagination],
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    spaceBetween: 30,
    autoHeight: true,
    draggable: true,
    speed: 500,
    watchSlidesProgress: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // breakpoints: {
    //   1200: {
    //     centeredSlides: true,
    //     slidesPerView: 'auto',
    //     spaceBetween: 0,
    //   },
    //   768: {
    //     slidesPerView: 2
    //   }
    // },
    // on: {
    //   init: function () {
    //     if(window.innerWidth > 1199) {
    //       this.updateAutoHeight();
    //       this.slideTo(1, 0);
    //       setTimeout(() => {
    //         this.slideTo(2, 500);
    //         setTimeout(() => {
    //           this.slideTo(1, 500);
    //         }, 200);
    //       }, 200);
    //     }
    //   }
    // }
  })
}
