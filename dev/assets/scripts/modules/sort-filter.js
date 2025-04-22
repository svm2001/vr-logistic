export default function sortFilter() {
    const mains = document.querySelectorAll('[data-select="sort"]')
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
      if (event.target.closest('[data-sort="main"]')) {
        mains.forEach(main => {
          if (main !== event.target.closest('[data-sort="main"]'))
            main.classList.remove('active')
        })
  
        const sort = event.target.closest('[data-sort="main"]'),
          value = sort.querySelector('[data-sort="value"]'),
          listItems = sort.querySelectorAll('li')
  
        if (event.target.closest('[data-sort="head"]')) {
            sort.classList.toggle('active')
        }
  
        if (event.target.closest('li')) {
          const listItem = event.target.closest('li')
  
          if (!listItem.classList.contains('active')) {
            removeActive(listItems)
            value.innerHTML = listItem.innerHTML
            sort.setAttribute(
              'data-sort-value',
              listItem.querySelector('span').textContent,
            )
            listItem.classList.add('active')
            sort.classList.remove('active')
  
            const selectedIndex = Array.from(listItems).indexOf(listItem)
            updateContent(selectedIndex)
          }
        }
      } else {
        removeActive(mains)
      }
    })
  }
  