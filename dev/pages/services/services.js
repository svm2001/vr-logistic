import './services.scss'
import main from '@/assets/scripts/main'
import { tabs } from '@/assets/scripts/modules/tabs'
import select from '@/assets/scripts/modules/select'
import { standartsSlider } from "@/assets/scripts/modules/standartsSlider.js"
import { feedbackSlider } from '@/assets/scripts/modules/feedbackSlider.js'
import { initGallery } from '@/assets/scripts/modules/gallery.js'

window.onload = () => {
  main()
  select()
  standartsSlider()
  feedbackSlider()
  initGallery()
  
  if(window.innerWidth > 767) {
    tabs({
      tabParentSelector: '.routes',
      tabHeaderSelector: '.routes__tabs-item',
      tabHeaderActiveClass: 'active',
      tabItemSelector: '.routes__content-item',
      tabItemActiveClass: 'active',
      event: 'click'
    })
  }
}
