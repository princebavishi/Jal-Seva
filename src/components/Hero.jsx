import Reveal from './Reveal'

export default function Hero({ onJoinWaitlist }) {
  return (
    <section className="water-bg pt-10 pb-16 sm:pt-16 sm:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="hero-card shadow-xl">
          <div className="hero-card-inner px-6 py-8 sm:px-10 sm:py-10 lg:py-12 flex flex-col lg:flex-row gap-10 lg:gap-14">
            <div className="flex-1 flex flex-col justify-center">
              <Reveal>
                <div className="inline-flex items-center gap-2 mb-4 glass-badge rounded-full px-3 py-1 text-xs font-semibold text-sky-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  🚀 Coming Soon · Limited Partner Slots
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 leading-tight">
                  Earn More Every Day.
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-emerald-500 to-sky-600">
                    Become a Jal-Seva Water Partner.
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-slate-700 mb-5 max-w-xl">
                  Distribute low-cost clean water on your rickshaw and unlock a new daily income stream —
                  <span className="font-semibold text-slate-900"> zero investment, zero risk.</span>
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="glass-badge rounded-full px-3 py-1 text-xs font-semibold text-slate-700">🧾 No Investment Needed</span>
                  <span className="glass-badge rounded-full px-3 py-1 text-xs font-semibold text-slate-700">💧 High Demand Service</span>
                  <span className="glass-badge rounded-full px-3 py-1 text-xs font-semibold text-slate-700">💸 Daily Extra Income</span>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <button
                    type="button"
                    onClick={onJoinWaitlist}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 hover:bg-sky-600 text-white text-sm sm:text-base font-semibold px-6 py-3 shadow-md btn-main"
                  >
                    Join the Waitlist
                    <span className="text-xl leading-none">→</span>
                  </button>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Be among the first rickshaw owners to start earning from clean water distribution.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <Reveal>
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/40 via-emerald-400/40 to-sky-600/40 blur-3xl opacity-70" />
                  <div className="relative rounded-3xl bg-white/90 border border-sky-100 shadow-lg px-6 py-5 sm:px-8 sm:py-7 float-anim">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-xs font-semibold text-sky-600 uppercase tracking-wide">Your Day, Upgraded</p>
                        <p className="text-sm text-slate-600">Rickshaw + Water = Extra Income</p>
                      </div>
                      <span className="rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1">
                        💧 Jal-Seva
                      </span>
                    </div>
                    <div className="mt-3 mb-5">
                      <div className="relative h-32 sm:h-40">
                        <div className="absolute left-4 right-4 bottom-5 h-16 bg-gradient-to-r from-sky-500 to-sky-600 rounded-2xl shadow-md flex items-center px-4 gap-3">
                          <div className="w-12 h-12 rounded-xl bg-slate-900/90 flex items-center justify-center text-amber-200 text-2xl">
                            🚲
                          </div>
                          <div className="flex-1 h-12 rounded-xl bg-white/90 border border-sky-100 flex items-center px-3 gap-2">
                            <div className="w-9 h-9 rounded-full bg-sky-100 flex items-center justify-center text-sky-500 text-xl">
                              💧
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-slate-800">Water Kit</p>
                              <p className="text-[11px] text-slate-500 leading-tight">Purified · Low Cost</p>
                            </div>
                          </div>
                        </div>
                        <div className="absolute left-6 bottom-3 w-8 h-8 rounded-full border-4 border-slate-900 bg-slate-100 shadow-inner" />
                        <div className="absolute right-6 bottom-3 w-8 h-8 rounded-full border-4 border-slate-900 bg-slate-100 shadow-inner" />
                        <div className="absolute left-10 top-4 w-10 h-6 border-2 border-slate-900 rounded-t-xl" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-600">
                      <div>
                        <p className="font-semibold text-slate-800">Example Extra Income</p>
                        <p><span className="font-bold text-emerald-600">₹220/day</span> · Approx</p>
                      </div>
                      <div className="text-right">
                        <p>Start with <span className="font-semibold text-slate-800">zero</span> investment.</p>
                        <p>Perfect for existing routes.</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center text-xs text-slate-500">
                    Coming soon in major Indian cities · <span className="font-semibold text-slate-700">Waitlist open</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
