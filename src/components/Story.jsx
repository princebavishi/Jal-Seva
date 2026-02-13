import Reveal from './Reveal'

export default function Story({ onJoinWaitlist }) {
  return (
    <section className="py-14 sm:py-18 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Your Rickshaw Can Do More Than Just Carry Passengers.
          </h2>
          <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>Imagine this:</p>
            <p>
              You start your morning like always — pedaling through busy lanes. But now, instead of only
              earning from passengers, your rickshaw carries a small, lightweight water-distribution box.
            </p>
            <p>
              At every stop, chai stall, bus stand, school gate, hospital gate… people ask you:
              <span className="italic font-semibold text-slate-900"> “Bhaiya, paani milega kya?”</span>
            </p>
            <p>
              You hand them clean, affordable drinking water. Just like that, every short break becomes income.
            </p>
            <p>
              No tension. No risk. No extra hard work. Just a smart side-hustle that fits perfectly into your
              daily routine.
            </p>
          </div>
          <div className="mt-6 grid sm:grid-cols-4 gap-3 text-sm">
            <div className="rounded-2xl bg-emerald-50 border border-emerald-100 px-4 py-3">
              <p className="text-emerald-700 font-semibold">✔ More earnings</p>
            </div>
            <div className="rounded-2xl bg-sky-50 border border-sky-100 px-4 py-3">
              <p className="text-sky-700 font-semibold">✔ More respect</p>
            </div>
            <div className="rounded-2xl bg-amber-50 border border-amber-100 px-4 py-3">
              <p className="text-amber-700 font-semibold">✔ More stability</p>
            </div>
            <div className="rounded-2xl bg-slate-50 border border-slate-200 px-4 py-3">
              <p className="text-slate-700 font-semibold">✔ Better life for family</p>
            </div>
          </div>
          <div className="mt-6">
            <button
              type="button"
              onClick={onJoinWaitlist}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold px-6 py-3 shadow-md btn-main"
            >
              Become a Jal-Seva Partner
              <span className="text-xl leading-none">→</span>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
