import './home.scss'
import main from '@/assets/scripts/main'
import { countups } from '@/assets/scripts/modules/countups'
import { globe } from '@/assets/scripts/modules/globe'

window.onload = () => {
  main()
  countups()
  globe()
}
