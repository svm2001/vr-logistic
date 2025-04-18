import './services.scss'
import main from '@/assets/scripts/main'
import { countups } from '@/assets/scripts/modules/countups'
import { globe } from '@/assets/scripts/modules/globe'
import { video } from '@/assets/scripts/modules/video'
import { tabs } from '@/assets/scripts/modules/tabs'
import select from '@/assets/scripts/modules/select'
import { standartsSlider } from "@/assets/scripts/modules/standartsSlider.js"

window.onload = () => {
  main()
  select()
  standartsSlider()

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
