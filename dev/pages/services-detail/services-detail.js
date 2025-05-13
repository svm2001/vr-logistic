import './services-detail.scss'
import main from '@/assets/scripts/main'
import { standartsSlider } from "@/assets/scripts/modules/standartsSlider.js"
import { dropDown } from "@/assets/scripts/modules/dropDown.js"

window.onload = () => {
  main()
  standartsSlider()
  dropDown()
}
