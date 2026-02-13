import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Story from '../components/Story'
import HowItWorks from '../components/HowItWorks'
import EarningCalculator from '../components/EarningCalculator'
import Benefits from '../components/Benefits'
import Credibility from '../components/Credibility'
import Footer from '../components/Footer'

export default function Home() {
  const navigate = useNavigate()
  const goToRegister = () => navigate('/register')

  return (
    <div className="min-h-screen flex flex-col text-slate-900 antialiased">
      <Header onJoinWaitlist={goToRegister} />
      <main className="flex-1">
        <Hero onJoinWaitlist={goToRegister} />
        <Story onJoinWaitlist={goToRegister} />
        <HowItWorks onJoinWaitlist={goToRegister} />
        <section className="py-16 sm:py-20 bg-gradient-to-b from-sky-50 via-white to-emerald-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-10 lg:gap-14 items-start">
              <div className="space-y-8">
                <EarningCalculator onScrollToForm={goToRegister} />
                <Benefits />
                <Credibility />
              </div>
              <div className="rounded-3xl bg-white shadow-xl border border-sky-100 px-5 sm:px-7 py-7 sm:py-8 flex flex-col justify-center items-center text-center">
                <p className="text-slate-700 font-semibold mb-2">Ready to become a Jal-Seva partner?</p>
                <p className="text-sm text-slate-600 mb-5 max-w-sm">
                  Register now with your details. We’ll contact you when we launch in your city.
                </p>
                <button
                  type="button"
                  onClick={goToRegister}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold px-6 py-3 shadow-md btn-main"
                >
                  Go to registration form
                  <span className="text-xl leading-none">→</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
