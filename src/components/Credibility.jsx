import Reveal from './Reveal'

export default function Credibility() {
  return (
    <Reveal>
      <div className="rounded-3xl bg-slate-900 text-white px-5 sm:px-6 py-6 sm:py-7 shadow-md">
        <h3 className="text-lg sm:text-xl font-bold mb-2">
          A Mission With Impact
        </h3>
        <p className="text-sm text-slate-100 mb-4">
          Every Jal-Seva partner helps the city get cleaner, safer drinking water while improving their
          own income. Our goal is to empower <span className="font-semibold">10,000+ rickshaw owners</span> with stable
          earnings and meaningful work.
        </p>
        <div className="flex flex-wrap gap-2 text-[11px]">
          <span className="rounded-full bg-white/10 border border-white/20 px-3 py-1">🌍 Social Impact</span>
          <span className="rounded-full bg-white/10 border border-white/20 px-3 py-1">💧 Safe Water Mission</span>
          <span className="rounded-full bg-white/10 border border-white/20 px-3 py-1">👨‍👩‍👧 Family Income Support</span>
        </div>
      </div>
    </Reveal>
  )
}
