export function Logo() {
  return (
    <div className="flex items-center gap-2">
      {/* Logo Image */}
      <img src="/assets/logo.jpg" alt="HotFlame Biogas Logo" className="h-10 w-10 object-contain" />

      {/* Text Logo */}
      <div className="flex flex-col leading-none">
        <span className="text-sm font-black tracking-tight text-emerald-700">HOTFLAME</span>
        <span className="text-xs font-bold text-emerald-600">Biogas</span>
      </div>
    </div>
  );
}
