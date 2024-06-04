import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function Footer() {
  const { t } = useTranslation('common')

  return (
    <footer className="w-full p-4 flex flex-col items-center bg-slate-800 text-white">
      <div className="space-x-2">
        <Link
          target="_blank"
          to="https://www.linkedin.com/in/jeanbaptiste-paris/"
        >
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className="border-2 rounded-full p-2"
          />
        </Link>
        <Link target="_blank" to="https://github.com/Jean-Baptiste-Paris">
          <FontAwesomeIcon
            icon={faGithub}
            className="border-2 rounded-full p-2"
          />
        </Link>
      </div>
      <div className="font-thin flex max-sm:flex-col items-center">
        <p>
          {t('footer.by')}
          <span className="font-semibold"> Jean-Baptiste Paris</span>
        </p>

        <span className="hidden md:block">&nbsp;|&nbsp;</span>
        <a
          href="https://github.com/Jean-Baptiste-Paris/Jean-Baptiste-Paris.github.io"
          className="underline underline-offset-4 decoration-purple-400"
        >
          {t('footer.source')}
        </a>
      </div>
    </footer>
  )
}

export default Footer
