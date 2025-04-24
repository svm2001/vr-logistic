import './news-detail.scss'
import main from '@/assets/scripts/main'
import { newsSlider } from '@/assets/scripts/modules/newsSlider'
import { video } from '@/assets/scripts/modules/video'
window.onload = () => {
    main()
    newsSlider()
    video()
}