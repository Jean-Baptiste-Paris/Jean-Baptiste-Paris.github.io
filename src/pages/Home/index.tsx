import HeroMessage from '../../assets/components/HeroMessage'
import HighlightSpan from '../../assets/components/HiglightSpan'
// import GitHubStats from '../../assets/components/GithubStats'
import GitHubStats_static from '../../assets/components/GithubStats/static'
import Section from '../../layout/Section'
import { useTranslation } from 'react-i18next'
import GlassButton from '../../assets/components/GlassButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

function Home() {
  const { t } = useTranslation('home')

  //Hero Section
  const heroMainMessage = (
    <HighlightSpan
      tagType="div"
      highlight={t('hero.highlight')}
      classes="text-5xl font-display font-medium uppercase"
      highlightClasses="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-500"
    >
      {t('hero.mainMessage')}
    </HighlightSpan>
  )
  const heroSubMessage = (
    <div className="text-base">
      {t('hero.welcome')}
      <br />
      {t('hero.subMessage')}
    </div>
  )
  const heroImage = './pictures/mymind-tZCrFpSNiIQ-unsplash.jpg'

  return (
    <div>
      <Section>
        <div className="flex space-x-10">
          <HeroMessage
            mainMessage={heroMainMessage}
            subMessage={heroSubMessage}
          ></HeroMessage>
        </div>
        <div
          style={{ backgroundImage: `url(${heroImage})` }}
          className="relative z-0 w-full h-96 bg-cover bg-right-bottom rounded-lg bg-fixed shadow-xl border border-gray-100 flex items-end justify-end p-5 space-x-4"
        >
          <GlassButton anchor="#work">💼 Explore my work</GlassButton>
          <GlassButton anchor="#contact">☎️ Get in touch !</GlassButton>
        </div>
      </Section>
      {/* <Section>
        <GitHubStats />
      </Section> */}
      <Section>
        <GitHubStats_static />
      </Section>
      <Section
        anchor="about"
        className="dark-section w-screen my-10 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-slate-800"
      >
        <div className="max-w-screen-xl px-10 lg:px-8 pb-6 m-auto text-white">
          <div className="flex justify-between flex-col md:flex-row md:items-center">
            <div className="h-full md:w-1/4 md:order-1 flex items-center justify-center pb-5 md:pb-0 place-self-center">
              <img
                className="rounded-full text-center self-center h-auto max-h-60 object-cover aspect-square shadow-2xl hover:animate-spin-slow"
                src="pictures/1666088585825.jpg"
                alt="Jean-Baptiste Paris"
              />
            </div>
            <div className="md:w-3/4 px-8 md:px-0 md:pr-10 lg:pr-40">
              <h2 className="italic pb-4">// {t('about.title')}</h2>

              <p className="text-lg md:text-xl lg:text-2xl md:font-semibold font-display">
                {t('about.aboutMe')}
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section anchor="skills">
        <p className="italic font-bold text-center border-y-2 border-slate-700 py-8">
          Bandeau d'icône de compétences
        </p>
      </Section>
      <Section anchor="work">
        <h2 className="text-center text-4xl font-bold">
          Découvrez mes projets récents
        </h2>
        <h3 className="text-center">
          Explorez mes réaliations d'école et mon travail personnel
        </h3>
        {/* <Gallery>
          <Card />
          <Card />
        </Gallery> */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="h-80 border-2 border-slate-400">
            <div className="h-60 w-100 bg-slate-400"></div>
            <p className="p-4">Présentation projet</p>
          </div>
          <div className="h-80 border-2 border-slate-400">
            <div className="h-60 w-100 bg-slate-400"></div>
            <p className="p-4">Présentation projet</p>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="border-purple-500 border-2 p-2">en voir plus (?)</p>
        </div>
      </Section>
      <Section anchor="contact">
        <h2 className="italic">// Contact</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="h-80 border-2 border-slate-400">
            <div className="h-60 w-100 bg-slate-400"></div>
            <p className="p-4">CONTACT FORM</p>
          </div>
          <div className="flex flex-col justify-between">
            <div className="text-xl">
              <p>Passez moi le bonjour 👋</p>

              <a></a>
            </div>
            <div>
              <p>Ou retrouvez moi sur mes réseaux</p>
              <div className="flex gap-2">
                <Link
                  target="_blank"
                  to="https://www.linkedin.com/in/jeanbaptiste-paris/"
                >
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="border-2 rounded-full p-2"
                  />
                </Link>
                <Link
                  target="_blank"
                  to="https://github.com/Jean-Baptiste-Paris"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="border-2 rounded-full p-2"
                  />
                </Link>
              </div>
            </div>
          </div>
          {/* <ContactForm/> */}
        </div>
      </Section>
    </div>
  )
}

export default Home
