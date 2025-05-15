import './news-detail.scss'
import main from '@/assets/scripts/main'
import { newsSlider } from '@/assets/scripts/modules/newsSlider'
import { video } from '@/assets/scripts/modules/video'
import { initSocialField } from '@/assets/scripts/modules/social-field'
window.onload = () => {
    main()
    newsSlider()
    video()
    initSocialField()
}