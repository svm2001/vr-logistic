import { Swiper } from '../../../../node_modules/swiper/swiper-bundle.min.mjs'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export function standartsSlider() {
  const slider = document.querySelector('.standarts__slider .swiper')

  if (!slider) return

  const swiper = new Swiper(slider, {
    modules: [Pagination],
    slidesPerView: 1.05,
    slidesPerGroup: 1,
    spaceBetween: 10,
    centeredSlides: false,
    autoHeight: true,
    draggable: true,
    speed: 1000,
    watchSlidesProgress: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  })
}
