import Reveal from './Reveal'

const items = [
  'Earn extra without extra effort',
  'No investment required',
  'Matches perfectly with daily rickshaw routes',
  'High demand in Indian cities',
  'Trusted clean water supply',
  'Daily payouts',
  'Become part of a social-impact mission',
]

export default function Benefits() {
  return (
    <Reveal>
      <div className="rounded-3xl bg-white/80 border border-emerald-100 px-5 sm:px-6 py-6 sm:py-7 shadow-sm">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
          Why Rickshaw Owners Love Jal-Seva
        </h3>
        <ul className="space-y-2 text-sm text-slate-700">
          {items.map((item) => (
            <li key={item}>✔ {item}</li>
          ))}
        </ul>
      </div>
    </Reveal>
  )
}
