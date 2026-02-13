export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-semibold text-slate-800">About Jal-Seva</span>
          <span>Contact: WhatsApp (Coming Soon)</span>
          <span>Privacy & Terms</span>
        </div>
        <div className="text-[11px] text-slate-500">
          Made in India 🇮🇳 for India
        </div>
      </div>
    </footer>
  )
}
