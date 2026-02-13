import Reveal from './Reveal'

const steps = [
  {
    num: 1,
    title: 'Register Your Rickshaw',
    desc: 'Enter your name, phone number, city, and rickshaw details to join the Jal-Seva partner waitlist.',
    bg: 'bg-sky-100 text-sky-600',
  },
  {
    num: 2,
    title: 'Receive Your Water Kit',
    desc: 'Get a small, portable, easy-to-carry water distribution kit designed specially for rickshaw space.',
    bg: 'bg-emerald-100 text-emerald-600',
  },
  {
    num: 3,
    title: 'Start Selling & Earn Daily',
    desc: 'Each glass of water you sell means instant extra income — no training, no complexity. Just serve and earn.',
    bg: 'bg-amber-100 text-amber-600',
  },
]

export default function HowItWorks({ onJoinWaitlist }) {
  return (
    <section className="py-14 sm:py-18 bg-slate-50 border-y border-slate-200/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-10">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-600 mb-2">How It Works</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            3 Simple Steps to Start Earning
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step) => (
            <Reveal key={step.num}>
              <div className="h-full rounded-3xl bg-white shadow-sm border border-slate-200/70 px-5 py-6 flex flex-col">
                <div className={`w-9 h-9 rounded-2xl ${step.bg} flex items-center justify-center text-lg font-bold mb-3`}>
                  {step.num}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2 text-lg">{step.title}</h3>
                <p className="text-sm text-slate-600 flex-1">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Reveal>
            <button
              type="button"
              onClick={onJoinWaitlist}
              className="inline-flex items-center gap-2 rounded-full bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold px-6 py-3 shadow-md btn-main"
            >
              Join the Waitlist
              <span className="text-xl leading-none">→</span>
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
