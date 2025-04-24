import './contacts.scss'
import main from '@/assets/scripts/main'
import { tabs } from '@/assets/scripts/modules/tabs'

window.onload = () => {
  main()
  tabs({
    tabParentSelector: '.js-tags-list',
    tabHeaderSelector: '.js-tags-item',
    tabHeaderActiveClass: 'active',
    tabItemSelector: '.contacts__item',
    tabItemActiveClass: 'active',
    event: 'click'
  })
}
