import HeroMessage from '../../assets/components/HeroMessage'
import HighlightSpan from '../../assets/components/HiglightSpan'
// import GitHubStats from '../../assets/components/GithubStats'
import GitHubStats_static from '../../assets/components/GithubStats/static'
import Section from '../../layout/Section'
import { useTranslation } from 'react-i18next'
import GlassButton from '../../assets/components/GlassButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faCode, faPalette, faServer } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import IconGroup from '../../assets/components/IconGroup'
import WorkGallery from '../../assets/components/WorkGallery'

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
      <Section className="md:pt-3">
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
      <Section anchor="skills" className="md:pt-3">
        <h2 className="italic">// {t('skills.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-0">
          <IconGroup
            icon={faCode}
            iconClassName="text-2xl text-white bg-slate-800 shadow-md"
            title={t('skills.front')}
            titleClassName="font-light uppercase font-display"
          >
            <img
              className="max-h-6 rounded-sm"
              src="logos/JavaScript-logo.png"
              alt="Javascript"
            ></img>
            <img
              className="max-h-6 rounded-sm"
              src="logos\Typescript_logo_2020.svg.png"
              alt="Typecript"
            ></img>
            <img
              className="max-h-6 rounded-sm"
              src="logos\React-icon.svg.png"
              alt="React"
            ></img>
            <img
              className="max-h-6 rounded-sm"
              src="logos\Vitejs-logo.svg.png"
              alt="Vite"
            ></img>
            <img
              className="max-h-6 rounded-sm"
              src="logos\Tailwind_CSS_Logo.svg.png"
              alt="Tailwind"
            ></img>
            <img
              className="max-h-6 rounded-sm"
              src="logos\Bootstrap_logo.svg.png"
              alt="Bootstrap"
            ></img>
            <img
              className="max-h-6 rounded-sm"
              src="logos\1280px-Sass_Logo_Color.svg.png"
              alt="Sass"
            ></img>
          </IconGroup>
          <IconGroup
            icon={faServer}
            iconClassName="text-2xl text-white bg-slate-800 shadow-md"
            title={t('skills.back')}
            titleClassName="font-light uppercase font-display"
          >
            <img
              className="max-h-6 rounded-sm"
              src="logos\PHP-logo.svg.webp"
              alt="PHP"
            ></img>
            <img
              className="max-h-6 rounded-sm"
              src="logos\Node.js_logo_2015.svg.png"
              alt="NodeJS"
            ></img>
            <img
              className="max-h-6 rounded-sm"
              src="logos\MySQL.svg.png"
              alt="MySQL"
            ></img>
            <img
              className="max-h-6 rounded-sm"
              src="logos\1280px-MongoDB-Logo.svg.png"
              alt="MongoDB"
            ></img>
          </IconGroup>
          <IconGroup
            icon={faPalette}
            iconClassName="text-2xl text-white bg-slate-800 shadow-md"
            title={t('skills.design')}
            titleClassName="font-light uppercase font-display"
          >
            <img
              className="max-h-6 rounded-sm"
              src="logos\1667px-Figma-logo.svg.png"
              alt="Figma"
            ></img>
            <img
              className="max-h-6 rounded-sm"
              src="logos\canva-logo.webp"
              alt="Canva"
            ></img>
            <img
              className="max-h-6 rounded-sm"
              src="logos\Adobe_Photoshop_CC_icon.svg.png"
              alt="Photoshop"
            ></img>
            <img
              className="max-h-6 rounded-sm"
              src="logos\Adobe_InDesign_CC_icon.svg.png"
              alt="InDesign"
            ></img>
            <img
              className="max-h-6 rounded-sm"
              src="logos\Adobe_Illustrator_CC_icon.svg.png"
              alt="Illustrator"
            ></img>
          </IconGroup>
        </div>
      </Section>
      <div className="mt-7 w-full border-t border-t-slate-800"></div>
      <Section anchor="work">
        <HighlightSpan
          tagType="div"
          highlight="projets"
          classes="text-center text-4xl font-display font-medium uppercase"
          highlightClasses="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-500"
        >
          Découvrez mes projets récents
        </HighlightSpan>
        <WorkGallery className="pt-8" />
      </Section>
      <Section anchor="contact">
        <h2 className="italic">// Contact</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="h-80 border-2 border-slate-400">
            <div className="h-60 w-100 bg-slate-400"></div>
            <p className="p-4">CONTACT FORM</p>
          </div>
          <div className="flex flex-col justify-between">
            <HighlightSpan
              tagType="div"
              highlight="bonjour"
              classes="text-4xl font-display font-medium uppercase"
              highlightClasses="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-500"
            >
              Passez moi le bonjour&nbsp;!
            </HighlightSpan>
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
