import { useState } from 'react'
import Reveal from './Reveal'

function formatRupee(num) {
  return '₹' + Math.round(num).toLocaleString('en-IN')
}

export default function EarningCalculator({ onScrollToForm }) {
  const [trips, setTrips] = useState(15)
  const [passengers, setPassengers] = useState(4)
  const [demandPercent, setDemandPercent] = useState(30)
  const [price, setPrice] = useState(2)

  const totalPassengers = trips * passengers
  const buyers = totalPassengers * (demandPercent / 100)
  const dailyIncome = buyers * price
  const monthlyIncome = dailyIncome * 26

  const dailyText = isFinite(dailyIncome) ? formatRupee(dailyIncome) : '₹0'
  const monthlyText = isFinite(monthlyIncome) ? formatRupee(monthlyIncome) : '₹0'

  return (
    <Reveal>
      <div className="rounded-3xl bg-white shadow-md border border-sky-100 px-5 sm:px-6 py-6 sm:py-7">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
          Calculate Your Daily Extra Income
        </h2>
        <p className="text-sm text-slate-600 mb-5">
          Use this simple calculator to estimate how much extra you could earn with Jal-Seva every day.
        </p>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Number of Trips per Day
            </label>
            <input
              type="number"
              min={1}
              value={trips}
              onChange={(e) => setTrips(Number(e.target.value) || 0)}
              className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Average Passengers per Trip
              </label>
              <input
                type="number"
                min={1}
                value={passengers}
                onChange={(e) => setPassengers(Number(e.target.value) || 0)}
                className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Average Water Demand (%)
                <span className="text-[11px] text-slate-500"> (e.g., 30%)</span>
              </label>
              <input
                type="number"
                min={1}
                max={100}
                value={demandPercent}
                onChange={(e) => setDemandPercent(Number(e.target.value) || 0)}
                className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Price per Glass (₹)
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                min={1}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value) || 0)}
                className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
              />
              <div className="hidden sm:flex items-center text-xs text-slate-500 px-2">
                (You can change this for your city)
              </div>
            </div>
          </div>
          <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-sky-600 font-semibold mb-1">
                Estimated Extra Earnings
              </p>
              <p className="text-lg font-bold text-emerald-600">
                {dailyText} Extra per Day
              </p>
              <p className="text-xs text-slate-600">
                ≈ {monthlyText} Extra per Month (26 days)
              </p>
            </div>
            <button
              type="button"
              onClick={onScrollToForm}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 hover:bg-sky-600 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 shadow-md btn-main"
            >
              Start Earning – Join Waitlist
              <span className="text-lg leading-none">→</span>
            </button>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
