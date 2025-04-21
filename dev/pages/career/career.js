import './career.scss'
import main from '@/assets/scripts/main'
import { reviewsSlider } from "@/assets/scripts/modules/reviewsSlider.js";
import { speakersSlider } from "@/assets/scripts/modules/speakerSlider.js";
import { timer } from "@/assets/scripts/modules/timer.js";

window.onload = () => {
  main()
  reviewsSlider()
  speakersSlider()
  timer()
}
