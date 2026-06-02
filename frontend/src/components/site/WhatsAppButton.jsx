import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function WhatsAppButton() {
  const [tooltip, setTooltip] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const timer = setTimeout(() => {
      setTooltip(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  const message = encodeURIComponent(
    "Hello Hot Flame Biogas! I'm interested in your biogas installation services. Can you help me?",
  );

  const whatsappUrl = `https://wa.me/+254715613635?text=${message}`;

  return (
    <div className="flex flex-col items-end gap-3 pointer-events-none">
      {tooltip && (
        <div className="relative bg-white text-charcoal p-3 px-4 pr-8 rounded-lg font-body text-[0.875rem] font-medium shadow-lg border border-black/5 animate-fade-up max-w-[240px] pointer-events-auto sm:text-[0.8rem] sm:right-1">
          <button
            type="button"
            className="absolute top-2 right-2 bg-transparent border-none text-charcoal-muted cursor-pointer p-1 rounded transition-all duration-200 flex items-center justify-center hover:bg-off-white hover:text-charcoal"
            onClick={() => setTooltip(false)}
          >
            <X size={12} />
          </button>

          <p className="m-0 leading-relaxed">Chat with us on WhatsApp! 💬</p>

          <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white rotate-45 border-r border-b border-black/5"></div>
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        onClick={() => setTooltip(false)}
        className="w-[60px] h-[60px] bg-green-500 text-white rounded-full flex items-center justify-center shadow-[0_8px_24px_rgba(34,197,94,0.4)] transition-all duration-300 cursor-pointer no-underline hover:scale-110 hover:bg-green-600 hover:shadow-[0_10px_28px_rgba(34,197,94,0.5)] active:scale-95 pointer-events-auto sm:w-[52px] sm:h-[52px]"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 sm:w-6 sm:h-6">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
