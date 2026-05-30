export function Logo() {
  return (
    <div className="flex items-center gap-2">
      {/* Modern Flame + Leaf Icon */}
      <div className="relative h-10 w-10">
        {/* Flame */}
        <svg
          viewBox="0 0 24 24"
          className="absolute h-full w-full text-emerald-700"
          fill="currentColor"
        >
          <path d="M12 2c-.5 0-1 .5-1 1 0 1-1 2-2 3-1 1-2 3-2 5 0 4.418 3.582 8 8 8s8-3.582 8-8c0-2-1-4-2-5-1-1-2-2-2-3 0-.5-.5-1-1-1s-1 .5-1 1c0 .5.5 1 1 1.5.5 1 1 2 1 3.5 0 3.314-2.686 6-6 6s-6-2.686-6-6c0-1.5.5-2.5 1-3.5.5-.5 1-1 1-1.5 0-.5-.5-1-1-1z" />
        </svg>
        
        {/* Leaf accent on top right */}
        <svg
          viewBox="0 0 24 24"
          className="absolute -right-1 -top-1 h-5 w-5 text-emerald-600"
          fill="currentColor"
        >
          <path d="M17.92 7.02C17.45 4.18 14.97 2 12 2c-2.97 0-5.45 2.18-5.92 5.02C3.97 7.58 1 10.64 1 14c0 3.866 3.134 7 7 7h10c3.866 0 7-3.134 7-7 0-3.36-2.97-6.42-6.08-6.98z" />
        </svg>
      </div>
      
      {/* Text Logo */}
      <div className="flex flex-col leading-none">
        <span className="text-sm font-black tracking-tight text-emerald-700">HOTFLAME</span>
        <span className="text-xs font-bold text-emerald-600">Biogas</span>
      </div>
    </div>
  );
}
