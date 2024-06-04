document.addEventListener('DOMContentLoaded', () => {
  const headerElement = document.getElementById('header')
  const darkSections = document.getElementsByClassName('dark-section')
  const verticalOffset = 48

  function onScroll() {
    let headerTextShouldBeWhite = false

    for (const sectionElement of darkSections) {
      const sectionPos = sectionElement.getBoundingClientRect()

      if (sectionPos.top <= verticalOffset && sectionPos.bottom > 16) {
        headerTextShouldBeWhite = true
        break
      }
    }

    if (headerTextShouldBeWhite) {
      headerElement?.classList.add('text-white')
    } else {
      headerElement?.classList.remove('text-white')
    }
  }

  let isScrolling = false

  window.addEventListener('scroll', () => {
    if (!isScrolling) {
      window.requestAnimationFrame(() => {
        onScroll()
        isScrolling = false
      })
      isScrolling = true
    }
  })

  onScroll()
})
