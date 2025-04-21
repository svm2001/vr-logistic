export default function select() {
  const mains = document.querySelectorAll('[data-select="main"]')

  if (!mains.length) return

  const removeActive = elems => {
    elems.forEach(main => main.classList.remove('active'))
  }

  const updateContent = index => {
    const contentItems = document.querySelectorAll('.routes__content-item')
    if (contentItems.length > 0) {
      contentItems.forEach((item, i) => {
        if (i === index) {
          item.classList.add('active')
        } else {
          item.classList.remove('active')
        }
      })
    }
  }

  document.addEventListener('click', event => {
    if (event.target.closest('[data-select="main"]')) {
      mains.forEach(main => {
        if (main !== event.target.closest('[data-select="main"]'))
          main.classList.remove('active')
      })

      const select = event.target.closest('[data-select="main"]'),
        value = select.querySelector('[data-select="value"]'),
        listItems = select.querySelectorAll('li')

      if (event.target.closest('[data-select="head"]')) {
        select.classList.toggle('active')
      }

      if (event.target.closest('li')) {
        const listItem = event.target.closest('li')

        if (!listItem.classList.contains('active')) {
          removeActive(listItems)
          value.innerHTML = listItem.innerHTML
          select.setAttribute(
            'data-select-value',
            listItem.querySelector('span').textContent,
          )
          listItem.classList.add('active')
          select.classList.remove('active')

          const selectedIndex = Array.from(listItems).indexOf(listItem)
          updateContent(selectedIndex)
        }
      }
    } else {
      removeActive(mains)
    }
  })
}
