import { useRef, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LanguageSelector from '../LanguageSelector'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const { t } = useTranslation('common')

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (menuRef.current) {
      if (isOpen) {
        menuRef.current.style.maxHeight = `calc(2*${menuRef.current.scrollHeight}px + 2rem)`
      } else {
        menuRef.current.style.maxHeight = '0px'
      }
    }
  }, [isOpen])

  return (
    <div>
      <button
        onClick={toggleMenu}
        className="md:hidden focus:outline-none text-xl"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 w-full bg-white z-50 flex flex-col items-center justify-center text-black text-xl transition-all duration-300 ease-in-out overflow-hidden space-y-1 ${isOpen ? 'py-2' : ''}`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 focus:outline-none"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <a href="/#skills" onClick={toggleMenu}>
          {t('header.skills')}
        </a>
        <a href="/#work" onClick={toggleMenu}>
          {t('header.works')}
        </a>
        <a href="/#contact" onClick={toggleMenu}>
          {t('header.contact')}
        </a>
        <LanguageSelector
          optionClasses="text-black"
          className="rounded pl-2 border border-slate-500 bg-transparent backdrop-blur-2xl text-base shadow-sm font-light"
        ></LanguageSelector>
      </div>
    </div>
  )
}

export default BurgerMenu
