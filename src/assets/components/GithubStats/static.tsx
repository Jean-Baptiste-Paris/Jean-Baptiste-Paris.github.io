import { useTranslation } from 'react-i18next'

function GitHubStats_static() {
  const { t } = useTranslation('home')
  const stats = {
    repos: '13',
    commits: '42',
    recentCommits: '15',
    signUpDate: t('stats.staticSignUpDate'),
  }

  return (
    <div>
      <h2 className="pb-3 italic">// {t('stats.title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 px-10 md:px-0 max-sm:text-center">
        <div className="text-left border-l border-slate-700 pl-3">
          <p className="text-5xl font-bold">{stats.repos}</p>
          <p className="text-lg font-light text-slate-900">
            {t('stats.repos')}
          </p>
        </div>
        <div className="text-left border-l border-slate-700 pl-3">
          <p className="text-5xl font-bold">{stats.commits}</p>
          <p className="text-lg font-light text-slate-900">
            {t('stats.commits')}
          </p>
        </div>
        <div className="text-left border-l border-slate-700 pl-3">
          <p className="text-5xl font-bold text-slate-900">
            {stats.recentCommits}
          </p>
          <p className="text-lg font-light">
            {t('stats.commitsLastSixtyDays')}
          </p>
        </div>
        <div className="text-left border-l border-slate-700 pl-3">
          <p className="text-lg font-light">{t('stats.signedUp')}</p>
          <p className="text-5xl font-bold text-slate-900">
            {stats.signUpDate}
          </p>
        </div>
      </div>
    </div>
  )
}

export default GitHubStats_static
