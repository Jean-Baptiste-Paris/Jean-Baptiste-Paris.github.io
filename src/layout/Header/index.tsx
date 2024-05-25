import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSelector from '../../assets/components/LanguageSelector'
import '../../utils/headerLogic'

function Header() {
  const { t } = useTranslation('common')
  return (
    <header
      className="w-full p-4 flex justify-center sticky top-0 backdrop-blur-xl sticky:bg-white/30 z-50 transition-all duration-300"
      id="header"
    >
      <div className="w-full max-w-screen-xl px-8 flex items-center justify-between">
        <Link to="/">
          <h1 className="text-2xl font-bold">
            Jean-Baptiste Paris
            <span className="ml-2 pl-2 text-xl font-thin border-l border-slate-500">
              {t('header.portfolio')}
            </span>
          </h1>
        </Link>
        <nav className="flex space-x-8 text-md">
          <a href="/#skills">{t('header.skills')}</a>
          <a href="/#work">{t('header.works')}</a>
          <a href="/#contact" className="text-white bg-slate-800 px-2 rounded">
            {t('header.contact')}
          </a>
          <LanguageSelector
            optionClasses="text-black"
            className="rounded pl-2 border border-slate-500 bg-transparent backdrop-blur-2xl shadow-sm text-sm font-light"
          ></LanguageSelector>
        </nav>
      </div>
    </header>
  )
}

export default Header
