import './solutions-detail.scss'
import main from '@/assets/scripts/main'
import { standartsSlider } from "@/assets/scripts/modules/standartsSlider.js"
import { feedbackSlider } from '@/assets/scripts/modules/feedbackSlider.js'
import { initGallery } from '@/assets/scripts/modules/gallery.js'

window.onload = () => {
  main()
  standartsSlider()
  feedbackSlider()
  initGallery()
}
