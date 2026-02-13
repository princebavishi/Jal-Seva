import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { GOOGLE_FORM_URL, GOOGLE_FORM_EMBED_URL } from '../config/googleForm'

const formSrc = GOOGLE_FORM_EMBED_URL || GOOGLE_FORM_URL

export default function Registration() {
  return (
    <div className="min-h-screen flex flex-col text-slate-900 antialiased">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-90">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-sky-500 to-emerald-400 flex items-center justify-center text-white font-bold shadow-md">
              JS
            </div>
            <span className="font-semibold text-slate-800 tracking-tight">Jal-Seva</span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 text-slate-700 text-sm font-semibold px-4 py-2 hover:bg-slate-50 btn-main"
          >
            ← Back to home
          </Link>
        </div>
      </header>
      <main className="flex-1 py-6 sm:py-10 bg-gradient-to-b from-sky-50 via-white to-emerald-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              Rickshaw Owner Registration
            </h1>
            <p className="text-sm text-slate-600">
              Join Jal-Seva and start earning more every day. Fill the form below to get early access.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
            <iframe
              src={formSrc}
              title="Jal-Seva Rickshaw Owner Registration"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              className="min-h-[800px] w-full"
            >
              Loading…
            </iframe>
          </div>
          <p className="text-center text-xs text-slate-500 mt-4">
            Having trouble?{' '}
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 hover:underline font-medium"
            >
              Open the form in a new tab
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
