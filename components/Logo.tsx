export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 p-[2px] shadow-glow">
        <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-slate-950 text-white">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 9 12 4l9 5-9 5-9-5Z" />
            <path d="M7 11v3c0 1.8 2.2 3 5 3s5-1.2 5-3v-3" />
            <path d="M21 10v4" />
            <path d="M9 18h6" />
          </svg>
        </div>
      </div>
      <span className="font-semibold tracking-tight">StudyTech Advisor</span>
    </div>
  );
}
