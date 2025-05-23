import './solutions.scss'
import main from '@/assets/scripts/main'
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
}
