import HeroMessage from '../../assets/components/HeroMessage'
import HighlightSpan from '../../assets/components/HiglightSpan'
import GitHubStats from '../../assets/components/GithubStats'
import Section from '../../layout/Section'
import { useTranslation } from 'react-i18next'
import GlassButton from '../../assets/components/GlassButton'

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
      <Section>
        <GitHubStats />
      </Section>
      <Section
        anchor="about"
        className="w-screen my-6 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-black"
      >
        <div className="max-w-screen-xl px-8 pb-6 m-auto text-white">
          <h2 className="italic pb-4">// A propos de moi</h2>
          <p className="text-2xl font-semibold font-display w-3/4">
            Je suis Jean-Baptiste Paris, développeur web chez ACCK. Bientôt
            diplômé en développement web au niveau Bac+2 avec OpenClassrooms, je
            suis passionné par le développement front et back-end ainsi que par
            le design UI. Ce portfolio met en avant mes réalisations et
            compétences techniques pour démontrer mon expertise et ma passion
            pour le développement.
          </p>
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
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Intéressé par mon profil ?</h2>
            <p>
              N'hésitez pas à me contacter pour échanger avec moi ou juste me
              passer le bonjour 👋
              <br />
              Je serai ravi d'échanger avec vous !
            </p>
            {/* <Réseaux /> */}
          </div>
          {/* <ContactForm/> */}
          <div className="h-80 border-2 border-slate-400">
            <div className="h-60 w-100 bg-slate-400"></div>
            <p className="p-4">CONTACT FORM</p>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Home
