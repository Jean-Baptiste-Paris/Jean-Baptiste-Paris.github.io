document.addEventListener('DOMContentLoaded', () => {
  const headerElement = document.getElementById('header')
  const darkSections = document.getElementsByClassName('dark-section')
  const verticalOffset = 48

  console.log('DOMContentLoaded event fired')
  console.log('Header element:', headerElement)
  console.log('Number of dark sections:', darkSections.length)

  function onScroll() {
    let headerTextShouldBeWhite = false
    console.log('onScroll called')

    for (const sectionElement of darkSections) {
      const sectionPos = sectionElement.getBoundingClientRect()
      console.log('Section position:', sectionPos)

      if (sectionPos.top <= verticalOffset && sectionPos.bottom > 16) {
        console.log('Section within vertical offset')
        headerTextShouldBeWhite = true
        break
      }
    }

    if (headerTextShouldBeWhite) {
      console.log('Adding text-white class to header')
      headerElement?.classList.add('text-white')
    } else {
      console.log('Removing text-white class from header')
      headerElement?.classList.remove('text-white')
    }
  }

  let isScrolling = false

  window.addEventListener('scroll', () => {
    console.log('Scroll event detected')

    if (!isScrolling) {
      console.log('Requesting animation frame')
      window.requestAnimationFrame(() => {
        onScroll()
        isScrolling = false
      })
      isScrolling = true
    }
  })

  onScroll()
})
