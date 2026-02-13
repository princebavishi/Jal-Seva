export default function Header({ onJoinWaitlist }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-sky-500 to-emerald-400 flex items-center justify-center text-white font-bold shadow-md">
            JS
          </div>
          <span className="font-semibold text-slate-800 tracking-tight">Jal-Seva</span>
        </div>
        <button
          type="button"
          onClick={onJoinWaitlist}
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-sky-500 text-white text-sm font-semibold px-4 py-2 shadow-sm btn-main"
        >
          Join Waitlist
          <span className="text-lg leading-none">→</span>
        </button>
      </div>
    </header>
  )
}
