export default function sortFilter() {
    const mains = document.querySelectorAll('[data-sort="main"]')
    if (!mains.length) return
  
    const removeActive = elems => {
      elems.forEach(main => main.classList.remove('active'))
    }
    
    document.addEventListener('click', event => {

      if (event.target.closest('[data-sort="main"]')) {
        mains.forEach(main => {
          if (main !== event.target.closest('[data-sort="main"]'))
            main.classList.remove('active')
        })
   
        const sortEl = event.target.closest('[data-sort="main"]'),
          value = sortEl.querySelector('[data-sort="value"]'),
          listItems = sortEl.querySelectorAll('li');


        if (event.target.closest('[data-sort="head"]')) {
          sortEl.classList.toggle('active')
        }

        if (event.target.closest('li')) {
          const listItem = event.target.closest('li')
  
          if (!listItem.classList.contains('active')) {
            removeActive(listItems)
            value.innerHTML = listItem.innerHTML
            sortEl.setAttribute(
              'data-sort-value',
              listItem.querySelector('span').textContent,
            )
            listItem.classList.add('active')
            sortEl.classList.remove('active')
  
            const selectedIndex = Array.from(listItems).indexOf(listItem)
          }
        }
      } else {
        removeActive(mains)
      }
    })
  }
  