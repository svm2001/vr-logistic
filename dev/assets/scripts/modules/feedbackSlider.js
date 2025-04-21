import { Swiper } from '../../../../node_modules/swiper/swiper-bundle.min.mjs'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export function feedbackSlider() {
  const elSlider = document.querySelector('.feedback-swiper')
  const elPagination = document.querySelector('.feedback-swiper-pagination')
  if (!elSlider) return

  const feedbackSwiper = new Swiper(elSlider, {
    slidesPerView: 1.1,
    spaceBetween: 20,
    module: [Pagination],

    pagination: {
      el: elPagination,
      type: 'bullets',
      clickable: true,
    },

    breakpoints: {
      540: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      900: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1280: {
        spaceBetween: 0,
        slidesPerView: 2,
        grid: {
            columns: 2,
            rows: 2,
        },
      },
    }
  })
}
