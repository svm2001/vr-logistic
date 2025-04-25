import './about.scss'
import main from '@/assets/scripts/main'
import { tabs } from '@/assets/scripts/modules/tabs'

window.onload = () => {
  main()
  tabs({
    tabParentSelector: '.team__content-nav',
    tabHeaderSelector: '.team__content-nav-item',
    tabHeaderActiveClass: 'active',
    tabItemSelector: '.team__content-people',
    tabItemActiveClass: 'active',
    event: 'click'
  })
}
