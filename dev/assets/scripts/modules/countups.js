import { CountUp } from 'countup.js'

export function countups() {
  const triggerContainer = document.querySelector('.js-countup-trigger')
  const counters = document.querySelectorAll('.js-countup')

  if (!counters.length || !triggerContainer) return

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const easingFn = function (t, b, c, d) {
          var ts = (t /= d) * t
          var tc = ts * t
          return b + c * (tc + -3 * ts + 3 * t)
        }

        const options = {
          separator: ' ',
          duration: 1.5,
          easingFn
        }

        counters.forEach((counter, index) => {
          const formattedValue = counter.textContent.replace(/\s/g, "")
          const numberFormattedValue = parseInt(formattedValue)
          const targetId = `countup-${index}`
          counter.id = targetId

          const jsCount = new CountUp(targetId, numberFormattedValue, options)
          !jsCount.error ? jsCount.start() : console.error(jsCount.error)
        })

        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.1
  })

  observer.observe(triggerContainer)
}
