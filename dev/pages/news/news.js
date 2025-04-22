import './news.scss'
import main from '@/assets/scripts/main'
import sortFilter from '@/assets/scripts/modules/sort-filter'
import { initMobileFilter } from '@/assets/scripts/modules/filter-panel'
import { initTags } from '@/assets/scripts/modules/tags-line'
window.onload = () => {
    main()
    sortFilter()
    initMobileFilter()
    initTags()
}