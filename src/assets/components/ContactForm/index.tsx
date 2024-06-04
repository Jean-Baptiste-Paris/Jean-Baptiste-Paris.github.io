import { useState } from 'react'
import { useTranslation } from 'react-i18next'

function ContactForm({ className = '' }: { className?: string }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const { t } = useTranslation('home')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = { name, email, message }
    console.log('Form submitted:', formData)
    // ajouter la logique pour envoyer les données du formulaire
    setName('')
    setEmail('')
    setMessage('')
  }

  const labelClasses = 'text-lg'
  const inputClasses =
    'mt-1 p-2 w-full rounded border border-slate-50 shadow text-em md:text-md bg-white/30 focus:bg-white/80 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all duration-300 text-slate-500 focus:text-slate-800'

  return (
    <form onSubmit={handleSubmit} className={'space-y-4 ' + className}>
      <div>
        <label htmlFor="name" className={labelClasses}>
          {t('contact.name')}
        </label>
        <input
          type="text"
          id="name"
          className={inputClasses}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email" className={labelClasses}>
          {t('contact.email')}
        </label>
        <input
          type="email"
          id="email"
          className={inputClasses}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="message" className={labelClasses}>
          {t('contact.message')}
        </label>
        <textarea
          id="message"
          rows={4}
          className={inputClasses}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm font-medium rounded-md text-white bg-gradient-to-r from-indigo-400 to-fuchsia-500 bg-size-200 bg-pos-0 hover:bg-pos-100 focus:bg-pos-100 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-500"
        >
          {t('contact.send')}
        </button>
      </div>
    </form>
  )
}

export default ContactForm
