import './contacts.scss'
import main from '@/assets/scripts/main'
import { tabs } from '@/assets/scripts/modules/tabs'

window.onload = () => {
  main()
  tabs({
    tabParentSelector: '.tags-line__list',
    tabHeaderSelector: 'label.tags-line__item',
    tabHeaderActiveClass: 'active',
    tabItemSelector: '.contacts__item',
    tabItemActiveClass: 'active',
    event: 'click'
  })
}
